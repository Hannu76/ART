"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export interface HeroSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image: string;
  imageMobile: string;
  alt: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    category: "RCUK ACCREDITED CLINICAL FACULTY",
    headline: "Train for the moments that matter.",
    description:
      "Evidence-based resuscitation and emergency life-support education delivered by accredited NHS clinicians, senior resuscitation officers, and master educators across the UK.",
    primaryCtaText: "Explore Courses",
    primaryCtaHref: "#courses",
    secondaryCtaText: "Arrange Team Training",
    secondaryCtaHref: "#contact",
    image: "/images/art-hero-1.jpg",
    imageMobile: "/images/art-hero-1-mobile.jpg",
    alt: "5 Resuscitation Doctors and Clinicians with Masks Standing in Confident Pose",
  },
  {
    id: 2,
    category: "CLINICAL COMMUNICATION & TEAM DYNAMICS",
    headline: "Master clinical crisis communication & team dynamics.",
    description:
      "Interactive team briefing and structured SBAR closed-loop communication drills designed by NHS resuscitation specialists to eliminate hesitation and error under pressure.",
    primaryCtaText: "Explore Courses",
    primaryCtaHref: "#courses",
    secondaryCtaText: "Arrange Team Training",
    secondaryCtaHref: "#contact",
    image: "/images/art-hero-2.jpg",
    imageMobile: "/images/art-hero-2-mobile.jpg",
    alt: "Doctors and Resuscitation Clinicians Actively Communicating During Emergency Briefing",
  },
  {
    id: 3,
    category: "ADVANCED LIFE SUPPORT (ALS)",
    headline: "Master cardiac arrest & acute crisis algorithms.",
    description:
      "High-fidelity simulation covering peri-arrest arrhythmias, manual defibrillator safety, reversible causes (4 Hs & 4 Ts), and structured crisis team leadership.",
    primaryCtaText: "Explore Courses",
    primaryCtaHref: "#courses",
    secondaryCtaText: "Arrange Team Training",
    secondaryCtaHref: "#contact",
    image: "/images/art-hero-3.jpg",
    imageMobile: "/images/art-hero-3-mobile.jpg",
    alt: "Multidisciplinary Clinical Team Conducting ALS Simulation on Patient Manikin",
  },
  {
    id: 4,
    category: "EMERGENCY AIRWAY SKILLS",
    headline: "Structured ABCDE & emergency airway skills.",
    description:
      "Hands-on bag-valve-mask ventilations, supraglottic i-gel airway insertion, and rapid physiological deterioration escalation for acute clinicians and ward teams.",
    primaryCtaText: "Explore Courses",
    primaryCtaHref: "#courses",
    secondaryCtaText: "Arrange Team Training",
    secondaryCtaHref: "#contact",
    image: "/images/art-hero-4.jpg",
    imageMobile: "/images/art-hero-4-mobile.jpg",
    alt: "Senior Resuscitation Educator Coaching Airway Management on Simulation Patient",
  },
  {
    id: 5,
    category: "DEFIBRILLATION & HIGH-PERFORMANCE CPR",
    headline: "Defibrillator confidence & coordinated shock protocol.",
    description:
      "Automated and manual defibrillator safety, prompt pad placement choreography, rhythm analysis, and uninterrupted high-performance chest compressions.",
    primaryCtaText: "Explore Courses",
    primaryCtaHref: "#courses",
    secondaryCtaText: "Arrange Team Training",
    secondaryCtaHref: "#contact",
    image: "/images/art-hero-5.jpg",
    imageMobile: "/images/art-hero-5-mobile.jpg",
    alt: "Emergency Resuscitation Team Executing Defibrillation Stand-Clear Protocol",
  },
];

interface ARTHeroProps {
  onOpenBooking?: (course?: { title: string; category: string; duration?: string }) => void;
}

