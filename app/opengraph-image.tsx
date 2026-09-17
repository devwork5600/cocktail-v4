import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GOLD = "#f5cc4b";
const SURFACE = "#0a0a0a";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: SURFACE,
        backgroundImage: `radial-gradient(circle at 50% 0%, rgba(245,204,75,0.12), transparent 60%)`,
        border: "1px solid rgba(245,204,75,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 96,
          fontWeight: 700,
          color: GOLD,
          letterSpacing: -1,
        }}
      >
        L&apos;Élixir Doré
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#cbbe9c",
          marginTop: 20,
          fontStyle: "italic",
        }}
      >
        Bar à cocktails à Paris
      </div>
    </div>,
    { ...size },
  );
}
