"use client";

import { faqs } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/animations/reveal";

export function FaqSection() {
  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blob rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 animate-blob rounded-full bg-teal/20 blur-3xl [animation-delay:6s]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently asked questions"
          description="Find answers to common questions about our hospital and services."
        />

        <Reveal>
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-soft data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
