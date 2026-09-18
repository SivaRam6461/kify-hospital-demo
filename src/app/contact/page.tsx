"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { hospital } from "@/lib/constants";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal, StaggerContainer, StaggerItem } from "@/animations/reveal";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: hospital.phone, href: `tel:${hospital.phoneRaw}` },
  { icon: Mail, label: "Email Us", value: hospital.email, href: `mailto:${hospital.email}` },
  { icon: MapPin, label: "Location", value: hospital.address, href: hospital.googleMaps },
  { icon: Clock, label: "Hours", value: `${hospital.hours}. ${hospital.emergency}`, href: null },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" description="We're here to help. Reach out to us anytime." />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <StaggerItem key={info.label}>
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-base font-medium text-foreground hover:text-primary transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-base font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal>
              <form className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name *</label>
                    <input type="text" required suppressHydrationWarning className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <input type="email" required suppressHydrationWarning className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <input type="text" required suppressHydrationWarning className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium">Message *</label>
                    <textarea rows={4} required suppressHydrationWarning className="flex w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" />
                  </div>
                </div>
                <button type="submit" suppressHydrationWarning className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shadow-glow-blue transition-all hover:bg-primary/90 active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
