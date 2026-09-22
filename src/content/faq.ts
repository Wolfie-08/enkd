import type { Bi } from "@/lib/i18n";

export type FaqItem = { q: Bi; a: Bi };
export type FaqGroup = { id: string; title: Bi; items: FaqItem[] };

/** Stable fragment id for a question, shared by both locales. */
export const faqId = (f: FaqItem) => f.q.en.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const faqPage = {
  heading: { en: "Questions and answers", uz: "Savollar va javoblar" },
  intro: {
    en: "Straight answers on cost, timelines, data and results for AI automation, AI agents, Telegram bots and websites.",
    uz: "AI avtomatlashtirish, AI agentlar, Telegram botlar va veb-saytlar narxi, muddati, ma’lumotlar va natijalari haqida aniq javoblar.",
  },
  contents: { en: "Topics", uz: "Mavzular" },
  cta: { en: "Not answered here? Ask directly", uz: "Javob topilmadimi? To‘g‘ridan-to‘g‘ri so‘rang" },
};

export const faqGroups: FaqGroup[] = [
  {
    id: "working-together",
    title: { en: "Working together", uz: "Birga ishlash" },
    items: [
      {
        q: { en: "Who works on my project?", uz: "Loyihamda kim ishlaydi?" },
        a: { en: "I do, personally. I'm Diyorbek Komilov, an AI systems engineer in Tashkent; the person on the first call is the one who designs, builds and deploys your system, with no hand-off to a junior team.", uz: "Shaxsan men. Men Diyorbek Komilov, Toshkentdagi AI tizimlari muhandisiman; birinchi suhbatdagi odam tizimingizni loyihalaydi, quradi va ishga tushiradi, ish kichik jamoaga topshirilmaydi." },
      },
      {
        q: { en: "How much does a project cost?", uz: "Loyiha qancha turadi?" },
        a: { en: "The price is agreed on a short call, once I understand the scope. It mostly depends on how many systems are involved, whether they have an API, and how many languages, reports or screens you need. You know the price before any work starts.", uz: "Narx qamrovni tushunib olganimdan so‘ng qisqa suhbatda kelishiladi. U asosan nechta tizim ishtirok etishiga, ularda API borligiga hamda nechta til, hisobot yoki ekran kerakligiga bog‘liq. Ish boshlanishidan oldin narxni bilasiz." },
      },
      {
        q: { en: "How long does a typical project take?", uz: "Odatiy loyiha qancha vaqt oladi?" },
        a: { en: "Most projects take 2–3 weeks from the first call to launch: an automation pipeline, an AI agent over existing data, a Telegram shop bot or a business website. The usual delay is access to systems or content such as photos and translations, not the code.", uz: "Ko‘pchilik loyihalar birinchi suhbatdan ishga tushirishgacha 2–3 hafta oladi: avtomatlashtirish tizimi, mavjud ma’lumotlar ustidagi AI agent, Telegram do‘kon boti yoki biznes veb-sayti. Odatda kechikish koddan emas, tizimlarga kirish huquqi yoki rasmlar va tarjimalar kabi kontentdan bo‘ladi." },
      },
      {
        q: { en: "What does the process look like?", uz: "Ish jarayoni qanday kechadi?" },
        a: { en: "Short call, agreed scope, first version on your real data, then iterations. Week 1 is scoping and access; weeks 2–3 are the build and checking the result against numbers or content your team already trusts; after launch I improve what people actually use.", uz: "Qisqa suhbat, kelishilgan qamrov, real ma’lumotlaringizdagi birinchi versiya, so‘ng takomillashtirish. 1-hafta — qamrovni aniqlash va kirish huquqlari; 2–3-haftalar — qurish va natijani jamoangiz ishonadigan raqam yoki kontent bilan solishtirish; ishga tushgach, odamlar haqiqatda foydalanadigan qismlarni yaxshilayman." },
      },
      {
        q: { en: "What do I need to prepare before we start?", uz: "Boshlashdan oldin nimani tayyorlashim kerak?" },
        a: { en: "One person who knows the process, and access to the systems involved. For automation that means ERP or CRM access; for a shop bot, product photos, names and prices; for a website, the text in each language.", uz: "Jarayonni biladigan bitta mas’ul odam va tegishli tizimlarga kirish huquqi. Avtomatlashtirish uchun bu ERP yoki CRM’ga kirish; do‘kon boti uchun mahsulot rasmlari, nomlari va narxlari; veb-sayt uchun har bir tildagi matnlar." },
      },
      {
        q: { en: "Who owns the code and accounts after launch?", uz: "Ishga tushgandan keyin kod va akkauntlar kimga tegishli?" },
        a: { en: "You do. The domain, the code, the server and the hosting accounts are in your name and handed over at launch.", uz: "Sizga. Domen, kod, server va hosting akkauntlari sizning nomingizda bo‘ladi va ishga tushirishda topshiriladi." },
      },
      {
        q: { en: "Do you support the system after launch?", uz: "Ishga tushgandan keyin tizimni qo‘llab-quvvatlaysizmi?" },
        a: { en: "Yes, if you want it. After launch you pay for hosting, plus support if you choose it. Systems I deploy come with health monitoring and alerts, the same setup that keeps 17 production services running at Supply Group.", uz: "Ha, agar xohlasangiz. Ishga tushgandan keyin hosting uchun, tanlasangiz qo‘llab-quvvatlash uchun ham to‘laysiz. Men joylashtiradigan tizimlar monitoring va ogohlantirishlar bilan keladi — Supply Group’da 17 ta ishlab turgan xizmatni ushlab turgan o‘sha tuzilma." },
      },
      {
        q: { en: "Which languages do you work in?", uz: "Qaysi tillarda ishlaysiz?" },
        a: { en: "Uzbek, Russian and English. Bots and sites ship in the languages your clients use, usually Uzbek and Russian or Uzbek and English, with every string kept in sync.", uz: "O‘zbek, rus va ingliz tillarida. Botlar va saytlar mijozlaringiz foydalanadigan tillarda, odatda o‘zbek va rus yoki o‘zbek va ingliz tillarida chiqadi, har bir matn sinxron holda saqlanadi." },
      },
      {
        q: { en: "Do you work with clients outside Tashkent or abroad?", uz: "Toshkentdan tashqaridagi yoki xorijdagi mijozlar bilan ishlaysizmi?" },
        a: { en: "Yes. I'm based in Tashkent and most work is remote, over calls and Telegram; I come on-site in Tashkent when a project needs it.", uz: "Ha. Men Toshkentdaman va ishlarning aksariyati masofadan, qo‘ng‘iroqlar va Telegram orqali olib boriladi; loyiha talab qilsa, Toshkentda joyiga boraman." },
      },
      {
        q: { en: "What technology do you build with?", uz: "Qaysi texnologiyalardan foydalanasiz?" },
        a: { en: "Python with FastAPI and aiogram for backends and bots, PostgreSQL for data, Next.js and React for the web, Docker for deployment, and Power BI or Google Sheets for reporting. I add a framework only when the project needs it.", uz: "Backend va botlar uchun FastAPI va aiogram bilan Python, ma’lumotlar uchun PostgreSQL, veb uchun Next.js va React, joylashtirish uchun Docker, hisobotlar uchun Power BI yoki Google Sheets. Yangi freymvorkni faqat loyiha talab qilsagina qo‘shaman." },
      },
      {
        q: { en: "Do you build hardware and IoT projects?", uz: "Apparat va IoT loyihalarini ham qurasizmi?" },
        a: { en: "Yes. I study mechanical engineering and have built a two-axis Arduino solar tracker that collects 22–28% more daily energy than a fixed panel, and a live telemetry dashboard for a CanSat mission in Python, InfluxDB and Grafana.", uz: "Ha. Mexanika muhandisligini o‘qiyman; qo‘zg‘almas panelga nisbatan kuniga 22–28% ko‘proq energiya yig‘adigan ikki o‘qli Arduino quyosh kuzatuvchisini va CanSat missiyasi uchun Python, InfluxDB va Grafana’da jonli telemetriya panelini qurganman." },
      },
      {
        q: { en: "How quickly do you reply?", uz: "Qanchalik tez javob berasiz?" },
        a: { en: "Within 24 hours. Send a request through the contact form, email diyorbek@enkd.uz, or message @kdiyor_18 on Telegram.", uz: "24 soat ichida. Aloqa sahifasidagi forma orqali so‘rov yuboring, diyorbek@enkd.uz manziliga yozing yoki Telegramda @kdiyor_18 ga xabar yuboring." },
      },
    ],
  },
  {
    id: "ai-automation",
    title: { en: "AI automation", uz: "AI avtomatlashtirish" },
    items: [
      {
        q: { en: "What is AI automation for a business?", uz: "Biznes uchun AI avtomatlashtirish nima?" },
        a: { en: "Software that does a repeated manual step for you: it pulls data from your ERP or CRM, builds the report and sends the alert on a schedule, without anyone copying numbers between spreadsheets. Most of the value is clean data in one place; AI is added on top to summarise and answer questions.", uz: "Takrorlanadigan qo‘l mehnatini siz uchun bajaradigan dastur: ERP yoki CRM’dan ma’lumotni oladi, hisobotni tuzadi va jadval bo‘yicha ogohlantirish yuboradi — hech kim raqamlarni jadvallar orasida ko‘chirmaydi. Asosiy foyda — bir joyda to‘plangan toza ma’lumot; AI uning ustiga xulosa yozish va savollarga javob berish uchun qo‘shiladi." },
      },
      {
        q: { en: "Which systems can you pull data from?", uz: "Qaysi tizimlardan ma’lumot olish mumkin?" },
        a: { en: "Any system with an API or regular exports: Smartup, 1C, a CRM, or Excel and CSV files. At Supply Group the source is the Smartup ERP, synced into PostgreSQL on a schedule.", uz: "API yoki muntazam eksporti bor har qanday tizimdan: Smartup, 1C, CRM yoki Excel va CSV fayllar. Supply Group’da manba — Smartup ERP, u jadval bo‘yicha PostgreSQL’ga sinxronlanadi." },
      },
      {
        q: { en: "Does my ERP need an API?", uz: "ERP tizimimda API bo‘lishi shartmi?" },
        a: { en: "No. An API is the cleanest route, but automation can start from regular Excel or CSV exports, which are loaded and cleaned automatically.", uz: "Yo‘q. API eng qulay yo‘l, lekin avtomatlashtirishni muntazam Excel yoki CSV eksportlardan ham boshlash mumkin — ular avtomatik yuklanadi va tozalanadi." },
      },
      {
        q: { en: "How long does an automation project take?", uz: "Avtomatlashtirish loyihasi qancha vaqt oladi?" },
        a: { en: "2–3 weeks. Week 1: find the manual step that costs the most time and get access to the source system. Weeks 2–3: the sync and warehouse run, and the first report is checked against the one your team builds by hand.", uz: "2–3 hafta. 1-hafta: eng ko‘p vaqt oladigan qo‘l mehnatini topish va manba tizimga kirish huquqini olish. 2–3-haftalar: sinxronlash va ombor ishga tushadi, birinchi hisobot jamoangiz qo‘lda tuzadigan hisobot bilan solishtiriladi." },
      },
      {
        q: { en: "What results can automation deliver?", uz: "Avtomatlashtirish qanday natija beradi?" },
        a: { en: "At Supply Group, a four-division retail group in Tashkent, reporting effort fell by about 80%. The daily cash-flow report and the weekly and monthly management reports now build themselves, and leadership sees sales and debts as they happen instead of at month end.", uz: "Toshkentdagi to‘rt yo‘nalishli Supply Group savdo guruhida hisobot mehnati taxminan 80% ga kamaydi. Kunlik pul oqimi hisoboti hamda haftalik va oylik boshqaruv hisobotlari endi o‘zi tuziladi, rahbariyat savdo va qarzlarni oy oxirida emas, real vaqtda ko‘radi." },
      },
      {
        q: { en: "Where is my data stored?", uz: "Ma’lumotlarim qayerda saqlanadi?" },
        a: { en: "In a PostgreSQL database on your server, or on a server set up for you. It does not go into a third-party analytics tool unless you choose one.", uz: "Sizning serveringizdagi yoki siz uchun sozlangan serverdagi PostgreSQL bazasida. Siz o‘zingiz tanlamasangiz, u uchinchi tomon analitika xizmatiga yuborilmaydi." },
      },
      {
        q: { en: "Is it really AI, or just scripts?", uz: "Bu haqiqatan AImi yoki shunchaki skriptlarmi?" },
        a: { en: "Mostly scripts, on purpose. Reports must be exact, so the numbers come from plain SQL; AI is added where it helps: summaries, alerts in plain language, and questions asked in Uzbek, Russian or English.", uz: "Asosan skriptlar, va bu ataylab. Hisobotlar aniq bo‘lishi kerak, shuning uchun raqamlar oddiy SQL’dan olinadi; AI foydali joyda qo‘shiladi: xulosalar, oddiy tildagi ogohlantirishlar va o‘zbek, rus yoki ingliz tilidagi savollar." },
      },
      {
        q: { en: "What happens when a sync fails?", uz: "Sinxronlash to‘xtab qolsa nima bo‘ladi?" },
        a: { en: "Monitoring catches it. A failed job sends an alert, so a stale report is noticed before anyone makes a decision from it.", uz: "Monitoring buni ushlaydi. Muvaffaqiyatsiz ish ogohlantirish yuboradi, shuning uchun eskirgan hisobot kimdir unga qarab qaror qabul qilishidan oldin aniqlanadi." },
      },
      {
        q: { en: "Can one system cover several branches or companies?", uz: "Bitta tizim bir nechta filial yoki kompaniyani qamrab oladimi?" },
        a: { en: "Yes. At Supply Group one warehouse holds four divisions, and every report can be cut per division or for the whole group.", uz: "Ha. Supply Group’da bitta ombor to‘rt yo‘nalishni saqlaydi va har bir hisobotni yo‘nalish bo‘yicha yoki butun guruh uchun ko‘rish mumkin." },
      },
      {
        q: { en: "Where do the reports show up?", uz: "Hisobotlar qayerda ko‘rinadi?" },
        a: { en: "Wherever your team already looks: Power BI dashboards, Google Sheets, or a short summary in Telegram. Power BI viewers need their own Microsoft licences; Sheets and Telegram reports do not.", uz: "Jamoangiz odatda qaraydigan joyda: Power BI panellari, Google Sheets yoki Telegramdagi qisqa xulosa. Power BI’ni ko‘ruvchilarga alohida Microsoft litsenziyasi kerak; Sheets va Telegram hisobotlariga kerak emas." },
      },
    ],
  },
  {
    id: "ai-agents",
    title: { en: "AI agents", uz: "AI agentlar" },
    items: [
      {
        q: { en: "What is an AI agent for a business?", uz: "Biznes uchun AI agent nima?" },
        a: { en: "An assistant that answers questions and does tasks using your company's own live data, not the internet. You ask \"Which clients owe us more than 50 million sum for over 60 days?\" and it looks the answer up in your real data instead of guessing.", uz: "Internetdan emas, kompaniyangizning jonli ma’lumotlaridan foydalanib savollarga javob beradigan va vazifalarni bajaradigan yordamchi. Siz “Qaysi mijozlar 60 kundan ortiq muddatga 50 million so‘mdan ko‘p qarzdor?” deb so‘raysiz, u taxmin qilmasdan, javobni real ma’lumotlaringizdan topadi." },
      },
      {
        q: { en: "How is an AI agent different from ChatGPT?", uz: "AI agent ChatGPT’dan nimasi bilan farq qiladi?" },
        a: { en: "Access. ChatGPT knows the internet up to a date; an agent knows your sales, stock and debts as of this minute, and nothing it is not given access to.", uz: "Kirish huquqida. ChatGPT internetni ma’lum sanagacha biladi; agent esa savdo, qoldiq va qarzlaringizni aynan shu daqiqadagi holatda biladi va unga ruxsat berilmagan narsani bilmaydi." },
      },
      {
        q: { en: "Can an agent take actions, like messaging clients or creating orders?", uz: "Agent mijozlarga yozish yoki buyurtma yaratish kabi amallarni bajara oladimi?" },
        a: { en: "Yes, behind an approval gate. Reading is automatic; anything that writes, sends or spends waits for a person to press Approve, Edit or Reject, for example in Telegram.", uz: "Ha, tasdiqlash bosqichi orqali. O‘qish avtomatik; yozadigan, yuboradigan yoki pul sarflaydigan har qanday amal odam, masalan Telegramda, “Tasdiqlash”, “Tahrirlash” yoki “Rad etish”ni bosishini kutadi." },
      },
      {
        q: { en: "Is my company data sent to OpenAI or other providers?", uz: "Kompaniya ma’lumotlarim OpenAI yoki boshqa provayderlarga yuboriladimi?" },
        a: { en: "Only if you choose a cloud model, and then only the data needed for each question. Where a local model is good enough, it runs on your server and nothing leaves it.", uz: "Faqat bulutli modelni tanlasangiz va shunda ham faqat har bir savol uchun kerakli ma’lumot. Lokal model yetarli bo‘lgan joyda u serveringizda ishlaydi va hech narsa tashqariga chiqmaydi." },
      },
      {
        q: { en: "Can an AI agent make mistakes?", uz: "AI agent xato qilishi mumkinmi?" },
        a: { en: "Yes, language models can be wrong. That is why numbers come from SQL tools rather than the model's memory, and why every action waits for approval.", uz: "Ha, til modellari xato qilishi mumkin. Shuning uchun raqamlar model xotirasidan emas, SQL vositalaridan olinadi va har bir amal tasdiqni kutadi." },
      },
      {
        q: { en: "Does the agent understand Uzbek and Russian?", uz: "Agent o‘zbek va rus tillarini tushunadimi?" },
        a: { en: "Yes. Current cloud models handle Uzbek, Russian and English questions well. Local models are weaker in Uzbek, so the model is chosen for your language mix.", uz: "Ha. Hozirgi bulutli modellar o‘zbek, rus va ingliz tilidagi savollarni yaxshi tushunadi. Lokal modellar o‘zbek tilida zaifroq, shuning uchun model tillaringiz nisbatiga qarab tanlanadi." },
      },
      {
        q: { en: "What do I need before building an AI agent?", uz: "AI agent qurishdan oldin nima kerak?" },
        a: { en: "Clean company data in one place, usually a PostgreSQL warehouse. If your data still lives in spreadsheets, building that warehouse comes first; that is the AI automation service.", uz: "Bir joyda to‘plangan toza kompaniya ma’lumotlari, odatda PostgreSQL ombori. Agar ma’lumotlaringiz hali jadvallarda bo‘lsa, avval shu omborni qurish kerak — bu AI avtomatlashtirish xizmati." },
      },
      {
        q: { en: "How long does it take to build an AI agent?", uz: "AI agent qurish qancha vaqt oladi?" },
        a: { en: "2–3 weeks if clean data already exists. Week 1: pick the 5–10 questions your team asks most. Weeks 2–3: build tools for them and test against answers your team already knows. New tools are then added one at a time.", uz: "Toza ma’lumotlar mavjud bo‘lsa, 2–3 hafta. 1-hafta: jamoangiz eng ko‘p beradigan 5–10 ta savolni tanlash. 2–3-haftalar: ular uchun vositalar qurish va jamoa allaqachon biladigan javoblar bilan sinash. Keyin yangi vositalar birma-bir qo‘shiladi." },
      },
      {
        q: { en: "What does an AI agent cost to run?", uz: "AI agentni yuritish qancha turadi?" },
        a: { en: "After launch the running cost is mostly model usage. A local model costs more to set up and less to run; moving routine questions to one can cut the API bill sharply. On my Enkd OS project the target is roughly ten times lower monthly spend.", uz: "Ishga tushgandan keyin asosiy xarajat — model foydalanishi. Lokal modelni sozlash qimmatroq, yuritish esa arzonroq; odatiy savollarni unga o‘tkazish API hisobini keskin kamaytiradi. Enkd OS loyihamda maqsad — oylik xarajatni taxminan o‘n barobar kamaytirish." },
      },
      {
        q: { en: "Is an AI agent the same as a chatbot?", uz: "AI agent va chatbot bir narsami?" },
        a: { en: "No. A chatbot talks to your customers; an agent works for your team, over your internal data.", uz: "Yo‘q. Chatbot mijozlaringiz bilan gaplashadi; agent esa ichki ma’lumotlaringiz ustida jamoangiz uchun ishlaydi." },
      },
    ],
  },
  {
    id: "telegram-chatbots",
    title: { en: "Telegram chatbots", uz: "Telegram chatbotlar" },
    items: [
      {
        q: { en: "What is a Telegram shop bot?", uz: "Telegram do‘kon boti nima?" },
        a: { en: "A store that lives inside Telegram. Customers browse products, add them to a cart and order without leaving the chat, and your team manages everything from a browser admin panel. Your customers are already in Telegram, so there is no app to install.", uz: "Telegram ichida ishlaydigan do‘kon. Mijozlar chatdan chiqmasdan mahsulotlarni ko‘radi, savatga qo‘shadi va buyurtma beradi, jamoangiz esa hammasini brauzerdagi admin paneldan boshqaradi. Mijozlaringiz allaqachon Telegramda, shuning uchun ilova o‘rnatish shart emas." },
      },
      {
        q: { en: "What is the difference between a Mini App and a normal bot?", uz: "Mini App va oddiy bot o‘rtasida qanday farq bor?" },
        a: { en: "A Mini App is a small web page inside Telegram with a real catalogue layout and photos; a normal bot uses buttons and messages. A good shop bot offers both, so older phones still work.", uz: "Mini App — Telegram ichida ochiladigan, haqiqiy katalog ko‘rinishi va rasmlari bor kichik veb-sahifa; oddiy bot esa tugmalar va xabarlar bilan ishlaydi. Yaxshi do‘kon boti ikkalasini ham taklif qiladi, shunda eski telefonlar ham ishlaydi." },
      },
      {
        q: { en: "Can I see a live Telegram shop you built?", uz: "Siz qurgan ishlab turgan Telegram do‘konni ko‘rsam bo‘ladimi?" },
        a: { en: "Yes: parfume.enkd.uz (a perfume store with a Mini App and admin panel), sedia.enkd.uz (a furniture store with banners and discounts), and three production bots at Supply Group, including a self-service storefront on the live warehouse catalogue.", uz: "Ha: parfume.enkd.uz (Mini App va admin panelli atir do‘koni), sedia.enkd.uz (bannerlar va chegirmalari bor mebel do‘koni) hamda Supply Group’dagi uchta ishlab turgan bot, jumladan jonli ombor katalogidagi o‘z-o‘ziga xizmat do‘koni." },
      },
      {
        q: { en: "How long does a Telegram shop bot take?", uz: "Telegram do‘kon boti qancha vaqtda tayyor bo‘ladi?" },
        a: { en: "2–3 weeks. Week 1: catalogue structure, languages, order flow and who receives orders. Week 2: storefront, admin panel and notifications on a test bot. Week 3: your products loaded and launch. The usual delay is photos, names and prices in both languages.", uz: "2–3 hafta. 1-hafta: katalog tuzilmasi, tillar, buyurtma jarayoni va buyurtmalarni kim qabul qilishi. 2-hafta: test botda do‘kon, admin panel va bildirishnomalar. 3-hafta: mahsulotlaringiz yuklanadi va bot ishga tushadi. Odatda kechikish ikki tildagi rasm, nom va narxlardan bo‘ladi." },
      },
      {
        q: { en: "Can the bot use my warehouse stock and prices?", uz: "Bot ombordagi qoldiq va narxlarimdan foydalana oladimi?" },
        a: { en: "Yes. At Supply Group the storefront reads the live warehouse catalogue, so customers only see what is in stock, at the current price.", uz: "Ha. Supply Group’da do‘kon jonli ombor katalogini o‘qiydi, shuning uchun mijozlar faqat mavjud mahsulotlarni joriy narxda ko‘radi." },
      },
      {
        q: { en: "Who adds products and changes prices?", uz: "Mahsulot qo‘shish va narxlarni kim o‘zgartiradi?" },
        a: { en: "Your team, in the admin panel. A price changed there appears in the bot immediately; no developer is needed for day-to-day changes.", uz: "Jamoangiz, admin panelda. U yerda o‘zgartirilgan narx botda darhol ko‘rinadi; kundalik o‘zgarishlar uchun dasturchi kerak emas." },
      },
      {
        q: { en: "Can customers pay online in the bot?", uz: "Mijozlar botda onlayn to‘lay oladimi?" },
        a: { en: "Yes. Online payment is extra integration work compared with orders confirmed by phone; at Supply Group clients order and pay without a salesperson in the loop.", uz: "Ha. Onlayn to‘lov telefon orqali tasdiqlanadigan buyurtmalarga nisbatan qo‘shimcha integratsiya talab qiladi; Supply Group’da mijozlar sotuvchisiz buyurtma berib, to‘lov qiladi." },
      },
      {
        q: { en: "Can I send promotions to my bot's customers?", uz: "Bot mijozlariga aksiyalar yubora olamanmi?" },
        a: { en: "Yes. A broadcast feature messages everyone who has started the bot. Supply Group runs a separate marketing-broadcast bot for this.", uz: "Ha. Tarqatma funksiyasi botni ishga tushirgan barcha foydalanuvchilarga xabar yuboradi. Supply Group bu uchun alohida marketing tarqatma botini yuritadi." },
      },
      {
        q: { en: "Can AI answer customer questions in the bot?", uz: "Botda mijozlar savollariga AI javob bera oladimi?" },
        a: { en: "Yes. An AI layer answers questions about products and orders from your own catalogue and hands over to a person when it is unsure.", uz: "Ha. AI qatlami mahsulot va buyurtmalar haqidagi savollarga o‘z katalogingiz asosida javob beradi va ishonchi komil bo‘lmasa, suhbatni odamga topshiradi." },
      },
      {
        q: { en: "Does running a Telegram bot cost anything?", uz: "Telegram botni yuritish pullikmi?" },
        a: { en: "The Telegram Bot API itself is free. After launch you pay for the server, plus support if you want it.", uz: "Telegram Bot API’ning o‘zi bepul. Ishga tushgandan keyin server uchun, xohlasangiz qo‘llab-quvvatlash uchun ham to‘laysiz." },
      },
    ],
  },
  {
    id: "websites",
    title: { en: "Websites", uz: "Veb-saytlar" },
    items: [
      {
        q: { en: "What should a business website include in 2026?", uz: "2026-yilda biznes veb-saytida nimalar bo‘lishi kerak?" },
        a: { en: "Fast pre-built pages, every language your clients speak, structured data that search and AI engines can read, and forms that land in your inbox or Telegram. An admin panel only where content changes often.", uz: "Oldindan yig‘ilgan tez sahifalar, mijozlaringiz gapiradigan barcha tillar, qidiruv va AI tizimlari o‘qiy oladigan strukturali ma’lumotlar hamda pochtangiz yoki Telegramga keladigan formalar. Admin panel faqat kontent tez-tez o‘zgaradigan joyda." },
      },
      {
        q: { en: "Why does structured data matter for AI search?", uz: "Strukturali ma’lumotlar AI qidiruvi uchun nega muhim?" },
        a: { en: "More clients now ask ChatGPT or Perplexity instead of scrolling Google. Structured data tells those engines, in a format they trust, who you are, where you work, what you offer and what your FAQ says, so they can describe you correctly.", uz: "Endi ko‘proq mijozlar Google natijalarini ko‘rib chiqish o‘rniga ChatGPT yoki Perplexity’dan so‘raydi. Strukturali ma’lumotlar bu tizimlarga ular ishonadigan formatda kimligingiz, qayerda ishlashingiz, nima taklif qilishingiz va FAQ’ingizda nima yozilganini aytadi, shunda ular sizni to‘g‘ri tasvirlaydi." },
      },
      {
        q: { en: "How long does a business website take?", uz: "Biznes veb-sayti qancha vaqtda tayyor bo‘ladi?" },
        a: { en: "2–3 weeks. Week 1: pages, languages and text. Week 2: design, build and review. Week 3: domain connected, search setup done, forms tested, launch.", uz: "2–3 hafta. 1-hafta: sahifalar, tillar va matnlar. 2-hafta: dizayn, qurish va ko‘rib chiqish. 3-hafta: domen ulanadi, qidiruv sozlamalari bajariladi, formalar sinovdan o‘tadi va sayt ishga tushadi." },
      },
      {
        q: { en: "Is a custom site better than Tilda or Wix?", uz: "Maxsus sayt Tilda yoki Wix’dan yaxshiroqmi?" },
        a: { en: "For a simple page, a builder is fine. A custom site is worth it when you need speed, several languages kept in sync, structured data, or accounts and applications. After launch you pay only for the domain and hosting.", uz: "Oddiy sahifa uchun konstruktor yetarli. Tezlik, sinxron bir nechta til, strukturali ma’lumotlar yoki akkauntlar va arizalar kerak bo‘lsa, maxsus sayt o‘zini oqlaydi. Ishga tushgandan keyin faqat domen va hosting uchun to‘laysiz." },
      },
      {
        q: { en: "Can I edit the website content myself?", uz: "Sayt kontentini o‘zim tahrirlay olamanmi?" },
        a: { en: "Yes, where you need to. Pages that change often get an admin panel; pages that change once a year are edited on request.", uz: "Ha, kerak bo‘lgan joyda. Tez-tez o‘zgaradigan sahifalarga admin panel qo‘shiladi; yiliga bir marta o‘zgaradigan sahifalar so‘rov bo‘yicha tahrirlanadi." },
      },
      {
        q: { en: "Do you do SEO?", uz: "SEO bilan shug‘ullanasizmi?" },
        a: { en: "The technical part, yes: speed, structured data, sitemap, language tags, and Google Search Console and Bing Webmaster Tools setup. Ranking over time also depends on your content and on other sites mentioning yours.", uz: "Texnik qismi bilan, ha: tezlik, strukturali ma’lumotlar, sitemap, til teglari hamda Google Search Console va Bing Webmaster Tools sozlamalari. Vaqt o‘tishi bilan reyting kontentingizga va boshqa saytlar sizni tilga olishiga ham bog‘liq." },
      },
      {
        q: { en: "Which websites have you built?", uz: "Qaysi veb-saytlarni qurgansiz?" },
        a: { en: "enkd.uz (this bilingual site), rsef.uz (a trilingual science-fair platform with accounts, file uploads and an admin review panel that handled 47 applications from 5 countries), osonqur.uz (construction management with per-role access) and bootcamp.mubl.uz (a STEM bootcamp site with registration).", uz: "enkd.uz (ushbu ikki tilli sayt), rsef.uz (akkauntlar, fayl yuklash va admin ko‘rib chiqish paneli bor, 5 davlatdan 47 ta arizani qabul qilgan uch tilli ilmiy tanlov platformasi), osonqur.uz (har bir rol uchun alohida kirishli qurilishni boshqarish tizimi) va bootcamp.mubl.uz (ro‘yxatdan o‘tish imkoniyati bor STEM bootcamp sayti)." },
      },
      {
        q: { en: "Can the website connect to my Telegram bot or CRM?", uz: "Sayt Telegram botim yoki CRM bilan bog‘lana oladimi?" },
        a: { en: "Yes. Form requests can go straight to Telegram, and a site can share products and orders with a Telegram shop bot.", uz: "Ha. Forma so‘rovlari to‘g‘ridan-to‘g‘ri Telegramga borishi mumkin, sayt esa mahsulot va buyurtmalarni Telegram do‘kon boti bilan bo‘lishishi mumkin." },
      },
    ],
  },
];
