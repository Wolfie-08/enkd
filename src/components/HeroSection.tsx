import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import heroBgVideo from '@/assets/hero-bg.mp4';
import { Button } from './ui/button';

const HeroSection = () => {
  const tags = ['mechanics', 'robotics', 'developer', 'designer'];

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.8]"
        style={{ objectPosition: 'center center' }}
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">
                Diyorbek
              </h1>
              <p className="text-lg text-white/80">
                Mechanical engineering student at{' '}
                <a 
                  href="https://newuu.uz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline transition-colors text-blue-400 hover:text-blue-300"
                >
                  NewUU
                </a>
              </p>
              <p className="text-lg italic text-white/60">
                Turning ideas into real, working products.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm bg-white/10 border border-white/20 text-white/90"
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
                  className="font-semibold px-8"
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
                  className="font-semibold px-6 gap-2"
                >
                  <Download className="w-4 h-4" />
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
                  className="font-semibold px-6 gap-2"
                >
                  <Download className="w-4 h-4" />
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
            className="relative max-w-[80%] mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm p-3 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-2 rounded-full border-blue-400/30" />
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
                className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full z-10 border-2 border-cyan-400"
              />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Diyorbek - Mechanical Engineering Student"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;