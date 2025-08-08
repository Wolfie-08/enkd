import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import myPhoto from '../../assets/DSC09097.JPG';

interface PhotoDisplayProps {
  className?: string;
}

const PhotoDisplay = ({ className = '' }: PhotoDisplayProps) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {/* Photo Container */}
        <div 
          className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20"
        >
          {myPhoto ? (
            <motion.img
              src={myPhoto}
              alt="Profile"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white/60">
              <User className="w-8 h-8 mb-2" />
              <span className="text-xs text-center px-2">No Photo</span>
            </div>
          )}
        </div>
        
        {/* Name/Title */}
        <motion.div 
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-white font-semibold text-lg">Diyorbek</h3>
          <p className="text-white/60 text-sm">Mechanical Engineer & Developer</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhotoDisplay;
