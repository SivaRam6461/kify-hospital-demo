"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Phone, Calendar } from "lucide-react";
import { hospital, navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 top-0 z-[70] flex flex-col bg-background shadow-xl lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto p-6 pt-14">
              <div className="mb-8 flex items-center justify-between">
                <Link href="/" onClick={onClose}>
                  <Image
                    src="/kify-logo.png"
                    alt="Kify Hospital"
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 transition-colors hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8 pb-4">
                <a href={`tel:${hospital.phoneRaw}`}>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4" />
                    Call {hospital.phone}
                  </Button>
                </a>
                <Link href="/appointment" onClick={onClose}>
                  <Button className="w-full">
                    <Calendar className="h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
