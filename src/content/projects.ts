import type { Bi, Locale } from "@/lib/i18n";

export type Group = "work" | "products" | "hardware" | "community";
export type Status = "live" | "building" | "done";

export type Project = {
  slug: string;
  group: Group;
  year?: string;
  status: Status;
  image?: string;
  imageNote?: Bi;
  stack?: string[];
  links: { live?: string; demo?: string; extra?: { label: Bi; href: string }[] };
  title: Bi;
  summary: Bi;
  built: Bi[];
  outcomes: Bi[];
  metrics?: { label: Bi; value: string }[];
};

export const groupOrder: Group[] = ["work", "products", "hardware", "community"];

export const projects: Project[] = [
  {
    slug: "supply-group",
    group: "work",
    year: "2026 –",
    status: "live",
    image: "/images/projects/supply-group.jpg",
    imageNote: { en: "Demo data · seeded, not company figures", uz: "Demo ma’lumot · sun’iy, kompaniya raqamlari emas" },
    stack: ["PostgreSQL", "Power BI", "aiogram 3", "Python", "FastAPI", "Docker", "Supabase", "Cloudflare R2", "LLM"],
    links: {
      extra: [
        { label: { en: "Parfume shop (Telegram)", uz: "Parfume do‘koni (Telegram)" }, href: "https://parfume.enkd.uz" },
        { label: { en: "Sedia Chairs shop (Telegram)", uz: "Sedia Chairs do‘koni (Telegram)" }, href: "https://sedia.enkd.uz" },
      ],
    },
    title: { en: "Supply Group: AI and data systems for a four-division retail group", uz: "Supply Group: to‘rt yo‘nalishli savdo guruhi uchun AI va ma’lumotlar tizimlari" },
    summary: {
      en: "Smartup ERP synced into one Postgres warehouse, Power BI on top for leadership, and Telegram bots selling from the same data. Reports that took days of Excel now build themselves, about 80% less effort. The dashboard shown uses seeded data.",
      uz: "Smartup ERP bitta Postgres omboriga sinxronlanadi, ustida rahbariyat uchun Power BI, xuddi shu ma’lumotdan sotadigan Telegram botlar. Kunlab Excel’da tayyorlangan hisobotlar endi o‘zi yig‘iladi, mehnat taxminan 80% kam. Ko‘rsatilgan panel sun’iy ma’lumotda.",
    },
    built: [
      { en: "Three production Telegram bots across all four divisions: a self-service storefront where clients browse the live warehouse catalogue with prices, order and pay without a salesperson in the loop, plus marketing-broadcast and customer-service bots. The storefront runs as a Mini App with a plain-button fallback for phones that cannot open Mini Apps.", uz: "Barcha to‘rt yo‘nalishda uchta ishlab turgan Telegram bot: mijozlar ombordagi jonli katalogni narxlari bilan ko‘rib, sotuvchisiz buyurtma berib to‘laydigan o‘z-o‘ziga xizmat do‘koni, hamda marketing tarqatmasi va mijozlarga xizmat botlari. Do‘kon Mini App sifatida ishlaydi, Mini App ochilmaydigan telefonlar uchun oddiy tugmalar bilan." },
      { en: "Browser admin panel for products, prices, photos and orders. A price changed in the panel appears in Telegram immediately.", uz: "Mahsulot, narx, rasm va buyurtmalar uchun brauzer admin paneli. Panelda o‘zgartirilgan narx Telegramda darhol ko‘rinadi." },
      { en: "PostgreSQL data warehouse with automated ETL from the Smartup ERP, consolidating sales, payments and cash across all divisions.", uz: "Smartup ERP’dan avtomatik ETL bilan PostgreSQL ma’lumotlar ombori: barcha yo‘nalishlar bo‘yicha savdo, to‘lovlar va kassa bir joyda." },
      { en: "Power BI dashboards for leadership: group sales and receivables. Reporting effort cut by about 80%: daily cash-flow and weekly and monthly management reports now build from the automated ERP sync instead of manual Excel exports, copy-paste and hand edits.", uz: "Rahbariyat uchun Power BI panellari: guruh savdosi va debitorlik. Hisobot tayyorlash mehnati taxminan 80% ga kamaydi: kunlik pul oqimi hamda haftalik va oylik boshqaruv hisobotlari endi qo‘lda Excel eksporti, nusxalash va tahrirlash o‘rniga avtomatik ERP sinxronidan yig‘iladi." },
      { en: "Dockerized Linux server hosting 17 production services, with health monitoring and alerting.", uz: "17 ta ishlab turgan xizmatni joylashtirgan Docker’li Linux server, monitoring va ogohlantirish bilan." },
      { en: "LLM financial assistant that answers natural-language questions against live company data. In development.", uz: "Kompaniyaning jonli ma’lumotlariga oddiy tilda savollarga javob beradigan LLM moliyaviy yordamchi. Ishlab chiqilmoqda." },
    ],
    outcomes: [
      { en: "Leadership sees group sales and receivables as they happen, not at month end.", uz: "Rahbariyat guruh savdosi va debitorlikni oy oxirida emas, jarayonda ko‘radi." },
      { en: "Orders, prices and stock change in one place and propagate to every division's bot.", uz: "Buyurtma, narx va zaxira bir joyda o‘zgaradi va har bir yo‘nalish botiga tarqaladi." },
      { en: "One monitored server and one deploy path for every bot and report.", uz: "Barcha bot va hisobotlar uchun bitta kuzatiladigan server va bitta joylashtirish yo‘li." },
    ],
  },
  {
    slug: "business-intelligence",
    group: "work",
    year: "2026 –",
    status: "live",
    stack: ["Python", "PostgreSQL", "Smartup ERP", "Power BI", "Docker", "LLM"],
    links: {},
    title: { en: "Business Intelligence Platform: ERP → Data Warehouse → Power BI → AI", uz: "Biznes tahlil platformasi: ERP → Ma’lumotlar ombori → Power BI → AI" },
    summary: {
      en: "Built for a four-division retail business: ERP data synced into one warehouse, reported in Power BI, with an AI layer that answers questions over the same numbers.",
      uz: "To‘rt yo‘nalishli savdo biznesi uchun qurilgan: ERP ma’lumotlari bitta omborga sinxronlanadi, Power BI’da hisobot qilinadi, AI qatlami esa xuddi shu raqamlar bo‘yicha savollarga javob beradi.",
    },
    built: [
      { en: "Automated ETL from the Smartup ERP into a PostgreSQL warehouse: sales, payments and cash across all divisions.", uz: "Smartup ERP’dan PostgreSQL omboriga avtomatik ETL: barcha yo‘nalishlar bo‘yicha savdo, to‘lovlar va kassa." },
      { en: "Power BI dashboards for leadership: group sales and receivables.", uz: "Rahbariyat uchun Power BI panellari: guruh savdosi va debitorlik." },
      { en: "LLM financial assistant over the warehouse. In development.", uz: "Ombor ustida ishlaydigan LLM moliyaviy yordamchi. Ishlab chiqilmoqda." },
    ],
    outcomes: [
      { en: "Reporting effort cut by about 80%: daily, weekly and monthly reports build from the ERP sync instead of manual Excel work.", uz: "Hisobot mehnati taxminan 80% ga kamaydi: kunlik, haftalik va oylik hisobotlar qo‘lda Excel ishi o‘rniga ERP sinxronidan yig‘iladi." },
    ],
  },
  {
    slug: "warehouse-intelligence",
    group: "work",
    year: "2026 –",
    status: "live",
    stack: ["PostgreSQL", "Power BI", "Python"],
    links: {},
    title: { en: "Warehouse Intelligence: SKU-level inventory, reorder and dead stock", uz: "Ombor tahlili: SKU darajasidagi zaxira, qayta buyurtma va o‘lik zaxira" },
    summary: {
      en: "SKU-level inventory visualization with reorder signals and dead-stock detection.",
      uz: "Qayta buyurtma signallari va o‘lik zaxirani aniqlash bilan SKU darajasidagi zaxira vizualizatsiyasi.",
    },
    built: [
      { en: "Inventory visualized per SKU, across warehouses and divisions.", uz: "Zaxira har bir SKU bo‘yicha, omborlar va yo‘nalishlar kesimida ko‘rsatiladi." },
      { en: "Reorder signals for items running low.", uz: "Kamayib borayotgan mahsulotlar uchun qayta buyurtma signallari." },
      { en: "Dead-stock detection for items that stopped selling.", uz: "Sotilmay qolgan mahsulotlar uchun o‘lik zaxirani aniqlash." },
    ],
    outcomes:[
      { en: "Buyers see per SKU what to reorder and what has stopped selling.", uz: "Xaridorlar har bir SKU bo‘yicha nimani qayta buyurtma qilish va nima sotilmay qolganini ko‘radi." },
    ],
  },
  {
    slug: "commerce-infrastructure",
    group: "work",
    year: "2026 –",
    status: "live",
    stack: ["Python", "aiogram 3", "FastAPI", "Supabase", "Cloudflare R2"],
    links: {
      extra: [
        { label: { en: "Parfume shop (Telegram)", uz: "Parfume do‘koni (Telegram)" }, href: "https://parfume.enkd.uz" },
        { label: { en: "Sedia Chairs shop (Telegram)", uz: "Sedia Chairs do‘koni (Telegram)" }, href: "https://sedia.enkd.uz" },
      ],
    },
    title: { en: "Commerce Infrastructure: Telegram storefronts, orders and customers", uz: "Savdo infratuzilmasi: Telegram do‘konlar, buyurtmalar va mijozlar" },
    summary: {
      en: "Telegram storefronts, order management and customer systems.",
      uz: "Telegram do‘konlar, buyurtmalarni boshqarish va mijozlar tizimlari.",
    },
    built: [
      { en: "Self-service Telegram storefronts as a Mini App with a plain-button fallback.", uz: "Oddiy tugmali zaxira varianti bilan Mini App ko‘rinishidagi o‘z-o‘ziga xizmat Telegram do‘konlari." },
      { en: "Browser admin panel for products, prices, photos and orders; changes appear in Telegram immediately.", uz: "Mahsulot, narx, rasm va buyurtmalar uchun brauzer admin paneli; o‘zgarishlar Telegramda darhol ko‘rinadi." },
      { en: "Marketing-broadcast and customer-service bots.", uz: "Marketing tarqatmasi va mijozlarga xizmat botlari." },
    ],
    outcomes: [
      { en: "Clients order and pay without a salesperson in the loop.", uz: "Mijozlar sotuvchisiz buyurtma berib to‘laydi." },
    ],
  },
  {
    slug: "aquaferma",
    group: "work",
    year: "2026",
    status: "live",
    image: "/images/projects/aquaagro.enkd.uz.jpg",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL 16", "aiogram 3", "React 18", "TypeScript", "Tailwind", "Docker", "Caddy"],
    links: { live: "https://aquaagro.enkd.uz" },
    title: { en: "AquaFerma: feed, finance and risk for fish farms, inside Telegram", uz: "AquaFerma: baliq fermalari uchun yem, moliya va xavf, Telegram ichida" },
    summary: {
      en: "For fish farmers in Uzbekistan: manage each pond, track its finances, prevent feed waste with rations computed from water readings, and get advice from a specialist, all inside Telegram, with an operator dashboard behind it.",
      uz: "O‘zbekistondagi baliqchilar uchun: har bir ko‘lni boshqarish, moliyasini yuritish, suv ko‘rsatkichlaridan hisoblangan me’yor bilan yem isrofining oldini olish va mutaxassisdan maslahat olish, barchasi Telegram ichida, orqasida operator paneli bilan.",
    },
    built: [
      { en: "Feed calculator: biomass times a base rate from average weight, adjusted for temperature, oxygen, pH and species, split across three meals. Below 3 mg/l oxygen or 8 °C the answer is zero, on purpose.", uz: "Yem kalkulyatori: biomassa × o‘rtacha vazndan olingan bazaviy me’yor, harorat, kislorod, pH va turga qarab tuzatilgan, uch mahalga bo‘lingan. 3 mg/l kislorod yoki 8 °C dan past bo‘lsa javob ataylab nol." },
      { en: "Lake stock is never written directly. It is recomputed by replaying a ledger of stockings, sales, mortality and weight checks, with triggers handling edits and deletes.", uz: "Ko‘l zaxirasi to‘g‘ridan-to‘g‘ri yozilmaydi. U ekish, sotish, o‘lim va vazn tekshiruvlari daftarini qayta o‘qib hisoblanadi; tahrir va o‘chirishlarni triggerlar boshqaradi." },
      { en: "One SQL view turns readings and ledger rows into farmer signals with a severity (act today, this week, nudge), and offer rules map a signal to something useful to sell.", uz: "Bitta SQL view ko‘rsatkichlar va daftar qatorlarini fermer signallariga aylantiradi (bugun, shu hafta, eslatma darajalari), taklif qoidalari esa signalni foydali mahsulotga bog‘laydi." },
      { en: "Operator dashboard with one-time sign-in links issued by the bot; admin and operator roles re-resolved on every request; finance fields removed at the API, not hidden in the UI.", uz: "Bot beradigan bir martalik kirish havolali operator paneli; admin va operator rollari har so‘rovda qayta aniqlanadi; moliya maydonlari UI’da yashirilmay, API darajasida olib tashlanadi." },
    ],
    outcomes: [
      { en: "Live for farmers with a fully Uzbek interface.", uz: "Fermerlar uchun to‘liq o‘zbek tilidagi interfeys bilan ishlamoqda." },
      { en: "Operators handle orders, photos and questions without seeing lake finances.", uz: "Operatorlar ko‘l moliyasini ko‘rmasdan buyurtma, rasm va savollar bilan ishlaydi." },
      { en: "New risk rules are added as SQL, without touching application code.", uz: "Yangi xavf qoidalari ilova kodiga tegmasdan SQL sifatida qo‘shiladi." },
    ],
  },
  {
    slug: "enkd-os",
    group: "products",
    year: "2025 –",
    status: "building",
    image: "/images/projects/enkd-os.jpg",
    stack: ["Python", "FastMCP", "FastAPI", "Postgres + pgvector", "Redis", "Memgraph", "Cognee", "LiteLLM", "Next.js", "Docker"],
    links: { live: "https://os.enkd.uz" },
    title: { en: "Enkd OS: an AI operating system for everyone", uz: "Enkd OS: hamma uchun AI operatsion tizimi" },
    summary: {
      en: "Event-driven agents over a knowledge graph, with a Telegram hub and a web dashboard as the interfaces. Local-first, with a human approval gate on every action that touches money or a calendar.",
      uz: "Bilimlar grafi ustida hodisaga asoslangan agentlar, interfeys sifatida Telegram markazi va veb-panel. Avvalo lokal, pul yoki taqvimga tegadigan har bir harakatda inson tasdig‘i bilan.",
    },
    built: [
      { en: "Event-driven core on Redis Pub/Sub and Streams: capabilities publish and subscribe, they never call each other directly.", uz: "Redis Pub/Sub va Streams ustida hodisaga asoslangan yadro: imkoniyatlar nashr qiladi va obuna bo‘ladi, bir-birini to‘g‘ridan-to‘g‘ri chaqirmaydi." },
      { en: "Every tool is its own MCP server, one per domain, so adding a capability means adding a server rather than widening one.", uz: "Har bir vosita alohida MCP server, har bir soha uchun bittadan; yangi imkoniyat qo‘shish bittasini kengaytirish emas, yangi server qo‘shish demak." },
      { en: "Knowledge graph on Memgraph, with Cognee for entity extraction and Graphify for codebase mapping, as shared memory.", uz: "Memgraph’dagi bilimlar grafi, Cognee obyektlarni ajratish va Graphify kod bazasini xaritalash uchun, umumiy xotira sifatida." },
      { en: "LiteLLM in front of every model call with fallback across providers and local models; a Telegram Approve / Edit / Reject gate on every financial or calendar write.", uz: "Har bir model chaqiruvi oldida LiteLLM, provayderlar va lokal modellar o‘rtasida zaxira bilan; har bir moliyaviy yoki taqvim yozuvida Telegramda Tasdiqlash / Tahrirlash / Rad etish bosqichi." },
    ],
    outcomes: [
      { en: "Architecture fixed and in build: event bus, MCP per domain, dual knowledge graph.", uz: "Arxitektura belgilangan va qurilmoqda: hodisa shinasi, har soha uchun MCP, ikki tomonlama bilimlar grafi." },
      { en: "Designed to cut monthly assistant API spend by roughly an order of magnitude by moving to local models.", uz: "Lokal modellarga o‘tish orqali oylik API xarajatini taxminan o‘n barobar kamaytirishga mo‘ljallangan." },
      { en: "Targets an ARM64 build under 4 GB RAM on a Raspberry Pi 5.", uz: "Raspberry Pi 5’da 4 GB RAM’dan kam ARM64 yig‘ilmasini nishonga oladi." },
    ],
  },
  {
    slug: "f1-telemetry-console",
    group: "products",
    year: "2026",
    status: "live",
    image: "/images/projects/f1.enkd.uz.jpg",
    stack: ["React", "Vite", "OpenF1 API", "single-file HTML build"],
    links: {
      live: "https://f1.enkd.uz",
      extra: [{ label: { en: "Source on GitHub", uz: "GitHub’dagi manba" }, href: "https://github.com/Wolfie-08/f1-telemetry-console" }],
    },
    title: { en: "F1 Telemetry Console: pit-wall analysis in the browser", uz: "F1 Telemetry Console: brauzerdagi pit-wall tahlili" },
    summary: {
      en: "Formula 1 race analysis with no backend: live timing tower, every car on the track map, a season archive you scrub through like video at up to 60×, and lap-vs-lap telemetry with corners detected from the speed trace. One static page on the OpenF1 API.",
      uz: "Backendsiz Formula 1 poyga tahlili: jonli vaqt minorasi, trek xaritasidagi har bir mashina, videodek 60× gacha tezlikda aylantiriladigan mavsum arxivi va tezlik grafigidan burilishlar aniqlangan aylanma-aylanma telemetriya. OpenF1 API ustidagi bitta statik sahifa.",
    },
    built: [
      { en: "Live mode follows the running session and switches to it fifteen minutes before the start; archive mode covers every weekend since 2023 with play, pause, scrub and 1× to 60× replay.", uz: "Jonli rejim joriy sessiyani kuzatadi va boshlanishidan o‘n besh daqiqa oldin unga o‘tadi; arxiv rejimi 2023-yildan beri har bir hafta oxirini play, pauza, aylantirish va 1× dan 60× gacha replay bilan qamrab oladi." },
      { en: "Timing tower with tyre compound and age, gaps, sectors with live mini-sector colouring and speed trap; race trace, tyre strategy bars and the race control feed alongside.", uz: "Shina turi va yoshi, oraliqlar, jonli mini-sektor ranglari va tezlik tuzog‘i bilan vaqt minorasi; yonida poyga izi, shina strategiyasi va poyga nazorati lentasi." },
      { en: "Compare view: two drivers, two laps, speed and pedal traces on a shared distance axis and a cumulative delta curve, with corners found in the data itself.", uz: "Taqqoslash ko‘rinishi: ikki haydovchi, ikki aylanma, umumiy masofa o‘qida tezlik va pedal grafiklari hamda jamlangan delta egri chizig‘i, burilishlar ma’lumotning o‘zidan topilgan." },
      { en: "Handles OpenF1's blackout during sessions and its per-minute rate limits with a single paced request queue; optional sponsor login mints and refreshes the OAuth token in the browser.", uz: "Sessiya vaqtidagi OpenF1 to‘sig‘i va daqiqalik cheklovlarni bitta tezligi boshqariladigan navbat bilan hal qiladi; ixtiyoriy homiy logini OAuth tokenini brauzerda yaratadi va yangilaydi." },
    ],
    outcomes: [
      { en: "Runs entirely in the browser; the build also emits one self-contained HTML file that works from the filesystem.", uz: "To‘liq brauzerda ishlaydi; yig‘ilma fayl tizimidan ham ochiladigan bitta mustaqil HTML faylni ham chiqaradi." },
      { en: "Open source on GitHub.", uz: "GitHub’da ochiq manba." },
    ],
  },
  {
    slug: "hunar",
    group: "products",
    year: "2026 –",
    status: "building",
    image: "/images/projects/hunaruz.vercel.app.jpg",
    links: { live: "https://hunaruz.vercel.app" },
    title: { en: "Hunar: marketplace for Uzbek craft makers", uz: "Hunar: o‘zbek hunarmandlari uchun bozor" },
    summary: {
      en: "Founder. A marketplace connecting Uzbek craft makers with buyers at home and abroad, with both local and international payment rails.",
      uz: "Asoschi. O‘zbek hunarmandlarini mahalliy va xorijiy xaridorlar bilan bog‘laydigan bozor, mahalliy va xalqaro to‘lov yo‘llari bilan.",
    },
    built: [
      { en: "Storefront and maker profiles.", uz: "Do‘kon va hunarmand profillari." },
      { en: "Checkout that accepts local cards and international buyers.", uz: "Mahalliy kartalar va xorijiy xaridorlarni qabul qiladigan to‘lov." },
    ],
    outcomes: [{ en: "Prototype live; product in development.", uz: "Prototip ishlamoqda; mahsulot ishlab chiqilmoqda." }],
  },
  {
    slug: "osonqur",
    group: "products",
    status: "live",
    image: "/images/projects/osonqur.vercel.app.jpg",
    links: { live: "https://osonqur.uz" },
    stack: ["Web app", "Role-based access"],
    title: { en: "Osonqur: construction management with role-based access", uz: "Osonqur: rollarga asoslangan qurilishni boshqarish tizimi" },
    summary: {
      en: "Construction management system where every role sees and does only its part: the project manager plans and approves, suppliers deliver against orders, drivers log transport, and builders report progress on site.",
      uz: "Har bir rol faqat o‘z qismini ko‘radigan va bajaradigan qurilishni boshqarish tizimi: loyiha menejeri rejalashtiradi va tasdiqlaydi, postavshiklar buyurtma bo‘yicha yetkazadi, haydovchilar tashishni qayd etadi, quruvchilar obyektdagi jarayonni hisobot qiladi.",
    },
    built: [
      { en: "Role-based access and actions: project manager, supplier, driver, builder, each with its own screens and permissions.", uz: "Rollarga asoslangan kirish va harakatlar: loyiha menejeri, postavshik, haydovchi, quruvchi, har biriga o‘z ekranlari va ruxsatlari bilan." },
      { en: "Orders, deliveries and site progress recorded by the person doing the work, so the manager sees the real state without phone calls.", uz: "Buyurtma, yetkazib berish va obyektdagi jarayon ishni bajarayotgan odam tomonidan qayd etiladi, shuning uchun menejer real holatni qo‘ng‘iroqsiz ko‘radi." },
    ],
    outcomes: [{ en: "Live at osonqur.uz; one shared picture of each project from planning to delivery.", uz: "osonqur.uz manzilida ishlamoqda; rejadan yetkazib berishgacha har bir loyihaning yagona umumiy manzarasi." }],
  },
  {
    slug: "cansat-dashboard",
    group: "hardware",
    year: "2025",
    status: "done",
    image: "/images/projects/cansat-live-dashboard.jpg",
    stack: ["Grafana", "InfluxDB", "Python", "LoRa / ESP32 feed"],
    links: {},
    title: { en: "CanSat live telemetry dashboard", uz: "CanSat jonli telemetriya paneli" },
    summary: {
      en: "Real-time mission console for CanSat telemetry: a Python bridge parses flight packets into InfluxDB and Grafana shows phase, battery, altitude, pressure, orientation, UV and GPS on one screen.",
      uz: "CanSat telemetriyasi uchun real vaqt missiya konsoli: Python ko‘prigi parvoz paketlarini InfluxDB’ga yozadi, Grafana esa faza, batareya, balandlik, bosim, yo‘nalish, UV va GPS’ni bitta ekranda ko‘rsatadi.",
    },
    built: [
      { en: "Python bridge that receives and normalises incoming packets and writes timestamped measurements into InfluxDB.", uz: "Kelayotgan paketlarni qabul qilib normallashtiradigan va vaqt belgili o‘lchovlarni InfluxDB’ga yozadigan Python ko‘prigi." },
      { en: "Grafana dashboard built around mission decisions: filters for team, device and mission; priority views for phase, voltage, packet loss, map position and sensor trends; 5-second refresh.", uz: "Missiya qarorlari atrofida qurilgan Grafana paneli: jamoa, qurilma va missiya bo‘yicha filtrlar; faza, kuchlanish, paket yo‘qolishi, xaritadagi joylashuv va datchik tendensiyalari uchun ustuvor ko‘rinishlar; 5 soniyalik yangilanish." },
      { en: "Time-series model separating tags from numeric fields so filtering stays fast across missions and post-flight review.", uz: "Teglarni raqamli maydonlardan ajratadigan vaqt qatori modeli, missiyalar va parvozdan keyingi tahlilda filtrlash tez qolishi uchun." },
    ],
    outcomes: [
      { en: "Operators read one console during flight instead of raw telemetry lines.", uz: "Operatorlar parvoz paytida xom telemetriya qatorlari o‘rniga bitta konsolni o‘qiydi." },
      { en: "The same data serves post-flight debugging.", uz: "Xuddi shu ma’lumotlar parvozdan keyingi tahlilga xizmat qiladi." },
    ],
    metrics: [
      { label: { en: "Refresh", uz: "Yangilanish" }, value: "5 s" },
      { label: { en: "Dashboard views", uz: "Panel ko‘rinishlari" }, value: "8+" },
    ],
  },
  {
    slug: "solar-tracker",
    group: "hardware",
    status: "done",
    image: "/images/projects/solar-tracker.jpg",
    stack: ["Arduino C/C++", "LDR sensors", "Servo motors", "3D-printed mounts"],
    links: { demo: "https://t.me/portfolio_kd08" },
    title: { en: "Two-axis solar tracker", uz: "Ikki o‘qli quyosh kuzatuvchi" },
    summary: {
      en: "School engineering project: a solar panel that follows the sun on two axes using LDR sensors and servos, built from low-cost parts and 3D-printed mounts.",
      uz: "Maktab muhandislik loyihasi: LDR datchiklari va servolar yordamida quyoshni ikki o‘qda kuzatadigan quyosh paneli, arzon qismlar va 3D bosilgan mahkamlagichlardan yig‘ilgan.",
    },
    built: [
      { en: "Dual LDR array to estimate sun position; servo-driven two-axis tracking with a deadband to stop jitter and extend servo life.", uz: "Quyosh holatini baholash uchun juft LDR massivi; titrashni to‘xtatish va servo umrini uzaytirish uchun o‘lik zona bilan ikki o‘qli servo kuzatuv." },
      { en: "Sensor shielding and noise filtering; power management to prevent brownouts; output logged to SD for field validation.", uz: "Datchiklarni himoyalash va shovqinni filtrlash; kuchlanish tushishining oldini oladigan quvvat boshqaruvi; dala tekshiruvi uchun SD kartaga yozish." },
    ],
    outcomes: [
      { en: "Measured 22–28% more daily energy than a fixed panel.", uz: "Qo‘zg‘almas panelga nisbatan kuniga 22–28% ko‘p energiya o‘lchandi." },
      { en: "Stable tracking under changing cloud cover.", uz: "O‘zgaruvchan bulutli havoda barqaror kuzatuv." },
    ],
    metrics: [{ label: { en: "Energy gain vs fixed", uz: "Qo‘zg‘almasga nisbatan o‘sish" }, value: "22–28%" }],
  },
  {
    slug: "rsef",
    group: "community",
    year: "2026",
    status: "live",
    image: "/images/projects/rsef.uz.jpg",
    stack: ["React 19", "TypeScript", "Vite", "Tailwind 4", "i18next", "Supabase", "Vercel"],
    links: { live: "https://rsef.uz" },
    title: { en: "RSEF: platform for Central Asia's first large student research fair", uz: "RSEF: Markaziy Osiyodagi ilk yirik talabalar ilmiy ko‘rgazmasi platformasi" },
    summary: {
      en: "CTO of rsef.uz. Trilingual (UZ/RU/EN) site with accounts, online applications with file uploads, news and results, and an admin panel for reviewing submissions.",
      uz: "rsef.uz texnik direktori. Uch tilli (UZ/RU/EN) sayt: hisoblar, fayl yuklash bilan onlayn arizalar, yangiliklar va natijalar, hamda arizalarni ko‘rib chiqish uchun admin panel.",
    },
    built: [
      { en: "Locale-prefixed routes with every string kept in sync across three locale files.", uz: "Til prefiksli marshrutlar, har bir matn uchta til faylida sinxron saqlanadi." },
      { en: "Supabase Auth, Postgres and Storage for profiles, submissions and uploaded files. Access control in row-level-security policies, not in the client; an admin flag unlocks the review panel.", uz: "Profil, ariza va yuklangan fayllar uchun Supabase Auth, Postgres va Storage. Kirish nazorati mijozda emas, qator darajasidagi xavfsizlik siyosatlarida; admin belgisi ko‘rib chiqish panelini ochadi." },
      { en: "Admin panel for reviewing submissions and publishing news and results without a developer in the loop.", uz: "Dasturchisiz arizalarni ko‘rib chiqish, yangilik va natijalarni e’lon qilish uchun admin panel." },
      { en: "Schema kept as one SQL file so a fresh Supabase project stands up in one query.", uz: "Sxema bitta SQL faylda, yangi Supabase loyihasi bitta so‘rov bilan tiklanadi." },
    ],
    outcomes: [
      { en: "Live for the RSEF 2026 cycle: applications, review and published results.", uz: "RSEF 2026 mavsumi uchun ishladi: arizalar, ko‘rib chiqish va e’lon qilingan natijalar." },
      { en: "Participants from five countries applied through the platform.", uz: "Besh davlatdan ishtirokchilar platforma orqali ariza topshirdi." },
    ],
    metrics: [
      { label: { en: "Countries", uz: "Davlatlar" }, value: "5" },
      { label: { en: "Applications", uz: "Arizalar" }, value: "47" },
      { label: { en: "Finalists", uz: "Finalchilar" }, value: "18" },
      { label: { en: "Categories", uz: "Yo‘nalishlar" }, value: "12" },
    ],
  },
  {
    slug: "mubl",
    group: "community",
    year: "2025 –",
    status: "live",
    image: "/images/projects/mubl.uz.jpg",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Supabase", "Cloudflare R2"],
    links: {
      live: "https://mubl.uz",
      extra: [{ label: { en: "Bootcamp site and registration", uz: "Bootcamp sayti va ro‘yxatdan o‘tish" }, href: "https://bootcamp.mubl.uz" }],
    },
    title: { en: "MUBL: engineering club site and six-week STEM bootcamp", uz: "MUBL: muhandislik klubi sayti va olti haftalik STEM bootcamp" },
    summary: {
      en: "The student engineering club at New Uzbekistan University: its public site, and the six-week bootcamp in robotics, 3D printing and AI that I co-organise, with online registration and admin tooling.",
      uz: "Yangi O‘zbekiston universitetidagi talabalar muhandislik klubi: uning ochiq sayti hamda men hamtashkilotchisi bo‘lgan robototexnika, 3D bosma va AI bo‘yicha olti haftalik bootcamp, onlayn ro‘yxatdan o‘tish va admin vositalari bilan.",
    },
    built: [
      { en: "Club site structured around how the club actually runs: projects, competitions, events, achievements, and a join flow.", uz: "Klub haqiqatda qanday ishlashi atrofida qurilgan sayt: loyihalar, musobaqalar, tadbirlar, yutuqlar va qo‘shilish oqimi." },
      { en: "Bootcamp site with online registration, file uploads to R2, and an admin panel for reviewing applicants.", uz: "Onlayn ro‘yxatdan o‘tish, R2’ga fayl yuklash va nomzodlarni ko‘rib chiqish admin paneli bilan bootcamp sayti." },
      { en: "Curriculum and team-project format for the six weeks: robotics, 3D modelling and printing, AI fundamentals.", uz: "Olti hafta uchun o‘quv dasturi va jamoaviy loyiha formati: robototexnika, 3D modellashtirish va bosma, AI asoslari." },
    ],
    outcomes: [
      { en: "A public front door that recruits members and shows partners what the club builds.", uz: "A’zolarni jalb qiladigan va hamkorlarga klub nima qurishini ko‘rsatadigan ochiq eshik." },
      { en: "Applications reviewed in one panel instead of chats and spreadsheets.", uz: "Arizalar chat va jadvallar o‘rniga bitta panelda ko‘rib chiqiladi." },
    ],
    metrics: [
      { label: { en: "Active members", uz: "Faol a’zolar" }, value: "50+" },
      { label: { en: "Projects built", uz: "Qurilgan loyihalar" }, value: "15+" },
      { label: { en: "Competition wins", uz: "Musobaqa g‘alabalari" }, value: "5+" },
    ],
  },
];

const featuredOrder = ["f1-telemetry-console", "hunar", "rsef", "mubl"];
export const featuredProjects = featuredOrder.map((slug) => projects.find((p) => p.slug === slug)!);
// "2026 –" reads as an open range: append "now" so the dash isn't left dangling.
export const yearLabel = (p: Project, locale: Locale) => (p.year?.endsWith("–") ? `${p.year} ${present[locale]}` : p.year);
const present: Bi = { en: "now", uz: "hozir" };
export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
