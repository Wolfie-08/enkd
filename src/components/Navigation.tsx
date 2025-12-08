import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Briefcase, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const handleNav = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-lg transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo - Absolute positioned on left */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gradient">Wolfie_e</span>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About - scrolls to section */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              <span className="relative">
                About
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                />
              </span>
            </motion.button>

            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNav(item.href)}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="h-4 w-4" />
                </motion.div>
                <span className="relative">
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  />
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right side - Theme Toggle + Mobile Menu */}
          <div className="absolute right-4 flex items-center space-x-2">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {/* About - scrolls to section */}
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ delay: 0, duration: 0.3 }}
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToAbout}
                className="flex items-center space-x-3 w-full text-left px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300"
              >
                <span>About</span>
              </motion.button>

              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNav(item.href)}
                  className="flex items-center space-x-3 w-full text-left px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
