import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { WebGLBackground } from '../WebGLBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Skill } from '@shared/schema';

gsap.registerPlugin(ScrollTrigger);

const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'GSAP', category: 'frontend' },
  { name: 'Three.js', category: 'frontend' },
  { name: 'WebGL', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Figma', category: 'design' },
  { name: 'Adobe XD', category: 'design' },
  { name: 'Photoshop', category: 'design' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
];

const categories = {
  frontend: { label: 'Frontend', color: 'bg-primary/10 text-primary' },
  backend: { label: 'Backend', color: 'bg-purple-500/10 text-purple-600' },
  design: { label: 'Design', color: 'bg-pink-500/10 text-pink-600' },
  tools: { label: 'Tools', color: 'bg-blue-500/10 text-blue-600' },
};

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from('.skill-badge', {
      opacity: 0,
      scale: 0.8,
      y: 30,
      stagger: 0.03,
      duration: 0.5,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <WebGLBackground variant="gradient" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="heading-skills">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([key, { label, color }]) => (
            <div key={key} className="space-y-4" data-testid={`section-skills-${key}`}>
              <h3 className="font-display text-xl font-semibold mb-4">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === key)
                  .map((skill) => (
                    <Badge
                      key={skill.name}
                      className={`skill-badge ${color} hover-elevate`}
                      data-testid={`badge-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
