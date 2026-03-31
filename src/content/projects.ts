import { Globe, BookOpen, Bot, Sun, Code, Rocket, Cpu, Gauge } from "lucide-react";

export type CaseStudy = {
  problem: string[];
  approach: string[];
  iterations: string[];
  technical: {
    stack: string[];
    details: string[];
  };
  outcomes: {
    results: string[];
    metrics?: { label: string; value: string }[];
  };
};

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
  image?: string;
  imageAlt?: string;
  caseStudy?: CaseStudy;
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const projects: Project[] = [
  {
    title: "Hogwarts Research Community",
    description:
      "Premium academic community platform for students interested in research, innovation, and solving real-world problems, with public pages, member workflows, and admin tools in one product.",
    tags: ["Next.js", "TypeScript", "Supabase", "Research", "Community", "Education"],
    icon: BookOpen,
    status: "Live",
    color: "from-amber-400 to-orange-500",
    version: "v1.0",
    links: { live: "https://hogwarts.enkd.uz" },
    slug: slugify("Hogwarts Research Community"),
    caseStudy: {
      problem: [
        "Student researchers need more than a brochure site; they need a platform that explains the community, supports participation, and gives progress visibility.",
        "Opportunities like challenges, resources, webinars, and member recognition are easy to fragment across chats, forms, and spreadsheets.",
        "Admins need a manageable system for applications, content, and member-facing workflows without maintaining separate tools."
      ],
      approach: [
        "Built a unified platform that combines a premium public-facing brand experience with a member workspace and admin surface.",
        "Structured the product around real community actions: learning through resources, practicing through challenges, and belonging through visible progress and recognition.",
        "Used an academic visual language with gold-accent branding and clear information architecture to make the community feel credible from the first visit."
      ],
      iterations: [
        "Mapped the experience into public, member, and admin journeys instead of treating the site as a single landing page.",
        "Refined the content model to support challenges, resources, webinars, badges, submissions, and notifications with room to grow.",
        "Added Supabase-backed production paths while preserving mock-data browsing so the UI stays useful even before full environment setup."
      ],
      technical: {
        stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
        details: [
          "App Router architecture with distinct public, member, and admin surfaces inside a single codebase.",
          "Supabase Auth, Postgres, and Storage for profiles, challenges, submissions, resources, badges, and notifications.",
          "Typed content/query helpers and markdown rendering to keep the content model maintainable as the community scales."
        ]
      },
      outcomes: {
        results: [
          "Turned the community into a product with a clear identity instead of a collection of disconnected pages and forms.",
          "Created a stronger foundation for member onboarding, structured practice, and public recognition.",
          "Made the platform ready for both demo-mode exploration and production-backed community operations."
        ]
      }
    }
  },
  {
    title: "MUBL Engineering Club",
    description:
      "Official website for the student-led engineering club at New Uzbekistan University, showcasing projects, events, achievements, and a clear path for new members to join.",
    tags: ["React", "TypeScript", "Engineering", "Robotics", "Community", "Education"],
    icon: Rocket,
    status: "Live",
    color: "from-sky-400 to-cyan-500",
    version: "v1.0",
    links: { live: "https://mubl.uz" },
    slug: slugify("MUBL Engineering Club"),
    caseStudy: {
      problem: [
        "Engineering clubs often do strong technical work but struggle to present it coherently to students, partners, and competition audiences.",
        "Recruitment, achievements, events, and project output were easier to understand internally than from the outside.",
        "The club needed a digital home that communicates momentum and standards, not just a static information page."
      ],
      approach: [
        "Designed the site around the club's actual operating rhythm: projects, competitions, events, achievements, and member onboarding.",
        "Positioned MUBL as a serious student engineering community with clear messaging around hands-on work, mentorship, and public outcomes.",
        "Built a responsive, content-led experience that helps visitors quickly understand what the club builds and how to get involved."
      ],
      iterations: [
        "Sharpened the homepage narrative around research, building, publishing, and leadership rather than generic club language.",
        "Expanded the structure to include dedicated sections for achievements, projects, resources, partner outreach, and applications.",
        "Refined visual hierarchy and content blocks so the site supports both recruitment and external credibility."
      ],
      technical: {
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
        details: [
          "Modular Vite app with reusable sections for hero, about, events, projects, achievements, and join flows.",
          "Tailwind- and component-driven design system used to keep the experience consistent across marketing and club-content pages.",
          "Built for fast iteration on club updates while preserving a polished front door for public visitors."
        ]
      },
      outcomes: {
        results: [
          "Gave MUBL a clearer public identity as a student-led engineering club that builds real systems and competes seriously.",
          "Made projects, events, and club achievements easier to browse for both prospective members and external collaborators.",
          "Created a better recruitment funnel by connecting brand storytelling directly to the join flow."
        ],
        metrics: [
          { label: "Active members", value: "50+" },
          { label: "Projects built", value: "15+" },
          { label: "Competition wins", value: "5+" }
        ]
      }
    }
  },
  {
    title: "MUBL Bootcamp",
    description:
      "A hands-on intensive designed for students to develop technical and creative skills in robotics, 3D modeling & printing, and strategic project development. Students will form teams and present final projects.",
    tags: ["3D Printing", "AI", "Robotics", "Education", "Workshop"],
    icon: Cpu,
    status: "Live",
    color: "from-cyan-400 to-blue-500",
    version: "v1.0",
    links: { live: "https://bootcamp.mubl.uz" },
    slug: "mubl-bootcamp",
    caseStudy: {
      problem: [
        "Students lack access to hands-on technical training in emerging technologies like 3D printing, AI, and robotics.",
        "Traditional education often separates theory from practice, limiting real-world skill development.",
        "Need for structured team-based learning that mirrors industry collaboration."
      ],
      approach: [
        "Designed intensive bootcamp format combining workshops, hands-on labs, and team projects.",
        "Curriculum covers 3D modeling & printing, AI fundamentals, and robotics engineering.",
        "Team formation and final project presentations to simulate real-world product development."
      ],
      iterations: [
        "Developing curriculum structure and learning outcomes.",
        "Building registration and information platform.",
        "Planning equipment and materials for hands-on sessions."
      ],
      technical: {
        stack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        details: [
          "Web platform for bootcamp registration and schedule management.",
          "Resource hub for workshop materials and documentation.",
          "Team collaboration features for project development."
        ]
      },
      outcomes: {
        results: [
          "Currently in development phase with v1.0 launch planned.",
          "Building partnerships with local makerspaces and tech communities.",
          "Preparing comprehensive curriculum for diverse skill levels."
        ]
      }
    }
  },
  {
    title: "CanSat Live Dashboard",
    description:
      "Real-time mission dashboard for CanSat telemetry, built with Grafana, InfluxDB, and a Python bridge that turns live packets into operator-friendly charts, alerts, and maps.",
    tags: ["Grafana", "InfluxDB", "Python", "Telemetry", "CanSat", "Aerospace"],
    icon: Gauge,
    status: "Completed",
    color: "from-violet-500 to-emerald-400",
    version: "v1.0",
    links: {},
    slug: slugify("CanSat Live Dashboard"),
    image: "/images/projects/cansat-live-dashboard.jpg",
    imageAlt: "CanSat Live Dashboard showing mission telemetry, battery voltage, packet loss, GPS map, and flight charts in Grafana.",
    caseStudy: {
      problem: [
        "During CanSat tests and launches, operators need one surface for phase, battery, altitude, pressure, orientation, UV, and GPS instead of reading raw telemetry lines.",
        "Incoming packets are useful only after parsing, structuring, and storing them in a time-series backend that supports fast live queries.",
        "The team needed a monitoring setup that works during flight and remains useful afterwards for review and debugging."
      ],
      approach: [
        "Built a telemetry pipeline where a Python bridge receives and normalizes incoming flight data before writing timestamped measurements into InfluxDB.",
        "Designed a Grafana dashboard around actual mission decisions: filters for team, device, and mission, plus high-priority views for mission phase, voltage, packet loss, map position, and sensor trends.",
        "Kept the system modular so packet parsing, field naming, and dashboard panels can evolve without rebuilding the whole observability flow."
      ],
      iterations: [
        "Started with raw telemetry logging and basic time-series panels to validate the field schema and packet parsing.",
        "Split mission, team, and device metadata into queryable tags so operators can filter and compare test runs quickly.",
        "Added derived views such as acceleration magnitude and GPS mapping to make the dashboard more useful during live operations."
      ],
      technical: {
        stack: ["Grafana", "InfluxDB", "Python", "Telemetry Pipeline", "LoRa/ESP32 data feed"],
        details: [
          "Python bridge parses inbound telemetry packets and writes structured, timestamped measurements into InfluxDB.",
          "Grafana refreshes on a short interval and exposes live panels for mission phase, battery voltage, packet loss, GPS position, altitude, temperature, pressure, roll, pitch, yaw, UV, and acceleration.",
          "The time-series model separates tags from numeric fields so filtering stays fast across missions, devices, and post-flight analysis sessions."
        ]
      },
      outcomes: {
        results: [
          "Turned raw flight telemetry into a readable mission console that supports both live monitoring and post-flight review.",
          "Reduced operator friction by keeping the most important mission signals on a single dashboard instead of scattered tools and logs.",
          "Created a reusable aerospace telemetry foundation for future CanSat tests, demos, and dashboard extensions."
        ],
        metrics: [
          { label: "Refresh cadence", value: "5s" },
          { label: "Core dashboard views", value: "8+" },
          { label: "Telemetry path", value: "Python -> InfluxDB -> Grafana" }
        ]
      }
    }
  },
  {
    title: "Space Fest 2025",
    description: "A community event celebrating World Space Week with contests, workshops, exhibits, and live NASA astronaut interaction via Zoom.",
    tags: ["Education", "Aerospace", "STEM", "Fest", "Community", "Engineering"],
    icon: Rocket,
    status: "Completed",
    color: "from-purple-600 to-indigo-600",
    version: "v1.0",
    links: {
      demo: "https://spacefest.newuu.uz"
    },
    slug: "space-fest-2025",
    caseStudy: {
      problem: [
        "Need to promote space science and technology awareness in Uzbekistan while celebrating UN's World Space Week (October 4-10)",
        "Bringing together students, educators, and space enthusiasts in an engaging format",
        "Creating accessible space education content for diverse audiences"
      ],
      approach: [
        "Partnered with New Uzbekistan University, UzCosmos, and MUBL club",
        "Created comprehensive day-long event with multiple engagement formats",
        "Organized competitive contests, hands-on workshops, and educational exhibits",
        "Arranged unique live Zoom session with NASA astronaut"
      ],
      iterations: [
        "Initial planning phase with stakeholder alignment and venue coordination",
        "Workshop content development and contest format design",
        "NASA astronaut outreach and technical setup for live session",
        "Registration system implementation and marketing campaign",
        "Event execution with real-time coordination and feedback collection"
      ],
      technical: {
        stack: ["React", "Next.js", "Tailwind CSS", "Vercel", "Zoom API"],
        details: [
          "Web platform built for event registration and information sharing",
          "Live streaming setup for NASA astronaut interaction",
          "Contest management system for multiple competition tracks",
          "Digital exhibit platform for space technology showcases",
          "Real-time event coordination and attendee management system"
        ]
      },
      outcomes: {
        results: [
          "Successfully engaged local community in space science education",
          "Established partnership network between academic and space organizations",
          "Created reusable event framework for future STEM celebrations",
          "Increased awareness of space technology careers among students",
          "Built foundation for ongoing space education initiatives in Uzbekistan"
        ]
      }
    }
  },
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
    caseStudy: {
      problem: [
        "Talented students lacked accessible, structured mentoring to navigate global education pathways.",
        "Information was fragmented across chats and spreadsheets; no single source of truth.",
        "Limited volunteer bandwidth required a lightweight system to match mentors and mentees fast."
      ],
      approach: [
        "Designed a simple, mobile-first platform with clear calls-to-action and short forms.",
        "Prioritized low-friction onboarding and async communication over heavy dashboards.",
        "Built a modular content system for resources, templates, and timelines that can grow over time."
      ],
      iterations: [
        "Pilot with 25 mentees to validate copy and onboarding flow.",
        "Refined mentor matching questions to reduce time-to-match.",
        "Shipped content updates weekly based on FAQ patterns from chats."
      ],
      technical: {
        stack: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Supabase"],
        details: [
          "Static-first architecture with incremental data hooks for low ops overhead.",
          "Accessible UI components, semantic HTML, and SEO metadata for discoverability.",
          "Responsive animations to communicate state without adding cognitive load."
        ]
      },
      outcomes: {
        results: [
          "120+ mentees and 30+ mentors onboarded in the first launch window.",
          "Onboarding completion up to 78% after copy and step reductions.",
          "Core web vitals in the green; LCP ~1.8s on 4G."
        ],
        metrics: [
          { label: "Mentee sign-ups", value: "120+" },
          { label: "Mentor network", value: "30+" },
          { label: "Onboarding completion", value: "78%" }
        ]
      }
    }
  },
  {
    title: "Learn Through Fun",
    description:
      "Founder & Web Developer - Interactive STEM education platform for students in Uzbekistan. Discover hands-on projects, virtual experiments, and join a community of curious minds.",
    tags: ["Education", "STEM", "Interactive", "React", "Community"],
    icon: BookOpen,
    status: "Live",
    color: "from-violet-400 to-purple-400",
    version: "v1.0",
    links: { github: "#", live: "https://learn-through-fun.vercel.app/" },
    slug: slugify("Learn Through Fun"),
    caseStudy: {
      problem: [
        "STEM learning is often passive; students struggle to connect theory with practice.",
        "Schools lack consistent access to lab equipment and updated curricula.",
        "Motivation drops when lessons feel abstract and non-interactive."
      ],
      approach: [
        "Created bite-sized, experiment-driven modules with clear outcomes.",
        "Added interactive simulations and step-by-step guides for home learning.",
        "Built community prompts and badges to encourage peer-driven exploration."
      ],
      iterations: [
        "Converted long articles into activity checklists to shorten time-to-first-win.",
        "A/B tested headline tone for engagement; moved from formal to playful.",
        "Introduced progress indicators to increase module completion."
      ],
      technical: {
        stack: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Recharts"],
        details: [
          "Content modeled as JSON to enable rapid authoring and localization.",
          "Lazy-loaded media and code-split routes for fast initial loads.",
          "Analytics events for module start/complete to inform curriculum decisions."
        ]
      },
      outcomes: {
        results: [
          "Average time-on-module increased by 34% after UX updates.",
          "Completion rate improved from 42% to 67% with progress UI.",
          "Teachers reported easier adoption with printable checklists."
        ],
        metrics: [
          { label: "Avg. time on module", value: "+34%" },
          { label: "Completion rate", value: "67%" }
        ]
      }
    }
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
    caseStudy: {
      problem: [
        "Remote workers need reliable spots with Wi‑Fi, power, and noise levels without wading through generic reviews.",
        "City-by-city knowledge is trapped in chats and local groups.",
        "A simple conversational interface is preferred over heavy apps."
      ],
      approach: [
        "Telegram-first experience with fast search, filters, and save lists.",
        "Crowdsourced submissions with light moderation and quality signals.",
        "Lean MVP: focus on data correctness and speed before advanced features."
      ],
      iterations: [
        "Reworked submission flow to reduce drop-off; added inline validation.",
        "Introduced quick-filters (Wi‑Fi, outlets, quiet) to cut query time.",
        "Planned city ambassadors for verified listings."
      ],
      technical: {
        stack: ["Python", "aiogram", "Supabase Postgres", "Edge Functions"],
        details: [
          "Normalized schema for places, reviews, and amenities with RLS for safety.",
          "Rate limiting and simple spam heuristics to protect bot endpoints.",
          "Geo search and caching strategy for snappy responses."
        ]
      },
      outcomes: {
        results: [
          "Private alpha with early community feedback underway.",
          "Query latency under 300ms in most regions.",
          "Growing dataset with curated, structured entries."
        ]
      }
    }
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
    links: { demo: "https://t.me/portfolio_kd08" },
    slug: slugify("Solar Tracker"),
    caseStudy: {
      problem: [
        "Fixed solar panels lose efficiency as the sun moves across the sky.",
        "Goal: increase daily energy capture with low-cost components.",
        "Design must be robust and weather-tolerant."
      ],
      approach: [
        "Dual LDR sensor array to estimate sun position.",
        "Servo-driven two-axis tracking with hysteresis to avoid jitter.",
        "Modular mount and simple calibration procedure."
      ],
      iterations: [
        "Tuned PID-like control to reduce oscillation.",
        "Shielded sensors and added noise filtering.",
        "Improved power management to prevent brownouts."
      ],
      technical: {
        stack: ["Arduino C/C++", "LDR sensors", "Servo motors", "3D-printed mounts"],
        details: [
          "Sampled light differential to compute target angle per axis.",
          "Added deadband to extend servo life and reduce micro-movements.",
          "Logged output to SD for field validation."
        ]
      },
      outcomes: {
        results: [
          "Measured 22–28% gain in daily energy vs fixed orientation.",
          "Stable tracking across varying cloud cover.",
          "Documented build for reproducibility."
        ]
      }
    }
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
    caseStudy: {
      problem: [
        "Needed a fast, expressive portfolio that highlights both engineering and design.",
        "Keep maintenance low while enabling content growth (case studies, notes).",
        "Deliver a delightful experience on mobile and desktop."
      ],
      approach: [
        "Component-driven UI with a small, consistent design system.",
        "Motion for focus and hierarchy rather than decoration.",
        "SEO-first: semantic HTML, canonical links, and clean routes."
      ],
      iterations: [
        "Refined typography scale and spacing for readability.",
        "Added Projects and Case Study routes with shared templates.",
        "Improved Lighthouse scores by deferring non-critical JS."
      ],
      technical: {
        stack: ["React", "Vite", "TypeScript", "TailwindCSS", "framer-motion", "shadcn/ui"],
        details: [
          "SSR-friendly metadata via a reusable SEO hook.",
          "Content split into modules (bio, projects) for portability.",
          "Accessible, keyboard-friendly components."
        ]
      },
      outcomes: {
        results: [
          "Sub‑2s LCP on 4G; excellent Core Web Vitals.",
          "Clear narrative with deep-dive case studies.",
          "Easier content updates thanks to structured data."
        ]
      }
    }
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
    caseStudy: {
      problem: [
        "Many journaling apps lack actionable insights and gentle guidance.",
        "Users want private, supportive prompts that adapt to their patterns.",
        "Mobile-first, distraction-free writing is essential."
      ],
      approach: [
        "Prompt library with tone and depth controls.",
        "Simple streaks and mood check-ins to build habit loops.",
        "Edge inference for fast suggestions where possible."
      ],
      iterations: [
        "Reduced UI chrome to keep users in flow.",
        "Refined sentiment buckets to avoid over-prescriptive feedback.",
        "Improved offline support for writing on the go."
      ],
      technical: {
        stack: ["React", "TypeScript", "TailwindCSS", "Supabase", "OpenAI API"],
        details: [
          "RLS-secured storage for private entries and tags.",
          "Serverless functions for prompt scoring and caching.",
          "Telemetry limited to non-sensitive events for privacy."
        ]
      },
      outcomes: {
        results: [
          "Higher return-to-write within 48h after prompt redesign.",
          "Users report clearer, more consistent reflection sessions.",
          "Responsive UX on low-end devices."
        ]
      }
    }
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
    caseStudy: {
      problem: [
        "Snippets are scattered across gists, notes, and repos with poor discovery.",
        "Developers need fast search and sharing with correct context (lang, tags).",
        "Collaboration without the weight of a full knowledge base."
      ],
      approach: [
        "Opinionated snippet model: code, language, tags, notes, and usage examples.",
        "Keyboard-first UI with fuzzy search and paste-friendly flows.",
        "Simple sharing via public links and teams."
      ],
      iterations: [
        "Prototype importers for gists and markdown.",
        "Explore read-only embeds.",
        "Consider extension integration for IDEs."
      ],
      technical: {
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Prism.js"],
        details: [
          "Full-text search on title/notes with tag filters.",
          "Diff-friendly versioning for snippet updates.",
          "RLS policies for teams and private collections."
        ]
      },
      outcomes: {
        results: [
          "Design and data model drafted; UX prototypes in progress."
        ]
      }
    }
  }
];
