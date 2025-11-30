import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profilePhoto from '@/assets/profile-photo.png';
import { Button } from './ui/button';

const HeroSection = () => {
  const tags = ['mechanics', 'robotics', 'developer', 'designer'];

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a0933 25%, #2d1b4e 50%, #4a2c5a 75%, #6b3e66 100%)',
      }}
    >
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 70, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl"
        />
      </div>

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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                Diyorbek
              </h1>
              <p className="text-lg text-white/80">
                Mechanical engineering student at{' '}
                <a 
                  href="https://newuu.uz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  NewUU
                </a>
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/about">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8"
                >
                  About me
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold px-8"
              >
                View Projects
              </Button>
              <a 
                href="https://drive.google.com/drive/folders/your-portfolio-folder" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold px-8"
                >
                  Portfolio
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-3 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-blue-400/30 rounded-full" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-purple-400/30 rounded-full" />
              
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