import { Globe, BookOpen, Sun, Rocket, Cpu, Gauge, Fish, ShoppingBag, Sparkles, Hammer, BrainCircuit } from "lucide-react";

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

export type ProjectGroup = "Products & Startups" | "Community & Events" | "Engineering";

export type Project = {
  title: string;
  group: ProjectGroup;
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
    title: "RSEF — Research, Science & Engineering Fair",
    group: "Products & Startups",
    description:
      "CTO of rsef.uz — trilingual (UZ/RU/EN) platform for Central Asia's first large-scale student research fair: accounts, online applications, news and results, plus an admin panel for reviewing submissions.",
    tags: ["React", "TypeScript", "Supabase", "i18n", "Admin Panel"],
    icon: Globe,
    status: "Live",
    color: "from-sky-400 to-indigo-500",
    version: "v2.0",
    links: { live: "https://rsef.uz" },
    slug: "rsef",
    image: "/images/projects/rsef.uz.jpg",
    caseStudy: {
      problem: [
        "A fair spanning five countries needed one place for guidelines, applications, news and results in three languages.",
        "Reviewers needed to evaluate submissions and attached files without passing spreadsheets around.",
        "Organisers had to publish news and results themselves, without waiting on a developer."
      ],
      approach: [
        "Locale-prefixed routes (UZ/RU/EN) with every string kept in sync across the three locale files.",
        "Supabase Auth, Postgres and Storage for profiles, submissions and uploaded application files.",
        "Access control in row-level-security policies, not in the client; an admin flag on the profile unlocks the review panel."
      ],
      iterations: [
        "Public site with guidelines, sponsors and the application timeline.",
        "Accounts and online application submission with file uploads.",
        "Admin panel for reviewing submissions and publishing news and results; applications closed for the 2026 cycle."
      ],
      technical: {
        stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS 4", "React Router 7", "i18next", "Supabase", "Vercel"],
        details: [
          "RLS policies on profiles, submissions, news and results tables; the anon key is public by design.",
          "Storage buckets for application files and published results.",
          "Schema kept as a single SQL file so a fresh Supabase project can be stood up in one query."
        ]
      },
      outcomes: {
        results: [
          "Live for the RSEF 2026 cycle with applications, review and published results.",
          "Participants from five countries applied through the platform."
        ],
        metrics: [
          { label: "Participating countries", value: "5" },
          { label: "Applications", value: "47" },
          { label: "Finalists", value: "18" },
          { label: "Research categories", value: "12" }
        ]
      }
    }
  },
  {
    title: "Hunar",
    group: "Products & Startups",
    description:
      "Founder. Marketplace connecting Uzbek craft makers with global buyers, with both local and international payment rails.",
    tags: ["Marketplace", "Payments", "E-commerce", "Startup"],
    icon: ShoppingBag,
    status: "In Development",
    color: "from-rose-400 to-orange-400",
    version: "v0.1",
    links: { live: "https://hunaruz.vercel.app" },
    slug: "hunar",
    image: "/images/projects/hunaruz.vercel.app.jpg",
  },
  {
    title: "Osonqur",
    group: "Products & Startups",
    description: "Shipped web product, live at osonqur.uz.",
    tags: ["Web App", "Product"],
    icon: Hammer,
    status: "Live",
    color: "from-lime-400 to-emerald-500",
    version: "v1.0",
    links: { live: "https://osonqur.uz" },
    slug: "osonqur",
    image: "/images/projects/osonqur.vercel.app.jpg",
  },
  {
    title: "Enkd OS",
    group: "Products & Startups",
    description:
      "Personal and company AI operating system: event-driven agents over a knowledge graph, with a Telegram hub and a web dashboard as the interfaces.",
    tags: ["Python", "MCP", "Knowledge Graph", "LLM Integration", "Docker"],
    icon: BrainCircuit,
    status: "In Development",
    color: "from-violet-500 to-fuchsia-500",
    version: "v1.3",
    links: { live: "https://os.enkd.uz" },
    slug: "enkd-os",
    caseStudy: {
      problem: [
        "Context about projects, finances and the company was scattered across chats, docs and dashboards.",
        "Cloud API spend for assistant workflows was the main running cost and needed to be designed away.",
        "Any agent that can write to finances or a calendar must not be able to act unattended."
      ],
      approach: [
        "Event-driven core over Redis Pub/Sub and Streams: capabilities publish and subscribe, they never call each other directly.",
        "Every tool is its own MCP server, one file per domain, so adding a capability means adding a server rather than widening one.",
        "A knowledge graph (Memgraph, with Cognee for entity extraction and Graphify for codebase mapping) as shared memory.",
        "LiteLLM in front of every model call with fallback across providers and local models; a Telegram Approve / Edit / Reject gate on every financial or calendar write."
      ],
      iterations: [
        "Telegram multi-topic hub for ingestion and the first MCP servers.",
        "Knowledge graph and event bus, with a Next.js dashboard for visual operations.",
        "Twelve-persona release (v1.3) targeting an ARM64 build that runs under 4 GB RAM on a Raspberry Pi 5."
      ],
      technical: {
        stack: ["Python", "FastMCP", "FastAPI", "Postgres + pgvector", "Redis", "Memgraph", "Cognee", "LiteLLM", "Next.js", "Docker"],
        details: [
          "Local-first: local embeddings and Ollama on Apple Silicon, cloud models only as fallback.",
          "Three interfaces: Telegram hub, web dashboard, and an MCP client for protocol execution.",
          "Human-in-the-loop gate on every side-effecting action."
        ]
      },
      outcomes: {
        results: [
          "Architecture fixed and in build: event bus, MCP-per-domain, dual knowledge graph.",
          "Designed to cut monthly assistant API spend by roughly an order of magnitude by moving to local models."
        ]
      }
    }
  },
  {
    title: "AquaFerma",
    group: "Products & Startups",
    description:
      "Telegram Mini App for fish farmers in Uzbekistan: daily feed rations from water readings, per-lake finances, a disease reference and a small shop, with an operator dashboard behind it.",
    tags: ["FastAPI", "PostgreSQL", "Telegram Mini App", "React", "Docker"],
    icon: Fish,
    status: "Live",
    color: "from-cyan-400 to-blue-600",
    version: "v1.0",
    links: { live: "https://aquaagro.enkd.uz" },
    slug: "aquaferma",
    image: "/images/projects/aquaagro.enkd.uz.jpg",
    caseStudy: {
      problem: [
        "Feeding decisions on small fish farms are made by rule of thumb, while the right ration changes with water temperature, oxygen and pH.",
        "Stock counts drift because stockings, sales, mortality and weighings are recorded in different places.",
        "Farmers in trouble (low oxygen, disease, losses) are noticed late, and there was no channel to reach them with advice or supplies."
      ],
      approach: [
        "Feed calculator: biomass × base rate from average weight × temperature, oxygen, pH and species factors, split across three meals. A zero ration is a real answer below 3 mg/l oxygen or 8 °C.",
        "Lake stock is never written directly; it is recomputed by replaying a ledger of stockings, sales, mortality and weight checks.",
        "A single SQL view turns readings and ledger rows into farmer signals with a severity (act today / this week / nudge), and offer rules map a signal to something useful to sell.",
        "Operator dashboard signs in by a one-time link issued through the bot; admin and operator roles are re-resolved from config on every request, and finance fields are removed at the API, not hidden in the UI."
      ],
      iterations: [
        "Lakes, water readings and the feed calculator as the first release.",
        "Ledger-derived stock with triggers handling edits and deletes.",
        "Signals, offers, the shop and the two-role admin dashboard."
      ],
      technical: {
        stack: ["FastAPI", "SQLAlchemy (async)", "PostgreSQL 16", "aiogram 3", "React 18", "TypeScript", "Tailwind CSS", "Docker", "Caddy"],
        details: [
          "Plain SQL migrations applied in order at API startup.",
          "The bot only opens the Mini App; it never touches the database.",
          "Mini App and admin dashboard are separate builds and origins sharing one design token set.",
          "Deployed with Docker behind a shared Caddy reverse proxy on a Linux VPS."
        ]
      },
      outcomes: {
        results: [
          "Live for farmers with a fully Uzbek interface.",
          "Operators handle orders, photos and farmer questions without seeing lake finances.",
          "New risk rules are added as SQL, without touching application code."
        ]
      }
    }
  },
  {
    title: "Parfume Shop — Telegram Mini App",
    group: "Products & Startups",
    description:
      "Perfume storefront that lives inside Telegram: catalog, search, cart, orders and history as a Mini App, the same shop through plain bot buttons, and a browser admin panel for products, prices, photos and orders. UZ/RU.",
    tags: ["Python", "aiogram 3", "FastAPI", "Supabase", "Cloudflare R2", "Vercel"],
    icon: Sparkles,
    status: "Live",
    color: "from-amber-300 to-pink-500",
    version: "v1.0",
    links: { live: "https://parfume.enkd.uz" },
    slug: "parfume-shop",
    image: "/images/projects/parfume.enkd.uz.jpg",
    caseStudy: {
      problem: [
        "Customers order where they already are, in Telegram, and a share of them use phones that cannot open Mini Apps.",
        "The shop owner needed to change products, prices and photos without a developer in the loop.",
        "Bot, Mini App and admin panel had to agree on one catalog and one order list."
      ],
      approach: [
        "Mini App for catalog, search, cart, checkout, order history and profile; the same flow through inline bot keyboards as a fallback.",
        "Browser admin panel for products, prices, images and order status, writing to the same database the app reads.",
        "One FastAPI service serving the admin panel, the Mini App, the API and the bot webhook."
      ],
      iterations: [
        "Bot-first ordering flow.",
        "Mini App storefront on top of the same API.",
        "Admin panel, product import and image hosting."
      ],
      technical: {
        stack: ["Python", "aiogram 3", "FastAPI", "Supabase (Postgres)", "Cloudflare R2", "Vercel"],
        details: [
          "Webhook mode on serverless in production, polling locally; the code supports both.",
          "Product images on Cloudflare R2, catalog and orders in Postgres through a transaction pooler.",
          "Bilingual UZ/RU interface, kept in sync across bot and app."
        ]
      },
      outcomes: {
        results: [
          "Live storefront; a price changed in the panel appears in the app immediately.",
          "Works with or without Mini App support on the customer's phone."
        ]
      }
    }
  },
  {
    title: "Sedia Chairs — Telegram Shop",
    group: "Products & Startups",
    description:
      "Furniture storefront inside Telegram for Sedia Chairs: catalog, cart and orders as a Mini App and through bot buttons, with promo banners and discounts, and an admin panel for products and orders. UZ/RU.",
    tags: ["Python", "aiogram 3", "FastAPI", "Supabase", "Cloudflare R2"],
    icon: ShoppingBag,
    status: "Live",
    color: "from-emerald-400 to-teal-600",
    version: "v1.0",
    links: { live: "https://sedia.enkd.uz" },
    slug: "sedia-chairs",
    image: "/images/projects/sedia.enkd.uz.jpg",
  },
  {
    title: "Hogwarts Research Community",
    group: "Community & Events",
    description:
      "Premium academic community platform for students interested in research, innovation, and solving real-world problems, with public pages, member workflows, and admin tools in one product.",
    tags: ["Next.js", "TypeScript", "Supabase", "Research", "Community", "Education"],
    icon: BookOpen,
    status: "Live",
    color: "from-amber-400 to-orange-500",
    version: "v1.0",
    links: { live: "https://hogwarts.enkd.uz" },
    slug: slugify("Hogwarts Research Community"),
    image: "/images/projects/hogwarts.enkd.uz.jpg",
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
    group: "Community & Events",
    description:
      "Official website for the student-led engineering club at New Uzbekistan University, showcasing projects, events, achievements, and a clear path for new members to join.",
    tags: ["React", "TypeScript", "Engineering", "Robotics", "Community", "Education"],
    icon: Rocket,
    status: "Live",
    color: "from-sky-400 to-cyan-500",
    version: "v1.0",
    links: { live: "https://mubl.uz" },
    slug: slugify("MUBL Engineering Club"),
    image: "/images/projects/mubl.uz.jpg",
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
    group: "Community & Events",
    description:
      "A hands-on intensive designed for students to develop technical and creative skills in robotics, 3D modeling & printing, and strategic project development. Students will form teams and present final projects.",
    tags: ["3D Printing", "AI", "Robotics", "Education", "Workshop"],
    icon: Cpu,
    status: "Live",
    color: "from-cyan-400 to-blue-500",
    version: "v1.0",
    links: { live: "https://bootcamp.mubl.uz" },
    slug: "mubl-bootcamp",
    image: "/images/projects/bootcamp.mubl.uz.jpg",
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
    group: "Engineering",
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
    group: "Community & Events",
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
    image: "/images/projects/spacefest.newuu.uz.jpg",
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
    title: "Solar Tracker",
    group: "Engineering",
    description:
      "High school engineering project featuring an automated solar panel tracking system that follows the sun for maximum energy efficiency.",
    tags: ["Arduino", "Engineering", "Solar Energy", "Automation", "Sensors"],
    icon: Sun,
    status: "Completed",
    color: "from-yellow-400 to-orange-400",
    version: "v1.0",
    links: { demo: "https://t.me/portfolio_kd08" },
    slug: slugify("Solar Tracker"),
    image: "/images/projects/solar-tracker.jpg",
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
    group: "Products & Startups",
    description:
      "Modern, animated personal portfolio showcasing projects and skills. Built with React, Framer Motion, and TailwindCSS.",
    tags: ["React", "Framer Motion", "TailwindCSS", "TypeScript"],
    icon: Globe,
    status: "Live",
    color: "from-purple-400 to-pink-400",
    version: "v1.0",
    links: { github: "#", live: "/" },
    slug: slugify("Portfolio Website"),
    image: "/images/projects/enkd.uz.jpg",
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
];
