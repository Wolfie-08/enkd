import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import { bioShort, bioLong } from '@/content/bio';
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

  const [expanded, setExpanded] = useState(false);

  return (
    <section 
      id="about"
      className="min-h-screen relative bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
            ENGINEERING STUDENT
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          My Journey Through <span className="text-gradient">Engineering Evolution</span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {bioShort}
          </p>
          {expanded && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {bioLong}
            </motion.p>
          )}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 text-accent underline-offset-4 hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
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
            className="bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Explore My Journey
          </motion.button>
          <motion.button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-border text-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-muted"
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
            <h3 className="text-xl font-semibold mb-2">Foundation Years</h3>
            <p className="text-muted-foreground text-sm">Mathematics, physics, and core engineering principles</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Specialization Phase</h3>
            <p className="text-muted-foreground text-sm">Deep dive into chosen engineering discipline</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Innovation Era</h3>
            <p className="text-muted-foreground text-sm">Capstone projects and real-world applications</p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
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
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
