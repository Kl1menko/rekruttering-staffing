import type { Metadata } from "next";

import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Industries We Support",
  description:
    "Workforce solutions for logistics, manufacturing, food processing, retail, hospitality, and construction support.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1>Industries</h1>
    </section>
  );
}
