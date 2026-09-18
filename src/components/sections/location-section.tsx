"use client";

import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { hospital } from "@/lib/constants";
import { Reveal } from "@/animations/reveal";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section id="location" className="relative">
      {/* Google Maps Embed */}
      <div className="relative h-[400px] w-full lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8906874845897!2d81.7997!3d16.9956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c8b5a5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sKify%20Hospital!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kify Hospital Location"
          className="absolute inset-0"
        />

        {/* Floating Info Card */}
        <Reveal className="absolute left-4 right-4 top-4 sm:left-8 sm:top-8 md:left-auto md:right-8 md:top-8 lg:right-[calc(50%-580px+2rem)]">
          <div className="rounded-2xl border border-white/60 bg-white/95 p-6 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] backdrop-blur-xl max-w-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{hospital.name}</h3>
                <p className="text-xs text-muted-foreground">Rajahmundry, Andhra Pradesh</p>
              </div>
            </div>

            <div className="mb-4 space-y-3">
              <a
                href={hospital.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{hospital.address}</span>
              </a>

              <a
                href={`tel:${hospital.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>{hospital.phone}</span>
              </a>

              <a
                href={`mailto:${hospital.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>{hospital.email}</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>{hospital.hours}</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-health-green/30" />
                  <span className="h-2 w-2 rounded-full bg-health-green" />
                </span>
                <span className="font-medium text-health-green">{hospital.emergency}</span>
              </div>
            </div>

            <a
              href={hospital.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full" size="lg">
                <Navigation className="h-4 w-4" />
                Get Directions
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
