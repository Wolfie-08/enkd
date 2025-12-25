import { motion } from "framer-motion";
import { Linkedin, Send, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigationLinks = [
    { name: "My Journey", href: "#about" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "#projects" },
    { name: "Resources", href: "#contact" },
  ];

  const connectLinks = [
    { name: "@kdiyor_17", href: "https://t.me/kdiyor_17", icon: Send },
    { name: "@kwolfie_17", href: "https://www.instagram.com/kwolfie_17/", icon: Instagram },
    { name: "@Enkd127", href: "https://x.com/Enkd127", icon: Twitter },
    { name: "diyorbek-k", href: "https://www.linkedin.com/in/diyorbek-k/", icon: Linkedin },
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
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </a>
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