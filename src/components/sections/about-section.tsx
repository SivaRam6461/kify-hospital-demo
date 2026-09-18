"use client";

import Link from "next/link";
import { Microscope, Users, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, StaggerContainer, StaggerItem } from "@/animations/reveal";

const features = [
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    description: "State-of-the-art diagnostic equipment for accurate and timely results.",
  },
  {
    icon: Users,
    title: "Specialist Team",
    description: "Highly qualified doctors with international accreditations and decades of experience.",
  },
  {
    icon: HeartHandshake,
    title: "Patient First",
    description: "Every decision revolves around patient comfort, safety, and well-being.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/40 shadow-card">
              <video
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/drone-video.mp4`}
                autoPlay
                loop
                muted
                playsInline
                poster={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/drone.png`}
                className="w-full h-full object-cover scale-[1.02] transition-transform duration-[20s] ease-linear hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-card">
              <p className="text-2xl font-extrabold text-gradient">17+</p>
              <p className="text-xs text-muted-foreground">Serving Since</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Badge variant="default" className="mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                About Us
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-heading font-bold tracking-tight text-foreground mt-4">
                A trusted name in healthcare for Rajahmundry
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Kify Hospital has been serving the Rajahmundry community for over 17 years,
                providing comprehensive healthcare services with a commitment to excellence,
                compassion, and patient satisfaction.
              </p>
            </Reveal>

            <StaggerContainer className="mt-8 flex flex-col gap-4">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.4} className="mt-8">
              <Link href="/about">
                <Button variant="outline">
                  Discover Our Story
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
