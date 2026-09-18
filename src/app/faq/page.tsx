"use client";

import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" description="Find answers to frequently asked questions." />
      <FaqSection />
    </>
  );
}
