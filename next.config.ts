import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static rendering everywhere except the /api/demo route handler.
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
