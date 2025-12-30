import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import { Button } from './ui/button';

const HeroSection = () => {
  const tags = ['mechanics', 'robotics', 'developer', 'designer'];

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden bg-background"
    >
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
              <p className="text-xl italic text-muted-foreground/60">
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

          {/* Right Side - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-[85%] mx-auto scale-110 origin-center"
          >
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm p-3 shadow-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-border">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-2 rounded-full border-primary/30" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-2 rounded-full border-purple-400/30" />
              
              {/* Floating animated circle - bottom left */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full z-10 border-2 border-primary"
              />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Diyorbek - Mechanical Engineering Student"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
