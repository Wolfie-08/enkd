import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top, hsl(var(--primary) / 0.18), transparent 32%), linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--accent)) 48%, hsl(var(--secondary)) 100%)',
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.18) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full blur-2xl"
        style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.24), hsl(32 95% 44% / 0.2))' }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full blur-2xl"
        style={{ background: 'linear-gradient(135deg, hsl(32 95% 44% / 0.18), hsl(23 83% 31% / 0.2))' }}
      />

      <div className="relative z-10 text-center px-4">
        {/* Ghost icon with floating animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Ghost className="h-24 w-24 mx-auto text-primary/60" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-700 mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/80 mb-2"
        >
          Oops! This page got lost in space
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved to another dimension.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-amber-700 text-primary-foreground font-semibold px-8"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="bg-background/70 backdrop-blur-sm border-primary/20 text-foreground hover:bg-accent font-semibold px-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>

        {/* Path hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-muted-foreground/70 text-sm font-mono"
        >
          Attempted path: {location.pathname}
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
