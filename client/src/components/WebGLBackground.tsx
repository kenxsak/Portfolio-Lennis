import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WebGLBackgroundProps {
  variant?: 'particles' | 'gradient' | 'waves';
  className?: string;
}

export function WebGLBackground({ variant = 'particles', className = '' }: WebGLBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    if (variant === 'particles') {
      createParticleSystem(scene);
    } else if (variant === 'gradient') {
      createGradientMesh(scene);
    } else if (variant === 'waves') {
      createWaveMesh(scene);
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (scene && scene.children.length > 0) {
        const object = scene.children[0];
        if (object) {
          object.rotation.y += 0.001;
          object.rotation.x = mouseY * 0.1;
          object.rotation.z = mouseX * 0.1;
        }
      }

      if (camera) {
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [variant]);

  return <canvas ref={canvasRef} className={`fixed inset-0 -z-10 ${className}`} />;
}

function createParticleSystem(scene: THREE.Scene) {
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 5000;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: 0x9333ea,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
}

function createGradientMesh(scene: THREE.Scene) {
  const geometry = new THREE.IcosahedronGeometry(2, 4);
  const material = new THREE.MeshPhongMaterial({
    color: 0x9333ea,
    emissive: 0x4c1d95,
    specular: 0xa855f7,
    shininess: 100,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  });

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(5, 5, 5);
  scene.add(light);

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}

function createWaveMesh(scene: THREE.Scene) {
  const geometry = new THREE.PlaneGeometry(10, 10, 50, 50);
  const material = new THREE.MeshPhongMaterial({
    color: 0x9333ea,
    side: THREE.DoubleSide,
    wireframe: true,
    transparent: true,
    opacity: 0.4,
  });

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 5, 5);
  scene.add(light);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 4;
  scene.add(mesh);
}
