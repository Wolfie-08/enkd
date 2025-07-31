import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Circle, ArrowRight, Calendar, Users, Code, Zap } from 'lucide-react';

const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      version: 'v1.0',
      title: 'Foundation & Research',
      status: 'completed',
      date: 'Q1 2024',
      description: 'Initial concept development and market research for remote work solutions.',
      features: [
        'Market analysis & user interviews',
        'Technical architecture planning', 
        'MVP feature definition',
        'Technology stack selection'
      ],
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      version: 'v2.0',
      title: 'AltPlaceBot MVP',
      status: 'completed',
      date: 'Q2 2024',
      description: 'Core Telegram bot functionality with basic workspace discovery features.',
      features: [
        'Telegram bot integration',
        'Basic location search',
        'User preference system',
        'Simple recommendation engine'
      ],
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      version: 'v2.1',
      title: 'Enhanced Features',
      status: 'current',
      date: 'Q3 2024',
      description: 'Advanced features with AI-powered recommendations and community integration.',
      features: [
        'AI-powered workspace matching',
        'Community feedback system',
        'Advanced filtering options',
        'Integration with coworking APIs'
      ],
      icon: Zap,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      version: 'v3.0',
      title: 'Platform Expansion',
      status: 'planned',
      date: 'Q4 2024',
      description: 'Multi-platform expansion with web app and mobile companion.',
      features: [
        'Web application launch',
        'Mobile app development',
        'Real-time availability tracking',
        'Booking integration system'
      ],
      icon: ArrowRight,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="timeline" className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Project Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building AltPlaceBot iteratively - from concept to global platform
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.version}
              variants={itemVariants}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline Node */}
              <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${item.bgColor} border-2 border-border`}>
                {item.status === 'completed' ? (
                  <CheckCircle className={`w-8 h-8 ${item.color}`} />
                ) : item.status === 'current' ? (
                  <div className={`w-8 h-8 ${item.color} animate-glow-pulse`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                ) : (
                  <Circle className={`w-8 h-8 ${item.color}`} />
                )}
              </div>

              {/* Content */}
              <div className="ml-8 flex-1">
                <div className="card-glow rounded-xl p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-gradient">
                        {item.version}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {item.date}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        item.status === 'completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : item.status === 'current'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: index * 0.1 + featureIndex * 0.05,
                          duration: 0.4 
                        }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'completed' ? 'bg-green-400' :
                          item.status === 'current' ? 'bg-blue-400' : 'bg-muted-foreground'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card-glow rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              The Vision
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building the ultimate platform for remote workers to discover, connect, and thrive in 
              alternative workspaces worldwide. Each iteration brings us closer to revolutionizing 
              how digital nomads and remote professionals find their perfect work environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;