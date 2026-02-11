import { Award, Building2, Globe2, Users } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const trustItems = [
  {
    label: "Active workers",
    value: "1,200+",
    detail: "Monthly operational coverage",
    icon: Users,
  },
  {
    label: "Coverage regions",
    value: "17",
    detail: "Poland and Central Europe",
    icon: Globe2,
  },
  {
    label: "Verified partners",
    value: "90+",
    detail: "Logistics, manufacturing, retail",
    icon: Building2,
  },
  {
    label: "Documents and licenses",
    value: "100%",
    detail: "Audit-ready compliance package",
    icon: Award,
  },
];

export function TrustBar() {
  return (
    <Section className="py-10">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-border/75 bg-card/70 p-4"
            >
              <item.icon className="icon-ui text-primary" />
              <p className="mt-4 text-2xl font-semibold leading-none">{item.value}</p>
              <p className="mt-2 text-sm font-medium">{item.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
