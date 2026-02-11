import type { Metadata } from "next";

import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Candidates",
  description:
    "Candidate-focused direction: open roles, onboarding process, and documentation requirements.",
  path: "/candidates",
});

export default function CandidatesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1>Candidates</h1>
    </section>
  );
}
