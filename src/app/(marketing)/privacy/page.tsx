import type { Metadata } from "next";

import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Privacy Policy",
  description:
    "Privacy policy for B2B inquiries, recruitment workflows, and service-related data processing.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <h1>Privacy Policy</h1>
      <p className="text-measure mt-5 text-muted-foreground">
        This page outlines how Prime Work processes personal data for B2B inquiries,
        hiring workflows and service delivery.
      </p>
    </section>
  );
}
