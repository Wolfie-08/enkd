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
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a0933 25%, #2d1b4e 50%, #4a2c5a 75%, #6b3e66 100%)',
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-2xl"
      />

      <div className="relative z-10 text-center px-4">
        {/* Ghost icon with floating animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Ghost className="h-24 w-24 mx-auto text-white/60" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-2"
        >
          Oops! This page got lost in space
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/50 mb-8 max-w-md mx-auto"
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold px-8"
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
          className="mt-8 text-white/30 text-sm font-mono"
        >
          Attempted path: {location.pathname}
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
