import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { terms, termsMeta } from "@/content/legal";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: termsMeta.title,
  description: termsMeta.description,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
