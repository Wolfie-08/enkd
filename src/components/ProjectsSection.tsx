import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Bot, Globe, Code, Sun, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/content/projects';
const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // projects data moved to src/content/projects.ts

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions that blend technology with creativity
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="card-glow rounded-xl p-6 relative overflow-hidden group"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400' 
                    : project.status === 'In Development'
                    ? 'bg-blue-500/20 text-blue-400'
                    : project.status === 'Completed'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Icon and Version */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-mono text-muted-foreground">
                  {project.version}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                <Link to={`/projects/${project.slug}`} className="story-link">
                  {project.title}
                </Link>
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-2">
                <Link
                  to={`/projects/${project.slug}`}
                  className="flex items-center space-x-1 px-3 py-2 text-sm rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span>Case Study</span>
                </Link>
                {project.links.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.github}
                    className="flex items-center space-x-1 px-3 py-2 text-sm rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                )}
                {project.links.live && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-2 text-sm rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </motion.a>
                )}
                {project.links.demo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.demo}
                    className="flex items-center space-x-1 px-3 py-2 text-sm rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.a>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
