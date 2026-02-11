import { Quote } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
            Case Studies
          </p>
          <h2 className="mt-4 text-[2.15rem] leading-[0.95] sm:text-[3rem] lg:text-[5.25rem]">
            Outcomes reflected in operations and hard numbers.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.company}
              className="relative h-full overflow-hidden rounded-[1.45rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_90%,var(--sand)_10%)] p-5 shadow-[0_14px_24px_-22px_rgba(0,0,0,0.45)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(198,235,141,0.18)_0%,transparent_58%)]" />
              <Quote className="relative z-10 size-4.5 text-[#99d871]" />
              <p className="relative z-10 mt-3 text-[0.9rem] font-semibold uppercase leading-none tracking-[0.08em] text-foreground/74 sm:text-[0.96rem]">
                {item.company}
              </p>

              <p className="relative z-10 mt-5 text-[1.05rem] leading-[1.45] text-foreground/86 sm:text-[1.1rem]">
                {item.quote}
              </p>
              <p className="relative z-10 mt-4 text-[1rem] font-medium leading-[1.34] text-[#87bc52] sm:text-[1.05rem]">
                {item.result}
              </p>
              <p className="relative z-10 mt-5 text-[0.98rem] leading-[1.35] text-foreground/64 sm:text-[1.02rem]">
                {item.name}, {item.role}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
