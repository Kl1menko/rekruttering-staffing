import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "56px",
          background: "#f6f2ea",
          color: "#2f3029",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, marginBottom: 20 }}>Prime Work</div>
        <div style={{ fontSize: 58, lineHeight: 1.06, fontWeight: 700 }}>
          Fast hiring. Clear compliance. Predictable delivery.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
