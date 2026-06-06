/**
 * Schematic: appliance arrives → data ingested locally → verified-citation queries.
 * Line-art only, theme-aware via CSS vars (--diagram / --diagram-muted / --diagram-line).
 */
export function HowItWorksDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 200"
      className={className}
      role="img"
      aria-labelledby="hiw-title hiw-desc"
      style={{ color: "var(--diagram)", width: "100%", height: "auto" }}
    >
      <title id="hiw-title">How Tekton works, in three steps</title>
      <desc id="hiw-desc">
        An appliance is delivered and installed, your documents are ingested and
        indexed locally on it, and your team queries it to receive answers with
        verified citations — all within your network.
      </desc>

      {/* Step 1 — appliance */}
      <g>
        <rect
          x="20"
          y="55"
          width="170"
          height="90"
          rx="8"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="44" y="80" width="122" height="8" rx="2" fill="currentColor" />
        <rect
          x="44"
          y="98"
          width="122"
          height="8"
          rx="2"
          fill="currentColor"
          opacity="0.5"
        />
        <circle cx="50" cy="124" r="4" fill="currentColor" />
        <text
          x="105"
          y="178"
          textAnchor="middle"
          fontSize="13"
          fill="currentColor"
        >
          Appliance arrives
        </text>
      </g>

      {/* arrow */}
      <Arrow x1={196} x2={258} />

      {/* Step 2 — local ingest */}
      <g>
        <rect
          x="265"
          y="55"
          width="170"
          height="90"
          rx="8"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* stacked docs */}
        <rect
          x="300"
          y="78"
          width="40"
          height="50"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="312"
          y="70"
          width="40"
          height="50"
          rx="3"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M362 95 h28 M362 105 h28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text
          x="350"
          y="178"
          textAnchor="middle"
          fontSize="13"
          fill="currentColor"
        >
          Ingested locally
        </text>
      </g>

      <Arrow x1={441} x2={503} />

      {/* Step 3 — verified query */}
      <g>
        <rect
          x="510"
          y="55"
          width="190"
          height="90"
          rx="8"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="534"
          y="78"
          width="100"
          height="8"
          rx="2"
          fill="currentColor"
        />
        {/* checkmark = verified citation */}
        <circle
          cx="650"
          cy="82"
          r="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M645 82 l4 4 l7 -8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="534"
          y="104"
          width="140"
          height="6"
          rx="2"
          fill="currentColor"
          opacity="0.5"
        />
        <rect
          x="534"
          y="118"
          width="110"
          height="6"
          rx="2"
          fill="currentColor"
          opacity="0.5"
        />
        <text
          x="605"
          y="178"
          textAnchor="middle"
          fontSize="13"
          fill="currentColor"
        >
          Verified citations
        </text>
      </g>
    </svg>
  );
}

function Arrow({ x1, x2 }: { x1: number; x2: number }) {
  return (
    <g stroke="var(--diagram-line)" strokeWidth="2" fill="none">
      <line x1={x1} y1="100" x2={x2 - 8} y2="100" strokeLinecap="round" />
      <path
        d={`M${x2 - 14} 94 l8 6 l-8 6`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}
