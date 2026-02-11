import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MoreHorizontal, Play } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { SlideUp } from "@/components/motion/SlideUp";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <Section className="relative overflow-hidden border-b border-border/60 bg-background pb-20 pt-22 md:pb-28 md:pt-28">
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
          <div className="absolute left-[-1%] top-[2%] w-[336px] rotate-[-3deg] rounded-3xl border border-black/8 bg-white/92 p-4 shadow-[0_18px_45px_-24px_rgba(0,0,0,0.42)] backdrop-blur-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/avatars/anna.jpg"
                  alt="Anna Kowalski"
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-[1.55rem] font-semibold leading-none text-foreground">
                    Anna Kowalski
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Senior Recruiter</p>
                </div>
              </div>
              <MoreHorizontal className="mt-1 size-5 text-foreground/75" />
            </div>
            <div className="mt-4 border-t border-black/8 pt-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Start May 12, 2025</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
                    <Mail className="size-4 text-[#d74b3e]" />
                  </span>
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#0a66c2] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
                    <Linkedin className="size-4 text-white" />
                  </span>
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_100%,#feda75_0%,#fa7e1e_35%,#d62976_65%,#962fbf_85%,#4f5bd5_100%)] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
                    <Instagram className="size-4 text-white" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-[-1%] top-[4%] w-[336px] rotate-[4deg] rounded-3xl border border-black/8 bg-white/92 p-4 shadow-[0_18px_45px_-24px_rgba(0,0,0,0.42)] backdrop-blur-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/avatars/marcus.jpg"
                  alt="Marcus Alexandro"
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-[1.55rem] font-semibold leading-none text-foreground">
                    Marcus Alexandro
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Operations Manager</p>
                </div>
              </div>
              <MoreHorizontal className="mt-1 size-5 text-foreground/75" />
            </div>
            <div className="mt-4 border-t border-black/8 pt-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Start May 12, 2025</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
                    <Mail className="size-4 text-[#d74b3e]" />
                  </span>
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#0a66c2] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
                    <Linkedin className="size-4 text-white" />
                  </span>
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_100%,#feda75_0%,#fa7e1e_35%,#d62976_65%,#962fbf_85%,#4f5bd5_100%)] shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
                    <Instagram className="size-4 text-white" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[34%] top-[26%] w-[360px] rotate-[5deg] rounded-[30px] border border-[#2a7f73] bg-gradient-to-b from-[#0b6e64] to-[#0a544c] p-5 text-[#fdfbee] shadow-[0_28px_60px_-28px_rgba(0,0,0,0.7)]">
            <p className="text-xs uppercase tracking-[0.12em] text-[#d9f6d4]/80">Enterprise Brief</p>
            <p className="mt-2 text-[1.85rem] font-semibold leading-[1.04]">
              Volume Hiring
              <br />
              Program Lead
            </p>
            <p className="mt-3 text-[0.95rem] leading-[1.25] text-[#e4f4e2]/78">
              End-to-end launch for warehousing and manufacturing roles with SLA,
              onboarding and weekly workforce reporting.
            </p>
            <div className="mt-4 inline-flex rounded-full bg-[#7ae043]/18 px-3 py-1 text-xs font-medium text-[#d5f9b7]">
              40 starts in 14 days
            </div>
            <p className="mt-4 text-[1.45rem] font-semibold">$6,500 / Month</p>
          </div>

          <div className="absolute bottom-[16%] left-[3%] w-[320px] rounded-full border border-black/10 bg-[#111111] px-5 py-3 text-[#fdfbee] shadow-[0_18px_45px_-24px_rgba(0,0,0,0.52)]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="absolute -right-5 -top-8 size-8 rotate-[318deg] drop-shadow-[0_5px_8px_rgba(0,0,0,0.32)]"
            >
              <path
                d="M2.4 2.2L21.5 9.8 12 12.1 9.7 21.6 2.4 2.2z"
                fill="#111111"
                stroke="rgba(253,251,238,0.42)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex items-center gap-3">
              <Image
                src="/avatars/vince.jpg"
                alt="Vince Marconzo"
                width={44}
                height={44}
                className="size-11 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-[1.45rem] font-semibold leading-none">Vince Marconzo</p>
                <p className="mt-1 text-sm text-[#fdfbee]/70">Human Resources</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[12%] right-[2%] w-[338px] rounded-full border border-black/10 bg-[#0a7a73] px-5 py-3 text-[#fdfbee] shadow-[0_18px_45px_-24px_rgba(0,0,0,0.52)]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="absolute -left-5 -top-8 size-8 rotate-[-16deg] drop-shadow-[0_5px_8px_rgba(0,0,0,0.26)]"
            >
              <path
                d="M2.4 2.2L21.5 9.8 12 12.1 9.7 21.6 2.4 2.2z"
                fill="#0a7a73"
                stroke="rgba(226,252,245,0.6)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex items-center gap-3">
              <Image
                src="/avatars/robert.jpg"
                alt="Robert Williamson"
                width={44}
                height={44}
                className="size-11 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-[1.45rem] font-semibold leading-none">Robert Williamson</p>
                <p className="mt-1 text-sm text-[#fdfbee]/74">Head of HRD</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
