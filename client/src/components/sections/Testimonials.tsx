import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Testimonial } from '@shared/schema';

gsap.registerPlugin(ScrollTrigger);

const testimonials: Testimonial[] = [
  {
    quote: 'Working with this developer was an absolute pleasure. The attention to detail and creative solutions exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechCorp',
  },
  {
    quote: 'The project was delivered on time with exceptional quality. Their expertise in modern web technologies is truly impressive.',
    author: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLabs',
  },
  {
    quote: 'A rare combination of technical excellence and design sensibility. Our users love the seamless experience they created.',
    author: 'Emily Rodriguez',
    role: 'Design Director',
    company: 'CreativeStudios',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" data-testid="heading-testimonials">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground">
            What clients say about working with me
          </p>
        </div>

        <Card className="relative overflow-hidden">
          <CardContent className="p-12 md:p-16">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
            
            <div ref={testimonialRef} className="relative z-10">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8" data-testid="text-testimonial-quote">
                "{current.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {current.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold" data-testid="text-testimonial-author">
                    {current.author}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid="text-testimonial-role">
                    {current.role} at {current.company}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Button 
            size="icon" 
            variant="outline" 
            onClick={prev}
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>

          <Button 
            size="icon" 
            variant="outline" 
            onClick={next}
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
