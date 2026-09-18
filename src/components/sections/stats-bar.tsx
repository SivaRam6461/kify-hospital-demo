"use client";

import { stats } from "@/lib/constants";
import { Counter } from "@/animations/counter";
import { Reveal } from "@/animations/reveal";

export function StatsBar() {
  return (
    <Reveal className="relative z-10 -mt-8 mx-4 sm:mx-6 lg:mx-auto lg:max-w-7xl">
      <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-card backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                index < stats.length - 1 ? "border-r border-border" : ""
              } ${index < 2 ? "mb-6 md:mb-0" : ""}`}
            >
              <Counter
                to={stat.value}
                suffix={stat.suffix}
                className="text-4xl font-extrabold text-gradient sm:text-5xl"
              />
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
