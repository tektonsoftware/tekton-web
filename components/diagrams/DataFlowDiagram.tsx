/**
 * Schematic: the LAN boundary. Sources → appliance → users all sit inside the
 * boundary; the internet sits outside it, and the connection across is blocked.
 * This is the security page's most important visual.
 */
export function DataFlowDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 360"
      className={className}
      role="img"
      aria-labelledby="df-title df-desc"
      style={{ color: "var(--diagram)", width: "100%", height: "auto" }}
    >
      <title id="df-title">Tekton data-flow boundary</title>
      <desc id="df-desc">
        Document sources, the Tekton appliance, and your users all sit inside your
        local network boundary. The public internet sits outside it, and the path
        between your network and the internet is blocked — no data crosses out.
      </desc>

      {/* LAN boundary */}
      <rect
        x="16"
        y="16"
        width="528"
        height="328"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="2 0"
      />
      <text x="32" y="42" fontSize="13" fontWeight="600" fill="currentColor">
        Your network (LAN)
      </text>

      {/* Sources */}
      <g>
        <rect x="48" y="120" width="130" height="120" rx="8" fill="var(--diagram-muted)" stroke="currentColor" strokeWidth="2" />
        <rect x="74" y="146" width="36" height="46" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="92" y="160" width="36" height="46" rx="3" fill="var(--diagram-muted)" stroke="currentColor" strokeWidth="2" />
        <text x="113" y="226" textAnchor="middle" fontSize="12" fill="currentColor">
          Your documents
        </text>
      </g>

      <FlowArrow x1={178} x2={236} y={180} />

      {/* Appliance */}
      <g>
        <rect x="240" y="110" width="140" height="140" rx="8" fill="var(--diagram-muted)" stroke="currentColor" strokeWidth="2" />
        <rect x="266" y="138" width="88" height="8" rx="2" fill="currentColor" />
        <rect x="266" y="156" width="88" height="8" rx="2" fill="currentColor" opacity="0.5" />
        <circle cx="272" cy="182" r="4" fill="currentColor" />
        <circle cx="288" cy="182" r="4" fill="currentColor" opacity="0.5" />
        <text x="310" y="236" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">
          Tekton appliance
        </text>
      </g>

      <FlowArrow x1={380} x2={438} y={180} />

      {/* Users */}
      <g>
        <rect x="442" y="120" width="86" height="120" rx="8" fill="var(--diagram-muted)" stroke="currentColor" strokeWidth="2" />
        <circle cx="485" cy="158" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M463 200 a22 18 0 0 1 44 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="485" y="226" textAnchor="middle" fontSize="12" fill="currentColor">
          Your team
        </text>
      </g>

      {/* Internet, outside the boundary */}
      <g>
        <ellipse cx="640" cy="150" rx="60" ry="40" fill="none" stroke="var(--diagram-line)" strokeWidth="2" />
        <text x="640" y="155" textAnchor="middle" fontSize="13" fill="var(--diagram-line)">
          Internet
        </text>
      </g>

      {/* Blocked path between LAN and internet */}
      <line x1="544" y1="180" x2="588" y2="160" stroke="var(--diagram-line)" strokeWidth="2" strokeDasharray="5 5" />
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="556" y1="160" x2="576" y2="186" />
        <line x1="576" y1="160" x2="556" y2="186" />
      </g>
      <text x="566" y="214" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">
        No data leaves
      </text>
    </svg>
  );
}

function FlowArrow({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <g stroke="var(--diagram-line)" strokeWidth="2" fill="none">
      <line x1={x1} y1={y} x2={x2 - 8} y2={y} strokeLinecap="round" />
      <path d={`M${x2 - 14} ${y - 6} l8 6 l-8 6`} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}
