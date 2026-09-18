"use client";

import { Phone } from "lucide-react";
import { hospital } from "@/lib/constants";

export function FloatingContact() {
  return (
    <a
      href={`tel:${hospital.phoneRaw}`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal text-white shadow-glow transition-transform hover:scale-110"
      aria-label="Call us"
    >
      <Phone className="h-5 w-5" />
    </a>
  );
}
