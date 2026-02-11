import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ChevronRight, ShieldCheck } from "lucide-react";

import { CTA } from "@/components/marketing/CTA";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/content/services";
import { serviceDetails } from "@/content/service-details";
import { buildSeo } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return buildSeo({
      title: "Service not found",
      description: "The requested service page is not available.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildSeo({
    title: service.title,
    description: `${service.summary} SLA: ${service.sla} Timeline: ${service.timeline}`,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const details = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service || !details) {
    notFound();
  }

  return (
    <>
      <Section className="border-b border-border/60 pb-12">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground sm:text-sm">
              Service
            </p>
            <h1 className="mt-3 text-[2.2rem] leading-[0.95] sm:text-[3rem] md:text-[4rem]">
              {service.title}
            </h1>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-foreground/68">
              {service.summary}
            </p>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-foreground/58 sm:text-base">
              {details.heroWho}
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/60 py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-[1.9rem] leading-[0.95] sm:text-[2.3rem]">What&apos;s included</h2>
              <ul className="mt-5 grid gap-3">
                {details.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_92%,white_8%)] p-3.5 text-sm leading-relaxed text-foreground/72 sm:text-base"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-[#6cb545]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-[#95cc73]/35 bg-[color:color-mix(in_srgb,#76df42_13%,var(--off-white)_87%)] p-5 sm:p-6">
              <p className="text-sm font-semibold text-foreground sm:text-base">Scope highlights</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/66">{service.whatIncluded}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/66">
                <span className="font-semibold text-foreground">Documents:</span> {service.documents}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/66">
                <span className="font-semibold text-foreground">Risk ownership:</span>{" "}
                {service.riskOwnership}
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/60 py-12">
        <Container>
          <h2 className="text-[1.9rem] leading-[0.95] sm:text-[2.3rem]">SLA &amp; Timeline</h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_93%,white_7%)]">
            <div className="grid grid-cols-[1fr_auto] border-b border-black/10 px-4 py-2.5 text-xs uppercase tracking-[0.08em] text-foreground/55">
              <span>Commitment</span>
              <span>Target</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] border-b border-black/8 px-4 py-3 text-sm">
              <span className="text-foreground/72">Core SLA</span>
              <span className="font-medium text-foreground">{service.sla}</span>
            </div>
            <div className="grid grid-cols-[1fr_auto] border-b border-black/8 px-4 py-3 text-sm">
              <span className="text-foreground/72">Delivery timeline</span>
              <span className="font-medium text-foreground">{service.timeline}</span>
            </div>
            {details.slaRows.map((row) => (
              <div key={row.metric} className="grid grid-cols-[1fr_auto] border-b border-black/8 px-4 py-3 text-sm last:border-b-0">
                <span className="text-foreground/72">{row.metric}</span>
                <span className="font-medium text-foreground">{row.target}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border/60 py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-[1.9rem] leading-[0.95] sm:text-[2.3rem]">Pricing model</h2>
              <ul className="mt-5 space-y-3">
                {details.pricingModel.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/70 sm:text-base">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#6cb545]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-[#4c882b]"
              >
                Request a tailored proposal
                <ChevronRight className="size-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-[1.9rem] leading-[0.95] sm:text-[2.3rem]">Service FAQ</h2>
              <Accordion type="single" collapsible className="mt-5 space-y-3">
                {details.faq.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`service-faq-${index}`}
                    className="overflow-hidden rounded-xl border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_93%,white_7%)] px-1"
                  >
                    <AccordionTrigger className="px-4 py-4 text-left text-sm font-semibold no-underline hover:no-underline sm:text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-foreground/68">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
