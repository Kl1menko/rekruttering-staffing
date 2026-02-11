import { Quote } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <Section className="border-t border-border/60 bg-card/30">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">Case studies</p>
          <h2 className="mt-4">Outcomes reflected in operations and hard numbers.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.company} className="h-full border-border/75">
              <CardHeader className="gap-3">
                <Quote className="icon-ui text-primary" />
                <p className="text-sm uppercase tracking-[0.08em] text-muted-foreground">
                  {item.company}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{item.quote}</p>
                <p className="mt-4 text-sm font-medium text-primary">{item.result}</p>
                <p className="mt-5 text-sm text-muted-foreground">
                  {item.name}, {item.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
