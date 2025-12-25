import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

const HeroSection = () => {
  const tags = ['mechanics', 'robotics', 'developer', 'designer'];
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a0933 25%, #2d1b4e 50%, #4a2c5a 75%, #6b3e66 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #ddd6fe 50%, #c4b5fd 75%, #a78bfa 100%)',
      }}
    >
      {/* Futuristic Grid Background */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-30'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: isDark 
            ? `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`
            : `linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
               linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-xl ${
            isDark 
              ? 'bg-gradient-to-r from-blue-400/20 to-purple-400/20' 
              : 'bg-gradient-to-r from-violet-400/30 to-purple-400/30'
          }`}
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 70, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute top-3/4 right-1/4 w-24 h-24 rounded-full blur-xl ${
            isDark 
              ? 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20' 
              : 'bg-gradient-to-r from-indigo-400/30 to-blue-400/30'
          }`}
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
              <h1 className={`text-5xl md:text-6xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Diyorbek
              </h1>
              <p className={`text-lg ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                Mechanical engineering student at{' '}
                <a 
                  href="https://newuu.uz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`underline transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-violet-600 hover:text-violet-500'}`}
                >
                  NewUU
                </a>
              </p>
              <p className={`text-lg italic ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                Turning ideas into real, working products.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 text-white/90' 
                      : 'bg-violet-900/10 border border-violet-300/40 text-violet-900'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons - All in one row */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link to="/projects">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6"
                >
                  View Projects
                </Button>
              </Link>
              <a 
                href="https://drive.google.com/drive/folders/your-portfolio-folder" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className={`backdrop-blur-sm font-semibold px-6 ${
                    isDark 
                      ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                      : 'bg-white/60 border-violet-300/50 text-violet-900 hover:bg-white/80'
                  }`}
                >
                  Portfolio
                </Button>
              </a>
              <a 
                href="/Diyorbek_Komilov_CV.pdf" 
                download
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className={`backdrop-blur-sm font-semibold px-6 gap-2 ${
                    isDark 
                      ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                      : 'bg-white/60 border-violet-300/50 text-violet-900 hover:bg-white/80'
                  }`}
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
            <div className={`relative rounded-3xl overflow-hidden backdrop-blur-sm p-3 shadow-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20' 
                : 'bg-gradient-to-br from-white/80 to-white/60 border border-violet-200/50'
            }`}>
              {/* Decorative elements */}
              <div className={`absolute top-4 left-4 w-16 h-16 border-2 rounded-full ${isDark ? 'border-blue-400/30' : 'border-violet-400/40'}`} />
              <div className={`absolute bottom-4 right-4 w-20 h-20 border-2 rounded-full ${isDark ? 'border-purple-400/30' : 'border-indigo-400/40'}`} />
              
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
                className={`absolute -bottom-3 -left-3 w-14 h-14 rounded-full shadow-lg z-10 ${
                  isDark 
                    ? 'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-cyan-400/40' 
                    : 'bg-gradient-to-br from-violet-400 to-indigo-500 shadow-violet-400/40'
                }`}
              />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Diyorbek - Mechanical Engineering Student"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-purple-900/20 to-transparent' : 'bg-gradient-to-t from-violet-500/10 to-transparent'}`} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;