import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function ogImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: 72, background: "#070707", color: "#f5f5f5", fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 4, color: "#666" }}>
          <span>ENKD</span>
          <span>TASHKENT</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: title.length > 60 ? 48 : 64, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
          <div style={{ fontSize: 28, color: "#a3a3a3" }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#f5a524" }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#f5a524" }} />
          Diyorbek Komilov · enkd.uz
        </div>
      </div>
    ),
    ogSize,
  );
}
