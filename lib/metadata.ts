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
  titleAbsolute = false,
}: {
  title: string;
  description: string;
  path?: string;
  // The home page is in the same segment as the root layout, so the title
  // template does not apply to it — pass titleAbsolute to set the full title.
  titleAbsolute?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    // og:image / twitter:image are supplied by the file-based conventions
    // (app/opengraph-image.tsx + app/twitter-image.tsx).
    openGraph: {
      type: "website",
      siteName: "Tekton — Private AI",
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
