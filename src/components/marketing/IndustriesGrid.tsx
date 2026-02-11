import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/content/industries";

export function IndustriesGrid() {
  return (
    <Section id="industries" className="border-t border-border/60 bg-card/30">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">Industries</p>
          <h2 className="mt-4">Operational expertise where pace and discipline are critical.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Link href={`/industries/${industry.slug}`} key={industry.slug} className="block h-full">
              <Card className="h-full border-border/75">
                <CardHeader>
                  <CardTitle className="text-[1.3rem]">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {industry.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
                      Volume: {industry.typicalVolume}
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
                      Fill speed: {industry.fillSpeed}
                    </Badge>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Typical roles:</span>{" "}
                    {industry.typicalRoles}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Requirements:</span>{" "}
                    {industry.requirements}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View details
                    <ChevronRight className="icon-ui" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
