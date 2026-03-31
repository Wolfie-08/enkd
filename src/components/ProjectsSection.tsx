import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { projects } from '@/content/projects';
import { OfferCarousel, type Offer } from '@/components/ui/offer-carousel';
import type { BadgeProps } from '@/components/ui/badge';

const badgeVariantCycle: NonNullable<BadgeProps["variant"]>[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "info",
  "mono",
];

const statusBadgeMap: Record<string, NonNullable<BadgeProps["variant"]>> = {
  Live: "success",
  "In Development": "info",
  Completed: "mono",
  Planning: "warning",
};

const getProjectHost = (href?: string) => {
  if (!href || href === "#") return "Project page";

  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href.replace(/^https?:\/\//, "");
  }
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectOffers: Offer[] = projects.map((project) => ({
    id: project.slug,
    tag: project.status,
    tagVariant: statusBadgeMap[project.status] ?? "outline",
    tagAppearance: "solid",
    tags: project.tags.slice(0, 3).map((tag, tagIndex) => ({
      label: tag,
      variant: badgeVariantCycle[tagIndex % badgeVariantCycle.length],
      appearance: "stroke",
    })),
    title: project.title,
    description: project.description,
    brandName: getProjectHost(project.links.live ?? project.links.demo ?? project.links.github),
    promoCode: project.version,
    href: `/projects/${project.slug}`,
    accentClassName: project.color,
  }));

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full"
          >
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions that blend technology with creativity
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <OfferCarousel offers={projectOffers} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
