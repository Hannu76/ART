"use client";

import React, { useState, useEffect } from "react";
import { GlassIconReveal } from "@/components/ui/liquid-glass-logo-reveal";

interface SiteLoadingScreenProps {
  /** Callback fired once animation completes and screen is dismissed */
  onComplete?: () => void;
}

export function SiteLoadingScreen({ onComplete }: SiteLoadingScreenProps) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Silky-smooth progress animation from 0% to 100% over 1.8 seconds
    const startTime = performance.now();
    const duration = 1800; // 1.8s

    let rafId: number;
    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const rawPct = Math.min(1, elapsed / duration);
      // Gentle ease-in-out curve
      const easePct =
        rawPct < 0.5
          ? 2 * rawPct * rawPct
          : 1 - Math.pow(-2 * rawPct + 2, 2) / 2;
      const pct = Math.min(100, Math.round(easePct * 100));
      setProgress(pct);

      if (rawPct < 1) {
        rafId = requestAnimationFrame(updateProgress);
      } else {
        // At 100%, trigger smooth fade out
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 450);
        }, 100);
      }
    };

    rafId = requestAnimationFrame(updateProgress);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [onComplete]);

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Loading site"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-2xl select-none transition-opacity duration-500 ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Soft Ambient Luminous Flare (Zero Dark Elements) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,127,140,0.08)_0%,_rgba(31,90,254,0.05)_35%,_rgba(255,255,255,0.98)_70%)] pointer-events-none" />

      {/* Centerpiece: Pure Frosted Glass Blur Card with Liquid Glass Logo Animation (No Black Box) */}
      <div className="relative z-10 w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] rounded-[2.5rem] bg-white/70 backdrop-blur-3xl border border-white/90 shadow-[0_20px_50px_rgba(8,127,140,0.12),0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
        {/* Soft cyan-blue specular glow within the glass tile */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 pointer-events-none rounded-[2.5rem]" />

        {/* The 3D Liquid Glass Logo Reveal Animation */}
        <div className="relative w-full h-full flex items-center justify-center">
          <GlassIconReveal
            logo="/images/artl-logo.png"
            look="glass"
            background="transparent"
            plateColor="#ffffff"
            iconPlate={true}
            keepPlate={true}
            originalColors={true}
            tileSize={240}
            loop={true}
            speed={1.1}
            label="ART Resuscitation Training"
            className="w-full h-full rounded-[2rem]"
          />
        </div>
      </div>

      {/* Silky-Smooth Loading Line Only (No Text, No Badges, No Percentage Numbers) */}
      <div className="relative z-10 w-48 sm:w-60 mt-8">
        <div className="h-1.5 w-full bg-slate-100/90 rounded-full overflow-hidden p-[1px] border border-slate-200/60 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-full transition-all duration-75 ease-out shadow-xs"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default SiteLoadingScreen;
