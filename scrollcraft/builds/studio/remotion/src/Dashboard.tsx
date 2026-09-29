import type { CSSProperties } from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { card, color, ellipsis, font, screen } from "./tokens";
import { Chip, uz } from "./ui";

// Everything settles by frame 40; the composition is 48 frames, so the
// last frame (47) is the static dashboard.png.
const SETTLE = 40;
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

const useGrow = (delay = 0, end = SETTLE) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [delay, end], [0, 1], { ...clamp, easing: easeOut });
};

const dec1 = (v: number) => v.toFixed(1).replace(".", ",");
const groups = (v: number) => String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

// --- data (Baraka Distribution, today = 29 sentyabr) -----------------------
const kpis = [
  { label: "Savdo", value: (p: number) => dec1(48.6 * p), unit: "mln soʻm", delta: "+8,4% kechagidan", hero: true },
  { label: "Buyurtmalar", value: (p: number) => groups(312 * p), unit: "ta", delta: "+21 ta kechagidan" },
  { label: "Oʻrtacha chek", value: (p: number) => groups(Math.round((155800 * p) / 100) * 100), unit: "soʻm", delta: "+2,1% kechagidan" },
  { label: "Qaytarilgan", value: (p: number) => dec1(1.8 * p), unit: "%", delta: "−0,3 p.p. kechagidan" },
];

const days = [
  34.2, 36.8, 35.1, 38.4, 40.2, 31.5, 29.8, 36.9, 38.7, 37.2, 41.0, 42.3, 33.1, 30.4, 39.2, 40.8, 39.6,
  43.1, 44.0, 34.8, 32.2, 41.5, 43.9, 42.7, 45.8, 47.2, 37.6, 44.9, 46.3, 48.6,
];
const WEEK_FROM = days.length - 7;
const xLabels: [number, string][] = [
  [0, "31 avg"],
  [7, "7 sen"],
  [14, "14 sen"],
  [21, "21 sen"],
  [29, "Bugun"],
];

const branches = [
  { name: "Chilonzor", value: 16.2 },
  { name: "Yunusobod", value: 13.8 },
  { name: "Sergeli", value: 10.4 },
  { name: "Samarqand", value: 8.2 },
];

const products = [
  { name: "Kungaboqar yogʻi 5L", qty: "184 dona", sum: "12,7 mln" },
  { name: "Shakar 50 kg", qty: "46 qop", sum: "11,2 mln" },
  { name: "Un 1-nav 50 kg", qty: "52 qop", sum: "9,4 mln" },
  { name: "Guruch lazer 25 kg", qty: "38 qop", sum: "6,1 mln" },
];

// --- pieces -----------------------------------------------------------------
const cardTitle: CSSProperties = { fontFamily: font.display, fontSize: 36, fontWeight: 600, margin: 0 };

const Kpi = ({ k, index }: { k: (typeof kpis)[number]; index: number }) => {
  const p = useGrow(index * 3);
  return (
    <div
      style={{
        ...card,
        // fixed share so the card never resizes while digits count up
        flex: `${k.label === "Oʻrtacha chek" ? 1.2 : 1} 1 0`,
        minWidth: 0,
        padding: "30px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 500, color: color.soft }}>{k.label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <span
          style={{
            fontFamily: font.display,
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: -2,
            fontVariantNumeric: "tabular-nums",
            color: k.hero ? color.accent : color.ink,
          }}
        >
          {k.value(p)}
        </span>
        <span style={{ fontSize: 34, fontWeight: 600, color: color.soft }}>{k.unit}</span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 500, color: color.teal }}>{k.delta}</div>
    </div>
  );
};

// Catmull-Rom → cubic Bézier for a calm curve through every point.
const smooth = (pts: [number, number][]) =>
  pts
    .map(([x, y], i) => {
      if (i === 0) return `M${x},${y}`;
      const [x0, y0] = pts[i - 2] ?? pts[i - 1];
      const [x1, y1] = pts[i - 1];
      const [x3, y3] = pts[i + 1] ?? [x, y];
      return `C${x1 + (x - x0) / 6},${y1 + (y - y0) / 6} ${x - (x3 - x1) / 6},${y - (y3 - y1) / 6} ${x},${y}`;
    })
    .join(" ");

