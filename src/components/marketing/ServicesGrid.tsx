import Link from "next/link";
import {
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  Factory,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/content/services";

const serviceIcons = {
  "temporary-staffing": Users,
  "permanent-recruitment": BriefcaseBusiness,
  "payroll-compliance": ShieldCheck,
  "on-site-management": ClipboardCheck,
  "volume-hiring": Factory,
  "workforce-analytics": BarChart3,
} as const;

export function ServicesGrid() {
  return (
    <Section id="services" className="border-t border-border/60">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">Services</p>
          <h2 className="mt-4">Solutions for fast hiring and predictable delivery quality.</h2>
        </div>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? Users;

            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card className="h-full border-border/80">
                    <CardHeader>
                      <Icon className="icon-block text-primary" />
                      <CardTitle className="pt-3 text-[1.35rem] leading-tight">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
                          SLA: {service.sla}
                        </Badge>
                        <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
                          Timeline: {service.timeline}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <span className="font-medium text-foreground">Included:</span>{" "}
                          {service.whatIncluded}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Documents:</span>{" "}
                          {service.documents}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Risk ownership:</span>{" "}
                          {service.riskOwnership}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
