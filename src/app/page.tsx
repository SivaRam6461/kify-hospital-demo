"use client";

import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SocialSection } from "@/components/sections/social-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { FaqSection } from "@/components/sections/faq-section";
import { AppointmentSection } from "@/components/sections/appointment-section";
import { CtaSection } from "@/components/sections/cta-section";
import { LocationSection } from "@/components/sections/location-section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <WhyChooseUs />
      <DepartmentsSection />
      <DoctorsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <SocialSection />
      <GallerySection />
      <FaqSection />
      <AppointmentSection />
      <CtaSection />
      <LocationSection />
    </>
  );
}
