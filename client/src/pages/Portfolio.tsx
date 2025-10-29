import { useLenis } from '@/hooks/useLenis';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { ProjectDeepDive } from '@/components/sections/ProjectDeepDive';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { TechStack } from '@/components/sections/TechStack';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Portfolio() {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProjectDeepDive />
        <Process />
        <Testimonials />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
