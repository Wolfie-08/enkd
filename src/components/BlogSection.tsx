import { motion } from "framer-motion";
import { ExternalLink, BookOpen, GraduationCap } from "lucide-react";

const articles = [
  {
    type: "Medium",
    icon: BookOpen,
    title: "My Articles on Medium",
    description: "Technical writings and personal insights on engineering, development, and innovation.",
    link: "https://medium.com/@kdiyorbek133",
    linkText: "Read on Medium",
  },
  {
    type: "Academic",
    icon: GraduationCap,
    title: "Published in American Journal of Education and Learning",
    description: "Academic research and scholarly contributions to the field of education and learning methodologies.",
    link: "https://advancedscienti.com/index.php/AJEL/article/view/1609",
    linkText: "View Publication",
  },
  {
    type: "Social",
    icon: BookOpen,
    title: "I write here",
    description: "I share interesting thoughts, reflections, experiences, opportunities",
    link: "https://t.me/enkdblog",
    linkText: "Read on Telegram",
  },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Articles</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Writings, research, and publications across different platforms.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="block bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <article.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 text-xs rounded-full font-semibold bg-primary/10 text-primary">
                  {article.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {article.description}
              </p>

              <div className="flex items-center gap-2 text-primary font-medium">
                <span>{article.linkText}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
