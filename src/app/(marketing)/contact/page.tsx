import type { Metadata } from "next";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { CTA } from "@/components/marketing/CTA";
import { WorldCoverageMap } from "@/components/marketing/WorldCoverageMap";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { buildSeo } from "@/lib/seo";

export const metadata: Metadata = buildSeo({
  title: "Contact",
  description:
    "Submit your workforce request: launch timeline, SLA model, document scope, and responsibility matrix.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section className="border-t border-border/60 pb-10 md:pb-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.8rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_90%,var(--sand)_10%)] p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
              <h1 className="mt-3 text-[2.35rem] leading-[0.92] sm:text-[3rem] lg:text-[3.6rem]">
                Let us launch your hiring plan safely and fast.
              </h1>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-foreground/62">
                Share your demand, timeline, and role profile. We will return with the service
                model, compliance scope, and first staffing plan.
              </p>

              <div className="mt-7 space-y-3">
                <p className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/45 px-3.5 py-3 text-sm">
                  <Mail className="mt-0.5 size-4.5 text-[#7a994c]" />
                  <a
                    href="mailto:partnerships@primework.example"
                    className="transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
                  >
                    partnerships@primework.example
                  </a>
                </p>
                <p className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/45 px-3.5 py-3 text-sm">
                  <Phone className="mt-0.5 size-4.5 text-[#7a994c]" />
                  <a
                    href="tel:+48221002030"
                    className="transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
                  >
                    +48 22 100 20 30
                  </a>
                </p>
                <p className="flex items-start gap-3 rounded-xl border border-black/10 bg-white/45 px-3.5 py-3 text-sm">
                  <MapPin className="mt-0.5 size-4.5 text-[#7a994c]" />
                  <span>Warsaw, Poland · operations across Central Europe</span>
                </p>
                <p className="flex items-start gap-3 rounded-xl border border-[#9fd679]/35 bg-[#e9f8de] px-3.5 py-3 text-sm text-[#2d6a18]">
                  <ShieldCheck className="mt-0.5 size-4.5 text-[#6a9d2e]" />
                  <span>NDA, contract, and audit-ready compliance package before launch.</span>
                </p>
              </div>
            </div>

            <WorldCoverageMap />
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
