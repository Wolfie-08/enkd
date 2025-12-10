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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-background/60 backdrop-blur-xl border border-border/50 shadow-lg rounded-full px-2 py-2"
      >
        <div className="flex items-center gap-1">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 cursor-pointer px-4 py-2"
            onClick={() => navigate('/')}
          >
            <Code className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold text-foreground hidden sm:inline">Wolfie_e</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* About */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
            >
              About
            </motion.button>

            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNav(item.href)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1 pl-2">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-2 space-y-1">
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={scrollToAbout}
                className="flex items-center justify-between w-full px-4 py-3 text-sm text-foreground hover:bg-muted/50 rounded-xl transition-colors"
              >
                <span>About</span>
              </motion.button>

              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (index + 1) * 0.1 + 0.1 }}
                  onClick={() => handleNav(item.href)}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                >
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
