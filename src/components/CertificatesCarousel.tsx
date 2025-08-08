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
  { id: '1', title: 'React Developer Certification', issuer: 'Meta', date: '2024' },
  { id: '2', title: 'JavaScript Algorithms', issuer: 'freeCodeCamp', date: '2023' },
  { id: '3', title: 'Mechanical Engineering Degree', issuer: 'University', date: '2022' },
  { id: '4', title: 'AWS Cloud Practitioner', issuer: 'Amazon', date: '2024' },
  { id: '5', title: 'Python Programming', issuer: 'Python Institute', date: '2023' },
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
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % certificates.length;
      visible.push({ ...certificates[index], displayIndex: i });
    }
    return visible;
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-xl font-semibold flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certificates
          </h3>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-4"
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {getVisibleCertificates().map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: index === 1 ? 1 : 0.9,
                  y: index === 1 ? 0 : 10
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex-shrink-0 w-64 h-40 rounded-2xl overflow-hidden ${
                  index === 1 ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 flex flex-col justify-center items-center p-4 text-center">
                    <Award className="w-8 h-8 text-primary mb-2" />
                    <h4 className="text-white font-semibold text-sm mb-1">{cert.title}</h4>
                    <p className="text-white/60 text-xs mb-1">{cert.issuer}</p>
                    <p className="text-white/40 text-xs">{cert.date}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {certificates.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
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