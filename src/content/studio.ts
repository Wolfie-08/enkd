// Copy for studio.enkd.uz. UZ is the default locale; every string ships in all three languages.
export const studioLangs = ["uz", "ru", "en"] as const;
export type StudioLang = (typeof studioLangs)[number];
export type Tri = Record<StudioLang, string>;

export const isStudioLang = (v: string): v is StudioLang => (studioLangs as readonly string[]).includes(v);
export const studioPath = (l: StudioLang) => (l === "uz" ? "/" : `/${l}`);
export const STUDIO_URL = "https://studio.enkd.uz";
export const TELEGRAM = "https://t.me/kdiyor_18";
export const EMAIL = "diyorbek@enkd.uz";

export const studio = {
  meta: {
    title: {
      uz: "Enkd Studio · Biznes uchun AI agentlar, CRM va dashboardlar",
      ru: "Enkd Studio · AI-агенты, CRM и дашборды для бизнеса",
      en: "Enkd Studio · AI agents, CRM and dashboards for business",
    },
    description: {
      uz: "Toshkentdagi studiya: AI chatbotlar va agentlar, CRM, avtomatlashtirish, dashboardlar va promo videolar. Bepul audit.",
      ru: "Студия в Ташкенте: AI-чатботы и агенты, CRM, автоматизация, дашборды и промо-видео. Бесплатный аудит.",
      en: "A Tashkent studio building AI chatbots and agents, CRM, automation, dashboards and promo videos. Free audit.",
    },
  } satisfies Record<string, Tri>,

  cta: { uz: "Bepul audit", ru: "Бесплатный аудит", en: "Free audit" } as Tri,
  langName: { uz: "UZ", ru: "RU", en: "EN" } as Tri,
  routeLabel: { uz: "Yoʻnalish", ru: "Маршрут", en: "Route" } as Tri,

  // One per world leg after the hero, in flight order. `leg` indexes the Blender legs.
  stations: [
    { leg: 1, name: { uz: "Xabarlar", ru: "Входящие", en: "Inbox" } },
    { leg: 2, name: { uz: "AI agent", ru: "AI-агент", en: "AI agent" } },
    { leg: 3, name: { uz: "CRM", ru: "CRM", en: "CRM" } },
    { leg: 4, name: { uz: "Avtomatlashtirish", ru: "Автоматизация", en: "Automation" } },
    { leg: 5, name: { uz: "Dashboard", ru: "Дашборд", en: "Dashboard" } },
    { leg: 6, name: { uz: "Promo video", ru: "Промо-видео", en: "Promo video" } },
  ] as { leg: number; name: Tri }[],

  hero: {
    h1: { uz: "Har bir xabar savdoga aylanadi.", ru: "Каждое сообщение становится продажей.", en: "Every message becomes a sale." },
    sub: {
      uz: "Oʻzbekistondagi biznes uchun AI agentlar, CRM va dashboardlar. Bitta mijoz xabarining yoʻlini kuzating.",
      ru: "AI-агенты, CRM и дашборды для бизнеса в Узбекистане. Проследите путь одного сообщения клиента.",
      en: "AI agents, CRM and dashboards for businesses in Uzbekistan. Follow one customer message through the system.",
    },
  },

  inbox: {
    h2: { uz: "Buyurtmalar lichkada yoʻqolyapti.", ru: "Заказы теряются в личке.", en: "Orders get lost in the DMs." },
    p: {
      uz: "Menejer kuniga yuz marta «narxi qancha?» deb javob beradi. Kechasi yozgan mijoz ertalab raqobatchidan sotib oladi.",
      ru: "Менеджер сто раз в день отвечает «сколько стоит?». Клиент, написавший ночью, утром покупает у конкурента.",
      en: "Your manager answers “how much?” a hundred times a day. The customer who wrote at midnight buys from a competitor by morning.",
    },
  },

  agent: {
    label: { uz: "AI chatbot va agentlar", ru: "AI-чатботы и агенты", en: "AI chatbots and agents" },
    h2: { uz: "Unga biznesingiz haqida yozing.", ru: "Расскажите ему о своём бизнесе.", en: "Tell it about your business." },
    p: {
      uz: "Bu haqiqiy AI agent. Mijozlaringizga ham xuddi shunday javob beradi: kechayu kunduz, oʻzbek va rus tilida.",
      ru: "Это настоящий AI-агент. Так же он будет отвечать вашим клиентам: круглосуточно, на узбекском и русском.",
      en: "This is a real AI agent. It answers your customers the same way: day and night, in Uzbek and Russian.",
    },
    placeholder: {
      uz: "Masalan: Chilonzorda stomatologiya klinikam bor",
      ru: "Например: у меня стоматология в Чиланзаре",
      en: "e.g. I run a dental clinic in Chilanzar",
    },
    send: { uz: "Yuborish", ru: "Отправить", en: "Send" },
    inputLabel: { uz: "Biznesingiz haqida", ru: "О вашем бизнесе", en: "About your business" },
    chips: {
      uz: ["Ulgurji savdo va distribyutsiya", "Xususiy klinika", "Instagramdagi doʻkon"],
      ru: ["Оптовая торговля и дистрибуция", "Частная клиника", "Магазин в Instagram"],
      en: ["Wholesale and distribution", "A private clinic", "A shop on Instagram"],
    } as Record<StudioLang, string[]>,
    thinking: { uz: "Agent yozmoqda", ru: "Агент печатает", en: "The agent is typing" },
    continue: { uz: "Telegramda davom ettiramiz", ru: "Продолжим в Telegram", en: "Continue on Telegram" },
    busy: {
      uz: "Agent hozir javob bera olmayapti. Telegramda yozing, oʻzimiz javob beramiz.",
      ru: "Агент сейчас не может ответить. Напишите в Telegram, ответим сами.",
      en: "The agent can't answer right now. Message us on Telegram and we'll reply ourselves.",
    },
    limit: {
      uz: "Demo shu yerda tugaydi. Davomini audit paytida koʻrsatamiz.",
      ru: "На этом демо заканчивается. Продолжение покажем на аудите.",
      en: "That's the end of the demo. We'll show you the rest in the audit.",
    },
  },

  crm: {
    label: { uz: "CRM tizimlari", ru: "CRM-системы", en: "CRM systems" },
    h2: { uz: "Suhbat bitimga aylanadi.", ru: "Разговор становится сделкой.", en: "The conversation becomes a deal." },
    p: {
      uz: "Har bir soʻrov CRMga oʻzi tushadi: kim yozdi, nima soʻradi, qaysi menejerda. Hech narsa yoʻqolmaydi.",
      ru: "Каждая заявка сама попадает в CRM: кто написал, что спросил, у какого менеджера. Ничего не теряется.",
      en: "Every inquiry lands in the CRM on its own: who wrote, what they asked, which manager has it. Nothing slips.",
    },
  },

  automation: {
    label: { uz: "AI avtomatlashtirish", ru: "AI-автоматизация", en: "AI automation" },
    h2: { uz: "Qolganini tizim bajaradi.", ru: "Остальное делает система.", en: "The system does the rest." },
    p: {
      uz: "Buyurtma 1C yoki Smartupga tushadi, omborga xabar ketadi, mijozga tasdiq keladi. Excel operatorisiz.",
      ru: "Заказ уходит в 1С или Smartup, склад получает уведомление, клиент получает подтверждение. Без оператора Excel.",
      en: "The order goes into 1C or Smartup, the warehouse is notified, the customer gets a confirmation. No Excel operator.",
    },
  },

  dashboard: {
    label: { uz: "Dashboard va tahlil", ru: "Дашборды и аналитика", en: "Dashboards and analytics" },
    h2: { uz: "Barcha filiallar bitta ekranda.", ru: "Все филиалы на одном экране.", en: "Every branch on one screen." },
    p: {
      uz: "Savdo, qoldiq va agent hisobotlari real vaqtda. Toʻrt yoʻnalishli distribyutsiya guruhida shunday tizim allaqachon ishlayapti.",
      ru: "Продажи, остатки и отчёты агентов в реальном времени. Такая система уже работает в дистрибьюторской группе из четырёх направлений.",
      en: "Sales, stock and agent reports in real time. A system like this already runs for a four-division distribution group.",
    },
  },

  promo: {
    label: { uz: "Motion-dizayn promo", ru: "Промо в моушн-дизайне", en: "Motion-design promos" },
    h2: { uz: "Keyingi mijozni video olib keladi.", ru: "Следующего клиента приведёт видео.", en: "Video brings the next customer in." },
    p: {
      uz: "Reels va reklama uchun promo videolar. Mahsulotingizni 15 soniyada tushuntiradi.",
      ru: "Промо-видео для Reels и рекламы. Объясняют ваш продукт за 15 секунд.",
      en: "Promo videos for Reels and ads that explain your product in 15 seconds.",
    },
    play: { uz: "Promoni koʻrish", ru: "Смотреть промо", en: "Watch the promo" },
    close: { uz: "Yopish", ru: "Закрыть", en: "Close" },
  },

  finale: {
    h2: {
      uz: "Buyurtmalar qayerda yoʻqolayotganini koʻrsatamiz.",
      ru: "Покажем, где теряются заказы.",
      en: "We'll show you where the orders leak.",
    },
    p: {
      uz: "30 daqiqalik bepul audit: jarayoningizni koʻrib chiqamiz va bir sahifalik xarita beramiz.",
      ru: "Бесплатный аудит за 30 минут: разберём ваш процесс и дадим карту на одну страницу.",
      en: "A free 30-minute audit: we walk through your process and hand you a one-page map.",
    },
    steps: [
      { t: { uz: "Bepul audit", ru: "Бесплатный аудит", en: "Free audit" }, d: { uz: "30 daqiqa, bir sahifalik xarita", ru: "30 минут, карта на одну страницу", en: "30 minutes, a one-page map" } },
      { t: { uz: "Pilot", ru: "Пилот", en: "Pilot" }, d: { uz: "2–3 hafta, qatʼiy narx, bitta yechim", ru: "2–3 недели, фиксированная цена, одно решение", en: "2–3 weeks, fixed price, one solution" } },
      { t: { uz: "Qoʻllab-quvvatlash", ru: "Поддержка", en: "Support" }, d: { uz: "Har oy: server, AI sozlash, yangi hisobotlar", ru: "Ежемесячно: сервер, настройка AI, новые отчёты", en: "Monthly: hosting, AI tuning, new reports" } },
    ] as { t: Tri; d: Tri }[],
    proof: {
      uz: "Ishlab turgan loyihalar: distribyutor uchun Smartup → Power BI, parfyumeriya va mebel brendlari uchun Telegram Mini App doʻkonlar, baliqchilik xoʻjaligi ilovasi.",
      ru: "Работающие проекты: Smartup → Power BI для дистрибьютора, магазины в Telegram Mini App для парфюмерного и мебельного брендов, приложение для рыбного хозяйства.",
      en: "Running now: Smartup → Power BI for a distributor, Telegram Mini App shops for a perfume and a furniture brand, a fish-farm management app.",
    },
    place: { uz: "Toshkent", ru: "Ташкент", en: "Tashkent" },
  },
};
