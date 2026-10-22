import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { TK_PATH, TK_VIEWBOX } from "@/components/Wordmark";

// Branded OG card, generated at build into a static image. Applies site-wide.
export const alt = "Tekton — Independent Software Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#e3dccf",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 22,
          color: "#141413",
        }}
      >
        <svg viewBox={TK_VIEWBOX} width={132} height={54} fill="#141413">
          <path d={TK_PATH} />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.22em",
            lineHeight: 1.25,
          }}
        >
          <span>TEKTON</span>
          <span>SOFTWARE</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#141413",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#4a463f",
            maxWidth: 980,
          }}
        >
          An independent software company.
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#4a463f" }}>
        {site.founderLocation}
      </div>
    </div>,
    { ...size }
  );
}
