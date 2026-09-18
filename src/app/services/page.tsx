"use client";

import { services } from "@/lib/constants";
import { PageHero } from "@/components/sections/page-hero";
import { StaggerContainer, StaggerItem } from "@/animations/reveal";

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" description="Complete healthcare under one roof with advanced technology and compassionate care." />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <div className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/30 hover:shadow-card">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/10 to-primary/10 text-teal transition-all group-hover:from-teal group-hover:to-primary group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
