import { Mail, Phone, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CTA() {
  return (
    <Section id="contact" className="border-t border-border/60 bg-card/35">
      <Container>
        <FadeIn>
          <div className="grid gap-8 rounded-2xl border border-border/80 bg-card/70 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">Request</p>
              <h2 className="mt-4">Get a commercial proposal for your hiring needs.</h2>
              <p className="text-measure mt-4 text-muted-foreground">
                Share your workforce request and we will provide cooperation model,
                launch timeline, and budget guidance.
              </p>
              <form className="mt-8 grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" name="contactName" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Company name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input
                    id="contact-phone"
                    name="contactPhone"
                    type="tel"
                    placeholder="+48 000 000 000"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="contactEmail"
                    type="email"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="request">Need description</Label>
                  <Textarea
                    id="request"
                    name="request"
                    placeholder="Headcount, roles, locations, start date..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-fit">
                  Get a Proposal
                </Button>
              </form>
            </div>
            <aside className="rounded-xl border border-border/75 bg-background/65 p-5">
              <h3>Contacts</h3>
              <div className="mt-5 space-y-4 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="icon-ui text-primary" />
                  partnerships@primework.example
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="icon-ui text-primary" />
                  +48 22 100 20 30
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="icon-ui text-primary" />
                  Contract, NDA, and compliance package delivered before project launch.
                </p>
              </div>
            </aside>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
