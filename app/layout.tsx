import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, site } from "@/content/site";
import { rootMetadata } from "@/lib/metadata";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Editorial serif for accents only (section accents, pull quotes).
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

// Logo wordmark only — the brand lockup is set in Inter 800 (see components/Wordmark).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["800"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

// JSON-LD Organization schema — helps disambiguate the company from the
// CNCF Tekton project in search results.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: SITE_URL,
  description: site.description,
  slogan: site.tagline,
  foundingLocation: {
    "@type": "Place",
    name: site.founderLocation,
  },
  sameAs: site.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${newsreader.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          {/* Skip link for keyboard / screen-reader users. */}
          <a
            href="#main"
            className="focus:bg-accent focus:text-accent-foreground sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[var(--radius-base)] focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
