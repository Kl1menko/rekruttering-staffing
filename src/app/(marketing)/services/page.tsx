import type { Metadata } from "next";

import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Employer Services",
  description:
    "Temporary staffing, permanent recruitment, payroll/compliance, on-site coordination, volume hiring, and workforce analytics.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1>Services</h1>
    </section>
  );
}
