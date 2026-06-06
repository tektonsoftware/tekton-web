/**
 * Schematic: the appliance's internal layers, all on-device. Clients connect over
 * the LAN to a single appliance that handles auth, ingestion/index, inference, and
 * the verify + audit layers — with no external dependency.
 */
export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 300"
      className={className}
      role="img"
      aria-labelledby="arch-title arch-desc"
      style={{ color: "var(--diagram)", width: "100%", height: "auto" }}
    >
      <title id="arch-title">Tekton appliance architecture</title>
      <desc id="arch-desc">
        Clients on your network connect over the LAN to a single Tekton
        appliance. The appliance contains, on-device, the authentication layer,
        local ingestion and index, model inference, the verified-citation
        engine, and the audit and access-control layer. No layer depends on an
        external service.
      </desc>

      {/* clients */}
      <g>
        <rect
          x="24"
          y="116"
          width="120"
          height="68"
          rx="8"
          fill="var(--diagram-muted)"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="84"
          cy="142"
          r="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M66 172 a18 14 0 0 1 36 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="84"
          y="200"
          textAnchor="middle"
          fontSize="12"
          fill="currentColor"
        >
          Clients
        </text>
      </g>

      {/* LAN link */}
      <g stroke="var(--diagram-line)" strokeWidth="2" fill="none">
        <line x1="144" y1="150" x2="196" y2="150" strokeLinecap="round" />
        <path
          d="M190 144 l8 6 l-8 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="170"
        y="138"
        textAnchor="middle"
        fontSize="11"
        fill="var(--diagram-line)"
      >
        LAN
      </text>

      {/* appliance with stacked layers */}
      <rect
        x="206"
        y="36"
        width="490"
        height="228"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text x="226" y="62" fontSize="13" fontWeight="600" fill="currentColor">
        Tekton appliance · on-device
      </text>

      {[
        "Authentication — Active Directory / Entra ID",
        "Tekton Connect — local ingestion & index",
        "Model inference — runs on the appliance",
        "Tekton Verify — verified-citation engine",
        "Tekton Shield — RBAC & audit logging",
      ].map((label, i) => (
        <g key={label}>
          <rect
            x="226"
            y={78 + i * 36}
            width="450"
            height="28"
            rx="5"
            fill="var(--diagram-muted)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <text x="240" y={96 + i * 36} fontSize="12" fill="currentColor">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
