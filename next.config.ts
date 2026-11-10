import type { NextConfig } from "next";

// Pages from the earlier AI-appliance site. They were removed on 10 November
// 2026; old links and search results land on the home page instead.
const REMOVED_PATHS = [
  "/product",
  "/pricing",
  "/about",
  "/demo",
  "/security-one-pager.pdf",
];

// Content-Security-Policy. script-src allows inline scripts because Next.js
// static pages inline their page data and next-themes inlines its no-flash
// theme script; nonces would force every page to render dynamically. The site
// takes no user input, so this policy's value is in the other directives:
// no framing, no plugins, no foreign base URL, forms and fetches to this
// origin only.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

// HSTS is set by Vercel (max-age=63072000), so it isn't repeated here.
const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Every route is static.
  reactStrictMode: true,
  poweredByHeader: false,

  async redirects() {
    return REMOVED_PATHS.map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },

  async headers() {
    // The dev server needs eval for fast refresh, which this CSP blocks.
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
