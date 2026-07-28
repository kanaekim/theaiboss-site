import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "The AI Boss — Kathy Slowinski | AI Keynote Speaker & Executive Advisor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c1425",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#ffffff",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            The AI Boss
          </div>
          <div
            style={{
              width: "1px",
              height: "20px",
              background: "#4a7c6f",
            }}
          />
          <div style={{ fontSize: "16px", color: "#6b7280" }}>
            theaiboss.ai
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "800",
              color: "#ffffff",
              lineHeight: "1.05",
              letterSpacing: "-1px",
            }}
          >
            Kathy Slowinski
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#9ca3af",
              fontWeight: "400",
              lineHeight: "1.4",
              maxWidth: "700px",
            }}
          >
            AI Keynote Speaker & Executive AI Advisor for CEOs
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "56px", alignItems: "flex-end" }}>
          {[
            { value: "4x", label: "Revenue per headcount" },
            { value: "$110M", label: "Revenue, ~40 people" },
            { value: "80%", label: "AI-handled support" },
            { value: "96%", label: "Codebase reduction" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#4a7c6f",
                  lineHeight: "1",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "13px", color: "#6b7280" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
