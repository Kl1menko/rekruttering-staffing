import type { Metadata } from "next";

import { CTA } from "@/components/marketing/CTA";
import { FAQ } from "@/components/marketing/FAQ";
import { Hero } from "@/components/marketing/Hero";
import { IndustriesGrid } from "@/components/marketing/IndustriesGrid";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { Testimonials } from "@/components/marketing/Testimonials";
import { TrustBar } from "@/components/marketing/TrustBar";
import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Recruitment and staffing for employers",
  description:
    "Fast workforce hiring for logistics, manufacturing and other shift-based operations with transparent SLA and compliance.",
  path: "/",
});

export default function MarketingHomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <IndustriesGrid />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
