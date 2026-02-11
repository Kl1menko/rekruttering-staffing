"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Files, Hand, MoreHorizontal, ThumbsUp } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

function ServiceVisual({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <div className="relative mt-6 min-h-[16.8rem] rounded-[1.5rem] bg-[#076d66] px-3 pb-4 pt-4 sm:mt-7 sm:min-h-[18.8rem] sm:rounded-[1.8rem] sm:px-4 sm:pb-5 sm:pt-5 md:mt-8 md:min-h-[21rem] md:rounded-[2.1rem] md:pt-6">
        <span className="absolute left-1 bottom-[4.35rem] h-20 w-6 rounded-l-3xl bg-[#10877f]/45 sm:bottom-[4.7rem] sm:h-24 sm:w-7 md:bottom-[5.15rem] md:h-28 md:w-8" />
        <span className="absolute right-1 bottom-[4.35rem] h-20 w-6 rounded-r-3xl bg-[#10877f]/45 sm:bottom-[4.7rem] sm:h-24 sm:w-7 md:bottom-[5.15rem] md:h-28 md:w-8" />

        <div className="relative mx-auto w-[86%] overflow-hidden rounded-[1.25rem] border-[2px] border-[#e9fff3]/90 bg-gradient-to-b from-[#33a49f] via-[#127f79] to-[#0b736c] text-[#fdfbee] shadow-[0_20px_38px_-24px_rgba(0,0,0,0.66)] sm:w-[85%] sm:rounded-[1.45rem] sm:border-[2.5px] md:w-[84%] md:rounded-[1.7rem] md:border-[3px]">
          <div className="px-4 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-3.5 md:px-5 md:pb-4 md:pt-4">
            <p className="text-[0.78rem] font-medium leading-none text-[#92de4f] sm:text-[0.86rem] md:text-[0.94rem]">
              Microsoft
            </p>
            <p className="mt-1.5 text-[1.35rem] font-semibold leading-[0.94] sm:text-[1.7rem] md:mt-2 md:text-[2.2rem]">
              Senior Product Manager
            </p>

            <div className="mt-3.5 space-y-2 sm:mt-4 md:mt-5 md:space-y-2.5">
              <span className="block h-2 rounded-full bg-[#4caeaa]/84 sm:h-[0.52rem] md:h-[0.58rem]" />
              <span className="block h-2 rounded-full bg-[#4caeaa]/84 sm:h-[0.52rem] md:h-[0.58rem]" />
              <span className="block h-2 w-[84%] rounded-full bg-[#4caeaa]/84 sm:h-[0.52rem] md:h-[0.58rem]" />
              <span className="block h-2 w-[56%] rounded-full bg-[#4caeaa]/84 sm:h-[0.52rem] md:h-[0.58rem]" />
            </div>

            <div className="mt-3.5 flex gap-1.5 sm:mt-4 sm:gap-2 md:mt-5 md:gap-2.5">
              <span className="rounded-full bg-[#2f9c64]/46 px-2 py-1 text-[0.63rem] font-medium text-[#d6ffbc] sm:px-2.5 sm:text-[0.67rem] md:px-3 md:text-xs">
                • Full-Time
              </span>
              <span className="rounded-full bg-white/20 px-2 py-1 text-[0.63rem] font-medium text-[#e6fbf3] sm:px-2.5 sm:text-[0.67rem] md:px-3 md:text-xs">
                • Senior Level
              </span>
            </div>
          </div>

          <div className="bg-[#fbfaf4] px-4 py-2.5 text-[#110000] sm:px-4 sm:py-3 md:px-5 md:py-3.5">
            <p className="text-[1.25rem] font-semibold leading-none sm:text-[1.5rem] md:text-[2rem]">
              $8,000/Month
            </p>
            <p className="mt-1 text-[0.73rem] text-[#626262] sm:text-xs md:text-sm">
              San Francisco, United States
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 1) {
    return (
      <div className="relative mt-6 min-h-[16.8rem] overflow-hidden rounded-[1.5rem] border border-[#c2d8b4] bg-[#cff0c1] p-3 sm:mt-7 sm:min-h-[18.8rem] sm:rounded-[1.8rem] sm:p-4 md:min-h-[21rem] md:rounded-[2rem]">
        <div className="space-y-2.5 opacity-42 sm:space-y-3">
          <div className="flex items-center gap-2 rounded-xl border border-[#bdddae] bg-[#d7f3ca] px-2.5 py-2 sm:gap-3 sm:rounded-2xl sm:px-3 sm:py-2.5">
            <span className="size-2.5 rounded-full bg-[#c0dfb2] sm:size-3" />
            <span className="h-2.5 w-32 rounded-full bg-[#c0dfb2]" />
            <span className="ml-auto h-2.5 w-20 rounded-full bg-[#c0dfb2]" />
          </div>
          <div className="h-14 rounded-xl border border-[#bdddae] bg-[#d7f3ca] sm:h-16 sm:rounded-2xl md:h-20" />
          <div className="h-14 rounded-xl border border-[#bdddae] bg-[#d7f3ca] sm:h-16 sm:rounded-2xl md:h-20" />
          <div className="h-12 rounded-xl border border-[#bdddae] bg-[#d7f3ca] sm:h-14 sm:rounded-2xl md:h-16" />
        </div>
        <div className="absolute left-[8%] top-[43%] w-[74%] -rotate-[5deg] rounded-xl border border-black/10 bg-white px-2.5 py-2.5 shadow-[0_16px_30px_-22px_rgba(0,0,0,0.42)] sm:left-[10%] sm:top-[44%] sm:w-[70%] sm:rounded-2xl sm:px-3 sm:py-3 md:left-[12%] md:w-[66%] md:-rotate-[6deg] md:px-3.5">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Image
              src="/avatars/anna.jpg"
              alt="Candidate profile"
              width={34}
              height={34}
              className="size-7 rounded-full object-cover sm:size-8"
            />
            <div className="min-w-0">
              <p className="truncate text-[0.8rem] font-semibold leading-none text-foreground sm:text-[0.92rem] md:text-[1rem]">
                Maria Angelica M
              </p>
              <p className="mt-1 truncate text-[0.65rem] text-foreground/52 sm:text-[0.7rem] md:text-xs">
                2+ Exp | Product Designer
              </p>
            </div>
            <MoreHorizontal className="ml-auto size-3.5 text-foreground/74 sm:size-4" />
          </div>
          <div className="mt-2.5 flex items-center gap-2 text-[0.65rem] text-foreground/74 sm:mt-3 sm:gap-2.5 sm:text-[0.7rem] md:text-xs">
            <span className="inline-flex items-center gap-1">
              <Files className="size-3 sm:size-3.5" />
              9 File
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-[#e2f9ef] px-1.5 py-1 text-[#0e7e65] sm:gap-1.5 sm:px-2">
              <ThumbsUp className="size-3 sm:size-3.5" />
              78%
            </span>
            <span className="ml-auto inline-flex items-center justify-center rounded-md border border-black/15 p-1">
              <Hand className="size-3 text-foreground/82 sm:size-3.5" />
            </span>
          </div>
        </div>
        <div className="absolute left-[6%] top-[71%] w-[60%] rounded-xl border border-black/10 bg-white/90 px-2.5 py-2 opacity-96 shadow-[0_14px_30px_-24px_rgba(0,0,0,0.5)] sm:left-[8%] sm:top-[69%] sm:w-[56%] sm:rounded-2xl sm:px-3 sm:py-2.5">
          <div className="flex items-center gap-2">
            <Image
              src="/avatars/marcus.jpg"
              alt="Candidate profile"
              width={28}
              height={28}
              className="size-6 rounded-full object-cover sm:size-7"
            />
            <div className="flex-1">
              <p className="h-1.5 w-16 rounded-full bg-black/12 sm:h-2 sm:w-24" />
              <p className="mt-1.5 h-1.5 w-12 rounded-full bg-black/10 sm:mt-2 sm:h-2 sm:w-20" />
            </div>
            <MoreHorizontal className="size-3 text-black/52 sm:size-3.5" />
          </div>
          <div className="mt-2 flex items-center gap-1.5 sm:mt-2.5 sm:gap-2">
            <span className="inline-flex items-center justify-center rounded-md border border-black/15 px-1.5 py-1">
              <Files className="size-2.5 text-black/55 sm:size-3" />
            </span>
            <span className="inline-flex h-4 w-12 items-center rounded-md bg-[#e2f9ef] sm:h-5 sm:w-16" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-6 min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-[#dce2d6] bg-[#f4f6f0] p-3 sm:mt-7 sm:min-h-[22rem] sm:rounded-[1.8rem] sm:p-4 md:min-h-[28.5rem] md:rounded-[2rem]">
      <div className="absolute inset-x-3 bottom-3 top-[4.7rem] grid grid-cols-4 grid-rows-3 gap-1.5 sm:inset-x-4 sm:bottom-4 sm:top-[6rem] sm:gap-2 md:top-[7.2rem] md:gap-2.5">
        <span className="col-start-2 row-start-1 rounded-2xl bg-white/88" />
        <span className="col-start-2 row-start-2 rounded-2xl bg-white/75" />
        <span className="col-span-2 col-start-3 row-span-2 row-start-1 rounded-[1.35rem] bg-[#edf6e2]" />
        <span className="col-start-1 row-start-2 rounded-2xl bg-[#eef4e7]" />

        <Image
          src="/avatars/marcus.jpg"
          alt="Candidate"
          width={132}
          height={132}
          className="col-start-3 row-start-1 h-full w-full rounded-xl bg-[#d9dbef] object-cover object-top sm:rounded-2xl md:rounded-[1.35rem]"
        />
        <div className="col-start-4 row-start-2 rounded-xl border-2 border-white bg-[#def0d3] p-1 sm:rounded-2xl sm:p-1.5 md:rounded-[1.35rem] md:border-[3px]">
          <Image
            src="/avatars/robert.jpg"
            alt="Candidate"
            width={132}
            height={132}
            className="h-full w-full rounded-lg object-cover object-top sm:rounded-xl md:rounded-[1.05rem]"
          />
        </div>

        <Image
          src="/avatars/anna.jpg"
          alt="Candidate"
          width={132}
          height={132}
          className="col-start-1 row-start-3 h-full w-full rounded-xl bg-[#f0ece8] object-cover object-top sm:rounded-2xl md:rounded-[1.2rem]"
        />
        <span className="col-start-2 row-start-3 rounded-2xl bg-white/82" />
        <Image
          src="/avatars/vince.jpg"
          alt="Candidate"
          width={132}
          height={132}
          className="col-start-3 row-start-3 h-full w-full rounded-xl bg-[#efdde2] object-cover object-top sm:rounded-2xl md:rounded-[1.2rem]"
        />
        <Image
          src="/avatars/marcus.jpg"
          alt="Candidate"
          width={132}
          height={132}
          className="col-start-4 row-start-3 h-full w-full rounded-xl object-cover object-top saturate-0 sm:rounded-2xl md:rounded-[1.2rem]"
        />
      </div>

      <div className="absolute left-4 top-[42%] z-[2] max-w-[86%] rounded-[1rem] bg-[#046e68] px-3 py-2.5 text-[0.86rem] leading-[1.22] text-[#e9fff3] shadow-[0_18px_30px_-20px_rgba(0,0,0,0.62)] sm:left-5 sm:top-[43%] sm:max-w-[80%] sm:rounded-[1.1rem] sm:px-3.5 sm:py-3 sm:text-[0.92rem] md:left-6 md:top-[44%] md:max-w-[76%] md:rounded-[1.2rem] md:px-4 md:py-3.5 md:text-[0.98rem] md:leading-[1.26]">
        <p className="font-medium">Congrats!! you have been accepted to the next stage</p>
        <p className="mt-1 text-right text-[0.95rem] leading-none text-[#b2f070] sm:mt-1.5 sm:text-[1rem] md:text-[1.05rem]">
          13:00 ✓✓
        </p>
        <span className="absolute -bottom-1.5 right-5 h-2.5 w-2.5 rotate-45 bg-[#046e68] sm:-bottom-2 sm:right-6 sm:h-3 sm:w-3" />
      </div>
    </div>
  );
}

export function ServicesGrid() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const getSlideOffset = (slider: HTMLDivElement) => {
    const slide = slider.querySelector<HTMLElement>("[data-slide]");
    if (!slide) return 0;

    const track = slide.parentElement;
    const trackStyles = track ? window.getComputedStyle(track) : null;
    const gap = trackStyles ? Number.parseFloat(trackStyles.gap || "0") : 0;
    return slide.offsetWidth + (Number.isFinite(gap) ? gap : 0);
  };

  const scrollBySlide = (direction: "next" | "prev") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const amount = getSlideOffset(slider);
    if (!amount) return;
    const delta = direction === "next" ? amount : -amount;
    slider.scrollBy({ left: delta, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      const slider = sliderRef.current;
      if (!slider || pausedRef.current) return;

      const amount = getSlideOffset(slider);
      if (!amount) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const nextLeft = slider.scrollLeft + amount;
      if (nextLeft >= maxScroll - 4) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      slider.scrollBy({ left: amount, behavior: "smooth" });
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <Section id="services" className="border-t border-border/60">
      <Container>
        <div className="flex items-end justify-between gap-3 sm:gap-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground sm:text-sm">
              Services
            </p>
            <h2 className="mt-3 text-[2rem] leading-[0.95] sm:mt-4 sm:text-[2.3rem] md:text-[2.65rem]">
              Solutions for fast hiring and predictable delivery quality.
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous services"
              className="h-11 w-11 rounded-full border-black/15 bg-[color:color-mix(in_srgb,var(--off-white)_86%,white_14%)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--off-white)_68%,white_32%)]"
              onClick={() => scrollBySlide("prev")}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next services"
              className="h-11 w-11 rounded-full border-black/15 bg-[color:color-mix(in_srgb,var(--off-white)_86%,white_14%)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--off-white)_68%,white_32%)]"
              onClick={() => scrollBySlide("next")}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="mt-7 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 md:mt-10 [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onFocusCapture={() => {
            pausedRef.current = true;
          }}
          onBlurCapture={() => {
            pausedRef.current = false;
          }}
        >
          <Stagger className="flex snap-x snap-mandatory gap-5">
            {services.map((service, index) => {
              const variant = index % 3;
              const dark = variant === 0;
              return (
                <StaggerItem
                  key={service.slug}
                  data-slide
                  className="w-[92%] shrink-0 snap-start sm:w-[88%] md:w-[calc((100%-1.25rem)/2)]"
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <article
                      className={cn(
                        "h-full min-h-[27.5rem] overflow-hidden rounded-[1.5rem] border p-4 shadow-[0_10px_22px_-18px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:-translate-y-0.5 sm:min-h-[30rem] sm:rounded-[1.7rem] sm:p-5 md:min-h-[34rem] md:rounded-[2rem] md:p-7",
                        dark
                          ? "border-[#0a6d64]/42 bg-[#0a6a62] text-[#fdfbee]"
                          : "border-black/8 bg-[color:color-mix(in_srgb,var(--off-white)_90%,var(--sand)_10%)] text-foreground"
                      )}
                    >
                      <h3
                        className={cn(
                          "text-[1.72rem] leading-[0.98] sm:text-[2rem] md:text-[2.45rem] md:leading-[1.02]",
                          dark ? "text-[#f8fff8]" : "text-foreground"
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-2 text-[0.98rem] leading-[1.24] sm:mt-2.5 sm:text-[1.02rem] md:mt-3 md:text-[1.08rem] md:leading-[1.26]",
                          dark ? "text-[#c2e9dc]/76" : "text-foreground/62"
                        )}
                      >
                        {service.summary}
                      </p>

                      <p
                        className={cn(
                          "mt-3 text-[0.78rem] leading-[1.24] sm:text-[0.82rem] md:mt-4 md:text-sm",
                          dark ? "text-[#e5f6ee]/72" : "text-foreground/64"
                        )}
                      >
                        SLA: {service.sla}
                      </p>
                      <p
                        className={cn(
                          "mt-1 text-[0.78rem] leading-[1.24] sm:text-[0.82rem] md:text-sm",
                          dark ? "text-[#e5f6ee]/72" : "text-foreground/64"
                        )}
                      >
                        Timeline: {service.timeline}
                      </p>

                      <ServiceVisual variant={variant} />
                    </article>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous services"
            className="h-10 w-10 rounded-full border-black/15 bg-[color:color-mix(in_srgb,var(--off-white)_86%,white_14%)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--off-white)_68%,white_32%)]"
            onClick={() => scrollBySlide("prev")}
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next services"
            className="h-10 w-10 rounded-full border-black/15 bg-[color:color-mix(in_srgb,var(--off-white)_86%,white_14%)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--off-white)_68%,white_32%)]"
            onClick={() => scrollBySlide("next")}
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
