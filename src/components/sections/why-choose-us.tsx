"use client";

import { whyChooseUs } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/animations/reveal";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-secondary/40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blob rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 animate-blob rounded-full bg-teal/20 blur-3xl [animation-delay:6s]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Healthcare designed around you"
          description="We combine medical excellence with compassionate care to deliver the best outcomes for our patients."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal text-white shadow-glow transition-transform group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
