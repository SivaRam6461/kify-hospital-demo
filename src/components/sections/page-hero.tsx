"use client";

import { Reveal } from "@/animations/reveal";

interface PageHeroProps {
  title: string;
  description?: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-teal py-20 lg:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blob rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 animate-blob rounded-full bg-white/10 blur-3xl [animation-delay:6s]" />
      </div>
      <div className="bg-grid-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h1 className="text-display font-extrabold tracking-tight text-white">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/85 leading-relaxed">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
