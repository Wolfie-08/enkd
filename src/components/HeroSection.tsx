import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { bioShort, bioLong } from '@/content/bio';
import TypingAnimation from './TypingAnimation';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Wolfie-07', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/diyorbek-komilov-b19802227/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kdiyorbek133@gmail.com', label: 'Email' },
  ];

  const [expanded, setExpanded] = useState(false);

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium">
            FRESHMAN
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
        >
          <TypingAnimation 
            texts={["Mechanical Engineer", "Developer", "Designer"]}
            speed={120}
            pauseDuration={2500}
            className="text-white"
          />
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <p className="text-lg text-white/70 leading-relaxed mb-4">
            Follow my path as a curious builder — from first-year fundamentals to hands-on projects. Each step is a mix of growth, creativity, and problem-solving at the crossroads of engineering, design, and code.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Explore My Journey
          </motion.button>
          <motion.button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white/20"
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Three Phases */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-white">Foundation Years</h3>
            <p className="text-white/60 text-sm">Math, physics, and the core principles that fuel every engineer.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-white">Specialization Phase</h3>
            <p className="text-white/60 text-sm">Diving deeper into my chosen field and sharpening my craft.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-white">Innovation Era</h3>
            <p className="text-white/60 text-sm">Capstone projects, experiments, and bringing ideas into reality.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;