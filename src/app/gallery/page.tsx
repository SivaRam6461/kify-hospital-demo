"use client";

import { GallerySection } from "@/components/sections/gallery-section";
import { PageHero } from "@/components/sections/page-hero";

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" description="Take a virtual tour of our hospital facilities." />
      <GallerySection />
    </>
  );
}
