"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { asset } from "@/lib/utils";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      setVideoReady(true);
    };

    if (video) {
      video.addEventListener("canplaythrough", handleCanPlay);
      video.load();
    }

    // Fallback: hide loader after 3.5s even if video hasn't loaded
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener("canplaythrough", handleCanPlay);
      }
    };
  }, []);

  useEffect(() => {
    if (videoReady) {
      // Give video 1.8s to play, then hide loader
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [videoReady]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Dark Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#0a192f]" />

          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-blob rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-blob rounded-full bg-teal/10 blur-3xl [animation-delay:6s]" />
          </div>

          {/* Grid Pattern */}
          <div className="bg-grid-pattern absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo - Static fallback with video overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-8"
            >
              {/* Static logo (always visible, acts as fallback) */}
              <div className="flex h-32 w-32 items-center justify-center sm:h-44 sm:w-44">
                <Image
                  src={asset("/kify-logo.png")}
                  alt="Kify Hospital"
                  width={180}
                  height={72}
                  className="h-24 w-auto object-contain sm:h-32"
                  priority
                />
              </div>

              {/* Video overlay (plays on top of static logo) */}
              <video
                ref={videoRef}
                src={asset("/logo-animation.mp4")}
                autoPlay
                loop={false}
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </motion.div>

            {/* Hospital Name */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Kify Hospital
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-white/50 sm:text-sm"
            >
              Your Health. Our Responsibility.
            </motion.p>

            {/* Loading Bar */}
            <div className="h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary via-blue-400 to-teal"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
