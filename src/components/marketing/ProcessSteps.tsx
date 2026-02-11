import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const steps = [
  {
    title: "Capture the brief",
    description: "We define roles, headcount, schedules, locations, SLA, and KPI targets.",
  },
  {
    title: "Align the model",
    description: "We align cooperation model, legal setup, and commercial terms.",
  },
  {
    title: "Launch sourcing",
    description: "We activate local acquisition channels and build a focused shortlist.",
  },
  {
    title: "Run selection",
    description: "Screening, document checks, and motivation validation for candidates.",
  },
  {
    title: "Deploy to shifts",
    description: "Onboarding, safety induction, shift allocation, and first-week control.",
  },
  {
    title: "Report transparently",
    description: "Weekly reporting on attendance, attrition, quality, and fill-rate dynamics.",
  },
];

export function ProcessSteps() {
  return (
    <Section id="process" className="border-t border-border/60">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">Process</p>
          <h2 className="mt-4">6 steps from initial request to full shift readiness.</h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-border/75 bg-card/60 p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Step {index + 1}
              </p>
              <h3 className="mt-3">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
