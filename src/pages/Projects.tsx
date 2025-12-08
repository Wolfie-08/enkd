import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import PageTransition from '@/components/PageTransition';

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <ProjectsSection />
      </div>
    </PageTransition>
  );
};

export default Projects;