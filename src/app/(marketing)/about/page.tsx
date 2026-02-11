import type { Metadata } from "next";

import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "About",
  description:
    "Prime Work is a B2B hiring and compliance partner for shift-based operations teams.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1>About</h1>
    </section>
  );
}
