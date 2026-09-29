import { AbsoluteFill } from "remotion";
import { card, color, ellipsis, font, radius, screen, shadow } from "./tokens";
import { Avatar, Chip, Icon, uz } from "./ui";

type Deal = {
  client: string;
  amount: string;
  source: "Telegram" | "Instagram" | "Qoʻngʻiroq";
  agent: "Jasur" | "Madina" | "Otabek";
  note?: string;
  hero?: boolean;
};

type Lane = { title: string; total: string; done?: boolean; deals: Deal[] };

const lanes: Lane[] = [
  {
    title: "Yangi soʻrov",
    total: "24,7 mln soʻm",
    deals: [
      {
        client: "Hamkor Market",
        amount: "18,5 mln soʻm",
        source: "Telegram",
        agent: "Madina",
        note: "Sergeli · Kungaboqar yogʻi 5L — 120 dona",
        hero: true,
      },
      { client: "Doʻstlik Savdo", amount: "6,2 mln soʻm", source: "Instagram", agent: "Otabek" },
    ],
  },
  {
    title: "Taklif yuborildi",
    total: "35,2 mln soʻm",
    deals: [
      { client: "Bek Supermarket", amount: "22,4 mln soʻm", source: "Telegram", agent: "Jasur" },
      { client: "Nur Savdo MChJ", amount: "9,7 mln soʻm", source: "Qoʻngʻiroq", agent: "Madina" },
      { client: "Chinor Kafe", amount: "3,1 mln soʻm", source: "Instagram", agent: "Otabek" },
    ],
  },
  {
    title: "Muzokara",
    total: "61,4 mln soʻm",
    deals: [
      { client: "Samarqand Ulgurji", amount: "41,0 mln soʻm", source: "Qoʻngʻiroq", agent: "Otabek" },
      { client: "Oila Market", amount: "15,6 mln soʻm", source: "Telegram", agent: "Madina" },
      { client: "Zafar Oziq-ovqat", amount: "4,8 mln soʻm", source: "Qoʻngʻiroq", agent: "Jasur" },
    ],
  },
  {
    title: "Yopildi",
    total: "32,7 mln soʻm",
    done: true,
    deals: [
      { client: "Asia Mart, Yunusobod", amount: "27,3 mln soʻm", source: "Telegram", agent: "Jasur" },
      { client: "Chilonzor Choyxonasi", amount: "5,4 mln soʻm", source: "Instagram", agent: "Madina" },
    ],
  },
];

const DealCard = ({ deal }: { deal: Deal }) => (
  <div
    style={{
      ...card,
      padding: 38,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      ...(deal.hero && {
        border: `4px solid ${color.accent}`,
        boxShadow: `0 0 0 10px rgba(227, 120, 48, 0.16), ${shadow}`,
      }),
    }}
  >
    {deal.hero && (
      <div style={{ display: "flex" }}>
        <Chip tone="accent">
          <Icon name="bot" size={28} stroke={color.ink} />
          AI agent
        </Chip>
      </div>
    )}
    <div style={{ ...ellipsis, fontSize: 40, fontWeight: 600 }}>{deal.client}</div>
    <div style={{ fontFamily: font.display, fontSize: 46, fontWeight: 600, letterSpacing: -0.5 }}>
      {uz(deal.amount)}
    </div>
    {deal.note && (
      <div
        style={{
          fontSize: 30,
          lineHeight: 1.3,
          color: color.soft,
          paddingLeft: 18,
          borderLeft: `4px solid ${color.line}`,
        }}
      >
        {deal.note}
      </div>
    )}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
      <Chip tone={deal.source === "Telegram" ? "mint" : "outline"}>{deal.source}</Chip>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ fontSize: 28, color: color.soft }}>{deal.agent}</span>
        <Avatar label={deal.agent[0]} size={54} />
      </div>
    </div>
  </div>
);

const LaneColumn = ({ lane }: { lane: Lane }) => (
  <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 32 }}>
    <div
      style={{
        paddingBottom: 26,
        borderBottom: `6px solid ${lane.done ? color.teal : color.mint}`,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontFamily: font.display, fontSize: 38, fontWeight: 600 }}>{uz(lane.title)}</span>
        {lane.done && (
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: color.teal,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="check" size={28} stroke={color.panel} width={3} />
          </span>
        )}
      </div>
      <div style={{ fontSize: 30, color: color.soft }}>
        {lane.deals.length} ta bitim · {lane.total}
      </div>
    </div>
    {lane.deals.map((d) => (
      <DealCard key={d.client} deal={d} />
    ))}
  </div>
);

const tabs = ["Voronka", "Roʻyxat", "Vazifalar"];

export const Crm = () => (
  <AbsoluteFill style={{ ...screen, padding: 96, gap: 64 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 56 }}>
        <h1 style={{ margin: 0, fontFamily: font.display, fontSize: 76, fontWeight: 600, letterSpacing: -1 }}>
          Savdo voronkasi
        </h1>
        <div
          style={{
            display: "flex",
            gap: 6,
            padding: 6,
            borderRadius: radius.chip + 6,
            backgroundColor: color.panel,
            border: `2px solid ${color.line}`,
          }}
        >
          {tabs.map((t, i) => (
            <span
              key={t}
              style={{
                padding: "12px 26px",
                borderRadius: radius.chip,
                fontSize: 28,
                fontWeight: 600,
                backgroundColor: i === 0 ? color.ink : "transparent",
                color: i === 0 ? color.panel : color.soft,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ fontSize: 32, fontWeight: 600 }}>Baraka Distribution</span>
        <Chip tone="outline" size={28}>
          Sentyabr 2026
        </Chip>
      </div>
    </div>
    <div style={{ display: "flex", gap: 44, flex: 1 }}>
      {lanes.map((l) => (
        <LaneColumn key={l.title} lane={l} />
      ))}
    </div>
  </AbsoluteFill>
);
