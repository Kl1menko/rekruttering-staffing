import Link from "next/link";
import Image from "next/image";
import { MoreHorizontal, Play } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { SlideIn } from "@/components/motion/SlideIn";
import { SlideUp } from "@/components/motion/SlideUp";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <Section className="relative overflow-hidden border-b border-border/60 bg-background pb-20 pt-14 sm:pt-18 md:pb-28 md:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[90%] overflow-hidden">
        <div className="absolute left-1/2 top-[2%] h-[74%] w-[min(1320px,90%)] -translate-x-1/2 [background-size:56px_56px] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] opacity-80 [mask-image:radial-gradient(130%_102%_at_50%_36%,#000_56%,rgba(0,0,0,0)_100%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,240,170,0.42)_0%,rgba(212,240,170,0.15)_38%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(to_top,rgba(253,251,238,0),var(--off-white))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_bottom,rgba(253,251,238,0),var(--off-white))]" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <SlideUp>
            <h1 className="text-[clamp(2.8rem,8.2vw,7.8rem)] leading-[0.9] text-foreground">
              <span className="block">Scale Your</span>
              <span className="block">Workforce Faster</span>
              <span className="block text-foreground/26">With Compliance</span>
              <span className="block">Built In</span>
            </h1>
          </SlideUp>

          <SlideUp
            delay={0.05}
            className="text-measure mt-6 max-w-4xl text-[clamp(1rem,0.45vw+0.9rem,1.5rem)] leading-[1.3] text-foreground/58 sm:mt-8"
          >
            Empower your hiring team with data-driven staffing execution to attract,
            deploy, and retain shift-ready talent with clear compliance at every stage.
          </SlideUp>

          <FadeIn delay={0.1} className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-10 sm:w-auto">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-2xl bg-[#7ae043] px-6 text-base font-medium text-[#0c1406] hover:bg-[#6fd53c] sm:h-14 sm:w-auto sm:px-10 sm:text-lg"
            >
              <Link href="/contact">Request Staffing Plan</Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-2xl bg-[#181818] px-6 text-base font-medium text-[#fdfbee] hover:bg-[#232323] sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
            >
              <Link href="#process" className="inline-flex items-center gap-2">
                <Play className="size-[1.05rem]" />
                See Hiring Process
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <SlideIn
            direction="left"
            delay={0.12}
            className="absolute left-[-3%] top-[-1%]"
          >
            <div className="w-[304px] rotate-[-3deg] rounded-3xl border border-black/8 bg-white/92 p-3.5 shadow-[0_18px_45px_-24px_rgba(0,0,0,0.42)] backdrop-blur-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/avatars/anna.jpg"
                    alt="Anna Kowalski"
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[1.35rem] font-semibold leading-none text-foreground">
                      Anna Kowalski
                    </p>
                    <p className="mt-1 text-[0.92rem] text-muted-foreground">Senior Recruiter</p>
                  </div>
                </div>
                <MoreHorizontal className="mt-1 size-4.5 text-foreground/75" />
              </div>
            </div>
          </SlideIn>

          <SlideIn
            direction="right"
            delay={0.18}
            className="absolute right-[1%] top-[33%]"
          >
            <div className="w-[252px] rotate-[4deg] rounded-[22px] border border-[#2a7f73]/55 bg-[linear-gradient(to_bottom,rgba(11,110,100,0.72),rgba(10,84,76,0.66))] p-3 text-[#fdfbee] shadow-[0_24px_52px_-30px_rgba(0,0,0,0.62)] backdrop-blur-md">
              <p className="text-[0.72rem] uppercase tracking-[0.12em] text-[#d9f6d4]/72">
                Staffing Scope
              </p>
              <p className="mt-1.5 text-[1.45rem] font-semibold leading-[1.03]">
                Warehouse Shift
                <br />
                Team Setup
              </p>
              <p className="mt-2 text-[0.8rem] leading-[1.22] text-[#e4f4e2]/74">
                Sourcing, screening, onboarding, and compliance control for
                pickers, packers, and forklift operators with weekly KPI reporting.
              </p>
              <div className="mt-2.5 inline-flex rounded-full bg-[#7ae043]/14 px-2.5 py-1 text-[0.68rem] font-medium text-[#d5f9b7]">
                24 starts in 10 days
              </div>
              <p className="mt-3 text-[1.05rem] font-semibold">SLA + Compliance Included</p>
            </div>
          </SlideIn>

        </div>
      </Container>
    </Section>
  );
}
