import { Globe, BookOpen, Bot, Sun, Search, Code } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: any;
  status: "Live" | "In Development" | "Completed" | "Planning" | string;
  color: string;
  version: string;
  links: { github?: string; live?: string; demo?: string };
  slug: string;
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const projects: Project[] = [
  {
    title: "StriveHub",
    description:
      "Mentor & Web Developer - A movement led by students, for students. We provide completely free mentoring to help talented minds from Uzbekistan achieve their global education dreams.",
    tags: ["React", "TypeScript", "Web Development", "Platform"],
    icon: Globe,
    status: "Live",
    color: "from-emerald-400 to-teal-400",
    version: "v1.0",
    links: { github: "#", live: "https://strivehub-global-reach.vercel.app/" },
    slug: slugify("StriveHub"),
  },
  {
    title: "Learn Through Fun",
    description:
      "Co-Founder & Web Developer - Interactive STEM education platform for students in Uzbekistan. Discover hands-on projects, virtual experiments, and join a community of curious minds.",
    tags: ["Education", "STEM", "Interactive", "React", "Community"],
    icon: BookOpen,
    status: "Live",
    color: "from-violet-400 to-purple-400",
    version: "v1.0",
    links: { github: "#", live: "https://learn-through-fun.vercel.app/" },
    slug: slugify("Learn Through Fun"),
  },
  {
    title: "AltPlaceBot",
    description:
      "A Telegram bot helping remote workers discover alternative workspaces worldwide. Built with Python, aiogram, and Supabase.",
    tags: ["Python", "aiogram", "Supabase", "Telegram API", "UX"],
    icon: Bot,
    status: "In Development",
    color: "from-blue-400 to-cyan-400",
    version: "v2.1",
    links: { github: "https://github.com/Wolfie-07/AltPlace", demo: "https://t.me/altplacebot" },
    slug: slugify("AltPlaceBot"),
  },
  {
    title: "Solar Tracker",
    description:
      "High school engineering project featuring an automated solar panel tracking system that follows the sun for maximum energy efficiency.",
    tags: ["Arduino", "Engineering", "Solar Energy", "Automation", "Sensors"],
    icon: Sun,
    status: "Completed",
    color: "from-yellow-400 to-orange-400",
    version: "v1.0",
    links: { demo: "#" },
    slug: slugify("Solar Tracker"),
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, animated personal portfolio showcasing projects and skills. Built with React, Framer Motion, and TailwindCSS.",
    tags: ["React", "Framer Motion", "TailwindCSS", "TypeScript"],
    icon: Globe,
    status: "Live",
    color: "from-purple-400 to-pink-400",
    version: "v1.0",
    links: { github: "#", live: "/" },
    slug: slugify("Portfolio Website"),
  },
  {
    title: "Solunea - AI - journal",
    description:
      "Intelligent journaling application with AI-driven insights, mood analysis, and personalized writing prompts to enhance self-reflection.",
    tags: ["AI", "Machine Learning", "React", "NLP", "Mental Health"],
    icon: BookOpen,
    status: "Live",
    color: "from-indigo-400 to-purple-400",
    version: "v1.0",
    links: { github: "#", live: "https://solunea-ai-journal.vercel.app/" },
    slug: slugify("Solunea - AI - journal"),
  },
  {
    title: "Reverse Engineering Project",
    description:
      "Technical analysis and reverse engineering of software systems to understand underlying architectures and security mechanisms.",
    tags: ["Reverse Engineering", "Security", "Analysis", "Tools", "Research"],
    icon: Search,
    status: "Planning",
    color: "from-red-400 to-pink-400",
    version: "v0.1",
    links: { demo: "#" },
    slug: slugify("Reverse Engineering Project"),
  },
  {
    title: "Code Snippet Manager",
    description:
      "A developer tool for organizing and sharing code snippets with syntax highlighting and collaborative features.",
    tags: ["Next.js", "MongoDB", "Prism.js", "Auth0"],
    icon: Code,
    status: "Planning",
    color: "from-green-400 to-blue-400",
    version: "v0.1",
    links: { github: "#" },
    slug: slugify("Code Snippet Manager"),
  },
];
