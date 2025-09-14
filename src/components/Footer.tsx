import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigationLinks = [
    { name: "My Journey", href: "#about" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "#projects" },
    { name: "Resources", href: "#contact" },
  ];

  const connectLinks = [
    { name: "Future Vision", href: "#contact" },
    { name: "Collaboration", href: "#contact" },
    { name: "Newsletter", href: "#contact" },
    { name: "Speaking", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Send, href: "https://t.me/Wolfie_08", label: "Telegram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/diyorbek-k/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Wolfie-07", label: "GitHub" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Section - Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Engineering Portfolio</h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Bridging engineering fundamentals with innovative solutions through continuous learning, problem-solving, and collaborative development.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Middle Section - Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Engineering Portfolio. All Rights Reserved. Built with passion for engineering innovation and continuous learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;