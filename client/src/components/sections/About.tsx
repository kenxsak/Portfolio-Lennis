import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [yearsExperience] = useState(5);
  const [projectsCompleted] = useState(50);
  const [clientsSatisfied] = useState(30);

  useEffect(() => {
    if (!sectionRef.current) return;

    const counters = sectionRef.current.querySelectorAll('.counter');

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');

      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        onUpdate: function () {
          counter.textContent = String(Math.ceil(this.targets()[0].textContent));
        },
      });
    });

    gsap.from('.about-text', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="about-text font-display text-4xl md:text-5xl font-bold" data-testid="heading-about">
              About Me
            </h2>
            <p className="about-text text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
              I'm a passionate creative developer who loves pushing the boundaries of what's possible on the web. 
              Specializing in modern JavaScript frameworks, WebGL, and animation libraries, I create engaging digital 
              experiences that leave a lasting impression.
            </p>
            <p className="about-text text-lg text-muted-foreground leading-relaxed">
              With a keen eye for design and a deep understanding of web technologies, I bridge the gap between 
              aesthetics and functionality to deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <Card className="p-6 hover-elevate transition-all duration-300" data-testid="card-stat-years">
              <div className="text-center">
                <div className="counter text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2" data-target={yearsExperience}>
                  0
                </div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-5">
              <Card className="p-5 hover-elevate transition-all duration-300" data-testid="card-stat-projects">
                <div className="text-center">
                  <div className="counter text-3xl md:text-4xl font-bold text-primary mb-1" data-target={projectsCompleted}>
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </Card>

              <Card className="p-5 hover-elevate transition-all duration-300" data-testid="card-stat-clients">
                <div className="text-center">
                  <div className="counter text-3xl md:text-4xl font-bold text-primary mb-1" data-target={clientsSatisfied}>
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
