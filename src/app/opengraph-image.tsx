import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "#f6f2ea",
          color: "#2f3029",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Prime Work
        </div>
        <div style={{ fontSize: 62, lineHeight: 1.05, maxWidth: 980, fontWeight: 700 }}>
          B2B staffing and compliance for reliable shift operations.
        </div>
        <div style={{ fontSize: 24, color: "#4f5348" }}>
          Services • Industries • Process • SLA
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
