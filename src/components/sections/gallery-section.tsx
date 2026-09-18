"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/constants";
import { asset } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerContainer, StaggerItem } from "@/animations/reveal";

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Gallery"
          title="Inside Kify Hospital"
          description="Take a virtual tour of our hospital facilities and infrastructure."
        />

        <StaggerContainer className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
          {galleryImages.map((image) => (
            <StaggerItem key={image.src}>
              <div className="group relative overflow-hidden rounded-2xl border border-border shadow-soft break-inside-avoid">
                <Image
                  src={asset(image.src)}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.alt}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
