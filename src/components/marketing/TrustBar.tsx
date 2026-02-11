"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Award, Building2, Globe2, Users } from "lucide-react";
import { useInView, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const trustItems = [
  {
    label: "Active workers",
    value: 1200,
    suffix: "+",
    detail: "Monthly operational coverage",
    icon: Users,
  },
  {
    label: "Coverage regions",
    value: 17,
    suffix: "",
    detail: "Poland and Central Europe",
    icon: Globe2,
  },
  {
    label: "Verified partners",
    value: 90,
    suffix: "+",
    detail: "Logistics, manufacturing, retail",
    icon: Building2,
  },
  {
    label: "Documents and licenses",
    value: 100,
    suffix: "%",
    detail: "Audit-ready compliance package",
    icon: Award,
  },
];

type TrustItem = {
  label: string;
  value: number;
  suffix: string;
  detail: string;
  icon: LucideIcon;
};

function CountUp({ end, suffix, start }: { end: number; suffix: string; start: boolean }) {
  const [value, setValue] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!start || reduceMotion) return;

    const duration = 900;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [end, reduceMotion, start]);

  const displayValue = reduceMotion && start ? end : value;

  return (
    <>
      {displayValue.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

function TrustCard({ item }: { item: TrustItem }) {
  const cardRef = useRef<HTMLElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.45 });

  return (
    <article
      ref={cardRef}
      className="group relative min-h-56 overflow-hidden rounded-3xl border border-black/12 bg-[color:color-mix(in_srgb,var(--off-white)_86%,var(--sand)_14%)] px-7 py-7 shadow-[0_8px_22px_-18px_rgba(0,0,0,0.45)] md:min-h-64 md:px-8 md:py-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(198,235,141,0.22)_0%,transparent_70%)] opacity-70" />

      <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-[#95d46a]/85" />
      <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-[#95d46a]/85" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-[#95d46a]/85" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[#95d46a]/85" />

      <item.icon className="relative z-10 size-5 text-foreground/78" />

      <p className="relative z-10 mt-8 text-[2.15rem] font-semibold leading-none text-foreground md:text-[2.55rem]">
        <CountUp end={item.value} suffix={item.suffix} start={isInView} />{" "}
        <span className="text-[2.05rem] font-medium text-foreground/32 md:text-[2.35rem]">
          {item.label}
        </span>
      </p>

      <p className="relative z-10 mt-6 max-w-[30ch] text-[clamp(1.05rem,0.25vw+0.98rem,1.2rem)] leading-[1.24] text-foreground/64">
        {item.detail}
      </p>
    </article>
  );
}

export function TrustBar() {
  return (
    <Section className="py-10">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          {trustItems.map((item) => (
            <TrustCard key={item.label} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
