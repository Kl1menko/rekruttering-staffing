import type { Metadata } from "next";

import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Blog",
  description:
    "Insights on staffing, hiring, workforce compliance, and operational execution in B2B teams.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1>Blog</h1>
    </section>
  );
}
