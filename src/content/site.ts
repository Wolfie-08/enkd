import type { Bi } from "@/lib/i18n";

export type Service = { key: "automation" | "agent" | "chatbot" | "website"; index: string; title: Bi; promise: Bi; includes: Bi[] };
export type Job = { org: string; url?: string; role: Bi; period: Bi; points: Bi[] };
export type Edu = { org: string; url?: string; title: Bi; period: string; note: Bi };

export const site = {
  name: "Diyorbek Komilov",
  brand: "Enkd",
  email: "diyorbek@enkd.uz",
  telegram: "https://t.me/kdiyor_18",
  location: { en: "Tashkent, Uzbekistan", uz: "Toshkent, O‘zbekiston" },
  role: { en: "Mechanical engineer · Digital Systems Engineer", uz: "Mexanika muhandisi · Raqamli tizimlar muhandisi" },
  replyTime: { en: "within 24 hours", uz: "24 soat ichida" },
  socials: [
    { label: "Telegram", handle: "@kdiyor_18", href: "https://t.me/kdiyor_18" },
    { label: "LinkedIn", handle: "diyorbek-k", href: "https://www.linkedin.com/in/diyorbek-k/" },
    { label: "X", handle: "@Enkd127", href: "https://x.com/Enkd127" },
    { label: "Instagram", handle: "@kdiyor_18", href: "https://www.instagram.com/kdiyor_18/" },
  ],

  nav: {
    home: { en: "Home", uz: "Bosh sahifa" },
    experience: { en: "Experience", uz: "Tajriba" },
    blog: { en: "Blog", uz: "Blog" },
    contact: { en: "Contact", uz: "Aloqa" },
    request: { en: "Request a solution", uz: "Yechim so‘rash" },
    sound: { en: "Sound", uz: "Ovoz" },
    theme: { en: "Theme", uz: "Mavzu" },
  },

  hero: {
    eyebrow: { en: "Tashkent · Mechanical engineer · Available", uz: "Toshkent · Mexanika muhandisi · Buyurtmaga ochiq" },
    h1: { en: "Engineer who builds AI systems for real businesses.", uz: "Real bizneslar uchun AI tizimlarini quradigan muhandis." },
    sub: {
      en: "Diyorbek Komilov. I build and run the software behind a four-division retail group: Telegram storefronts, an ERP-fed data warehouse, Power BI reporting, and an AI assistant over live company data. Available for AI automation, agents, chatbots, and websites.",
      uz: "Diyorbek Komilov. To‘rt yo‘nalishli savdo guruhining dasturiy ta’minotini quraman va yuritaman: Telegram do‘konlar, ERP bilan bog‘langan ma’lumotlar ombori, Power BI hisobotlari va kompaniyaning jonli ma’lumotlari ustida ishlaydigan AI yordamchi. AI avtomatlashtirish, agentlar, chatbotlar va veb-saytlar bo‘yicha buyurtmalarga ochiqman.",
    },
    primary: { en: "Request a solution", uz: "Yechim so‘rash" },
    secondary: { en: "See the work", uz: "Ishlarni ko‘rish" },
    status: [
      { label: { en: "Focus", uz: "Yo‘nalish" }, value: { en: "AI + hardware", uz: "AI + apparat" } },
      { label: { en: "Base", uz: "Manzil" }, value: { en: "Tashkent, remote OK", uz: "Toshkent, masofaviy ham" } },
      { label: { en: "Availability", uz: "Bandlik" }, value: { en: "Open", uz: "Ochiq" } },
      { label: { en: "Reply", uz: "Javob" }, value: { en: "within 24h", uz: "24 soat ichida" } },
    ],
  },

  services: {
    heading: { en: "What I build for businesses", uz: "Bizneslar uchun nima quraman" },
    intro: { en: "Four things, each one shipped before in production, not in a slide deck.", uz: "To‘rt narsa, har biri taqdimotda emas, ishlab turgan tizimlarda sinalgan." },
    items: [
      {
        key: "automation", index: "01",
        title: { en: "AI automation", uz: "AI avtomatlashtirish" },
        promise: { en: "Replace the manual step.", uz: "Qo‘lda qilinadigan ishni tizimga topshiring." },
        includes: [
          { en: "ERP or CRM sync into a Postgres warehouse", uz: "ERP yoki CRM ma’lumotlarini Postgres omboriga sinxronlash" },
          { en: "Scheduled reports: cash flow, debtors, sales", uz: "Jadval bo‘yicha hisobotlar: pul oqimi, qarzdorlar, savdo" },
          { en: "Alerts and summaries delivered to Telegram", uz: "Telegramga yuboriladigan ogohlantirish va xulosalar" },
        ],
      },
      {
        key: "agent", index: "02",
        title: { en: "AI agents", uz: "AI agentlar" },
        promise: { en: "An assistant that knows your data.", uz: "Ma’lumotlaringizni biladigan yordamchi." },
        includes: [
          { en: "Natural-language questions over live company data", uz: "Kompaniyaning jonli ma’lumotlariga oddiy tilda savollar" },
          { en: "Tool use with approval gates before any write", uz: "Har qanday yozishdan oldin tasdiqlash bosqichi bilan vositalar" },
          { en: "Runs on your server, local models where they fit", uz: "Sizning serveringizda ishlaydi, mos joyda lokal modellar" },
        ],
      },
      {
        key: "chatbot", index: "03",
        title: { en: "AI chatbots", uz: "AI chatbotlar" },
        promise: { en: "Sales and support inside Telegram.", uz: "Telegram ichida savdo va qo‘llab-quvvatlash." },
        includes: [
          { en: "Storefront, cart, orders, as a Mini App and plain buttons", uz: "Do‘kon, savat, buyurtmalar: Mini App va oddiy tugmalar" },
          { en: "Admin panel for products, prices, photos, orders", uz: "Mahsulot, narx, rasm va buyurtmalar uchun admin panel" },
          { en: "Uzbek and Russian, kept in sync", uz: "O‘zbek va rus tillari, sinxron holda" },
        ],
      },
      {
        key: "website", index: "04",
        title: { en: "Websites", uz: "Veb-saytlar" },
        promise: { en: "Fast, bilingual, findable.", uz: "Tez, ikki tilli, topiladigan." },
        includes: [
          { en: "Next.js, statically generated, deployed on Vercel", uz: "Next.js, statik yig‘ilgan, Vercel’da joylashtirilgan" },
          { en: "Structured data so search and AI engines can read it", uz: "Qidiruv va AI tizimlari o‘qiy oladigan strukturali ma’lumotlar" },
          { en: "Forms that land in your inbox, admin panels where needed", uz: "Pochtangizga keladigan formalar, kerak bo‘lsa admin panel" },
        ],
      },
    ] satisfies Service[],
  },

  marquee: ["Python", "FastAPI", "PostgreSQL", "Docker", "Power BI", "Telegram Bot API", "aiogram", "Next.js", "React", "TypeScript", "Supabase", "Redis", "LLM integration", "MCP", "Grafana", "InfluxDB", "Arduino", "CAD"],

  selectedWork: { heading: { en: "Selected work", uz: "Tanlangan ishlar" }, all: { en: "All projects", uz: "Barcha loyihalar" } },

  now: {
    heading: { en: "Now", uz: "Hozir" },
    text: {
      en: "Digital Systems Engineer at Supply Group, a four-division retail group in Tashkent. Second-year Mechanical Engineering student at New Uzbekistan University.",
      uz: "Toshkentdagi to‘rt yo‘nalishli Supply Group savdo guruhida Raqamli tizimlar muhandisi. Yangi O‘zbekiston universitetida mexanika muhandisligi bo‘yicha ikkinchi kurs talabasi.",
    },
    link: { en: "Full experience", uz: "To‘liq tajriba" },
  },

  founders: {
    heading: { en: "For founders", uz: "Asoschilar uchun" },
    text: {
      en: "Building a startup and need the technical half? I take co-founder roles where I own product engineering end to end: architecture, backend, interfaces, deployment.",
      uz: "Startap qurayapsiz va texnik hamkor kerakmi? Mahsulot muhandisligini boshidan oxirigacha o‘z zimmamga oladigan hamasoschi rollarini olaman: arxitektura, backend, interfeyslar, joylashtirish.",
    },
    cta: { en: "Talk about a startup", uz: "Startap haqida gaplashish" },
  },

  faq: {
    heading: { en: "Questions businesses ask", uz: "Bizneslar beradigan savollar" },
    items: [
      {
        q: { en: "What does Enkd do?", uz: "Enkd nima bilan shug‘ullanadi?" },
        a: { en: "Enkd is Diyorbek Komilov's studio for AI automation, AI agents, Telegram chatbots, and websites for businesses in Uzbekistan and abroad. One engineer, end to end, from architecture to deployment.", uz: "Enkd — Diyorbek Komilovning O‘zbekiston va xorijdagi bizneslar uchun AI avtomatlashtirish, AI agentlar, Telegram chatbotlar va veb-saytlar quradigan studiyasi. Bir muhandis, arxitekturadan joylashtirishgacha." },
      },
      {
        q: { en: "Where are you based, and do you work remotely?", uz: "Qayerdasiz va masofadan ishlaysizmi?" },
        a: { en: "Tashkent, Uzbekistan. Most work is remote; on-site in Tashkent when a project needs it.", uz: "Toshkent, O‘zbekiston. Ishlarning aksariyati masofaviy; loyiha talab qilsa Toshkentda joyida." },
      },
      {
        q: { en: "What does an AI automation project involve?", uz: "AI avtomatlashtirish loyihasi nimalardan iborat?" },
        a: { en: "A short call to find the manual step that costs the most time. Then a first version that runs on real data, usually a sync into Postgres plus a report or alert. Then iterations on what the team actually uses.", uz: "Eng ko‘p vaqt oladigan qo‘lda qilinadigan ishni aniqlash uchun qisqa suhbat. Keyin real ma’lumotlarda ishlaydigan birinchi versiya, odatda Postgres’ga sinxronlash va hisobot yoki ogohlantirish. So‘ng jamoa haqiqatda foydalanadigan qismlar ustida takomillashtirish." },
      },
      {
        q: { en: "How do I start?", uz: "Qanday boshlash mumkin?" },
        a: { en: "Send a request through the form on the contact page. I reply within 24 hours with questions or a proposed first step.", uz: "Aloqa sahifasidagi forma orqali so‘rov yuboring. 24 soat ichida savollar yoki taklif qilingan birinchi qadam bilan javob beraman." },
      },
      {
        q: { en: "Do you build hardware too?", uz: "Apparat ham qurasizmi?" },
        a: { en: "Yes. Mechanical engineering is my degree. I have built a two-axis solar tracker and a live telemetry dashboard for a CanSat mission, and I design around real sensors, not ideal ones.", uz: "Ha. Mexanika muhandisligi — mening mutaxassisligim. Ikki o‘qli quyosh kuzatuvchi qurilma va CanSat missiyasi uchun jonli telemetriya paneli qurganman; ideal emas, real datchiklar asosida loyihalayman." },
      },
      {
        q: { en: "Do you join startups as a technical co-founder?", uz: "Startaplarga texnik hamasoschi sifatida qo‘shilasizmi?" },
        a: { en: "Yes, selectively. I own product engineering end to end. Use the form and pick \"Technical co-founder\".", uz: "Ha, tanlab. Mahsulot muhandisligini to‘liq o‘z zimmamga olaman. Formada “Texnik hamasoschi” ni tanlang." },
      },
    ],
  },

  cta: {
    heading: { en: "Have a process that still runs on spreadsheets?", uz: "Hali ham jadvallarda yuritiladigan jarayon bormi?" },
    text: { en: "Describe it in a few lines. I reply within 24 hours.", uz: "Bir necha qatorda tasvirlab bering. 24 soat ichida javob beraman." },
    button: { en: "Request a solution", uz: "Yechim so‘rash" },
  },

  experience: {
    heading: { en: "Experience", uz: "Tajriba" },
    intro: { en: "Work, education, and the projects that came out of both.", uz: "Ish, ta’lim va ikkalasidan tug‘ilgan loyihalar." },
    work: { en: "Work", uz: "Ish" },
    education: { en: "Education", uz: "Ta’lim" },
    notes: { en: "Also", uz: "Shuningdek" },
    projects: { en: "Projects", uz: "Loyihalar" },
    groups: {
      work: { en: "Work", uz: "Ish" },
      products: { en: "Products", uz: "Mahsulotlar" },
      hardware: { en: "Hardware", uz: "Apparat" },
      community: { en: "Community", uz: "Jamiyat" },
    },
    jobs: [
      {
        org: "Supply Group LLC",
        role: { en: "Digital Systems Engineer", uz: "Raqamli tizimlar muhandisi" },
        period: { en: "Jul 2026 – present", uz: "2026 iyul – hozir" },
        points: [
          { en: "Three production Telegram bots (storefront, marketing broadcast, customer service) live across four divisions.", uz: "To‘rt yo‘nalishda ishlab turgan uchta Telegram bot: do‘kon, marketing tarqatmasi, mijozlarga xizmat." },
          { en: "PostgreSQL data warehouse with automated ETL from the Smartup ERP: sales, payments, cash, all divisions.", uz: "Smartup ERP’dan avtomatik ETL bilan PostgreSQL ma’lumotlar ombori: savdo, to‘lovlar, kassa, barcha yo‘nalishlar." },
          { en: "Power BI dashboards for leadership; automated daily cash-flow and debtor reporting.", uz: "Rahbariyat uchun Power BI panellari; kunlik pul oqimi va qarzdorlar hisobotini avtomatlashtirish." },
          { en: "Dockerized Linux server hosting 17 production services with health monitoring and alerting.", uz: "17 ta ishlab turgan xizmatni joylashtirgan Docker’li Linux server, monitoring va ogohlantirish bilan." },
          { en: "LLM financial assistant over live company data, in development.", uz: "Kompaniyaning jonli ma’lumotlari ustida ishlaydigan LLM moliyaviy yordamchi, ishlab chiqilmoqda." },
        ],
      },
      {
        org: "Private tutoring",
        role: { en: "SAT Math and AP Physics tutor", uz: "SAT matematika va AP fizika o‘qituvchisi" },
        period: { en: "Oct – Dec 2025", uz: "2025 oktyabr – dekabr" },
        points: [{ en: "Two students; SAT math raised from 600 to 750 in one month with tracked study plans.", uz: "Ikki o‘quvchi; kuzatiladigan o‘quv rejalari bilan SAT matematika bir oyda 600 dan 750 ga ko‘tarildi." }],
      },
    ] satisfies Job[],
    edu: [
      { org: "New Uzbekistan University", url: "https://newuu.uz", title: { en: "BSc Mechanical Engineering", uz: "Mexanika muhandisligi bakalavri" }, period: "2025 – 2029", note: { en: "Second year. CGPA 3.26.", uz: "Ikkinchi kurs. O‘rtacha ball 3.26." } },
      { org: "Khiva Presidential School", url: "https://pskhiva.uz", title: { en: "Cambridge A Levels", uz: "Cambridge A Levels" }, period: "2025", note: { en: "AAA in Physics, Mathematics, Computer Science. SAT 1430. IELTS 6.5.", uz: "Fizika, matematika, informatika: AAA. SAT 1430. IELTS 6.5." } },
    ] satisfies Edu[],
    notesList: [
      { en: "Yandex Dev Camp 2025, selected from 2,000 applicants.", uz: "Yandex Dev Camp 2025, 2 000 nomzod ichidan tanlangan." },
      { en: "FIA Mobility & Motorsport side event, delegate, Dec 2025.", uz: "FIA Mobility & Motorsport yondosh tadbiri, delegat, 2025 dekabr." },
    ],
  },

  blog: {
    heading: { en: "Writing", uz: "Yozganlarim" },
    intro: { en: "I publish in three places.", uz: "Uch joyda yozaman." },
    links: [
      { title: { en: "Medium", uz: "Medium" }, text: { en: "Technical writing on engineering, software, and building things.", uz: "Muhandislik, dasturiy ta’minot va qurish haqida texnik maqolalar." }, href: "https://medium.com/@kdiyorbek133", action: { en: "Read on Medium", uz: "Medium’da o‘qish" } },
      { title: { en: "American Journal of Education and Learning", uz: "American Journal of Education and Learning" }, text: { en: "Published academic work on education and learning.", uz: "Ta’lim va o‘qitish bo‘yicha nashr etilgan ilmiy ish." }, href: "https://advancedscienti.com/index.php/AJEL/article/view/1609", action: { en: "View publication", uz: "Nashrni ko‘rish" } },
      { title: { en: "Telegram channel", uz: "Telegram kanal" }, text: { en: "Notes, reflections, and opportunities, in Uzbek.", uz: "Qaydlar, mulohazalar va imkoniyatlar, o‘zbek tilida." }, href: "https://t.me/enkdblog", action: { en: "Open channel", uz: "Kanalni ochish" } },
    ],
  },

  contact: {
    heading: { en: "Request a solution", uz: "Yechim so‘rash" },
    intro: { en: "Tell me what runs by hand today, or what you want to build. I reply within 24 hours.", uz: "Bugun nima qo‘lda qilinayotganini yoki nimani qurmoqchi ekaningizni yozing. 24 soat ichida javob beraman." },
    direct: { en: "Or write directly", uz: "Yoki to‘g‘ridan-to‘g‘ri yozing" },
    form: {
      name: { en: "Name", uz: "Ism" },
      email: { en: "Email", uz: "Email" },
      company: { en: "Company (optional)", uz: "Kompaniya (ixtiyoriy)" },
      need: { en: "What do you need?", uz: "Nima kerak?" },
      message: { en: "Message", uz: "Xabar" },
      messagePlaceholder: { en: "What runs by hand today? What should it do instead?", uz: "Bugun nima qo‘lda qilinadi? Uning o‘rniga nima bo‘lishi kerak?" },
      submit: { en: "Send request", uz: "So‘rov yuborish" },
      sending: { en: "Sending", uz: "Yuborilmoqda" },
      success: { en: "Got it. I reply within 24 hours.", uz: "Qabul qilindi. 24 soat ichida javob beraman." },
      successTelegram: { en: "Faster on Telegram", uz: "Telegramda tezroq" },
      error: { en: "Something went wrong. Email me directly or try again.", uz: "Xatolik yuz berdi. To‘g‘ridan-to‘g‘ri email yozing yoki qayta urinib ko‘ring." },
      needs: [
        { key: "automation", label: { en: "AI automation", uz: "AI avtomatlashtirish" } },
        { key: "agent", label: { en: "AI agent", uz: "AI agent" } },
        { key: "chatbot", label: { en: "AI chatbot", uz: "AI chatbot" } },
        { key: "website", label: { en: "Website", uz: "Veb-sayt" } },
        { key: "cofounder", label: { en: "Technical co-founder", uz: "Texnik hamasoschi" } },
        { key: "other", label: { en: "Other", uz: "Boshqa" } },
      ],
    },
  },

  project: {
    built: { en: "What I built", uz: "Nima qurdim" },
    outcomes: { en: "Outcomes", uz: "Natijalar" },
    stack: { en: "Stack", uz: "Stek" },
    links: { en: "Links", uz: "Havolalar" },
    live: { en: "Live", uz: "Sayt" },
    demo: { en: "Demo", uz: "Demo" },
    back: { en: "All projects", uz: "Barcha loyihalar" },
    prev: { en: "Previous", uz: "Oldingi" },
    next: { en: "Next", uz: "Keyingi" },
    status: { live: { en: "Live", uz: "Ishlamoqda" }, building: { en: "In development", uz: "Ishlab chiqilmoqda" }, done: { en: "Completed", uz: "Yakunlangan" } },
  },

  footer: {
    tagline: { en: "Engineered, not templated.", uz: "Shablon emas, muhandislik." },
    rights: { en: "All rights reserved.", uz: "Barcha huquqlar himoyalangan." },
  },

  notFound: {
    title: { en: "Page not found", uz: "Sahifa topilmadi" },
    text: { en: "The page you asked for does not exist.", uz: "Siz so‘ragan sahifa mavjud emas." },
    home: { en: "Back home", uz: "Bosh sahifaga" },
  },

  meta: {
    home: {
      title: { en: "Diyorbek Komilov · AI systems for business, Tashkent", uz: "Diyorbek Komilov · Biznes uchun AI tizimlar, Toshkent" },
      description: { en: "Mechanical engineer in Tashkent building AI automation, AI agents, Telegram chatbots, and websites for businesses. Reply within 24 hours.", uz: "Toshkentdagi mexanika muhandisi: bizneslar uchun AI avtomatlashtirish, AI agentlar, Telegram chatbotlar va veb-saytlar. 24 soat ichida javob." },
    },
    experience: {
      title: { en: "Experience", uz: "Tajriba" },
      description: { en: "Work history, education, and nine projects across software, AI, and hardware by Diyorbek Komilov.", uz: "Diyorbek Komilovning ish tajribasi, ta’limi va dasturiy ta’minot, AI hamda apparat bo‘yicha to‘qqizta loyihasi." },
    },
    blog: {
      title: { en: "Writing", uz: "Yozganlarim" },
      description: { en: "Articles and publications by Diyorbek Komilov on Medium, in an academic journal, and on Telegram.", uz: "Diyorbek Komilovning Medium, ilmiy jurnal va Telegramdagi maqolalari va nashrlari." },
    },
    contact: {
      title: { en: "Request a solution", uz: "Yechim so‘rash" },
      description: { en: "Request AI automation, an AI agent, a Telegram chatbot, or a website from Diyorbek Komilov in Tashkent. Reply within 24 hours.", uz: "Toshkentdagi Diyorbek Komilovdan AI avtomatlashtirish, AI agent, Telegram chatbot yoki veb-sayt so‘rang. 24 soat ichida javob." },
    },
  },
} as const;