export default function ARTHero({ onOpenBooking }: ARTHeroProps = {}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const contentBoxRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);

  // Smooth cinematic auto-rotation every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  // GSAP ScrollTrigger: Scales down content box and translates smoothly out of view on scroll down
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!heroSectionRef.current || !contentBoxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(contentBoxRef.current, {
        scale: 0.78,
        y: 50,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });

      if (controlsRef.current) {
        gsap.to(controlsRef.current, {
          scale: 0.8,
          opacity: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom 65%",
            scrub: 0.6,
          },
        });
      }
    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleScrollToCourses = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const coursesElem = document.getElementById("courses");
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#courses");
    } else {
      window.location.hash = "courses";
    }
  };

  // Keyboard shortcut: Pressing 'G' or 'g' activates "Get started"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "g" || e.key === "G") {
        handleScrollToCourses();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScrollToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking({
        title: activeSlide?.headline || "Accredited Clinical Training",
        category: activeSlide?.category || "RCUK Accredited",
        duration: "Accredited Clinical Session",
      });
      return;
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#contact");
    } else {
      window.location.hash = "contact";
    }
  };

  const safeIdx = ((activeIdx % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length;
  const activeSlide = HERO_SLIDES[safeIdx] || HERO_SLIDES[0];

  return (
    <section
      ref={heroSectionRef}
      id="hero"
      className="relative overflow-hidden select-none bg-[#0F172A]"
      style={{
        width: "100vw",
        maxWidth: "100%",
        height: "100vh",
        minHeight: "600px",
        boxShadow: "none",
      }}
    >
      {/* =================================== RESPONSIVE PICTURE BACKGROUND (INCREASED TOP PADDING TO PUSH FOCAL POINTS DOWN) =================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pt-14 sm:pt-20">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === safeIdx;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              style={{
                transform: "translate3d(0, 0, 0)",
                willChange: "opacity",
                visibility: isActive ? "visible" : "hidden",
                transition: "opacity 0.6s ease-out, visibility 0.6s ease-out",
              }}
              className={`absolute inset-0 w-full h-full pointer-events-none ${
                isActive ? "opacity-100 z-[1]" : "opacity-0 z-0"
              }`}
            >
              <picture className="w-full h-full block">
                {/* Desktop & Tablet Landscape (16:9 widescreen) */}
                <source
                  media="(min-width: 768px)"
                  srcSet={slide.image}
                />
                {/* Mobile Devices (9:16 vertical portrait) */}
                <source
                  media="(max-width: 767px)"
                  srcSet={slide.imageMobile}
                />
                {/* Background Imagery: 4K sharpness with GPU hardware acceleration & 60fps frame rate */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    transform: "translate3d(0, 0, 0)",
                    backfaceVisibility: "hidden",
                  }}
                  className="w-full h-full object-cover object-[center_top]"
                />
              </picture>
            </div>
          );
        })}
      </div>

      {/* =================================== BOTTOM-LEFT COMPACT HERO CARD (MINIMIZED FOOTPRINT) =================================== */}
      <div
        ref={contentBoxRef}
        className="hero-content-card pointer-events-auto will-change-transform"
      >
        <div
          key={activeSlide.id}
          className="transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-2"
        >
          {/* Dynamic Category Badge (Clean Text, No Emojis, No Dots) */}
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-[9.5px] sm:text-[10px] font-mono text-teal-300 tracking-wider uppercase font-semibold">
            {activeSlide.category}
          </div>

          {/* Scaled-Down Desktop & Mobile H1 */}
          <h1>{activeSlide.headline}</h1>

          {/* Concise Subtitle (line-clamp-2 on small mobile to stay compact) */}
          <p className="line-clamp-2 sm:line-clamp-none">
            {activeSlide.description}
          </p>

          {/* Hero CTAs (Liquid Metal 3D Buttons: Get Started & Arrange Team Training) */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <LiquidMetalButton
              label="Get Started"
              onClick={() => handleScrollToCourses()}
              width={146}
              height={44}
              variant="blue"
              icon={<Sparkles className="w-3.5 h-3.5 text-teal-300" />}
            />

            <LiquidMetalButton
              label={activeSlide.secondaryCtaText}
              onClick={handleScrollToContact}
              width={184}
              height={44}
              variant="dark"
            />
          </div>

          {/* Clean Plain-Text Tagline (Strictly No Emojis / Symbols, Desktop Only) */}
          <div className="hidden sm:flex pt-2 text-[10.5px] text-slate-300 font-normal tracking-wide items-center flex-wrap gap-x-2">
            <span>Experienced clinical educators</span>
            <span className="text-teal-400 font-semibold">•</span>
            <span>Hands-on simulation</span>
            <span className="text-teal-400 font-semibold">•</span>
            <span>Supportive learning</span>
          </div>
        </div>
      </div>

      {/* =================================== DISCREET SLIDER CONTROLS (HIDDEN ON MOBILE, VISIBLE ON LAPTOP/DESKTOP) =================================== */}
      <div
        ref={controlsRef}
        className="hidden sm:flex absolute z-20 bottom-8 right-10 items-center gap-1.5 bg-black/45 px-2 py-1 rounded-full border border-white/10 shadow-sm will-change-transform"
      >
        <button
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="w-4 h-4 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors active:scale-90"
        >
          <ChevronLeft className="w-2.5 h-2.5" />
        </button>

        <span className="text-[9.5px] font-mono text-slate-300 font-semibold select-none px-0.5">
          0{activeIdx + 1} / 0{HERO_SLIDES.length}
        </span>

        <div className="flex items-center gap-1 px-0.5">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Switch to photograph 0${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === activeIdx
                  ? "w-3 bg-[#087F8C]"
                  : "w-1 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next photograph"
          className="w-4 h-4 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors active:scale-90"
        >
          <ChevronRight className="w-2.5 h-2.5" />
        </button>
      </div>
    </section>
  );
}
