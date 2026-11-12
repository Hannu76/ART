"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface WhyChooseItem {
  id: number;
  badge: string;
  headline: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
  cardTag: string;
  cardTitle: string;
  cardImage: string;
  cardAlt: string;
}

const ITEMS: WhyChooseItem[] = [
  {
    id: 0,
    badge: "WHY CHOOSE ARTL",
    headline: "Accredited clinical excellence & leadership.",
    description:
      "Our programs deliver evidence-based emergency life-support education led by accredited NHS clinicians, senior resuscitation officers, and master educators across the UK.",
    highlights: [
      "RCUK Aligned Curriculum",
      "1-Day Practical Intensive Sessions",
      "Expert NHS Faculty Instructors",
      "High-Fidelity Simulation Scenarios",
    ],
    ctaText: "Explore Courses →",
    ctaHref: "#courses",
    cardTag: "RCUK Accredited",
    cardTitle: "Immediate Life Support (ILS)",
    cardImage: "/images/why-practical-cpr.jpg",
    cardAlt: "Practical Resuscitation Training on Manikin",
  },
  {
    id: 1,
    badge: "ADVANCED SIMULATION",
    headline: "Master cardiac arrest & acute crisis algorithms.",
    description:
      "High-fidelity simulation covering peri-arrest arrhythmias, manual defibrillator safety, reversible causes (4 Hs & 4 Ts), and structured crisis team leadership.",
    highlights: [
      "Peri-Arrest Arrhythmia Recognition",
      "Manual Defibrillator Safety & Charging",
      "Reversible Causes (4 Hs & 4 Ts) Protocols",
      "Structured SBAR Crisis Team Leadership",
    ],
    ctaText: "View ALS Curriculum →",
    ctaHref: "#courses",
    cardTag: "Advanced ALS",
    cardTitle: "Acute Crisis Algorithms",
    cardImage: "/images/why-emergency-prep.jpg",
    cardAlt: "Emergency Preparedness and ALS Simulation Lab",
  },
  {
    id: 2,
    badge: "EMERGENCY AIRWAY SKILLS",
    headline: "Structured ABCDE & emergency airway skills.",
    description:
      "Hands-on bag-valve-mask ventilations, supraglottic i-gel airway insertion, and rapid physiological deterioration escalation for acute clinicians and ward teams.",
    highlights: [
      "Structured ABCDE Patient Assessment",
      "Supraglottic i-gel Airway Insertion Drills",
      "Two-Rescuer Bag-Valve-Mask Ventilation",
      "Early Warning Deterioration Escalation",
    ],
    ctaText: "Book Practical Session →",
    ctaHref: "#contact",
    cardTag: "Airway Management",
    cardTitle: "Structured ABCDE & Skills",
    cardImage: "/images/why-educator-aed.jpg",
    cardAlt: "Airway and Defibrillation Skills Demonstrator",
  },
];

