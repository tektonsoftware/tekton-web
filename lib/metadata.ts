import type { Metadata } from "next";
import { SITE_URL, site } from "@/content/site";

/** Alt text for the site-wide link-preview card (app/opengraph-image.tsx). */
export const OG_ALT = "Tekton Software: focused software for serious work";

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
  // Share titles get the same suffix the <title> template adds.
  const shareTitle = titleAbsolute ? title : `${title} · Tekton Software`;
  // A page's own openGraph/twitter objects replace the root segment's
  // file-based image (app/opengraph-image.tsx), so name it explicitly.
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: OG_ALT,
  };
  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Tekton Software",
      title: shareTitle,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
  };
}

/** Root metadata: title template disambiguates Tekton on every page. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tekton — Independent Software Company",
    template: "%s · Tekton Software",
  },
  description: site.description,
  applicationName: "Tekton Software",
  keywords: [
    "Tekton Software",
    "software company",
    "business software",
    "software products",
  ],
  robots: { index: true, follow: true },
};
