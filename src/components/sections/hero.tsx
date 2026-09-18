"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Star } from "lucide-react";
import { hospital } from "@/lib/constants";
import { asset } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/animations/reveal";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="bg-mesh absolute inset-0 opacity-70" />
      <div className="bg-grid-pattern absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blob rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-1/4 top-1/3 h-72 w-72 animate-blob rounded-full bg-teal/20 blur-3xl [animation-delay:6s]" />
      <div className="absolute bottom-1/4 left-1/3 h-72 w-72 animate-blob rounded-full bg-blue-400/15 blur-3xl [animation-delay:12s]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Star className="h-3.5 w-3.5 fill-current" />
              24/7 Emergency & Critical Care
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-display font-extrabold tracking-tight">
              Your Health, <br />
              <span className="text-gradient">Our Responsibility.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Providing world-class medical infrastructure and compassionate care to our community.
              Founded on a legacy of trust and medical excellence in Rajahmundry.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/appointment">
                <Button size="lg" className="shadow-glow-blue">
                  <Phone className="h-5 w-5" />
                  Book Appointment
                </Button>
              </Link>
              <a href={`tel:${hospital.phoneRaw}`}>
                <Button variant="outline" size="lg">
                  Call Now
                </Button>
              </a>
              <a href={`tel:${hospital.phoneRaw}`}>
                <Button variant="destructive" size="lg">
                  24/7 Emergency
                </Button>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex gap-8">
              {[
                { icon: "NABL-aligned Labs", text: "NABL-aligned Labs" },
                { icon: "Safe & Hygienic", text: "Safe & Hygienic" },
                { icon: "Compassionate Care", text: "Compassionate Care" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Star className="h-3.5 w-3.5" />
                  </div>
                  <span className="hidden sm:inline">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mt-12 lg:mt-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/40 shadow-card">
            <Image
              src={asset("/kifyhospital-frontview.png")}
              alt="Kify Hospital Building"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>

          <div className="absolute -left-6 top-10 glass rounded-2xl p-4 shadow-card animate-float">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Dr. Subrahmanyam K.</p>
                <p className="text-xs text-muted-foreground">Internal Medicine</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 bottom-10 glass rounded-2xl p-4 shadow-card animate-float [animation-delay:3s]">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gradient">200000+</p>
              <p className="text-xs text-muted-foreground">Patients Treated</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg className="relative block h-16 w-[200%] animate-wave" viewBox="0 0 1440 120">
          <path
            fill="currentColor"
            className="text-background"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
