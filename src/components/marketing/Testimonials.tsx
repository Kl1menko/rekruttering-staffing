"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = testimonials.length;

  const setIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setActiveIndex(clamped);
  };

  const onTouchEnd = (endX: number) => {
    if (touchStartX === null) return;
    const delta = endX - touchStartX;
    const threshold = 42;
    if (delta > threshold) {
      setIndex(activeIndex - 1);
    }
    if (delta < -threshold) {
      setIndex(activeIndex + 1);
    }
    setTouchStartX(null);
  };

  const canPrev = useMemo(() => activeIndex > 0, [activeIndex]);
  const canNext = useMemo(() => activeIndex < total - 1, [activeIndex, total]);

  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
              Case Studies
            </p>
            <h2 className="mt-4 text-[2.15rem] leading-[0.95] sm:text-[3rem] lg:text-[5.25rem]">
              Outcomes reflected in operations and hard numbers.
            </h2>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous case"
              disabled={!canPrev}
              onClick={() => setIndex(activeIndex - 1)}
              className="h-11 w-11 rounded-full border-black/15 bg-[color:color-mix(in_srgb,var(--off-white)_86%,white_14%)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--off-white)_68%,white_32%)] disabled:opacity-35"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next case"
              disabled={!canNext}
              onClick={() => setIndex(activeIndex + 1)}
              className="h-11 w-11 rounded-full border-black/15 bg-[color:color-mix(in_srgb,var(--off-white)_86%,white_14%)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--off-white)_68%,white_32%)] disabled:opacity-35"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
        <div
          className="mt-8 overflow-hidden rounded-[1.45rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_94%,white_6%)] shadow-[0_16px_28px_-24px_rgba(0,0,0,0.45)] lg:mt-10"
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article
                key={item.company}
                data-slide
                className="relative w-full shrink-0 overflow-hidden p-5 md:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_10%,rgba(198,235,141,0.17)_0%,transparent_52%)]" />
                <div className="relative z-10">
                  <Quote className="size-4.5 text-[#99d871]" />
                  <p className="mt-3 text-[0.9rem] font-semibold uppercase leading-none tracking-[0.08em] text-foreground/74 sm:text-[0.96rem]">
                    {item.company}
                  </p>

                  <p className="mt-2 text-[0.74rem] uppercase tracking-[0.08em] text-foreground/54 sm:text-[0.78rem]">
                    {item.industry} · {item.region} · {item.headcount}
                  </p>

                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <p className="rounded-xl border border-black/10 bg-white/38 px-4 py-3 text-sm leading-relaxed text-foreground/84">
                      <span className="font-semibold text-foreground">Challenge:</span>{" "}
                      {item.challenge}
                    </p>
                    <p className="rounded-xl border border-black/10 bg-white/38 px-4 py-3 text-sm leading-relaxed text-foreground/84">
                      <span className="font-semibold text-foreground">Solution:</span> {item.solution}
                    </p>
                    <p className="rounded-xl border border-black/10 bg-white/38 px-4 py-3 text-sm leading-relaxed text-foreground/84">
                      <span className="font-semibold text-foreground">Results:</span> {item.results}
                    </p>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <p className="rounded-lg border border-[#9fd679]/35 bg-[#e9f8de] px-3 py-2 text-xs font-medium text-[#2d6a18]">
                      {item.kpis[0]}
                    </p>
                    <p className="rounded-lg border border-[#9fd679]/35 bg-[#e9f8de] px-3 py-2 text-xs font-medium text-[#2d6a18]">
                      {item.kpis[1]}
                    </p>
                  </div>

                  <p className="mt-5 text-[0.98rem] leading-[1.35] text-foreground/64 sm:text-[1.02rem]">
                    {item.name}, {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setIndex(index)}
              aria-label={`Go to case ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-[#76df42]"
                  : "w-2.5 bg-black/20 hover:bg-black/35"
              }`}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous case"
            disabled={!canPrev}
            onClick={() => setIndex(activeIndex - 1)}
            className="h-10 w-10 rounded-full border-black/15 bg-[color:color-mix(in_srgb,var(--off-white)_86%,white_14%)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--off-white)_68%,white_32%)] disabled:opacity-35"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next case"
            disabled={!canNext}
            onClick={() => setIndex(activeIndex + 1)}
            className="h-10 w-10 rounded-full border-black/15 bg-[color:color-mix(in_srgb,var(--off-white)_86%,white_14%)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--off-white)_68%,white_32%)] disabled:opacity-35"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
