import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Branded OG card, generated at build into a static image. Applies site-wide.
export const alt = "Tekton — Private AI for Sensitive Data";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e100f",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#6cae8e" }}>
          Tekton
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: "#e9ebe8",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Private AI for businesses with sensitive data.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#a2a8a3", maxWidth: 980 }}>
            {site.tagline === "Private AI for businesses with sensitive data."
              ? "Your data. Your network. Your AI."
              : site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a2a8a3" }}>
          On-premise · Verified citations · CISSP-led
        </div>
      </div>
    ),
    { ...size }
  );
}
