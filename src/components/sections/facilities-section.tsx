"use client";

import Image from "next/image";
import { facilities } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/animations/reveal";

export function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Facilities"
          title="World-class infrastructure"
          description="Our hospital is equipped with modern technology and comfortable spaces for patient care."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {facilities.map((facility) => (
            <StaggerItem key={facility.name}>
              <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white">{facility.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
