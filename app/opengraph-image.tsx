import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_URL, site } from "@/content/site";
import { TK_PATH, TK_VIEWBOX } from "@/components/Wordmark";
import { OG_ALT } from "@/lib/metadata";

// Link-preview card, generated at build into a static PNG. Applies site-wide
// (twitter-image.tsx re-exports it). Same palette and type as the site: beige
// ground, ink, Geist, ruled layout, tracked caps.
export const alt = OG_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#141413";
const GROUND = "#e3dccf";
const MUTED = "#4a463f";

const GEIST = join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans");

export default async function OpengraphImage() {
  const [bold, semibold, regular] = await Promise.all([
    readFile(join(GEIST, "Geist-Bold.ttf")),
    readFile(join(GEIST, "Geist-SemiBold.ttf")),
    readFile(join(GEIST, "Geist-Regular.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: GROUND,
        color: INK,
        padding: "72px 80px 64px",
        fontFamily: "Geist",
      }}
    >
      {/* The TK mark, large: the card's one graphic element. */}
      <svg viewBox={TK_VIEWBOX} width={318} height={130} fill={INK}>
        <path d={TK_PATH} />
      </svg>

      <div
        style={{
          display: "flex",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -2.5,
          lineHeight: 1.02,
          maxWidth: 900,
        }}
      >
        {site.tagline}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `3px solid ${INK}`,
          paddingTop: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.22em",
          }}
        >
          TEKTON SOFTWARE
        </div>
        <div style={{ display: "flex", fontSize: 24, color: MUTED }}>
          {new URL(SITE_URL).host.replace(/^www\./, "")}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
