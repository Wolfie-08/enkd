import type { CSSProperties, ReactNode } from "react";
import { color, font, radius } from "./tokens";

type ChipTone = "mint" | "accent" | "outline";

const chipTone: Record<ChipTone, CSSProperties> = {
  mint: { backgroundColor: color.mintTint, color: color.teal },
  // ink on orange: ~5.7:1 (white on orange would fail)
  accent: { backgroundColor: color.accent, color: color.ink },
  outline: {
    backgroundColor: color.panel,
    color: color.soft,
    boxShadow: `inset 0 0 0 2px ${color.line}`,
  },
};

export const Chip = ({
  children,
  tone = "mint",
  size = 26,
}: {
  children: ReactNode;
  tone?: ChipTone;
  size?: number;
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: `${size * 0.32}px ${size * 0.62}px`,
      borderRadius: radius.chip,
      fontFamily: font.text,
      fontSize: size,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...chipTone[tone],
    }}
  >
    {children}
  </span>
);

export const Avatar = ({
  label,
  size = 56,
  tone = "mint",
}: {
  label: string;
  size?: number;
  tone?: "mint" | "teal";
}) => (
  <div
    style={{
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: font.text,
      fontWeight: 700,
      fontSize: size * 0.4,
      backgroundColor: tone === "teal" ? color.teal : color.mintTint,
      color: tone === "teal" ? color.panel : color.teal,
    }}
  >
    {label}
  </div>
);

// Lucide-style line icons (24x24 grid, 2px stroke).
const paths = {
  message: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  bot: (
    <>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
    </>
  ),
  kanban: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 7v7M12 7v4M16 7v9" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </>
  ),
  bell: (
    <>
      <path d="M10.3 21a2 2 0 0 0 3.4 0" />
      <path d="M3.3 15.3A1 1 0 0 0 4 17h16a1 1 0 0 0 .7-1.7C19.4 14 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.4 6-2.7 7.3" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export type IconName = keyof typeof paths;

export const Icon = ({
  name,
  size = 40,
  stroke = color.teal,
  width = 2,
}: {
  name: IconName;
  size?: number;
  stroke?: string;
  width?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth={width}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    {paths[name]}
  </svg>
);

// Unbounded's ʻ (U+02BB) has almost no advance and collides with the next
// letter; borrow Geist's glyph inside display text.
export const uz = (s: string) =>
  s.split("ʻ").flatMap((part, i) =>
    i === 0 ? [part] : [<span key={i} style={{ fontFamily: font.text, fontWeight: 700 }}>ʻ</span>, part],
  );
