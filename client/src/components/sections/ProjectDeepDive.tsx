import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from './Projects';

gsap.registerPlugin(ScrollTrigger);

export function ProjectDeepDive() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredProjects = projects.slice(0, 3);

  useEffect(() => {
    if (!sectionRef.current) return;

    const deepDives = sectionRef.current.querySelectorAll('.deep-dive');

    deepDives.forEach((dive) => {
      gsap.from(dive.querySelectorAll('.deep-dive-content'), {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: dive,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(dive.querySelector('.deep-dive-image'), {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: dive,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`deep-dive grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            data-testid={`section-deep-dive-${project.id}`}
          >
            <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="deep-dive-content">
                <Badge className="mb-4">{project.year}</Badge>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4" data-testid={`heading-deep-dive-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {project.longDescription}
                </p>
              </div>

              <Card className="deep-dive-content p-6 bg-background">
                <CardContent className="p-0 space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Challenge</h4>
                    <p className="text-foreground">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Solution</h4>
                    <p className="text-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Outcome</h4>
                    <p className="text-foreground font-medium">{project.outcome}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="deep-dive-content flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className={`deep-dive-image ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
