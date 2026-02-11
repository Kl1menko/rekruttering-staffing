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
    <Section id="faq" className="border-t border-border/60">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">FAQ</p>
          <h2 className="mt-4 text-[2rem] leading-[0.96] sm:text-[2.45rem] md:text-[2.85rem]">
            Answers to common questions before kickoff.
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-8 w-full space-y-3 sm:mt-10 sm:space-y-4">
          {faq.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="overflow-hidden rounded-[2rem] border border-black/10 bg-[color:color-mix(in_srgb,var(--off-white)_92%,white_8%)] px-1 shadow-[0_8px_16px_-16px_rgba(0,0,0,0.3)] transition-colors duration-200 data-[state=open]:border-[#6ed23d]/45 data-[state=open]:bg-[color:color-mix(in_srgb,#76df42_26%,var(--off-white)_74%)]"
            >
              <AccordionTrigger className="px-4 py-4 text-left text-[0.98rem] font-semibold no-underline hover:no-underline sm:px-6 sm:py-5 sm:text-[1.15rem] md:px-7 md:text-[1.35rem] md:leading-[1.12] [&>svg]:size-5 [&>svg]:text-foreground [&>svg]:sm:size-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-foreground/72 sm:px-6 md:px-7 md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
