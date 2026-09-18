"use client";

import { AppointmentSection } from "@/components/sections/appointment-section";
import { PageHero } from "@/components/sections/page-hero";

export default function AppointmentPage() {
  return (
    <>
      <PageHero title="Book an Appointment" description="Schedule your visit with our expert medical team." />
      <AppointmentSection />
    </>
  );
}