export default function WhyChooseARTL() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        setActiveIndex((prev) => (prev + 1) % ITEMS.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
      }
    } else if (diffY > 45 && Math.abs(diffY) > Math.abs(diffX)) {
      setActiveIndex((prev) => (prev + 1) % ITEMS.length);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % ITEMS.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Vertically Pinned Container bound to scroll progression (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1300",
          pin: true,
          anticipatePin: 1,
          scrub: 0.2,
          onUpdate: (self) => {
            const p = self.progress;
            let target = 0;
            if (p >= 0.65) target = 2;
            else if (p >= 0.32) target = 1;
            else target = 0;
            setActiveIndex(target);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      } else {
        window.location.hash = targetId;
      }
    }
  };

  // 3D Card Stack Styles - Circular Slot Indexing ensures ALL 3 cards are ALWAYS visible in a gorgeous layered deck
  const getCardStyle = (idx: number) => {
    // slot 0 = active front card, slot 1 = peeking below/behind, slot 2 = peeking lowest/behind
    const slot = ((idx - activeIndex) % ITEMS.length + ITEMS.length) % ITEMS.length;

    if (slot === 0) {
      // Active front card
      return {
        transform: "translate3d(0, 0px, 0) scale(1) rotate(0deg)",
        zIndex: 30,
        opacity: 1,
        boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.45)",
      };
    } else if (slot === 1) {
      // 2nd card peeking below with subtle tilt
      return {
        transform: "translate3d(0, 36px, 0) scale(0.92) rotate(3deg)",
        zIndex: 20,
        opacity: 0.92,
        boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.35)",
      };
    } else {
      // 3rd card peeking lowest with opposite tilt
      return {
        transform: "translate3d(0, 72px, 0) scale(0.85) rotate(-2.5deg)",
        zIndex: 10,
        opacity: 0.82,
        boxShadow: "0 15px 30px -10px rgba(15, 23, 42, 0.25)",
      };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="why-choose"
      className="relative w-full text-gray-900 font-sans overflow-hidden select-none border-b-0 py-8 lg:py-0 bg-white"
    >
      {/* Anchor bridge for #why-choose-us links */}
      <span
        id="why-choose-us"
        className="absolute -top-20 pointer-events-none"
      />

      {/* ==============================================================
          DESKTOP PINNED CONTAINER (100vh) - SIDE-BY-SIDE SYNCHRONIZATION
          Left: Anchored descriptive text; Right: 3D Layered Stacked Cards
          ============================================================== */}
      <div className="hidden lg:flex w-full h-screen items-center px-10 xl:px-24 max-w-7xl mx-auto">
        {/* Left Column: Anchored Descriptive Text Box (Guaranteed Zero Overlap: Only Active Item Rendered) */}
        <div className="w-1/2 pr-12 xl:pr-16 relative min-h-[440px] flex items-center">
          {ITEMS.map((item, idx) => {
            if (idx !== activeIndex) return null;
            return (
              <div
                key={item.id}
                className="w-full animate-in fade-in duration-300 select-text"
              >
                {/* Stepper indicator pills */}
                <div className="flex items-center gap-2 mb-4">
                  {ITEMS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        dotIdx === activeIndex
                          ? "w-8 bg-[#087F8C]"
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <span className="inline-block px-3.5 py-1 mb-4 text-xs font-semibold tracking-wider text-rose-600 uppercase bg-rose-50 rounded-full font-mono border border-rose-100">
                  {item.badge}
                </span>
                <h2 className="text-3xl xl:text-4xl font-bold tracking-tight text-gray-950 mb-4 leading-[1.18]">
                  {item.headline}
                </h2>
                <p className="text-sm xl:text-base text-gray-600 mb-6 leading-relaxed font-normal">
                  {item.description}
                </p>
                <ul className="space-y-3 mb-7 text-gray-800 font-medium text-xs xl:text-sm">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={item.ctaHref}
                  onClick={(e) => handleCtaClick(e, item.ctaHref)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 text-xs xl:text-sm"
                >
                  <span>{item.ctaText}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Right Column: 3D Stacked Cards Deck (Always Displays All 3 Cards with Layered Depth) */}
        <div className="w-1/2 relative h-[560px] flex items-center justify-center">
          <div className="relative w-[390px] xl:w-[430px] h-[460px]">
            {ITEMS.map((item, idx) => {
              const cardStyle = getCardStyle(idx);
              const isFront = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    ...cardStyle,
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease-out, box-shadow 0.4s ease-out",
                  }}
                  className={`pinned-card-${idx} absolute inset-0 rounded-3xl overflow-hidden bg-gray-900 border border-white/20 will-change-transform cursor-pointer select-none`}
                >
                  <img
                    src={item.cardImage}
                    alt={item.cardAlt}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-7">
                    <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold font-mono mb-1">
                      {item.cardTag}
                    </span>
                    <h3 className="text-white text-xl xl:text-2xl font-bold leading-snug">
                      {item.cardTitle}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==============================================================
          MOBILE PROGRESSIVE STACKED CARDS DECK (< 1024px)
          Exact same luxury 3D card deck experience as desktop!
          ============================================================== */}
      <div className="lg:hidden w-full px-5 sm:px-8 py-8 sm:py-12 border-t border-gray-100 relative">
        {/* Section Stepper Tabs */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full justify-start sm:justify-center py-1">
            {ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeIndex === idx
                    ? "bg-[#0F172A] text-white shadow-xs"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {`0${idx + 1}. `} {item.cardTag}
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Cards Deck Container (Touch / Swipe enabled) */}
        <div
          className="relative w-full max-w-[340px] sm:max-w-[380px] h-[370px] sm:h-[410px] mx-auto select-none pt-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {ITEMS.map((item, idx) => {
            const cardStyle = getCardStyle(idx);

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (idx !== activeIndex) {
                    setActiveIndex(idx);
                  } else {
                    nextCard();
                  }
                }}
                style={{
                  ...cardStyle,
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease-out, box-shadow 0.4s ease-out",
                }}
                className="absolute inset-x-0 top-0 h-[330px] sm:h-[370px] rounded-3xl overflow-hidden bg-gray-900 border border-white/20 will-change-transform cursor-pointer"
              >
                <img
                  src={item.cardImage}
                  alt={item.cardAlt}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-7">
                  <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold font-mono mb-1">
                    {item.cardTag}
                  </span>
                  <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug">
                    {item.cardTitle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Text & Features (Guaranteed Zero Overlap via Active Index) */}
        <div className="mt-6 max-w-[380px] mx-auto">
          {ITEMS.map((item, idx) => {
            if (idx !== activeIndex) return null;
            return (
              <div key={item.id} className="animate-in fade-in duration-300">
                <span className="inline-block px-3 py-1 mb-3 text-[11px] font-semibold tracking-wider text-rose-600 uppercase bg-rose-50 rounded-full font-mono border border-rose-100">
                  {item.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950 mb-3 leading-snug">
                  {item.headline}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed font-normal">
                  {item.description}
                </p>
                <ul className="space-y-2 mb-6 text-gray-800 font-medium text-xs sm:text-sm">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <a
                    href={item.ctaHref}
                    onClick={(e) => handleCtaClick(e, item.ctaHref)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-white font-semibold text-xs shadow-md active:scale-95 transition-all"
                  >
                    <span>{item.ctaText}</span>
                  </a>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <button
                      onClick={prevCard}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                      aria-label="Previous card"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextCard}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                      aria-label="Next card"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
