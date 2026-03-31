import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { HeroGeometricBackground } from './ui/shape-landing-hero';
import MusicPlayerCard from './ui/music-player-card';

const HeroSection = () => {
  const tags = ['mechanics', 'robotics', 'developer', 'designer'];

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.12),transparent_35%),linear-gradient(180deg,hsl(var(--accent)/0.55),transparent_45%,hsl(var(--background))_100%)] dark:bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_35%),linear-gradient(180deg,hsl(var(--background))_0%,transparent_45%,hsl(var(--background))_100%)]" />
      <HeroGeometricBackground className="opacity-70 dark:opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7 scale-110 origin-left"
          >
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-2 text-foreground">
                Diyorbek
              </h1>
              <p className="text-xl text-muted-foreground">
                Mechanical engineering student at{' '}
                <a 
                  href="https://newuu.uz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary/80"
                >
                  NewUU
                </a>
              </p>
              <p className="text-muted-foreground/60">
                Turning ideas into real, working products.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-5 py-2.5 rounded-full text-base font-medium backdrop-blur-sm bg-muted/50 border border-border text-foreground/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons - All in one row */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects">
                <Button 
                  size="lg"
                  variant="glossy"
                  className="font-semibold px-8 text-base"
                >
                  View Projects
                </Button>
              </Link>
              <a 
                href="/Portfolio.pdf" 
                download
              >
                <Button 
                  size="lg"
                  variant="glossyDark"
                  className="font-semibold px-6 gap-2 text-base"
                >
                  <Download className="w-5 h-5" />
                  Portfolio
                </Button>
              </a>
              <a 
                href="/Diyorbek_Komilov_CV.pdf" 
                download
              >
                <Button 
                  size="lg"
                  variant="glossyLight"
                  className="font-semibold px-6 gap-2 text-base"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Audio Player */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md mx-auto"
          >
            <MusicPlayerCard className="mx-auto" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
