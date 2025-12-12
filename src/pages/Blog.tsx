import Navigation from '@/components/Navigation';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Blog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24">
          <BlogSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
