"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { hospital, departments } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/animations/reveal";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: hospital.phone, href: `tel:${hospital.phoneRaw}` },
  { icon: Mail, label: "Email Us", value: hospital.email, href: `mailto:${hospital.email}` },
  { icon: MapPin, label: "Location", value: hospital.shortAddress, href: hospital.googleMaps },
  { icon: Clock, label: "Hours", value: hospital.emergency, href: null },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM",
];

export function AppointmentSection() {
  return (
    <section id="appointment" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Book a Visit
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-heading font-bold tracking-tight text-foreground mt-4">
                Request your appointment online
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Fill out the form and our team will get back to you to confirm your appointment.
              </p>
            </Reveal>

            <StaggerContainer className="mt-8 grid grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <StaggerItem key={info.label}>
                  <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <Reveal delay={0.2}>
            <form className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    suppressHydrationWarning
                    className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Your phone number"
                    suppressHydrationWarning
                    className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    suppressHydrationWarning
                    className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Department *</label>
                  <select
                    required
                    suppressHydrationWarning
                    className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select department</option>
                    {departments.map((dept) => (
                      <option key={dept.slug} value={dept.slug}>{dept.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    suppressHydrationWarning
                    className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Slot *</label>
                  <select
                    required
                    suppressHydrationWarning
                    className="flex h-12 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium">Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific concerns or requests"
                    suppressHydrationWarning
                    className="flex w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                suppressHydrationWarning
                className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-teal text-teal-foreground font-semibold shadow-glow transition-all hover:bg-teal/90 active:scale-[0.98]"
              >
                Request Appointment
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                For emergencies, call our 24/7 line immediately at {hospital.phone}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
