"use client";

import { useState } from "react";
import { Phone, Clock, X } from "lucide-react";
import { hospital } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="sticky top-0 z-[60] bg-gradient-to-r from-destructive via-red-600 to-destructive text-white shadow-lg"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-3 text-sm">
            <span className="relative flex h-6 w-6 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-white/30" />
              <Phone className="relative h-3.5 w-3.5" />
            </span>
            <span className="hidden sm:inline font-medium">24/7 Emergency & Critical Care</span>
            <span className="sm:hidden font-medium">Emergency</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="h-3.5 w-3.5" />
              Always open
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${hospital.phoneRaw}`}
              className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-white/25"
            >
              {hospital.phone}
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="rounded-full p-1 transition-colors hover:bg-white/15"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
