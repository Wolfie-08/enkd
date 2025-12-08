import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <ContactSection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;