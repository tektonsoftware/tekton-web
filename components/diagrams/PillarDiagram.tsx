/**
 * Schematic placeholders for the four product pillars. Each is a restrained line
 * drawing — intentionally simple, swap for richer art later if desired.
 * Selected by `variant`, which maps to the `diagram` key in content/product.ts.
 */
type Variant = "appliance" | "connect" | "verify" | "shield";

const TITLES: Record<Variant, string> = {
  appliance: "An on-premise appliance running offline",
  connect: "Connectors ingesting from local sources into the appliance",
  verify: "An answer linked to a verified source passage",
  shield: "Access control and audit logging around the system",
};

export function PillarDiagram({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      role="img"
      aria-label={TITLES[variant]}
      style={{ color: "var(--diagram)", width: "100%", height: "auto" }}
    >
      {variant === "appliance" && <Appliance />}
      {variant === "connect" && <Connect />}
      {variant === "verify" && <Verify />}
      {variant === "shield" && <Shield />}
    </svg>
  );
}

function Appliance() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect
        x="90"
        y="50"
        width="140"
        height="100"
        rx="8"
        fill="var(--diagram-muted)"
      />
      <line x1="112" y1="78" x2="208" y2="78" strokeLinecap="round" />
      <line
        x1="112"
        y1="98"
        x2="208"
        y2="98"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="116" cy="124" r="4" fill="currentColor" stroke="none" />
      <circle
        cx="132"
        cy="124"
        r="4"
        fill="currentColor"
        stroke="none"
        opacity="0.5"
      />
      {/* no-cloud mark */}
      <path d="M250 60 a16 16 0 1 0 0 32 h-4" stroke="var(--diagram-line)" />
      <line
        x1="238"
        y1="58"
        x2="262"
        y2="94"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  );
}

function Connect() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      {[60, 100, 140].map((y, i) => (
        <rect
          key={y}
          x="30"
          y={y - 14}
          width="60"
          height="28"
          rx="4"
          fill="var(--diagram-muted)"
          opacity={1 - i * 0.15}
        />
      ))}
      <rect
        x="210"
        y="66"
        width="80"
        height="68"
        rx="8"
        fill="var(--diagram-muted)"
      />
      {[60, 100, 140].map((y) => (
        <path
          key={y}
          d={`M90 ${y} C150 ${y}, 160 100, 210 100`}
          stroke="var(--diagram-line)"
        />
      ))}
      <path
        d="M256 92 l8 8 l-8 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Verify() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      {/* answer card */}
      <rect
        x="34"
        y="50"
        width="150"
        height="100"
        rx="8"
        fill="var(--diagram-muted)"
      />
      <line x1="54" y1="78" x2="164" y2="78" strokeLinecap="round" />
      <line
        x1="54"
        y1="98"
        x2="150"
        y2="98"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="54"
        y1="116"
        x2="120"
        y2="116"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* link to source */}
      <path
        d="M184 100 C214 100, 214 80, 244 80"
        stroke="var(--diagram-line)"
      />
      {/* source doc with verified check */}
      <rect
        x="244"
        y="44"
        width="44"
        height="60"
        rx="4"
        fill="var(--diagram-muted)"
      />
      <circle cx="288" cy="44" r="13" fill="var(--background)" />
      <circle cx="288" cy="44" r="13" />
      <path
        d="M282 44 l4 4 l8 -8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Shield() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M160 36 l54 18 v44 c0 38 -30 56 -54 66 c-24 -10 -54 -28 -54 -66 v-44 z"
        fill="var(--diagram-muted)"
      />
      {/* lock */}
      <rect x="146" y="92" width="28" height="24" rx="3" />
      <path d="M151 92 v-6 a9 9 0 0 1 18 0 v6" />
      <circle cx="160" cy="104" r="3" fill="currentColor" stroke="none" />
    </g>
  );
}
