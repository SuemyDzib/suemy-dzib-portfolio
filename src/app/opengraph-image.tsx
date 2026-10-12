import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

// Imagen que aparece al compartir el enlace en LinkedIn, WhatsApp, etc.
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const THREADS = ["#c2385f", "#57774a", "#0b6668"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#e9b12e",
          color: "#18292b",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 116,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            {profile.heroLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 42 }}>
            {profile.role}
          </div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 30 }}>
            {profile.location}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "#fbfbf7",
            padding: "26px 40px",
          }}
        >
          {Array.from({ length: 34 }).map((_, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 12 12">
              <line
                x1="2"
                y1="2"
                x2="10"
                y2="10"
                stroke={THREADS[i % 3]}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <line
                x1="10"
                y1="2"
                x2="2"
                y2="10"
                stroke={THREADS[i % 3]}
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
