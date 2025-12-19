import { motion } from "framer-motion";

const storylineItems = [
  {
    number: "01",
    title: "It was one Day, waiting to become Day one",
    subtitle: "The quiet before the storm.",
    description: "A reflection on the anticipation after high school—waiting for life to start, wondering when the \"real\" journey would begin. This is the mindset before taking action, full of curiosity and restlessness."
  },
  {
    number: "02",
    title: "Gap Year at Uni / \"Year of Doing\"",
    subtitle: "Experimentation in motion.",
    description: "A year dedicated to trying everything, from small projects to big ideas. Failures and successes alike shaped the learning process. The motto: action over perfection."
  },
  {
    number: "03",
    title: "Being teacher with zero teaching skills",
    subtitle: "Learning by teaching.",
    description: "Taught peers and younger students without formal training—sometimes clumsy, often hilarious, but surprisingly effective. Lessons in patience, communication, and figuring things out on the fly."
  },
  {
    number: "04",
    title: "Failed opportunities, meant to be failed",
    subtitle: "Failure as a mentor.",
    description: "Some doors closed. Some plans collapsed. But each \"failure\" taught resilience, creative problem-solving, and the courage to take the next risk with more insight."
  },
  {
    number: "05",
    title: "Lessons I didn't know I needed",
    subtitle: "Hidden growth.",
    description: "Small moments that seemed insignificant at the time—an offhand conversation, a tiny success, a challenge overcome—ended up shaping perspective, priorities, and character."
  },
  {
    number: "06",
    title: "My NewUU year!?",
    subtitle: "Harvesting the rewards.",
    description: "By the end of the year: a strong network of like-minded peers, portfolio-worthy projects, event-organizing experience, real-world problem solving, and even owning your own domain. Proof that the \"Year of Doing\" paid off."
  },
  {
    number: "07",
    title: "Day one of My idea?!",
    subtitle: "Launching Alt – Find Your Flow.",
    description: "The culmination of reflection, experimentation, teaching, failures, and adventures: building a platform to help others explore, create, and find their own flow. The real journey is just beginning."
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Storyline</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of curiosity, experimentation, failures, and growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block" />

          <div className="space-y-12">
            {storylineItems.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Number circle */}
                <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30">
                  {item.number}
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4 md:hidden mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-primary font-medium text-sm italic">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-primary font-medium italic mb-4">{item.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
