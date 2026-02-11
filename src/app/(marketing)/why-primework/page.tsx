import type { Metadata } from "next";

import { CTA } from "@/components/marketing/CTA";
import { RiskCompliance } from "@/components/marketing/RiskCompliance";
import { WhyPrimework } from "@/components/marketing/WhyPrimework";
import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Why Primework",
  description:
    "Proof-based staffing approach with SLA, compliance controls, replacement workflows and pre-launch documentation.",
  path: "/why-primework",
});

export default function WhyPrimeworkPage() {
  return (
    <>
      <WhyPrimework />
      <RiskCompliance />
      <CTA />
    </>
  );
}

