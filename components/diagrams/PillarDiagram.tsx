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
      {/* the appliance */}
      <rect
        x="60"
        y="58"
        width="124"
        height="84"
        rx="8"
        fill="var(--diagram-muted)"
      />
      <line x1="82" y1="82" x2="162" y2="82" strokeLinecap="round" />
      <line
        x1="82"
        y1="98"
        x2="162"
        y2="98"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="88" cy="122" r="4" fill="currentColor" stroke="none" />
      <circle
        cx="104"
        cy="122"
        r="4"
        fill="currentColor"
        stroke="none"
        opacity="0.5"
      />

      {/* "no internet" — a globe with a slash through it */}
      <g stroke="var(--diagram-line)">
        <circle cx="248" cy="100" r="22" />
        <line x1="226" y1="100" x2="270" y2="100" />
        <path d="M248 78 a10 22 0 0 0 0 44 a10 22 0 0 0 0 -44" />
      </g>
      <line
        x1="230"
        y1="118"
        x2="266"
        y2="82"
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
      {/* source documents on the left */}
      {[60, 100, 140].map((y, i) => (
        <g key={y} opacity={1 - i * 0.12}>
          <rect
            x="34"
            y={y - 16}
            width="52"
            height="32"
            rx="4"
            fill="var(--diagram-muted)"
          />
          <line x1="44" y1={y - 4} x2="78" y2={y - 4} strokeLinecap="round" />
          <line
            x1="44"
            y1={y + 6}
            x2="70"
            y2={y + 6}
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>
      ))}

      {/* connectors converging into the appliance */}
      {[60, 100, 140].map((y) => (
        <path
          key={y}
          d={`M86 ${y} C150 ${y}, 156 100, 204 100`}
          stroke="var(--diagram-line)"
        />
      ))}

      {/* the appliance, holding the local index */}
      <rect
        x="204"
        y="56"
        width="92"
        height="88"
        rx="8"
        fill="var(--diagram-muted)"
      />
      <line x1="220" y1="80" x2="280" y2="80" strokeLinecap="round" />
      <line
        x1="220"
        y1="96"
        x2="280"
        y2="96"
        strokeLinecap="round"
        opacity="0.6"
      />
      <line
        x1="220"
        y1="112"
        x2="280"
        y2="112"
        strokeLinecap="round"
        opacity="0.6"
      />
      <line
        x1="220"
        y1="128"
        x2="262"
        y2="128"
        strokeLinecap="round"
        opacity="0.6"
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
