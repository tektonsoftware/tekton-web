import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { privacy, privacyMeta } from "@/content/legal";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: privacyMeta.title,
  description: privacyMeta.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
