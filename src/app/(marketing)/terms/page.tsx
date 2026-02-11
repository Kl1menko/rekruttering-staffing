import type { Metadata } from "next";

import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Terms of Service",
  description:
    "General terms of cooperation: service scope, responsibilities, payment terms, and operational SLA.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <h1>Terms of Service</h1>
      <p className="text-measure mt-5 text-muted-foreground">
        This page describes the general terms of cooperation, service scope,
        responsibilities and payment terms.
      </p>
    </section>
  );
}
