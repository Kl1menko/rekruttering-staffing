import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ChevronRight, HardHat } from "lucide-react";

import { CTA } from "@/components/marketing/CTA";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { industries } from "@/content/industries";
import { industryDetails } from "@/content/industry-details";
import { buildSeo } from "@/lib/seo";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return buildSeo({
      title: "Industry not found",
      description: "The requested industry page is not available.",
      path: `/industries/${slug}`,
      noIndex: true,
    });
  }

  return buildSeo({
    title: industry.title,
    description: `${industry.summary} Volume: ${industry.typicalVolume} Fill speed: ${industry.fillSpeed}`,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailsPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  const details = industryDetails[slug as keyof typeof industryDetails];

  if (!industry || !details) {
    notFound();
  }

  return (
    <>
      <Section className="border-b border-border/60 pb-12">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground sm:text-sm">
              Industry
            </p>
            <h1 className="mt-3 text-[2.2rem] leading-[0.95] sm:text-[3rem] md:text-[4rem]">
              {industry.title}
            </h1>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-foreground/68">
              {industry.summary}
            </p>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-foreground/58 sm:text-base">
              {details.heroWho}
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/60 py-12">
        <Container>
          <h2 className="text-[1.9rem] leading-[0.95] sm:text-[2.3rem]">Typical roles</h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_93%,white_7%)]">
            <div className="grid grid-cols-[1fr_auto_auto] border-b border-black/10 px-4 py-2.5 text-xs uppercase tracking-[0.08em] text-foreground/55">
              <span>Role</span>
              <span className="text-right">Typical count</span>
              <span className="text-right">Notes</span>
            </div>
            {details.roles.map((row) => (
              <div
                key={row.role}
                className="grid grid-cols-[1fr_auto_auto] items-center border-b border-black/8 px-4 py-3 text-sm last:border-b-0"
              >
                <span className="text-foreground/72">{row.role}</span>
                <span className="text-right font-medium text-foreground">{row.typicalCount}</span>
                <span className="text-right text-foreground/58">{row.note}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/60 py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-2xl border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_92%,white_8%)] p-5 sm:p-6">
              <h2 className="text-[1.9rem] leading-[0.95] sm:text-[2.3rem]">Ramp-up plan</h2>
              <p className="mt-3 text-sm text-foreground/62">
                Typical volume: {industry.typicalVolume} · Fill speed: {industry.fillSpeed}
              </p>
              <div className="mt-5 space-y-3">
                {details.rampUpPlan.map((step) => (
                  <div key={step.phase} className="rounded-xl border border-black/10 bg-white/55 p-3.5">
                    <p className="text-xs uppercase tracking-[0.08em] text-foreground/52">{step.phase}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/74">{step.target}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_92%,white_8%)] p-5 sm:p-6">
              <h2 className="text-[1.9rem] leading-[0.95] sm:text-[2.3rem]">Requirements</h2>
              <ul className="mt-5 space-y-2.5">
                {details.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/68">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#6cb545]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/60 py-12">
        <Container>
          <article className="rounded-2xl border border-[#94ce70]/35 bg-[color:color-mix(in_srgb,#76df42_12%,var(--off-white)_88%)] p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <HardHat className="size-5 text-[#5da23a]" />
              <h2 className="text-[1.65rem] leading-[0.95] sm:text-[2.1rem]">Mini-case</h2>
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.08em] text-foreground/54">
              {details.miniCase.client}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-white/60 p-3.5">
                <p className="text-xs uppercase tracking-[0.08em] text-foreground/52">Challenge</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/72">{details.miniCase.challenge}</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white/60 p-3.5">
                <p className="text-xs uppercase tracking-[0.08em] text-foreground/52">Solution</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/72">{details.miniCase.solution}</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white/60 p-3.5">
                <p className="text-xs uppercase tracking-[0.08em] text-foreground/52">Result</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/72">{details.miniCase.result}</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-[#4c882b]"
            >
              Request staffing plan for this industry
              <ChevronRight className="size-4" />
            </Link>
          </article>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
