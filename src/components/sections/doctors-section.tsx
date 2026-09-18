"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Languages } from "lucide-react";
import { doctors } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/animations/reveal";

export function DoctorsSection() {
  return (
    <section id="doctors" className="relative py-20 lg:py-28 bg-secondary/40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blob rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 animate-blob rounded-full bg-teal/20 blur-3xl [animation-delay:6s]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Doctors"
          title="Meet our expert medical team"
          description="Our team of highly qualified doctors brings decades of experience and international expertise."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.name}>
              <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {doctor.experience} Years Exp.
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white">{doctor.name}</h3>
                    <p className="text-sm font-medium text-white/80">{doctor.qualification}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{doctor.description}</p>
                  <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-teal" />
                      {doctor.experience}+ Years
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Languages className="h-3.5 w-3.5 text-teal" />
                      {doctor.languages.join(", ")}
                    </span>
                  </div>
                  <Link href="/appointment">
                    <Button variant="outline" className="mt-4 w-full">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Link href="/doctors">
            <Button variant="outline">Meet All Doctors</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
