"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { departments } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/animations/reveal";

export function DepartmentsSection() {
  return (
    <section id="departments" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Departments"
          title="Comprehensive care across specialities"
          description="Our experienced medical team provides expert care across a wide range of specialities."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <StaggerItem key={dept.slug}>
              <Link href={`/departments#${dept.slug}`}>
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-300 group-hover:scale-150" />

                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-teal/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-teal group-hover:text-white">
                      <dept.icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{dept.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{dept.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {dept.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Link href="/departments">
            <Button variant="outline">View All Departments</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
