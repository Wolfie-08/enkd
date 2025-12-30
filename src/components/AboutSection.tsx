import { motion } from 'framer-motion';
import { bioLong } from '@/content/bio';

const values = [
  { title: "Clarity", text: "Make complex things understandable. Good systems feel obvious once you see them." },
  { title: "Utility", text: "Ship solutions that are genuinely helpful and sustainable in the long run." },
  { title: "Care", text: "Design with empathy. Details matter because people feel them." },
];

const skills = [
  "React", "TypeScript", "Framer Motion", "TailwindCSS", "Supabase",
  "Arduino", "CAD", "Prototyping", "Git", "Figma",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">About</h2>
          <p className="text-muted-foreground mt-3">Mechanical Engineer & Developer</p>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-foreground text-lg leading-relaxed">{bioLong}</p>
        </motion.article>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-border p-6 bg-card text-card-foreground"
          >
            <h3 className="text-xl font-semibold mb-3">Values</h3>
            <ul className="space-y-3">
              {values.map(v => (
                <li key={v.title}>
                  <p className="font-medium">{v.title}</p>
                  <p className="text-muted-foreground text-sm">{v.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-border p-6 bg-card text-card-foreground"
          >
            <h3 className="text-xl font-semibold mb-3">Process</h3>
            <ol className="space-y-3 list-decimal list-inside text-sm text-muted-foreground mb-6">
              <li>Understand the problem and constraints.</li>
              <li>Prototype quickly and test assumptions.</li>
              <li>Refine the solution and polish details.</li>
            </ol>

            <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, index) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
