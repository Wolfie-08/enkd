import { AbsoluteFill } from "remotion";
import { card, color, font, screen } from "./tokens";
import { Icon, type IconName } from "./ui";

const steps: { icon: IconName; title: string; meta: string }[] = [
  { icon: "message", title: "Telegram xabar", meta: "Mijoz 23:14 da yozdi" },
  { icon: "bot", title: "AI agent javob beradi", meta: "Narx va qoldiq bilan" },
  { icon: "kanban", title: "CRM’da bitim", meta: "Voronkaga tushadi" },
  { icon: "database", title: "1C\u00A0/ Smartup’ga buyurtma", meta: "Ombor zaxirasi band" },
  { icon: "bell", title: "Menejerga xabar", meta: "Tasdiqlash uchun" },
];

// Label on each connector; index 1 (agent → CRM) is the active step.
const links = ["3 soniya", "avtomatik", "API orqali", "darhol"];
const ACTIVE = 1;

const Connector = ({ label, active }: { label: string; active: boolean }) => {
  const stroke = active ? color.accent : color.mint;
  return (
    <div style={{ width: 140, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <span
        style={{
          fontSize: 25,
          fontWeight: 600,
          whiteSpace: "nowrap",
          color: active ? color.ink : color.soft,
        }}
      >
        {label}
      </span>
      <svg width={140} height={28} viewBox="0 0 150 28" preserveAspectRatio="none" style={{ overflow: "visible" }}>
        <line x1={0} y1={14} x2={136} y2={14} stroke={stroke} strokeWidth={active ? 7 : 5} strokeLinecap="round" strokeDasharray={active ? undefined : "2 14"} />
        <path d="M126 3 L142 14 L126 25" fill="none" stroke={stroke} strokeWidth={active ? 7 : 5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* keeps the arrow on the node centre line */}
      <span style={{ fontSize: 26, visibility: "hidden" }}>.</span>
    </div>
  );
};

const Node = ({ step, index }: { step: (typeof steps)[number]; index: number }) => {
  const lit = index <= ACTIVE + 1;
  return (
    <div
      style={{
        ...card,
        flex: 1,
        minWidth: 0,
        height: 560,
        padding: 38,
        display: "flex",
        flexDirection: "column",
        gap: 26,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            width: 104,
            height: 104,
            borderRadius: 20,
            backgroundColor: lit ? color.mintTint : color.bg,
            border: `2px solid ${color.line}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name={step.icon} size={56} stroke={color.teal} />
        </div>
        <span style={{ fontFamily: font.display, fontSize: 30, fontWeight: 600, color: color.soft }}>
          0{index + 1}
        </span>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ fontFamily: font.display, fontSize: 35, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.5 }}>
        {step.title}
      </div>
      <div style={{ fontSize: 28, color: color.soft, lineHeight: 1.3 }}>{step.meta}</div>
    </div>
  );
};

export const Flow = () => (
  <AbsoluteFill style={{ ...screen, padding: "104px 96px", justifyContent: "space-between" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <h1 style={{ margin: 0, fontFamily: font.display, fontSize: 72, fontWeight: 600, letterSpacing: -1 }}>
          Xabardan buyurtmagacha
        </h1>
        <div style={{ fontSize: 34, color: color.soft }}>Inson aralashuvisiz · oʻrtacha 40 soniya</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 600 }}>
        <span style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: color.accent }} />
        Hozir: CRM’ga yozilmoqda
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      {steps.map((s, i) => (
        <div key={s.title} style={{ display: "contents" }}>
          <Node step={s} index={i} />
          {i < links.length && <Connector label={links[i]} active={i === ACTIVE} />}
        </div>
      ))}
    </div>
  </AbsoluteFill>
);
