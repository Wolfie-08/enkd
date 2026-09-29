# Customer research — studio.enkd.uz

_Compiled 2026-09-29. Web research only: no interviews and no paid databases. FX used throughout: **~12,000 UZS = 1 USD** (implied by Trend.az, June 2026: 300M soms ≈ $25,060)._

Tags used below:
- **[S#]** means the claim is sourced; the number points to the Sources list.
- **[INF]** means the claim is inferred or is the author's judgment.
- **[SNIP]** means the claim comes from a search-engine snippet and the underlying page was not opened.

---

## Research: Uzbek SMB needs for studio.enkd.uz

### Answer (bottom line, 5–8 bullets)

- **The market is big, fragmented and runs on Telegram.** There were 1.21M active small-business entities as of 1 Oct 2025, producing 51.5% of GDP in 9M-2025 [S1]. Tashkent has the second-highest business density (43.4 per 1,000 people) [S1]. Telegram reaches about 76% of internet users, roughly 25M people [S2]. On the ground, many Tashkent SMBs still take orders through an admin's Telegram DM, phone or a web form that a manager calls back (see the outreach list, §3).
- **The pain is operational, not "no website".** Several patterns recur in the businesses checked:
  - Orders are routed to one or several personal admin accounts.
  - Prices are only given "on request".
  - Sites are in Russian only, while the market is Uzbek-majority.
  - Call centres keep office hours (for example Mon–Sat 10–18).
  - B2B distributors have no dealer or agent portal.
  - Sites are stale (one poultry producer's latest dated content is from 2019).
- **Prices are public and low at the entry level, so compete on outcomes, not price.** Telegram bots are listed at 2.5M UZS fixed (~$210) [S19], 3–20M UZS depending on complexity [S20], and from $279 [S22]. AI agents are listed at 5–15M+ UZS [S21][S26], $500 one-off or $75/mo [S23], and 0.56–1.59M UZS/mo as SaaS [S24]. **Almost no one publishes prices for dashboards or BI**, and that is where the studio's Smartup→Postgres→Power BI proof is rare [S30][INF].
- **Three segments to hit first** [INF, ranked on proof fit × willingness to pay × how visible the pain is]:
  1. **Distribution/wholesale (FMCG, building materials).** Pitch dashboards on Smartup/1C plus agent and dealer bots. Smartup alone has 600+ client companies [S15].
  2. **Telegram-first retail (perfume, cosmetics, furniture).** Pitch a Mini App shop, an AI answerer and short motion ads.
  3. **Private clinics and dental.** Pitch booking bots with reminders and a bilingual AI FAQ. Med24 lists 1,020+ clinics [S18].
- **AI is early but getting a lot of attention.** Only 7.2% of 15–64 year-olds used generative AI in Q1 2026 (global average 17.8%) [S8]. The UNDP (Feb 2026) names cost, skills and data as the main barriers for SMEs [S7]. This favours "AI inside a tool you already use (Telegram, amoCRM)" over "AI strategy" [INF].
- **Government money exists but is narrow.** IT Park benefits run to 2040 [S12]. That helps the studio's own costs if it becomes a resident, but it is not a buyer subsidy. A new SME programme gives up to 300M UZS grants for digitalisation to **100 top entrepreneurs a year** [S13]. It is a useful talking point, not a demand driver [INF].
- **Recommended offer ladder:**
  - Free 30-minute "leak audit".
  - Fixed-price pilot: 4–15M UZS (~$330–1,250).
  - Full build: 15–40M UZS (~$1,250–3,300).
  - Monthly retainer: 1.5–5M UZS (~$125–420).
  - This undercuts iCORP's AI tiers (6/14.4/36M UZS) [S25] and WoodLime's video prices (from 11M UZS for a 20-second 2D ad) [S29], while sitting above bot "constructors" [INF].
- **Language:** lead with **Uzbek (Latin)**, show **Russian** one tap away, and keep English for the portfolio and case studies. Most competitors and many target businesses are Russian-first [S19–S29 and §3]. An Uzbek-first studio stands out, but B2B distribution and clinic owners often read Russian, so both must ship [INF].

**Confidence: Medium.**
- **Strong:** macro numbers (official statistics via UzDaily and trade.gov) and competitor prices (published on the agencies' own sites).
- **Weaker:**
  - Segment willingness to pay is inferred from competitor price lists, not buyer interviews.
  - Outreach "signals" are single-visit observations of public pages.
  - Some social-media numbers conflict between sources: Instagram is 4.8M in [S5] versus 11.7M in [S3].
  - The UNDP figure "57.9% of surveyed businesses integrated AI" [S9, SNIP] clashes with the 7.2% population usage [S8], and its sample is unknown.

---

### Key Findings by source

**Macro and SMB landscape**
- Official statistics (via UzDaily, 1 Nov 2025): 1.21M active small-business entities as of 1 Oct 2025, made up of:
  - 479k small enterprises and micro-firms
  - 281.9k individual entrepreneurs
  - 422.3k dehkan farms
  - The rest are family businesses and artisans.

  Small business produced 51.5% of GDP in 9M-2025. About 62.2k new small firms were founded in 9M-2025, with trade the largest sector [S1].
- UNDP (via UzDaily, Feb 2026): SMEs are 92% of companies and about 75% of employment. Small business produced 53.8% of GDP in Q1–Q3 2024 [S7].
- trade.gov (2025): e-commerce is $1.2B, or 3.8% of retail, heading to $1.8–2.2B by 2027. There are 32.7M internet users (87.2%). Telegram is used by more than 70% of the population. Uzum's FY2024 GMV was $345M with 17M MAU [S3].
- kun.uz (Apr 2025): e-commerce was $311M in 2022. KPMG forecasts a 41–47% CAGR for 2023–27. There are 50+ marketplaces. The market still relies on Telegram, bazaars and informal sales [S4].
- Uzum (Aug 2026, via Zamin.uz): annual GMV above $500M (1.5x). There are 18,000+ sellers, 90% of them SMBs. Active sellers grew 32%. The Uzum Sellers Academy has trained 9,000 entrepreneurs [S6].

**Channels and marketing**
- Wunder Digital (via UzDaily, Oct 2025): Telegram reaches 76% of the internet audience (25M). Instagram drives about two-thirds of social clicks to external sites [S2].
- 101 Digital (a vendor blog, 2026 — treat with caution): digital ad spend is $180M. SMB marketing budgets are $300–700/mo for startups and $2,000–5,000/mo for mid-size firms. Click has 12M+ users and Payme 8M+ [S5].

**Payment rails**
- There are 2 payment-system operators (Humo, Uzcard) and 49 payment organisations (Payme, Click, Uzum, Oson and others) as of early 2025. Payme's monthly turnover is above $800M. Click, Payme and Uzum lead QR payments [S14, SNIP].
- In practice, every local bot agency lists Click/Payme integration as standard [S19][S20][S22].

**Common software**
- **Smartup:** 600+ companies in Central Asia and 19,500 users in 2024 [S15, SNIP].
- **BILLZ:** 4,000+ retail businesses. TBC Bank took a majority stake in June 2025 [S16, SNIP].
- **iiko:** Zetta Group alone claims 1,500+ restaurants automated. Soft24 claims 1,000+ projects [S17, SNIP].
- **Poster and Neon Alisa** are the lighter restaurant POS options; Neon Alisa is local, with Uzbek fiscalisation [S17, SNIP].
- **amoCRM** licences in UZS: 69–209k per user per month (iCORP), plus micro-plans of 499k–1.999M/year [S25b].
- **1C:** Первый Бит positions BI "on top of 1C" but publishes no prices [S30].

**Government**
- **Digital Uzbekistan 2030:** 100% of government services digital, $5B IT exports, 300k youth IT jobs [S10].
- **AI Strategy to 2030:** priority sectors are healthcare, education, agriculture, fintech, energy and tax/customs [S11].
- **IT Park:**
  - 0% corporate income tax.
  - 0% social tax.
  - 7.5% personal income tax for staff.
  - VAT exemptions.
  - Extended to 2040.
  - About 2,800 residents by mid-2025 [S12].
- **SME package (June 2026):** grants of up to 300M UZS for digitalisation for 100 top entrepreneurs a year, a digital lending platform by 1 July 2026, and interest subsidies on loans up to 5B UZS [S13].

**AI adoption**
- Microsoft AI Diffusion (via Times of Central Asia): Uzbekistan 7.2% in Q1 2026, up from 5.7% in H1 2025. Kazakhstan is at 15.9% [S8].
- UNDP/StratejAI (Feb 2026): four barrier groups for MSMEs — financial, infrastructure/compute, talent, and data/regulation. There is a shortage of Uzbek-language data [S7]. A search snippet reports "57.9% of surveyed businesses integrated AI" [S9, SNIP]. The sample is likely skewed toward tech-aware firms [INF].

**Local pricing** (details in §4)

| Service | Price found | Source |
|---|---|---|
| Telegram bot, simple | 2.5M UZS fixed. Add-ons: Click/Payme +1.2M, booking/reminders +1.0M, CRM/1C/MoySklad integration +3.5M | [S19] |
| Telegram bot, tiers | 3–5M basic; 5–8M with payments; 8–15M AI; 10–20M CRM bot | [S20] |
| Telegram bot | from $279 | [S22] |
| Budget bots | 300k–1M UZS | Prom.uz, [SNIP] |
| AI agent | 5M+ UZS | [S21] |
| AI agent | $500 one-off or $75/mo | [S23] |
| AI (iCORP tiers) | 6M / 14.4M / 36M UZS | [S25] |
| AI (Kabulov Tech) | 15M+ UZS | [S26] |
| AI-CRM SaaS | 559k–1.59M UZS/mo | [S24] |
| Custom CRM | from $700; ERP from $1,500 | [S23] |
| AI-based CRM/ERP | 25M+ UZS | [S21] |
| amoCRM setup items | base account 1M UZS; salesbot 5M; Instagram/Facebook integration 800k | [S28] |
| Video (WoodLime) | Reels from 13M UZS; promo from 45M; 2D ad (20 s) 11M; 3D ad (20 s) 41M | [S29] |
| Salon website | 2.5–6M UZS, plus 0.6–1.5M/mo support | [S31, SNIP] |
| Dashboards / BI | **no public prices found** | [S30] |

---

### Context & Nuance

- **"Digitised" does not mean "integrated".** Many targets already have a site, a bot or Dikidi (BOSCO Beauty, Hide, Car-Driver, Transit Pro, Rayhon). Their gap is that the tools don't talk to each other and nobody sees totals across branches or channels [INF]. Pitch the dashboard and the single inbox, not another bot.
- **Russian-only sites are common among the targets checked:** Smile Design, Vatan Tibbiyot, iMed, Klyuchi Tashkenta, TENCORP and Car-Driver. Uzbek-speaking customers therefore land in Russian funnels. A bilingual bot is a concrete, visible fix [INF based on §3].
- **Price sensitivity is real.** Freelancers on Prom.uz list bots from 300k UZS [SNIP]. Compete on outcomes ("orders stop getting lost"), guarantees and live proof, not on price [INF].
- **Big chains are poor first targets.** Texnomart, Mediapark, Oqtepa Lavash, Najot Ta'lim and PDP already have in-house tech or apps. Mid-size firms with 2–15 branches are the sweet spot [INF].
- **Competitors are drifting toward "AI agents".** Several already claim "Uzbekistan's #1 AI agency" or "first Claude partner" [S23][S27]. AI alone is not a differentiator; **ERP data plus Telegram delivery** is [INF].
- **Seasonality (buying triggers) [INF]:**
  - 8 March and New Year for perfume and cosmetics.
  - August–September and January intakes for education.
  - Ramadan and wedding season for restaurants and banquet halls.
  - Spring stocking for fish and poultry.
  - New project launches for developers.

---

### Sources

1. UzDaily, "Small Business in Uzbekistan Accounts for Over Half of GDP in 2025" (1 Nov 2025) — https://www.uzdaily.uz/en/small-business-in-uzbekistan-accounts-for-over-half-of-gdp-in-2025/ — SMB counts, GDP share, density, new firms.
2. UzDaily / Wunder Digital, "Telegram — 76% reach…" (22 Oct 2025) — https://www.uzdaily.uz/en/telegram-76-reach-youtube-no-1-e-commerce-on-the-rise-inside-uzbekistans-digital-landscape/ — Telegram reach, internet penetration.
3. US ITA, Uzbekistan Country Commercial Guide: eCommerce — https://www.trade.gov/country-commercial-guides/uzbekistan-ecommerce — e-commerce size, Telegram >70%, Instagram 11.7M, Uzum GMV.
4. Kun.uz, "Uzbekistan's e-commerce evolution…" (10 Apr 2025) — https://kun.uz/en/news/2025/04/10/uzbekistans-e-commerce-evolution-marketplaces-classifieds-and-birbirs-platform-with-10m-investment — e-commerce history, KPMG CAGR, informal Telegram sales.
5. 101 Digital, "Uzbekistan Digital Marketing Statistics 2026" — https://101digital.uz/en/blog/uzbekistan-digital-marketing-report-2026/ — SMB marketing budgets, Click/Payme users (vendor source, lower reliability).
6. Zamin.uz, Uzum Market annual GMV >$500M (Aug 2026) — https://zamin.uz/en/economy/211331-uzum-market-yillik-savdo-hajmi-500-mln-dollardan-oshganini-malum-qildi.html — seller counts.
7. UzDaily, "Uzbekistan aims to become a regional AI leader, but SMEs face significant barriers" (Feb 2026) — https://www.uzdaily.uz/en/uzbekistan-aims-to-become-a-regional-leader-in-artificial-intelligence-but-smes-face-significant-barriers/ — UNDP SME AI barriers, SME share of companies and employment.
8. Times of Central Asia, "Uzbekistan AI adoption trails global average, Microsoft report finds" — https://timesca.com/uzbekistan-ai-adoption-trails-global-average-microsoft-report-finds/ — 7.2% gen-AI usage.
9. UNDP, "Adoption of AI in the Private Sector in Uzbekistan" — https://www.undp.org/uzbekistan/publications/adoption-ai-private-sector-uzbekistan-drivers-challenges-recommendations — 57.9% figure (snippet only; the page returned 403).
10. OECD.AI, Digital Uzbekistan 2030 — https://oecd.ai/en/dashboards/policy-initiatives/digital-uzbekistan-2030-3968 — strategy goals.
11. OECD.AI, AI Strategy until 2030 — https://oecd.ai/en/dashboards/policy-initiatives/the-strategy-for-the-development-of-artificial-intelligence-technologies-until-2030 — AI priority sectors.
12. LegalAct.uz, IT Park benefits extended to 2040 — https://legalact.uz/en/news/it-park-uzbekistan-key-tax-benefits-and-extensions-until-2040 (plus https://tax-legal.uz/en/it-park/) — IT Park regime.
13. Trend.az, "Uzbekistan unveils digital lending platform, expands small business incentives" (7 Jun 2026) — https://www.trend.az/business/4195344.html — 300M UZS digitalisation grants; FX reference.
14. Sam Boboev, "Deep Dive: Payments in Uzbekistan" — https://samboboev.medium.com/deep-dive-payments-in-uzbekistan-f07981902911 and KPMG B2C Payments report — https://assets.kpmg.com/content/dam/kpmg/uz/pdf/2024/Fintech%20UZ_Payments_POS%20Financing_BNPL-final.pdf — payment players (snippet).
15. Smartup, "Smartup in 2024: achievements" — https://smartup24.com/tpost/h7y7hr3ai1-smartup-in-2024-achievements-growth-and — client and user counts (snippet).
16. IBS Intelligence, "TBC Bank acquires BILLZ" — https://ibsintelligence.com/ibsi-news/tbc-bank-acquires-billz-to-expand-sme-services-in-uzbekistan/ — BILLZ scale (snippet).
17. Zetta Group (iiko partner) — https://www.zetta.uz/ru ; Zoomda POS comparison — https://zoomda.uz/en/knowledge-base/iiko-vs-jowi-vs-poster — restaurant POS landscape (snippet).
18. Med24.uz clinic catalogue — https://med24.uz/kliniki ; GoldenPages private clinics — https://www.goldenpages.uz/en/rubrics/?Id=107115 — clinic counts (1,020+; 668 private in Tashkent).
19. MXMEDIA, Telegram bots — https://mxmedia.uz/xizmatlar/telegram-botlar/ — fixed bot price and add-on menu.
20. Innosoft, Telegram bot — https://innosoft.uz/xizmatlar/telegram-bot — bot price tiers.
21. Lazerg, AI Telegram bot — https://lazerg.uz/services/telegram-bot — AI bot and CRM/ERP prices.
22. Tezcode — https://www.tezcode.dev/en/telegram-bot-biznes — bot from $279, Mini App store.
23. AI Business UZ — https://businessai.uz/ — AI agent $500 or $75/mo; CRM/ERP prices.
24. Zukko.ai — https://zukko.ai/en — AI-CRM SaaS pricing.
25. iCORP AI — https://icorp.uz/ai — AI tiers. (25b) iCORP amoCRM tariffs — https://icrop.tilda.ws/tariffs_old
26. Kabulov Tech — https://www.kabulovtech.com/services/ai — AI from 15M UZS.
27. Celion — https://celion.io/en/ai — "first Claude partner", Odoo + AI.
28. MEGABITE-CRM price list — https://crmpro.uz/prajs-list — amoCRM setup line items.
29. WoodLime — https://www.woodlime.uz/ — video and animation price list.
30. Первый Бит (1solution.uz) BI — https://1solution.uz/services/vnedrenie-sistem-biznes-analiza/ — BI on 1C, no public prices.
31. Sayt.uz blog on salon websites (snippet) — https://sayt.uz/ru/blog/gozallik-saloni-sayt — salon website price range.

---

### Gaps & Unknowns

- **No buyer interviews.** Willingness to pay per segment is inferred from supplier prices.
- **No published dashboard/BI prices in Tashkent.** The OLX Power BI listing had expired (404), and integrators quote on request.
- **No hard figure for Telegram-DM commerce** as a share of SMB sales. Only qualitative evidence exists [S4].
- **Instagram audience figures conflict:** 4.8M [S5] versus 11.7M [S3].
- **The UNDP 57.9% AI figure is unverified.** The PDF could not be parsed here.
- **Instagram pages were not opened** (login wall). Instagram-based signals are from snippets.
- **hh.uz job posts** ("Excel operator", "Telegram order operator") were not retrievable by search. Checking them manually is a high-value next step.
- **Motion-design prices** from freelancers and smaller studios are not public. Only WoodLime publishes a price list.

### Recommended Next Steps

1. **10 discovery calls in 2 weeks:** 4 distributors, 3 retailers, 3 clinics. Ask:
   - "What do you check every morning, and where?"
   - "Where do orders get lost?"
   - "Who builds the Excel reports?"

   Use the answers to replace the [INF] willingness-to-pay figures.
2. **Mine hh.uz and Telegram job channels manually** for posts such as "оператор Telegram", "Excel hisobotchi" and "1C operator". Each one is a hot lead.
3. **Package the Smartup case** as a 60-second screen recording (anonymised). It is the rarest proof on the market.
4. **Publish prices.** Almost no one publishes dashboard prices, so a public "from X" wins trust [INF].
5. **Go through Smartup and BILLZ.** Ask whether they refer integrators. This is a direct route to 600+ and 4,000+ clients [S15][S16][INF].

---

## 2. Segments (ranked)

Service codes:
- **BOT** = Telegram bot / Mini App
- **AI** = AI agent or chatbot
- **AUTO** = AI automation
- **DASH** = dashboard/analytics
- **CRM** = CRM
- **VID** = motion promo

Willingness-to-pay (WTP) figures are **inferred**, anchored to §4 prices.

| # | Segment | Concrete problems | Fit | One-line pitch | WTP (project / monthly) | Buying trigger |
|---|---|---|---|---|---|---|
| 1 | **Distribution / wholesale** (FMCG, building materials, food import) | Agents and dealers report in Excel. There is no single view across divisions, brands and regions. Principals demand sell-out reports. Receivables are chased by phone. Wholesale orders go through a manager (RuslanBaraka, Modern Delivery). Distributors have no B2B portal (Ajeres, Kolberg) | DASH, BOT, AUTO, CRM | "Every morning, sales, debt and stock from Smartup/1C on one screen, with no Excel." | $1,500–6,000 / $150–500 | New division or brand principal; hiring an analyst; month-end reporting pain; Smartup/1C migration |
| 2 | **Telegram-first retail: perfume & cosmetics** | Orders go to admin DMs (Arome de Grasse, Deracos with 6 stores). The call centre only works office hours (Parfum Gallery, Mon–Sat 10–18). The same "price? original?" questions repeat. There is no stock sync between stores and Telegram | BOT (Mini App), AI, DASH, VID | "Your Telegram channel becomes a shop that takes orders at 2 a.m." | $600–3,000 / $80–250 | 8 March and New Year peaks; opening a 2nd or 3rd store; an admin quits |
| 3 | **Private clinics & dental** | Booking is by phone, WhatsApp or Telegram only (EstiMed). There are no prices online ("request price", CHDS). Sites are Russian-only. No-shows. Front-desk overload | BOT, AI, CRM, DASH | "Patients book in Telegram in Uzbek or Russian and get a reminder, so the chair isn't empty." | $500–2,500 / $80–250 | New doctor or branch; new equipment (MRI); bad reviews about phones not being answered |
| 4 | **Furniture makers** (kitchens, office, chairs) | Leads come from Instagram and Telegram DMs to several admins (Mebellar Olami). Measurement and 3D-design requests are tracked on paper. Payment is cash or transfer only (Woodstone). Quotes are by phone (Bravo) | CRM, BOT, VID, DASH | "From Instagram message to measurement to production to delivery, one board, nothing lost." | $700–3,000 / $80–250 | New showroom; rising ad spend; a missed-deadline complaint |
| 5 | **Education centres** (IELTS, language, IT) | Enrolment is through a call-centre Telegram account or a reception desk (Cambridge LC, Everest). Payment reminders are manual. Attendance and results are tracked across 5–15 branches | BOT, AUTO, DASH, VID | "Enrolment, payment reminders and branch reports run themselves." | $600–2,500 / $100–300 | August–September and January intakes; new branch; mock-test season |
| 6 | **Logistics / China cargo** | Commercial quotes are "send details to the operator" (CargoGreen). Web form then a manager calls back (iCargo). No tracking visible (Cargo.uz). The same status questions repeat all day | BOT, AI, CRM, DASH | "Clients check their own cargo status and get a price in the bot; managers handle only real deals." | $700–3,000 / $100–300 | Volume growth; a new route; overwhelmed support |
| 7 | **Restaurants / cafés / delivery** | Aggregator commissions. Orders by phone or a Telegram account. No cross-branch P&L from iiko/Poster (Rayhon has 6 branches) | BOT, DASH, VID | "Your own ordering bot, with sales from every branch on one screen." | $400–2,000 / $80–200 | Aggregator fee increase; new branch; Ramadan and banquet season |
| 8 | **Real estate agencies & developers** | Leads spread across a web form, several Telegram channels and phone (TENCORP). No viewing booking. 1,000+ listings managed by hand (Klyuchi) | AI, CRM, BOT, VID | "An AI that qualifies buyers 24/7 and books viewings straight into amoCRM." | $1,000–5,000 / $150–400 | New residential complex (ЖК) launch; sales team scaling |
| 9 | **Agriculture: fish, poultry** | B2B orders by phone or Telegram, no catalog (Inter Agro). Stale sites (Tashkent Parranda). Feed, pond and flock accounting in notebooks or Excel | BOT (Mini App), DASH, AUTO | "Feed, flock or pond costs and B2B orders in one Telegram app." (proof: the fish-farm app) | $1,000–4,000 / $100–300 | Spring stocking; expansion loan or grant [S13]; a new buyer (HoReCa or export) |
| 10 | **Uzum Market / e-commerce sellers** | Stock split between Uzum, Telegram and a warehouse. No unified profit view. Weak product video | DASH, BOT, VID | "See real profit across Uzum and Telegram, and get product videos that sell." | $200–1,500 / $50–150 | Crossing a volume threshold; Uzum campaigns (18k sellers [S6]) |
| 11 | **Auto services / detailing** | Service-interval reminders are not automated. Branch reporting. Many already have bots (Car-Driver) | BOT, DASH, VID | "Clients get reminded, book themselves, and you see both branches' load." | $400–2,000 / $50–150 | Second branch; seasonal peaks (winter tyres, pre-summer detailing) |
| 12 | **Beauty salons** (lower priority) | Often already on Dikidi (BOSCO) or have online booking (Hide). Pain is DM volume and content | AI, VID | "An AI that answers Instagram DMs and books into your existing calendar." | $200–800 / $40–120 | New master or service launch; holiday peaks |

---

## 3. Outreach list (Tashkent / Tashkent region, public business info only)

- Signals come from one visit to each business's public website or Telegram channel, or from a search snippet, in Sept 2026.
- **H/M/L** is the confidence that the observed signal reflects a real, current need.
- No personal data has been collected. Phone numbers and admin usernames were deliberately omitted.

| # | Business | Segment | Public link | Observed signal | Conf. | Lead offer |
|---|---|---|---|---|---|---|
| 1 | Deracos.uz | Cosmetics retail | https://t.me/s/deracos_uz | Korean cosmetics, 6 Tashkent stores, retail and wholesale. Orders through an admin DM and phone; very active channel | **H** | Mini App shop + stock/branch dashboard |
| 2 | Arome de Grasse Parfum | Perfume (Telegram-only) | https://t.me/s/aromedegrasse | Telegram-only store. Every order goes to a single admin DM; no website | **H** | Mini App catalog + Click/Payme |
| 3 | Mebellar Olami (MEDUZA STAR LLC) | Furniture | https://t.me/s/mebellarolami | Orders spread across 3 admin DMs + phone; catalog lives in a Telegram group | **H** | Lead CRM bot + Mini App catalog |
| 4 | EstiMed | Dental/clinic | https://estimed.uz | Booking by phone, Telegram or WhatsApp only; no online form or calendar | **H** | Booking bot with reminders |
| 5 | CargoGreen | Cargo (China) | https://cargogreen.uz | Commercial-cargo pricing requires "send info to the operator" (manual); Telegram tracking bot exists | **M** | AI quote assistant + CRM |
| 6 | iCargo | Cargo | https://icargo.uz | Web form, then a manager calls back with a price | **M** | Instant-quote bot |
| 7 | Cargo.uz | Logistics | https://www.cargo.uz | Web form with CAPTCHA only; no tracking or bot mentioned | **M** | Tracking + status bot |
| 8 | Transit Pro | Cargo | https://transitpro.uz | Already has a bot and separate UZ/RU manager lines | **L** | Ops dashboard, AI FAQ |
| 9 | Ajeres | FMCG import/distribution | https://ajeres.uz | Supplies 2,000+ stores. Offers "sales analytics and reporting" to brands; no B2B portal | **M** | Principal-facing sell-out dashboard + dealer order bot |
| 10 | Kolberg Group / United Distribution | FMCG distribution | https://www.kdc.uz | Distributor since 1998 with 50+ brands; no B2B portal. Also runs a medical centre and a fitness club | **M** | Group dashboard across business lines |
| 11 | Fargo Marketing Group | FMCG distribution | http://gfmcg.uz | Traditional distributor (PepsiCo, Coca-Cola, Bonduelle per snippet). Site has a TLS certificate mismatch | **L** | Agent/route dashboard |
| 12 | RuslanBaraka | Building materials | https://ruslanbaraka.uz | Wholesale customers must "contact a manager" for prices and invoices; no online payment | **M** | Dealer price/order bot |
| 13 | Modern Delivery (wert.uz) | Building materials | https://wert.uz | Retail and wholesale; orders via phone, Telegram and site; Chilanzar market | **M** | Order bot + delivery tracking |
| 14 | Woodstone Mebel | Furniture (own production) | https://www.woodstone.uz | Payment by cash, transfer or terminal only (no Click/Payme online); custom orders by form | **M** | Online payment + order-production tracker |
| 15 | Bravo | Office furniture | https://bravo.uz | Quotes and free measurement on request by phone/email | **M** | Quote bot + CRM |
| 16 | Lux Home Mebel | Kitchen furniture | https://www.luxhomemebel.uz | Kitchens "from 8M UZS"; Telegram contact (snippet; site returned 402) | **L** | Measurement-booking bot |
| 17 | Ser Mebel | Premium furniture | https://www.instagram.com/sermebel_uz/ | 29K Instagram followers; free measurement + 3D design, i.e. a heavy lead-handling load (snippet) | **L** | Instagram DM AI + CRM |
| 18 | Parfum Gallery | Perfume retail | https://parfumgallery.uz | Call centre Mon–Sat 10:00–18:00 only; evening and Sunday demand goes unanswered | **M** | 24/7 AI answerer |
| 19 | Parfum Stock | Perfume e-commerce | https://parfumstock.uz | Online store with Payme/Click already; also takes Telegram and phone orders, so channels are split | **L** | Unified orders dashboard |
| 20 | LeParfum.uz | Perfume | https://leparfum.uz | Cart + Click/Payme/Paynet plus Telegram and phone | **L** | Dashboard, motion ads |
| 21 | Smile Design | Dental | https://smiledesign.uz | Online form exists (10% off for online booking) but site is Russian-only; 24/7 clinic | **M** | Bilingual booking bot |
| 22 | Chilonzor Dental Servis | Dental | https://chds.uz | "One of the largest"; no prices online, patients must submit a form to learn the cost | **M** | AI price/FAQ bot |
| 23 | Vatan Tibbiyot Markazi | Dental/clinic | https://vatantibbiyot.uz | 24/7 dentistry; forms + Telegram/WhatsApp; Russian-only site | **M** | Bilingual bot with reminders |
| 24 | iMed Clinic | Diagnostics (MRI/CT) | https://www.imed-clinic.com | Requests via form, Telegram, Facebook, Instagram and phone (many inboxes); Russian site; MRI runs 24/7 while staff hours don't | **M** | Omnichannel inbox + booking bot |
| 25 | Cambridge Learning Centre | Education (IELTS) | https://t.me/s/cambridge_learning_center | 14 branches; enrolment through a call-centre Telegram account (snippet) | **M** | Enrolment bot + branch dashboard |
| 26 | Everest Learning Center | Education (IELTS) | https://everestlc.uz/en | "Many locations"; enrolment by form or reception; no online payment or student cabinet visible | **M** | Enrolment + payment-reminder bot |
| 27 | Inter Nation English School | Education | https://inter-nation.uz | Branches in Tashkent, Samarkand and Andijan; mock-test registration page (content not readable) | **L** | Mock-test booking bot |
| 28 | RIKS Education | Education | https://telegram.me/s/rikseducation | 20,000+ students claimed; phone-based contact (snippet) | **L** | Attendance/payment dashboard |
| 29 | TENCORP | Real estate agency | https://tencorp.uz | Form + phone + several separate Telegram channels; no viewing booking | **M** | AI lead qualifier + amoCRM |
| 30 | Klyuchi Tashkenta | Real estate agency | https://klyuchi.uz | 1,000+ listings; Russian-only; lists the same phone as TENCORP (possibly linked) | **L** | Listing-match AI bot |
| 31 | Inter Agro | Poultry (breeding eggs, chicks, feed) | https://interagro.uz | No order form, catalog or prices; B2B by phone or Telegram | **M** | B2B order Mini App |
| 32 | Tashkent Parranda | Poultry (eggs), Kibray | https://toshkentparranda.com | Latest dated site content is from 2019; no Telegram | **M** | Site refresh + B2B bot + promo video |
| 33 | Golden Fish Group | Fish farming / caviar | https://goldenfishgroup.uz/en/ | Farms, caviar, retail supply and eco-tourism; no online store; orders by form or phone | **M** | Farm-to-sales dashboard (fish-farm proof) |
| 34 | Saxovat Broyler | Poultry (broiler) | https://www.saxovat-broyler.uz | Supplier to a large QSR chain (snippet); digital ops unknown | **L** | Production/sales dashboard |
| 35 | Rayhon Milliy Taomlari | Restaurant chain | https://t.me/s/rayhon_milliy | 6 branches; app, site, Telegram account and phone; strong video content | **L** | Cross-branch iiko/Poster dashboard |
| 36 | Car-Driver | Detailing / auto service | https://car-driver.uz | 2 branches; has bot and calculator; Russian-only site | **L** | Branch-load dashboard, reminder automation |
| 37 | Hide | Beauty salon | https://hide.uz | Online calendar exists; single location | **L** | Instagram AI answerer, motion content |
| 38 | BOSCO Beauty Club | Beauty salon | https://boscobeauty.uz | Uses Dikidi; 4-language site; already digitised | **L** | Content/video only |

**Where to find more (next pass):**
- Med24.uz, Clinics.uz and 32top.uz clinic catalogues.
- GoldenPages rubrics for furniture, education and distribution.
- tgram.uz Telegram shop directories (cosmetics, perfume).
- Uzum Market seller storefronts.
- 2GIS "Карго" search.

---

## 4. Competitor snapshot

| Studio / agency | What they sell | Public pricing | Positioning | Gap we can exploit |
|---|---|---|---|---|
| **MXMEDIA** (mxmedia.uz) | Telegram bots with add-ons | 2.5M UZS fixed base; Click/Payme +1.2M; booking +1.0M; CRM/1C/MoySklad +3.5M; 1-year warranty [S19] | Fixed price by contract; industry-agnostic | Menu-bot focus; no analytics or ERP data work |
| **Innosoft** (innosoft.uz) | Bots, AI agents, SEO sites | Bots 3–20M UZS in 4 tiers; AI agent from 5M [S20] | "50+ projects", "replaces 5 operators" | Generic; no dashboards or Mini App case studies |
| **Lazerg** (lazerg.uz) | AI Telegram bots, sites, AI CRM/ERP | AI bot 5M+; AI CRM/ERP 25M+ [S21] | Solo/boutique, UZ/RU | Big jump in price to CRM/ERP; no mid-tier |
| **Tezcode** (tezcode.dev) | Bots, Mini App stores | From $279; 30% upfront [S22] | Custom code, not a constructor; own products (RAOS, MaxSavdo) | Price-led; weak on data and BI |
| **iCORP** (icorp.uz) | amoCRM/Bitrix24 partner, AI sales/QC/HR agents, bots | AI 6M / 14.4M / 36M UZS; amoCRM licences [S25] | "Payback in 2–3 months"; CRM-centric | Enterprise-ish pricing; CRM-first, not ERP/BI-first |
| **Zukko.ai** | AI-CRM SaaS: omnichannel inbox, voice AI | 559k–1.59M UZS/mo [S24] | "An AI employee", launch in 2 hours | SaaS: no custom ERP or dashboard integration; a partner or channel option for us |
| **AI Business UZ** (businessai.uz) | AI agents, landing pages, CRM/ERP, apps | Landing $300+; CRM $700+; ERP $1,500+; AI agent $500 or $75/mo [S23] | "#1 AI agency", 22+ clients | Very cheap, so quality is questionable; thin proof |
| **Kabulov Tech** | AI agents (Claude/GPT/Gemini), Bitrix/amo/Odoo integration | From 15M UZS [S26] | "No AI for show"; process-first | Premium consultative; slower and pricier than our pilot |
| **Celion** (celion.io) | Claude-based agents, Odoo, BI, web | Not public [S27] | "First Claude partner in Uzbekistan", 30+ projects | Odoo-centric; not Smartup/1C/Telegram Mini App |
| **MEGABITE-CRM** (crmpro.uz) | amoCRM implementation | Itemised: setup 1M; salesbot 5M; integrations 250k–1M [S28] | "Integrator #1" for amoCRM | CRM only; no custom build, BI or video |
| **WoodLime** (woodlime.uz) | Video production, 2D/3D animation | Reels 13M+; promo 45M+; 2D ad (20 s) 11M; 3D (20 s) 41M [S29] | 500+ projects, agency-grade | Expensive for SMBs, so there is room for 3–9M UZS motion promos |
| **Первый Бит / 1solution.uz** | 1C, Bitrix24, BI | On request [S30] | "Largest 1C integrator", 300+ BI projects | Enterprise; SMBs are underserved on BI |

**Positioning gaps (inferred):**
1. Nobody combines **ERP data (Smartup/1C/iiko/BILLZ), Telegram delivery and motion content** in one studio.
2. **Dashboard prices are opaque everywhere**, so publishing a price is a differentiator.
3. Most sites are **Russian-first**; an Uzbek-first studio stands out.
4. "AI agent" is becoming a commodity. **Sell outcomes** instead, such as "orders not lost" and "one screen every morning".

---

## 5. Recommended landing-page messaging

### Top 6 pain statements (customer language, UZ / RU)

1. **"Buyurtmalar Telegram lichkada yo'qolib ketyapti."** / «Заказы теряются в личке Telegram.»
2. **"Menejer kuniga 200 marta 'narxi qancha?' deb javob beradi."** / «Менеджер 200 раз в день отвечает "сколько стоит?"»
3. **"Kechasi yozgan mijoz ertalab raqobatchidan sotib oladi."** / «Клиент написал ночью — утром купил у конкурента.»
4. **"Hamma filial savdosini bitta ekranda ko'ra olmayman."** / «Не вижу продажи всех филиалов на одном экране.»
5. **"Agent va dilerlar hisobotni Excelda kechikib yuboradi."** / «Агенты и дилеры присылают отчёты в Excel с опозданием.»
6. **"Mijoz yozildi-yu, kelmadi."** / «Записался — и не пришёл.»

Sources for the pains:
- Pains 1–3 are observed in §3 (admin-DM ordering, office-hours call centres, prices "on request").
- Pains 4–5 match the distributor and multi-branch patterns in §3 and the studio's own Smartup project.
- Pain 6 is a common clinic and salon problem [INF].

### 3 proof points we can claim

1. **"4 divisions, one dashboard."** A Smartup ERP → Postgres → Power BI pipeline running for a 4-division distribution group, with no manual Excel consolidation.
2. **"Telegram shops that sell by themselves."** Mini App shops with bot and admin panel, in production for a perfume retailer and a furniture/chair brand (UZ/RU, catalog, cart, orders to admin).
3. **"We build for real operations, not just IT companies."** A fish-farming management Mini App (feed accounting, pond finances) and a live sales dashboard.

Show short screen recordings, not client logos, unless permission is given.

### Offer ladder (indicative, grounded in §4 prices)

| Step | What | Price (UZS) | ≈ USD | Anchor |
|---|---|---|---|---|
| 0. **Free audit** | 30–45 min call + a 1-page "where you lose orders and hours" map | 0 | 0 | Converts cold Telegram/Instagram leads |
| 1. **Fixed-price pilot** (2–3 weeks) | Pick one: (a) order/booking bot + admin panel; (b) AI answerer on catalog/FAQ (Telegram + Instagram); (c) one dashboard on one source (Smartup, 1C, iiko or BILLZ); (d) 15–30 s motion promo | (a) 4–8M · (b) 6–12M · (c) 8–15M · (d) 4–9M | $330–670 · $500–1,000 · $670–1,250 · $330–750 | Bots 2.5–15M [S19][S20]; iCORP AI starter 6M [S25]; WoodLime 2D 20 s 11M [S29]; dashboard pricing not public [INF] |
| 2. **Full build** | Mini App shop + Click/Payme + admin; CRM (amoCRM setup or custom); multi-source BI; agent/dealer ordering app | 15–40M | $1,250–3,300 | Innosoft CRM bot 10–20M [S20]; Lazerg CRM/ERP 25M+ [S21]; iCORP Business 14.4M [S25] |
| 3. **Monthly retainer** | Hosting, monitoring, AI tuning, dashboard changes, 2–4 short videos/mo (optional) | 1.5–5M / mo | $125–420 / mo | Zukko SaaS 0.56–1.59M/mo [S24]; AI Business UZ $75/mo [S23]; salon site support 0.6–1.5M/mo [S31] |

**Guarantee idea [INF]:** "If the pilot isn't live in 21 days, you don't pay the second half." This mirrors the local habit of 30% upfront with the rest paid on results [S22].

### Language mix

- **Lead with Uzbek (Latin)** for the headline and pain statements, with a clear **RU** toggle and full Russian parity.
- Russian is essential for distribution, clinic and real-estate owners, and for Tashkent Russian-speaking retail.
- **English** only for the portfolio and case pages, and for investor or foreign-owned clients.
- Every bot demo should switch UZ↔RU live. That shows in one move the gap seen in Russian-only competitor and target sites.
- Keep currency in **so'm**, with "≈ $" in small print.
