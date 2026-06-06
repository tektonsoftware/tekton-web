import type { Metadata } from "next";
import { SITE_URL, site } from "@/content/site";

/**
 * Build per-page metadata with consistent OpenGraph + Twitter cards.
 *
 * Titles are always disambiguated from the CNCF Tekton project: the template
 * appends a descriptive suffix so a bare "Tekton" never ships.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Tekton — Private AI",
      title,
      description,
      url,
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default.png"],
    },
  };
}

/** Root metadata: title template disambiguates Tekton on every page. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tekton — Private AI for Sensitive Data",
    template: "%s · Tekton — Private AI",
  },
  description: site.description,
  applicationName: "Tekton — Private AI",
  keywords: [
    "private AI",
    "on-premise AI",
    "offline AI appliance",
    "verified citations",
    "data privacy",
    "self-hosted AI",
  ],
  robots: { index: true, follow: true },
};
