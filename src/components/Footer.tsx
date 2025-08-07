import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <p className="text-muted-foreground">
            Built with ♥️ by <span className="text-foreground font-semibold">Diyorbek</span> using React, TypeScript, and Framer Motion
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="text-foreground font-semibold">Wolfie_e</span> • INFJ-A Developer • Curiosity
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;