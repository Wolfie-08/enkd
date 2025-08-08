import { motion } from 'framer-motion';
import { useState } from 'react';
import { Upload, User } from 'lucide-react';

interface PhotoDisplayProps {
  photoUrl?: string;
  onPhotoUpload?: (file: File) => void;
  className?: string;
}

const PhotoDisplay = ({ photoUrl, onPhotoUpload, className = '' }: PhotoDisplayProps) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && onPhotoUpload) {
      onPhotoUpload(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && onPhotoUpload) {
      onPhotoUpload(files[0]);
    }
  };

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
          className={`relative w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${
            dragOver ? 'border-primary scale-105' : ''
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
        >
          {photoUrl ? (
            <motion.img
              src={photoUrl}
              alt="Profile"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white/60">
              <User className="w-8 h-8 mb-2" />
              <span className="text-xs text-center px-2">Drop photo here</span>
            </div>
          )}
          
          {/* Upload Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
            whileHover={{ opacity: 1 }}
          >
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Upload className="w-6 h-6 text-white" />
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
          </motion.div>
        </div>
        
        {/* Name/Title */}
        <motion.div 
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-white font-semibold text-lg">Wolfie_e</h3>
          <p className="text-white/60 text-sm">Mechanical Engineer & Developer</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhotoDisplay;