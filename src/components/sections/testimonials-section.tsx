"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/animations/reveal";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-28">
      <div className="bg-mesh absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex justify-center mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal text-white shadow-glow">
            <Quote className="h-5 w-5" />
          </div>
        </Reveal>

        <SectionHeading
          badge="Testimonials"
          title="Stories of care from our patients"
          description="Hear what our patients have to say about their experience at Kify Hospital."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.specialty}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
