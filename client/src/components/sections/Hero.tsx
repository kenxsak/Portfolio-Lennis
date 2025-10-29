import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { WebGLBackground } from '../WebGLBackground';
import gsap from 'gsap';

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll('.word');
      tl.from(words, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
      });
    }

    if (subtitleRef.current) {
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }

    if (ctaRef.current) {
      tl.from(
        ctaRef.current.children,
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      );
    }
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WebGLBackground variant="particles" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 ref={headingRef} className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
          <span className="word inline-block">Creative</span>{' '}
          <span className="word inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Developer</span>
        </h1>

        <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Crafting immersive digital experiences with modern web technologies, WebGL graphics, and seamless animations
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="gap-2"
            data-testid="button-view-work"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button size="icon" variant="ghost" asChild data-testid="link-github">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild data-testid="link-linkedin">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild data-testid="link-email">
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
