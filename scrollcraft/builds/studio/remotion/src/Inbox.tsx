import { AbsoluteFill } from "remotion";
import { card, color, ellipsis, font, radius, screen } from "./tokens";
import { Avatar, Icon } from "./ui";

const chats = [
  { name: "Sherzod aka", text: "Assalomu alaykum, narxi qancha?", time: "00:41", unread: 2 },
  { name: "Бахтиёр", text: "Сколько стоит доставка до Чиланзара?", time: "00:27", unread: 1 },
  { name: "Oila Market", text: "Kungaboqar yogʻi 5L dan 40 dona kerak", time: "00:12", unread: 3 },
  { name: "Dilnoza", text: "Hali ochiqmisiz?", time: "00:02", unread: 1 },
  { name: "Nodira opa", text: "Buyurtma bermoqchiman", time: "23:48", unread: 2 },
  { name: "Камола", text: "Добрый вечер, сахар 50 кг есть?", time: "23:31", unread: 1 },
  { name: "Rustam, Sergeli", text: "Ertaga ertalab yetkazib berasizmi?", time: "23:20", unread: 1 },
  { name: "Aziza", text: "Ulgurji olsam chegirma bormi?", time: "23:14", unread: 4 },
];

const initials = (n: string) =>
  n
    .split(/[\s,]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const tabs = ["Hammasi", "Mijozlar", "Buyurtmalar"];

export const Inbox = () => (
  <AbsoluteFill style={{ ...screen, padding: "56px 64px 64px", gap: 40 }}>
    {/* status bar */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, fontWeight: 600, padding: "0 12px" }}>
      <span>00:43</span>
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {[14, 20, 26, 32].map((h) => (
          <span key={h} style={{ width: 8, height: h, borderRadius: 2, backgroundColor: color.ink }} />
        ))}
        <span style={{ marginLeft: 16, width: 56, height: 28, borderRadius: 8, border: `3px solid ${color.ink}`, padding: 3, boxSizing: "border-box" }}>
          <span style={{ display: "block", width: "62%", height: "100%", borderRadius: 3, backgroundColor: color.ink }} />
        </span>
      </span>
    </div>

    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 24 }}>
      <h1 style={{ margin: 0, fontFamily: font.display, fontSize: 84, fontWeight: 600, letterSpacing: -1.5 }}>Xabarlar</h1>
      <span style={{ fontSize: 32, fontWeight: 600, color: color.teal }}>8 ta oʻqilmagan</span>
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        height: 88,
        padding: "0 30px",
        borderRadius: radius.card,
        backgroundColor: color.panel,
        border: `2px solid ${color.line}`,
        fontSize: 32,
        color: color.soft,
      }}
    >
      <Icon name="search" size={36} stroke={color.soft} />
      Qidirish
    </div>

    <div style={{ display: "flex", gap: 14 }}>
      {tabs.map((t, i) => (
        <span
          key={t}
          style={{
            padding: "16px 30px",
            borderRadius: radius.chip,
            fontSize: 30,
            fontWeight: 600,
            backgroundColor: i === 0 ? color.ink : color.panel,
            color: i === 0 ? color.panel : color.soft,
            border: i === 0 ? undefined : `2px solid ${color.line}`,
          }}
        >
          {t}
        </span>
      ))}
    </div>

    <div style={{ ...card, flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {chats.map((c, i) => (
        <div
          key={c.name}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 30,
            padding: "0 36px",
            borderBottom: i < chats.length - 1 ? `2px solid ${color.line}` : undefined,
          }}
        >
          <Avatar label={initials(c.name)} size={104} tone={i === 0 ? "teal" : "mint"} />
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20 }}>
              <span style={{ ...ellipsis, fontSize: 38, fontWeight: 600 }}>{c.name}</span>
              <span style={{ fontSize: 28, fontWeight: 500, color: color.soft, flexShrink: 0 }}>{c.time}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
              <span style={{ ...ellipsis, fontSize: 32, color: color.soft }}>{c.text}</span>
              <span
                style={{
                  minWidth: 48,
                  height: 48,
                  padding: "0 14px",
                  boxSizing: "border-box",
                  borderRadius: 24,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: color.teal,
                  color: color.panel,
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                {c.unread}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </AbsoluteFill>
);
