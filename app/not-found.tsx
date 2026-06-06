import Link from "next/link";
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
      <p className="mt-4 text-muted-foreground">
        The link may be out of date. Head back home, or book a demo and we&apos;ll
        take it from there.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Back to home
        </Link>
        <Link href="/demo" className={buttonVariants()}>
          Book a 15-minute demo
        </Link>
      </div>
    </Container>
  );
}
