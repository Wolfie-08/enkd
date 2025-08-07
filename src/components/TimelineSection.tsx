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
      version: 'V1',
      title: '🛠 Completed',
      status: 'completed',
      date: 'Telegram Bot',
      description: 'A functional Telegram bot with core commands that let users explore work-friendly spots like cafés and libraries.',
      features: [
        'Core bot commands',
        'Workspace discovery',
        'Café and library finder',
        'Basic user interactions'
      ],
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      version: 'V2',
      title: 'Dynamic Discovery',
      status: 'planned',
      date: 'Roadmap',
      description: 'Enable users to suggest, store, and retrieve alternative space recommendations using a Supabase-backed, scalable database — making AltPlace community-powered and content-rich.',
      features: [
        'Community-powered suggestions',
        'Supabase database integration',
        'Scalable content storage',
        'User-generated recommendations'
      ],
      icon: Users,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    },
    {
      version: 'V3',
      title: 'Notion Workspace Integration',
      status: 'current',
      date: 'Current Status',
      description: 'Let users organize projects and plans within collaborative Notion-style spaces directly through the bot. Includes features to create shared workspaces and invite collaborators.',
      features: [
        'Notion-style workspaces',
        'Collaborative spaces',
        'Project organization',
        'Team invitations'
      ],
      icon: Zap,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      version: 'V4',
      title: 'AI-Personalized Recommendations',
      status: 'planned',
      date: 'Future',
      description: 'Smart suggestions based on user preferences (price, location, noise level, busy hours, etc.), combined with automated planning and time-based insights.',
      features: [
        'AI-powered suggestions',
        'Preference-based matching',
        'Time-based insights',
        'Smart scheduling'
      ],
      icon: ArrowRight,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    },
    {
      version: 'V5',
      title: 'Travel Mode',
      status: 'planned',
      date: 'Future',
      description: 'Support for travelers seeking daily-stay hotels, short-term apartments, and curated spots — expanding AltPlace into a lightweight travel assistant.',
      features: [
        'Travel-friendly accommodations',
        'Short-term rentals',
        'Curated travel spots',
        'Travel planning assistant'
      ],
      icon: ArrowRight,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/10'
    },
    {
      version: 'V6',
      title: 'City Discovery Layer',
      status: 'planned',
      date: 'Future',
      description: 'Introduce an "Explore" mode with scenic routes, parks, cultural spaces, and hidden places to walk, unwind, and experience the city — ideal for newcomers and locals alike.',
      features: [
        'Scenic routes exploration',
        'Cultural spaces discovery',
        'Hidden gems finder',
        'City experience guide'
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
            🔍 AltPlace — Redefining How We Explore & Work in Cities
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
              AltPlace is a growing platform designed to help students, remote workers, travelers, and locals discover alternative workspaces, libraries, event venues, and hidden gems within their city. What began as a simple Telegram bot has become a vision to support modern, mobile lifestyles — blending productivity, exploration, and community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;