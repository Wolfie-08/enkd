import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import PhotoDisplay from './PhotoDisplay';
import MusicPlayer from './MusicPlayer';
import CertificatesCarousel from './CertificatesCarousel';

const HeroSection = () => {
  const typingTexts = [
    'Mechanical Engineer',
    'Developer'
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Wolfie-07', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/diyorbek-komilov-b19802227/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kdiyorbek133@gmail.com', label: 'Email' },
  ];

  return (
    <section 
      id="about"
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

      {/* Main Layout */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Left Panel - Photo & Controls */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/4 mb-8 lg:mb-0"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
            <PhotoDisplay />
            
            {/* Quick Stats */}
            <div className="mt-6 space-y-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-sm">Experience</span>
                  <span className="text-white text-sm font-semibold">3+ Years</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                  />
                </div>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-sm">Projects</span>
                  <span className="text-white text-sm font-semibold">15+</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '90%' }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Panel - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 text-center px-4 lg:px-8"
        >
          {/* Greeting */}
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-white/60 font-mono mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4"
          >
            Wolfie_e
          </motion.h1>

          {/* Typing Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6"
          >
            <TypingAnimation texts={typingTexts} />
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Always exploring how engineering and design can make life a little simpler, smarter, and more intentional. Building systems that work — and feel right — combining logic, aesthetics, and empathy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a 
              href="https://t.me/portfolio_kd08" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-mono px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/20 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
            <motion.button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Panel - Music Player */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/4 mt-8 lg:mt-0"
        >
          <MusicPlayer />
        </motion.div>
      </div>

      {/* Certificates Carousel - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <CertificatesCarousel />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
