import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import Testimonials from '@/components/Testimonials';
import TimelineSection from '@/components/TimelineSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
