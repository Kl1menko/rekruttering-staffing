import { CheckCircle2, ClipboardCheck, Clock3, FileCheck2, Repeat2, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const proofPoints = [
  {
    title: "SLA-backed delivery",
    detail: "Clear fill-rate, attendance and replacement SLA with weekly KPI reporting.",
    icon: ClipboardCheck,
  },
  {
    title: "Fast response time",
    detail: "Initial staffing response within 2 business hours on working days.",
    icon: Clock3,
  },
  {
    title: "Replacement guarantee",
    detail: "Structured reserve pool and replacement workflow for critical shift gaps.",
    icon: Repeat2,
  },
  {
    title: "Compliance by default",
    detail: "Document checks, legal onboarding flow and audit-ready process controls.",
    icon: ShieldCheck,
  },
  {
    title: "On-site coordinators",
    detail: "Local coordinator support during launch and first-stage stabilization.",
    icon: CheckCircle2,
  },
];

const preLaunchPackage = [
  "NDA and confidentiality scope",
  "Cooperation contract with SLA appendix",
  "Compliance package and document checklist",
];

export function WhyPrimework() {
  return (
    <Section id="why-primework" className="border-t border-border/60">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          <div className="rounded-[1.6rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_90%,var(--sand)_10%)] p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground sm:text-sm">
              Why Primework?
            </p>
            <h2 className="mt-3 text-[2rem] leading-[0.96] sm:text-[2.45rem] md:text-[2.85rem]">
              Operational reliability before your project goes live.
            </h2>
            <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-foreground/64 sm:text-base">
              We focus on measurable outcomes and controlled execution, not generic promises.
            </p>

            <div className="mt-6 rounded-2xl border border-[#96d16f]/38 bg-[color:color-mix(in_srgb,#76df42_16%,var(--off-white)_84%)] p-4 sm:p-5">
              <p className="text-sm font-semibold text-foreground sm:text-base">
                What you get before launch
              </p>
              <ul className="mt-3 space-y-2.5">
                {preLaunchPackage.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/72">
                    <FileCheck2 className="mt-0.5 size-4 shrink-0 text-[#6cb545]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-2xl border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_92%,white_8%)] p-4 sm:p-5"
              >
                <point.icon className="size-5 text-[#6cb545]" />
                <p className="mt-3 text-[1.05rem] font-semibold leading-tight text-foreground sm:text-[1.12rem]">
                  {point.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/62">{point.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

