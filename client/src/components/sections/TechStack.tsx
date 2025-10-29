import { useEffect, useRef } from 'react';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiFigma,
  SiGit,
  SiVercel
} from 'react-icons/si';
import { Cloud } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Cloud', icon: Cloud, color: '#FF9900' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
];

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const icons = sectionRef.current.querySelectorAll('.tech-icon');

    icons.forEach((icon, index) => {
      gsap.from(icon, {
        opacity: 0,
        scale: 0,
        rotation: 360,
        duration: 0.8,
        delay: index * 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(icon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="heading-tech-stack">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The technologies I work with to build amazing products
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="tech-icon flex flex-col items-center gap-3 group"
                data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-4 rounded-xl bg-background hover-elevate transition-all duration-300 border border-border group-hover:border-primary/50">
                  <Icon className="w-12 h-12 md:w-16 md:h-16 transition-colors" style={{ color: tech.color }} />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
