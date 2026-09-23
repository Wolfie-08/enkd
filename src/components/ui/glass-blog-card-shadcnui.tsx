"use client";
// Glass card from 21st.dev (glass-blog-card-shadcnui), adapted for this site:
// - optional `href`: the title becomes a link stretched over the whole card, so the hover action is a label, not a nested button
// - optional `action`: replaces the read-time slot in the footer (used for the project demo button, layered above the card link)
// - optional `note`: small caption on the image (e.g. "demo data")
// - reveals on scroll instead of on mount, and respects reduced motion
import type { ReactNode } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";

interface GlassBlogCardProps {
  title?: string;
  excerpt?: string;
  image?: string | null;
  author?: {
    name: string;
    avatar?: string;
  };
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
  href?: string;
  hoverLabel?: string;
  action?: ReactNode;
  note?: string;
  delay?: number;
}

const defaultPost = {
  title: "The Future of UI Design",
  excerpt: "Exploring the latest trends in glassmorphism, 3D elements, and micro-interactions.",
  image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
  author: { name: "Diyorbek Komilov" },
  date: "Dec 2, 2025",
  readTime: "5 min read",
  tags: ["Design", "UI/UX"],
};

export function GlassBlogCard({
  title = defaultPost.title,
  excerpt = defaultPost.excerpt,
  image = defaultPost.image,
  author = defaultPost.author,
  date = defaultPost.date,
  readTime = defaultPost.readTime,
  tags = defaultPost.tags,
  className,
  href,
  hoverLabel = "Read Article",
  action,
  note,
  delay = 0,
}: GlassBlogCardProps) {
  const reduce = useReducedMotion();
  const initials = author.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.4, delay }}
      className={cn("w-full max-w-[400px]", className)}
    >
      <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
        {/* Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none"
            />
          ) : (
            // No screenshot: a palette panel instead of an unrelated stock photo.
            <div className="h-full w-full bg-[radial-gradient(circle_at_75%_20%,hsl(var(--accent)/0.35),transparent_55%),linear-gradient(135deg,hsl(var(--ink)/0.35),hsl(var(--surface)))] transition-transform duration-500 group-hover:scale-110" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

          {note && (
            <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground backdrop-blur-sm">
              {note}
            </span>
          )}

          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-background/60 font-medium backdrop-blur-sm hover:bg-background/80">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Hover Overlay Action (a label: the whole card is the link) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
          >
            <span className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-accent/25 transition-transform duration-300 group-hover:scale-105">
              <BookOpen className="h-4 w-4" />
              {hoverLabel}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-ink">
              {href ? (
                <Link href={href} className="after:absolute after:inset-0 after:rounded-2xl after:content-['']">
                  {title}
                </Link>
              ) : title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/50 pt-4">
            <div className="flex min-w-0 items-center gap-2">
              <Avatar className="h-8 w-8 border border-border/50">
                {author.avatar && <AvatarImage src={author.avatar} alt={author.name} />}
                <AvatarFallback className="bg-surface text-[11px] font-semibold text-ink">{initials}</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-col text-xs">
                <span className="truncate font-medium text-foreground">{author.name}</span>
                <span className="truncate text-muted-foreground">{date}</span>
              </div>
            </div>

            {action ?? (readTime && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{readTime}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
