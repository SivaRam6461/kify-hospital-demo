"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-navy-ink via-[#0d2137] to-[#0a192f]"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-blob rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-blob rounded-full bg-teal/15 blur-3xl [animation-delay:6s]" />
          </div>

          {/* Grid Pattern Overlay */}
          <div className="bg-grid-pattern absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation Video */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(0,86,179,0.3)]"
            >
              <video
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo-animation.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="h-40 w-auto object-contain sm:h-52"
              />
            </motion.div>

            {/* Hospital Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Kify Hospital
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-white/60"
            >
              Your Health. Our Responsibility.
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="h-1 w-[200px] overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-blue-400 to-teal"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="mt-4 text-xs text-white/40"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
