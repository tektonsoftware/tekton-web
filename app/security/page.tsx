import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { security, securityMeta } from "@/content/legal";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: securityMeta.title,
  description: securityMeta.description,
  path: "/security",
});

export default function SecurityPage() {
  return <LegalPage doc={security} />;
}
