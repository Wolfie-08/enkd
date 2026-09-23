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
  role: { en: "Mechanical Engineering Student · Hardware & Data Systems", uz: "Mexanika muhandisligi talabasi · Apparat va ma’lumot tizimlari" },
  resume: "/Diyorbek_Komilov_CV.pdf",
  replyTime: { en: "within 24 hours", uz: "24 soat ichida" },
  socials: [
    { label: "Telegram", href: "https://t.me/kdiyor_18" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/diyorbek-k/" },
    { label: "X", href: "https://x.com/Enkd127" },
    { label: "Instagram", href: "https://www.instagram.com/kdiyor_18/" },
  ],

  nav: {
    home: { en: "Home", uz: "Bosh sahifa" },
    experience: { en: "Experience", uz: "Tajriba" },
    blog: { en: "Blog", uz: "Blog" },
    contact: { en: "Contact", uz: "Aloqa" },
    faq: { en: "FAQ", uz: "Savol-javob" },
    work: { en: "Projects", uz: "Loyihalar" },
    services: { en: "Services", uz: "Xizmatlar" },
    resume: { en: "Resume", uz: "Rezyume" },
    menu: { en: "Menu", uz: "Menyu" },
    theme: { en: "Theme", uz: "Mavzu" },
  },

  hero: {
    open: { en: "Open to engineering internships", uz: "Muhandislik amaliyotiga ochiqman" },
    lead: {
      en: "Mechanical engineering student. I build hardware that measures the real world, and the software that makes sense of the data.",
      uz: "Mexanika muhandisligi talabasi. Real dunyoni o‘lchaydigan apparat va shu ma’lumotni tushunarli qiladigan dasturiy ta’minot quraman.",
    },
    sub: {
      en: "Second year at New Uzbekistan University. A two-axis solar tracker, CanSat flight telemetry, an F1 telemetry console, and production data systems for a retail group.",
      uz: "Yangi O‘zbekiston universiteti, ikkinchi kurs. Ikki o‘qli quyosh kuzatuvchi, CanSat parvoz telemetriyasi, F1 telemetriya konsoli va savdo guruhi uchun ishlab turgan ma’lumot tizimlari.",
    },
    resume: { en: "Resume (PDF)", uz: "Rezyume (PDF)" },
    contact: { en: "Get in touch", uz: "Bog‘lanish" },
    figure: { en: "Click the moon to form its ring.", uz: "Halqa hosil qilish uchun Oyni bosing." },
    figureLabel: { en: "Interactive 3D moon with an asteroid ring", uz: "Asteroid halqali interaktiv 3D Oy" },
    specs: [
      { label: { en: "Study", uz: "Ta’lim" }, value: { en: "BSc Mechanical Eng., Year 2", uz: "Mexanika muhandisligi, 2-kurs" } },
      { label: { en: "A Levels", uz: "A Levels" }, value: { en: "A A A · Physics, Maths, CS", uz: "A A A · Fizika, matematika, informatika" } },
      { label: { en: "Focus", uz: "Yo‘nalish" }, value: { en: "Motorsport · aerospace · energy", uz: "Motorsport · aerokosmik · energetika" } },
      { label: { en: "Base", uz: "Manzil" }, value: { en: "Tashkent, Uzbekistan", uz: "Toshkent, O‘zbekiston" } },
    ],
  },

  record: {
    heading: { en: "Experience and education", uz: "Tajriba va ta’lim" },
    link: { en: "Full experience", uz: "To‘liq tajriba" },
  },

  toolkit: {
    heading: { en: "Toolkit", uz: "Asboblar" },
    intro: { en: "What I have actually used on the projects above.", uz: "Yuqoridagi loyihalarda haqiqatda ishlatganlarim." },
    groups: [
      { title: { en: "Hardware", uz: "Apparat" }, items: ["Arduino C/C++", "ESP32 · LoRa", "LDR sensors · servos", "3D-printed mounts", "CAD"] },
      { title: { en: "Data & telemetry", uz: "Ma’lumot va telemetriya" }, items: ["Python", "InfluxDB", "Grafana", "PostgreSQL", "Power BI"] },
      { title: { en: "Software", uz: "Dasturiy ta’minot" }, items: ["TypeScript", "React · Next.js", "FastAPI", "Docker", "Linux servers"] },
    ],
  },

  hire: {
    heading: { en: "Hiring engineering interns?", uz: "Muhandis amaliyotchi qidiryapsizmi?" },
    text: { en: "Send me the role and the team. I reply within 24 hours.", uz: "Lavozim va jamoa haqida yozing. 24 soat ichida javob beraman." },
  },

  servicesPage: {
    eyebrow: { en: "Enkd · for businesses", uz: "Enkd · bizneslar uchun" },
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

  selectedWork: {
    heading: { en: "Selected projects", uz: "Tanlangan loyihalar" },
    intro: { en: "Live products I built end to end, each with a demo you can open.", uz: "Boshidan oxirigacha o‘zim qurgan, ishlab turgan mahsulotlar; har birining ochsa bo‘ladigan demosi bor." },
    all: { en: "All projects", uz: "Barcha loyihalar" },
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
    all: { en: "All questions", uz: "Barcha savollar" },
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
          { en: "Three production Telegram bots across four divisions: a self-service storefront where clients browse the live warehouse catalogue, order and pay without a salesperson in the loop, plus marketing-broadcast and customer-service bots.", uz: "To‘rt yo‘nalishda uchta ishlab turgan Telegram bot: mijozlar jonli ombor katalogini ko‘rib, sotuvchisiz buyurtma berib to‘laydigan o‘z-o‘ziga xizmat do‘koni, hamda marketing tarqatmasi va mijozlarga xizmat botlari." },
          { en: "PostgreSQL data warehouse with automated ETL from the Smartup ERP: sales, payments, cash, all divisions.", uz: "Smartup ERP’dan avtomatik ETL bilan PostgreSQL ma’lumotlar ombori: savdo, to‘lovlar, kassa, barcha yo‘nalishlar." },
          { en: "Power BI dashboards for leadership; reporting effort cut by about 80%, with daily, weekly and monthly reports built from the ERP sync instead of manual Excel work.", uz: "Rahbariyat uchun Power BI panellari; hisobot mehnati taxminan 80% ga kamaydi, kunlik, haftalik va oylik hisobotlar qo‘lda Excel ishi o‘rniga ERP sinxronidan yig‘iladi." },
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
    heading: { en: "Get in touch", uz: "Bog‘lanish" },
    intro: { en: "An internship, a project, or a question about my work. I reply within 24 hours.", uz: "Amaliyot, loyiha yoki ishlarim haqida savol. 24 soat ichida javob beraman." },
    direct: { en: "Or write directly", uz: "Yoki to‘g‘ridan-to‘g‘ri yozing" },
    form: {
      name: { en: "Name", uz: "Ism" },
      email: { en: "Email", uz: "Email" },
      company: { en: "Company or university (optional)", uz: "Kompaniya yoki universitet (ixtiyoriy)" },
      need: { en: "What is it about?", uz: "Nima haqida?" },
      message: { en: "Message", uz: "Xabar" },
      messagePlaceholder: { en: "The role, the project, or the question.", uz: "Lavozim, loyiha yoki savol." },
      submit: { en: "Send message", uz: "Xabar yuborish" },
      sending: { en: "Sending", uz: "Yuborilmoqda" },
      success: { en: "Got it. I reply within 24 hours.", uz: "Qabul qilindi. 24 soat ichida javob beraman." },
      successTelegram: { en: "Faster on Telegram", uz: "Telegramda tezroq" },
      error: { en: "Something went wrong. Email me directly or try again.", uz: "Xatolik yuz berdi. To‘g‘ridan-to‘g‘ri email yozing yoki qayta urinib ko‘ring." },
      needs: [
        { key: "internship", label: { en: "Internship or role", uz: "Amaliyot yoki lavozim" } },
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
    liveDemo: { en: "Live demo", uz: "Jonli demo" },
    caseStudy: { en: "Case study", uz: "Batafsil" },
    back: { en: "All projects", uz: "Barcha loyihalar" },
    prev: { en: "Previous", uz: "Oldingi" },
    next: { en: "Next", uz: "Keyingi" },
    status: { live: { en: "Live", uz: "Ishlamoqda" }, building: { en: "In development", uz: "Ishlab chiqilmoqda" }, done: { en: "Completed", uz: "Yakunlangan" } },
  },

  footer: {
    tagline: { en: "Mechanical engineering student building hardware and data systems.", uz: "Apparat va ma’lumot tizimlarini quradigan mexanika muhandisligi talabasi." },
    rights: { en: "All rights reserved.", uz: "Barcha huquqlar himoyalangan." },
  },

  notFound: {
    title: { en: "Page not found", uz: "Sahifa topilmadi" },
    text: { en: "The page you asked for does not exist.", uz: "Siz so‘ragan sahifa mavjud emas." },
    home: { en: "Back home", uz: "Bosh sahifaga" },
  },

  meta: {
    home: {
      title: { en: "Diyorbek Komilov · Mechanical Engineering Student, Hardware & Data Systems", uz: "Diyorbek Komilov · Mexanika muhandisligi talabasi, apparat va ma’lumot tizimlari" },
      description: { en: "Second-year mechanical engineering student at New Uzbekistan University, open to engineering internships. Two-axis solar tracker, CanSat telemetry, F1 telemetry console.", uz: "Yangi O‘zbekiston universiteti mexanika muhandisligi ikkinchi kurs talabasi, muhandislik amaliyotiga ochiq. Ikki o‘qli quyosh kuzatuvchi, CanSat telemetriyasi, F1 telemetriya konsoli." },
    },
    services: {
      title: { en: "Services: AI automation, agents, Telegram bots, websites", uz: "Xizmatlar: AI avtomatlashtirish, agentlar, Telegram botlar, saytlar" },
      description: { en: "Enkd builds AI automation, AI agents, Telegram chatbots and websites for businesses in Tashkent and remotely. Reply within 24 hours.", uz: "Enkd Toshkent va masofadan bizneslar uchun AI avtomatlashtirish, AI agentlar, Telegram chatbotlar va veb-saytlar quradi. 24 soat ichida javob." },
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
      title: { en: "Contact", uz: "Aloqa" },
      description: { en: "Contact Diyorbek Komilov about engineering internships, projects or collaboration. Email, Telegram or the form; reply within 24 hours.", uz: "Muhandislik amaliyoti, loyiha yoki hamkorlik bo‘yicha Diyorbek Komilov bilan bog‘laning. Email, Telegram yoki forma; 24 soat ichida javob." },
    },
    faq: {
      title: { en: "FAQ: AI automation, agents, Telegram bots, websites", uz: "Savol-javob: AI avtomatlashtirish, agentlar, Telegram botlar, saytlar" },
      description: { en: "Answers on cost, timelines, data safety and results for AI automation, AI agents, Telegram shop bots and business websites, from an engineer in Tashkent.", uz: "Toshkentdagi muhandisdan AI avtomatlashtirish, AI agentlar, Telegram do‘kon botlari va biznes saytlari narxi, muddati, ma’lumotlar xavfsizligi va natijalari haqida javoblar." },
    },
  },
} as const;
