import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { SlideUp } from "@/components/motion/SlideUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const advantages = [
  "Verified candidate pool in key regions",
  "Legally compliant hiring and documentation",
  "Transparent SLA with operational reporting",
];

export function Hero() {
  return (
    <Section className="border-b border-border/70 pt-18 md:pt-24">
      <Container>
        <div className="max-w-4xl">
          <FadeIn>
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
              B2B Workforce Partner
            </Badge>
          </FadeIn>
          <SlideUp className="mt-6">
            <h1>
              Workforce hiring for businesses that need stable shift execution and
              transparent compliance.
            </h1>
          </SlideUp>
          <SlideUp delay={0.05} className="text-measure mt-6 text-muted-foreground">
            We fill critical roles fast, keep documentation under control, and support
            your team from request to full operational deployment.
          </SlideUp>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Get a Proposal</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#process">How We Work</Link>
            </Button>
          </div>
          <Stagger className="mt-10 grid gap-3 md:grid-cols-3">
            {advantages.map((item) => (
              <StaggerItem key={item} className="rounded-lg border border-border/80 bg-card/60 p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="icon-ui mt-0.5 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
