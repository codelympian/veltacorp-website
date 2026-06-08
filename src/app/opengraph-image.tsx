import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Veltacorp Wellness & Fitness Solutions";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #17468a 0%, #1E5CB3 45%, #2EAD4B 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          Veltacorp Wellness &amp; Fitness Solutions
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Healthier People. Stronger Organizations.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            opacity: 0.9,
            maxWidth: 880,
          }}
        >
          Corporate wellness, fitness, team-building &amp; racket sports for
          high-performing teams.
        </div>
      </div>
    ),
    { ...size },
  );
}
