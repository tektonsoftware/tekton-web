import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] max-w-2xl flex-col justify-center py-24">
      <SectionLabel>404</SectionLabel>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        That page isn&apos;t here.
      </h1>
      <p className="text-muted-foreground mt-4">
        The link may be out of date. Head back home, or get in touch and
        we&apos;ll point you in the right direction.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Back to home
        </Link>
        <Link href={site.cta.href} className={buttonVariants()}>
          {site.cta.label}
        </Link>
      </div>
    </Container>
  );
}
