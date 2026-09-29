import type { CSSProperties } from "react";
import { loadFont as loadGeist } from "@remotion/google-fonts/Geist";
import { loadFont as loadUnbounded } from "@remotion/google-fonts/Unbounded";

export const font = {
  text: loadGeist("normal", {
    weights: ["400", "500", "600", "700"],
    subsets: ["latin", "latin-ext", "cyrillic"],
  }).fontFamily,
  display: loadUnbounded("normal", {
    weights: ["500", "600", "700"],
    subsets: ["latin", "latin-ext", "cyrillic"],
  }).fontFamily,
};

export const color = {
  bg: "#F8FBFA",
  poster: "#EEF4F1",
  panel: "#FFFFFF",
  line: "#DDE7E3",
  ink: "#0F1B1D",
  soft: "#4A5B5D",
  mint: "#7FD1B9",
  teal: "#1F7A6B",
  accent: "#E37830",
  // mint at 22% over white, for chip / icon tiles (teal text on it is ~5:1)
  mintTint: "#E4F5F0",
};

export const radius = { card: 20, chip: 14 };

export const shadow = "0 10px 30px rgba(15, 27, 29, 0.07)";

export const screen: CSSProperties = {
  backgroundColor: color.bg,
  fontFamily: font.text,
  color: color.ink,
};

export const card: CSSProperties = {
  backgroundColor: color.panel,
  border: `2px solid ${color.line}`,
  borderRadius: radius.card,
  boxShadow: shadow,
};

export const ellipsis: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  minWidth: 0,
};
