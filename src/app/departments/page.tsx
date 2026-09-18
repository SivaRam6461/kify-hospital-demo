"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { departments } from "@/lib/constants";
import { PageHero } from "@/components/sections/page-hero";
import { StaggerContainer, StaggerItem } from "@/animations/reveal";

export default function DepartmentsPage() {
  return (
    <>
      <PageHero title="Our Departments" description="Comprehensive care across a wide range of medical specialities." />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <StaggerItem key={dept.slug}>
                <div id={dept.slug} className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-teal/10 text-primary transition-all group-hover:from-primary group-hover:to-teal group-hover:text-white">
                    <dept.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{dept.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{dept.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {dept.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
