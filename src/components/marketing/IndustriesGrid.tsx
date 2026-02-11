import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { industries } from "@/content/industries";

export function IndustriesGrid() {
  return (
    <Section id="industries" className="border-t border-border/60 bg-card/30">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">Industries</p>
          <h2 className="mt-4 text-[2rem] leading-[0.96] sm:text-[2.45rem] md:text-[2.85rem]">
            Operational expertise where pace and discipline are critical.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Link href={`/industries/${industry.slug}`} key={industry.slug} className="block h-full">
              <article className="group relative h-full min-h-[20.5rem] overflow-hidden rounded-[1.5rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_84%,var(--sand)_16%)] p-4 shadow-[0_24px_34px_-30px_rgba(0,0,0,0.48)] transition-transform duration-200 hover:-translate-y-1 sm:min-h-[23rem] sm:rounded-[2.2rem] sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_50%)]" />
                <div className="relative z-10 flex h-full flex-col">
                  <div>
                    <span className="text-[0.7rem] uppercase tracking-[0.18em] text-foreground/45">
                      Industry
                    </span>
                  </div>

                  <h3 className="mt-3 max-w-[13ch] text-[1.6rem] font-semibold leading-[0.95] text-foreground sm:mt-4 sm:text-[2.2rem] md:text-[2.7rem]">
                    {industry.title}
                  </h3>
                  <p className="mt-1.5 text-[1.55rem] font-semibold leading-[0.92] text-foreground/42 sm:mt-2 sm:text-[2rem] md:text-[2.7rem]">
                    Staffing
                  </p>

                  <p className="mt-3 max-w-[30ch] text-[0.95rem] leading-[1.34] text-foreground/58 sm:mt-4 sm:text-[1.02rem]">
                    {industry.summary}
                  </p>

                  <div className="mt-auto pt-4 sm:pt-6">
                    <p className="text-xs text-foreground/54">Typical roles: {industry.typicalRoles}</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-[0.82rem] font-medium text-foreground/72">
                        {industry.fillSpeed}
                      </span>
                      <span className="text-[0.82rem] font-medium text-foreground/72">
                        {industry.typicalVolume}
                      </span>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                      View details
                      <ChevronRight className="icon-ui transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
