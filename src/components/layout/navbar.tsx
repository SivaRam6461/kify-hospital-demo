"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Calendar } from "lucide-react";
import { hospital, navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-[44px] z-50 pt-3">
      <nav className="mx-4 rounded-2xl border border-white/60 bg-white px-4 py-3 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.04)] sm:mx-6 sm:px-6 lg:mx-auto lg:max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/kify-logo.png"
              alt="Kify Hospital"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${hospital.phoneRaw}`}
              className="hidden items-center gap-2 text-sm font-medium text-foreground sm:flex"
            >
              <Phone className="h-4 w-4 text-primary" />
              {hospital.phone}
            </a>
            <Link href="/appointment">
              <Button size="sm" className="hidden sm:inline-flex">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
