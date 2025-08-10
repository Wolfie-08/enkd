import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
}

interface CertificatesCarouselProps {
  certificates?: Certificate[];
}

const defaultCertificates: Certificate[] = [
  { id: '1', title: 'Young Member of the New York Academy of Sciences', issuer: 'The New York Academy of Sciences', date: '30 Jul, 2025' },
  { id: '2', title: 'For Publication of Paper Entitled: ONE STEP FROM COMPLEXITY TO SIMPLICITY', issuer: 'AMERICAN JOURNAL OF EDUCATION AND LEARNING', date: 'April, 2025' },
  { id: '3', title: 'Divide and Conquer, Sorting and Searching, and Randomised Algorithms', issuer: 'Stanford University|Online Course', date: '25 Apr, 2024' },
  { id: '4', title: 'Foundations of Project Management', issuer: 'Google', date: '9 Mar, 2024' }
];

const CertificatesCarousel = ({ certificates = defaultCertificates }: CertificatesCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const getVisibleCertificates = () => {
    return [certificates[currentIndex]];
  };

  return (
    <div className="w-full max-w-xs">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-semibold flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Certificates
          </h3>
          <div className="flex gap-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white"
            >
              <ChevronLeft className="w-3 h-3" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white"
            >
              <ChevronRight className="w-3 h-3" />
            </motion.button>
          </div>
        </div>

        {/* Single Certificate */}
        <div className="relative overflow-hidden">
          {getVisibleCertificates().map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-32 rounded-2xl overflow-hidden"
            >
              {cert.image ? (
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 flex flex-col justify-center items-center p-3 text-center">
                  <Award className="w-6 h-6 text-primary mb-2" />
                  <h4 className="text-white font-semibold text-xs mb-1 leading-tight">{cert.title}</h4>
                  <p className="text-white/60 text-xs mb-1">{cert.issuer}</p>
                  <p className="text-white/40 text-xs">{cert.date}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1 mt-4">
          {certificates.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CertificatesCarousel;
