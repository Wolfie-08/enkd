import { AbsoluteFill } from "remotion";
import { color, font } from "./tokens";

export const Poster = () => (
  <AbsoluteFill
    style={{
      backgroundColor: color.poster,
      color: color.ink,
      fontFamily: font.text,
      padding: "96px 128px",
      justifyContent: "space-between",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -0.5 }}>enkd studio</span>
      <span style={{ fontSize: 30, fontWeight: 500, color: color.soft }}>studio.enkd.uz</span>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ width: 160, height: 4, backgroundColor: color.accent }} />
        <span style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: color.accent }} />
      </div>
      <h1
        style={{
          margin: 0,
          maxWidth: 1500,
          fontFamily: font.display,
          fontSize: 136,
          fontWeight: 600,
          lineHeight: 1.1,
          letterSpacing: -3,
        }}
      >
        Biznesingiz uchun raqamli tizimlar
      </h1>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 32, color: color.soft }}>
      {["AI chatbotlar", "AI agentlar", "CRM", "Avtomatlashtirish", "Dashboardlar", "Promo videolar"].map((s, i) => (
        <span key={s} style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {i > 0 && <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: color.mint }} />}
          {s}
        </span>
      ))}
    </div>
  </AbsoluteFill>
);
