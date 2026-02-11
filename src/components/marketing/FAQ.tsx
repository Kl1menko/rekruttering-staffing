import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/faq";

export function FAQ() {
  return (
    <Section className="border-t border-border/60">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">FAQ</p>
          <h2 className="mt-4">Answers to common questions before kickoff.</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {faq.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
