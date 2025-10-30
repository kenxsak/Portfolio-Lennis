import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Code, Rocket, TestTube } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Lightbulb,
    title: 'Discover & Design',
    description: 'Understanding requirements, user needs, and crafting intuitive wireframes and prototypes',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Building robust, scalable solutions with clean code and modern best practices',
  },
  {
    icon: TestTube,
    title: 'Test & Refine',
    description: 'Rigorous testing, performance optimization, and iterative improvements',
  },
  {
    icon: Rocket,
    title: 'Deploy & Support',
    description: 'Seamless deployment, monitoring, and ongoing maintenance for long-term success',
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    gsap.from('.process-step', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(lineRef.current, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3" data-testid="heading-process">
            My Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results
          </p>
        </div>

        <div className="relative">
          <div 
            ref={lineRef}
            className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-step relative">
                  <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-process-${index}`}>
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3" data-testid={`heading-process-step-${index}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold absolute -top-5 left-1/2 -translate-x-1/2 z-10 border-4 border-background">
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
