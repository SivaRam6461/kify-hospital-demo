"use client";

import Image from "next/image";
import { Microscope, Users, HeartHandshake, Target, Eye, Award } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/animations/reveal";

const values = [
  { icon: Target, title: "Our Mission", text: "To provide high quality, comprehensive, safe, and compassionate healthcare services to meet the needs of our community." },
  { icon: Eye, title: "Our Vision", text: "To be recognized as the preferred provider of Inpatient, Outpatient, Emergency, and Long-Term Care services in our community." },
  { icon: Award, title: "Our Values", text: "Honesty, Empathy, Accountability, Respect, and Trust guide everything we do at Kify Hospital." },
];

const features = [
  { icon: Microscope, title: "Advanced Diagnostics", text: "State-of-the-art diagnostic equipment for accurate and timely results." },
  { icon: Users, title: "Specialist Team", text: "Highly qualified doctors with international accreditations and decades of experience." },
  { icon: HeartHandshake, title: "Patient First", text: "Every decision revolves around patient comfort, safety, and well-being." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Kify Hospital" description="A trusted name in healthcare for Rajahmundry since 2007." />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/40 shadow-card">
                <Image src="/kifyhospital-frontview.png" alt="Kify Hospital" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <div>
              <SectionHeading badge="About Us" title="Serving Rajahmundry with excellence since 2007" badgeVariant="default" className="text-left mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kify Hospital was established with a vision to provide world-class healthcare services to the people of Rajahmundry and surrounding areas. Founded by Dr. Subrahmanyam Karuturi, a Fellow of the Royal College of Physicians (London) and Fellow of the American College of Physicians (USA), the hospital has grown to become a trusted name in multi-specialty healthcare.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 17 years of service, 50+ expert doctors, and 25+ specialities, we continue to uphold our commitment to compassionate, affordable, and accessible healthcare for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-3xl border border-border bg-card p-7 shadow-soft text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal text-white shadow-glow">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Why Choose Us" title="What sets us apart" description="We combine medical excellence with compassionate care." />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
