"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { hospital } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/animations/reveal";

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-primary via-blue-700 to-teal px-6 py-14 sm:px-12 sm:py-20 shadow-glow-blue">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blob rounded-full bg-white/10 blur-3xl" />
              <div className="absolute right-1/4 bottom-1/4 h-72 w-72 animate-blob rounded-full bg-white/10 blur-3xl [animation-delay:6s]" />
            </div>
            <div className="bg-grid-pattern absolute inset-0 opacity-20" />

            <div className="relative text-center">
              <h2 className="text-display font-extrabold tracking-tight text-white">
                Your family&apos;s health deserves the best care
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-white/85 leading-relaxed">
                Trust Kify Hospital for comprehensive, compassionate healthcare for your entire family.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/appointment">
                  <Button variant="teal" size="lg">
                    Book Appointment
                  </Button>
                </Link>
                <a href={`tel:${hospital.phoneRaw}`}>
                  <Button variant="glass" size="lg">
                    <Phone className="h-5 w-5" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