const LineChart = () => {
  const p = useGrow(4);
  const W = 1300;
  const H = 700;
  const left = 70;
  const bottom = 56;
  const plotW = W - left - 20;
  const plotH = H - bottom - 16;
  const max = 60;
  const x = (i: number) => left + (i / (days.length - 1)) * plotW;
  const y = (v: number) => 16 + plotH - (v * p * plotH) / max;
  const pts = days.map((v, i) => [x(i), y(v)] as [number, number]);
  const line = smooth(pts);
  const week = smooth(pts.slice(WEEK_FROM));
  const area = `${line} L${x(days.length - 1)},${y(0)} L${x(0)},${y(0)} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg width={W} height={H} style={{ display: "block", overflow: "visible" }}>
      {[0, 20, 40, 60].map((g) => (
        <g key={g}>
          <line x1={left} x2={W - 20} y1={16 + plotH - (g * plotH) / max} y2={16 + plotH - (g * plotH) / max} stroke={color.line} strokeWidth={2} />
          <text x={left - 18} y={16 + plotH - (g * plotH) / max + 10} textAnchor="end" fontSize={28} fill={color.soft} fontFamily={font.text}>
            {g}
          </text>
        </g>
      ))}
      <path d={area} fill={color.mint} fillOpacity={0.28} />
      <path d={line} fill="none" stroke={color.mint} strokeWidth={7} strokeLinejoin="round" strokeLinecap="round" />
      <path d={week} fill="none" stroke={color.accent} strokeWidth={8} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last[0]} cy={last[1]} r={14} fill={color.panel} stroke={color.accent} strokeWidth={7} />
      {xLabels.map(([i, l]) => (
        <text
          key={l}
          x={x(i)}
          y={H - 8}
          textAnchor={i === 0 ? "start" : i === days.length - 1 ? "end" : "middle"}
          fontSize={28}
          fontWeight={i === days.length - 1 ? 600 : 400}
          fill={i === days.length - 1 ? color.ink : color.soft}
          fontFamily={font.text}
        >
          {l}
        </text>
      ))}
    </svg>
  );
};

const Legend = ({ swatch, label }: { swatch: string; label: string }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 28, color: color.soft }}>
    <span style={{ width: 32, height: 8, borderRadius: 4, backgroundColor: swatch }} />
    {label}
  </span>
);

const BranchBar = ({ b, index }: { b: (typeof branches)[number]; index: number }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [6 + index * 4, SETTLE], [0, 1], {
    ...clamp,
    easing: Easing.spring({ damping: 200 }),
  });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <span style={{ width: 190, fontSize: 30, fontWeight: 500 }}>{b.name}</span>
      <div style={{ flex: 1, height: 36, borderRadius: 10, backgroundColor: color.bg }}>
        <div
          style={{
            width: `${((b.value / 18) * 100 * p).toFixed(2)}%`,
            height: "100%",
            borderRadius: 10,
            backgroundColor: index === 0 ? color.teal : color.mint,
          }}
        />
      </div>
      <span style={{ width: 110, textAlign: "right", fontSize: 30, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
        {dec1(b.value * p)}
      </span>
    </div>
  );
};

const ProductTable = () => {
  const p = useGrow(10);
  const cell: CSSProperties = { fontSize: 30, textAlign: "right", fontVariantNumeric: "tabular-nums" };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", paddingBottom: 12, borderBottom: `2px solid ${color.line}`, fontSize: 26, fontWeight: 500, color: color.soft }}>
        <span style={{ flex: 1 }}>Mahsulot</span>
        <span style={{ width: 150, textAlign: "right" }}>Soni</span>
        <span style={{ width: 170, textAlign: "right" }}>Summa</span>
      </div>
      {products.map((r, i) => (
        <div
          key={r.name}
          style={{
            display: "flex",
            alignItems: "center",
            height: 56,
            borderBottom: i < products.length - 1 ? `2px solid ${color.line}` : undefined,
            opacity: interpolate(p, [i * 0.15, i * 0.15 + 0.4], [0, 1], clamp),
          }}
        >
          <span style={{ ...ellipsis, flex: 1, fontSize: 30, fontWeight: 500 }}>{r.name}</span>
          <span style={{ ...cell, width: 150, color: color.soft }}>{r.qty}</span>
          <span style={{ ...cell, width: 170, fontWeight: 600 }}>{r.sum}</span>
        </div>
      ))}
    </div>
  );
};

export const Dashboard = () => (
  <AbsoluteFill style={{ ...screen, padding: 96, gap: 48 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <h1 style={{ margin: 0, fontFamily: font.display, fontSize: 72, fontWeight: 600, letterSpacing: -1 }}>
        Barcha filiallar · bugun
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ fontSize: 32, fontWeight: 600 }}>Baraka Distribution</span>
        <Chip tone="outline" size={28}>
          29 sentyabr 2026
        </Chip>
      </div>
    </div>

    <div style={{ display: "flex", gap: 40 }}>
      {kpis.map((k, i) => (
        <Kpi key={k.label} k={k} index={i} />
      ))}
    </div>

    <div style={{ display: "flex", gap: 40, flex: 1, minHeight: 0 }}>
      <div style={{ ...card, flex: 1, padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={cardTitle}>Oxirgi 30 kun</h2>
          <div style={{ display: "flex", gap: 36 }}>
            <Legend swatch={color.mint} label="Savdo, mln soʻm" />
            <Legend swatch={color.accent} label="Joriy hafta" />
          </div>
        </div>
        <LineChart />
      </div>

      <div style={{ width: 780, display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ ...card, flex: 1, padding: "36px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <h2 style={cardTitle}>{uz("Filiallar boʻyicha")}</h2>
            <span style={{ fontSize: 26, color: color.soft }}>mln soʻm</span>
          </div>
          {branches.map((b, i) => (
            <BranchBar key={b.name} b={b} index={i} />
          ))}
        </div>
        <div style={{ ...card, flex: 1, padding: "36px 44px", display: "flex", flexDirection: "column", gap: 20 }}>
          <h2 style={cardTitle}>Top mahsulotlar</h2>
          <ProductTable />
        </div>
      </div>
    </div>
  </AbsoluteFill>
);
