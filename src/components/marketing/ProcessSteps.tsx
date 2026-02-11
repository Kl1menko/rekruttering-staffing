import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Capture the brief",
    description: "Role scope and hiring targets approved",
  },
  {
    title: "Align the model",
    description: "Legal model and SLA confirmed",
  },
  {
    title: "Launch sourcing",
    description: "Shortlist pipeline goes live",
  },
  {
    title: "Run selection",
    description: "Screening and document checks",
  },
  {
    title: "Deploy to shifts",
    description: "Onboarding and shift allocation",
  },
  {
    title: "Report transparently",
    description: "Weekly KPI and quality reporting",
  },
];

export function ProcessSteps() {
  return (
    <Section id="process" className="border-t border-border/60">
      <Container>
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[radial-gradient(110%_90%_at_50%_55%,color-mix(in_srgb,var(--off-white)_70%,var(--sand)_30%)_0%,color-mix(in_srgb,var(--off-white)_88%,var(--sand)_12%)_56%,transparent_100%)] p-4 sm:rounded-[2rem] sm:p-7 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,0,0,0.06)_1px,transparent_1px)] bg-[size:2.8rem_2.8rem] opacity-30" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_center,rgba(206,243,187,0.5)_0%,rgba(206,243,187,0)_72%)]" />

          <div className="relative z-10 grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground sm:text-sm">Process</p>
              <h2 className="mt-3 max-w-[12ch] text-[1.72rem] leading-[0.96] sm:max-w-none sm:text-[2.6rem] md:text-[3.3rem]">
                Simplify Your Recruitment
                <br />
                And <span className="text-foreground/42">Maximize Results</span>
              </h2>
              <p className="mt-4 max-w-[34rem] text-sm leading-relaxed text-foreground/58 sm:text-base">
                Streamline your hiring workflow with clear stage ownership, documented compliance,
                and predictable staffing outcomes.
              </p>
              <Button
                asChild
                className="mt-6 h-12 rounded-2xl bg-[#76df42] px-7 text-base font-semibold text-[#132300] hover:bg-[#6ed23d]"
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>

            <div className="overflow-x-hidden rounded-[1.35rem] border border-black/8 bg-white/80 p-2.5 shadow-[0_16px_34px_-26px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:rounded-[1.7rem] sm:p-4">
              <div className="space-y-2.5">
                {steps.map((step, index) => {
                  const active = index === 1;
                  return (
                    <article
                      key={step.title}
                      className={[
                        "flex min-w-0 items-center gap-2.5 overflow-hidden rounded-xl border px-2.5 py-2.5 transition-transform duration-200 sm:gap-3 sm:rounded-[1.2rem] sm:px-3.5 sm:py-3",
                        active
                          ? "border-[#0b7c72] bg-[#046e68] text-[#eafff4]"
                          : "border-black/10 bg-white text-foreground",
                        index === 0 ? "sm:rotate-[1.2deg]" : "",
                        index === 2 ? "sm:-rotate-[1.1deg]" : "",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "inline-flex size-9 shrink-0 items-center justify-center rounded-full border sm:size-11",
                          active
                            ? "border-[#8ad3c8] bg-[#0f8076] text-[#dffbf5]"
                            : "border-[#a8d6a0] bg-[#e8f6dc] text-[#19633c]",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        <Check className="size-4 sm:size-5" strokeWidth={2.5} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[0.94rem] font-semibold leading-none sm:text-[1.25rem]">
                          {step.title}
                        </p>
                        <p
                          className={[
                            "mt-1 truncate pr-1 text-[0.78rem] sm:text-sm",
                            active ? "text-[#c8eee8]" : "text-foreground/52",
                          ].join(" ")}
                        >
                          Step {index + 1}: {step.description}
                        </p>
                      </div>
                      <span className="ml-auto hidden text-xl leading-none tracking-tight sm:inline">
                        •••
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
