import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Thoughtful, fast, and reliable — brings structure and clarity to every problem.",
    name: "A. Karimov",
    role: "Founder, StriveHub",
  },
  {
    quote: "Balances engineering rigor with a strong sense for user experience.",
    name: "M. Saidov",
    role: "Product Designer",
  },
  {
    quote: "Consistent, detail‑oriented, and fun to build with.",
    name: "N. Umar",
    role: "Engineer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">What People Say</h2>
          <p className="text-muted-foreground mt-2">A few kind words from collaborators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border p-6 bg-card text-card-foreground shadow-sm hover-scale"
            >
              <p className="text-foreground leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t.name}</span> · {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
