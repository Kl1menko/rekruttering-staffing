import type { Metadata } from "next";

import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Contact",
  description:
    "Submit your workforce request: launch timeline, SLA model, document scope, and responsibility matrix.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1>Contact</h1>
    </section>
  );
}
