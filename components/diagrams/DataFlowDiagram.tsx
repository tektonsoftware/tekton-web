/**
 * Schematic: the LAN boundary. Sources → appliance → users all sit inside the
 * boundary; the internet sits outside it, and the connection across is blocked.
 * This is the security page's most important visual.
 */
export function DataFlowDiagram({ className }: { className?: string }) {
  const rowY = 172;
  return (
    <svg
      viewBox="0 0 800 300"
      className={className}
      role="img"
      aria-labelledby="df-title df-desc"
      style={{ color: "var(--diagram)", width: "100%", height: "auto" }}
    >
      <title id="df-title">Tekton data-flow boundary</title>
      <desc id="df-desc">
        Document sources, the Tekton appliance, and your users all sit inside
        your local network boundary. The public internet sits outside it, and
        the path between your network and the internet is blocked — no data
        crosses out.
      </desc>

      {/* LAN boundary */}
      <rect
        x="16"
        y="40"
        width="512"
        height="224"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text x="34" y="66" fontSize="13" fontWeight="600" fill="currentColor">
        Your network (LAN)
      </text>

      {/* Sources */}
      <g>
        <rect
          x="44"
          y="120"
          width="120"
          height="104"
          rx="8"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="78"
          y="148"
          width="34"
          height="46"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="94"
          y="160"
          width="34"
          height="46"
          rx="3"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="104"
          y="246"
          textAnchor="middle"
          fontSize="12"
          fill="currentColor"
        >
          Your documents
        </text>
      </g>

      <FlowArrow x1={164} x2={206} y={rowY} />

      {/* Appliance */}
      <g>
        <rect
          x="210"
          y="110"
          width="132"
          height="124"
          rx="8"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="238"
          y="142"
          width="76"
          height="8"
          rx="2"
          fill="currentColor"
        />
        <rect
          x="238"
          y="160"
          width="76"
          height="8"
          rx="2"
          fill="currentColor"
          opacity="0.5"
        />
        <circle cx="244" cy="188" r="4" fill="currentColor" />
        <circle cx="260" cy="188" r="4" fill="currentColor" opacity="0.5" />
        <text
          x="276"
          y="246"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="currentColor"
        >
          Tekton appliance
        </text>
      </g>

      <FlowArrow x1={342} x2={384} y={rowY} />

      {/* Users */}
      <g>
        <rect
          x="388"
          y="120"
          width="104"
          height="104"
          rx="8"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="440"
          cy="156"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M418 200 a22 17 0 0 1 44 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="440"
          y="246"
          textAnchor="middle"
          fontSize="12"
          fill="currentColor"
        >
          Your team
        </text>
      </g>

      {/* Attempted path to the internet — drawn faint, then blocked by the sign. */}
      <line
        x1="492"
        y1={rowY}
        x2="638"
        y2={rowY}
        stroke="var(--diagram-line)"
        strokeWidth="2"
        strokeDasharray="5 6"
      />

      {/* Internet, outside the boundary */}
      <ellipse
        cx="704"
        cy={rowY}
        rx="62"
        ry="44"
        fill="none"
        stroke="var(--diagram-line)"
        strokeWidth="2"
      />
      <text
        x="704"
        y={rowY + 5}
        textAnchor="middle"
        fontSize="13"
        fill="var(--diagram-line)"
      >
        Internet
      </text>

      {/*
        Prohibition sign on the path to the internet — its fill masks the dashed
        line beneath. No inline label needed: the section heading ("Nothing leaves
        the LAN.") and lead paragraph already state the message.
      */}
      <circle
        cx="566"
        cy={rowY}
        r="22"
        fill="var(--card)"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <line
        x1="551"
        y1={rowY + 15}
        x2="581"
        y2={rowY - 15}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlowArrow({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <g stroke="var(--diagram-line)" strokeWidth="2" fill="none">
      <line x1={x1} y1={y} x2={x2 - 8} y2={y} strokeLinecap="round" />
      <path
        d={`M${x2 - 14} ${y - 6} l8 6 l-8 6`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}
