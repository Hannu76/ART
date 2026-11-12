"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CompleteLandingPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const countersRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);

  const [sessions, setSessions] = useState(0);
  const [clients, setClients] = useState(0);
  const [specialists, setSpecialists] = useState(0);
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    // Register GSAP ScrollTrigger safely in browser context
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Section Scroll Zoom
      if (heroImageRef.current && heroImageRef.current.parentElement) {
        gsap.fromTo(
          heroImageRef.current,
          { scale: 1.25 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroImageRef.current.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 2. Number Counting Animation with ScrollTrigger
      const animateCount = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        target: number,
        duration: number
      ) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: countersRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => setter(Math.floor(obj.val)),
        });
      };

      animateCount(setSessions, 4983, 2);
      animateCount(setClients, 97, 2);
      animateCount(setSpecialists, 189, 2);

      // 3. Services Staggered Cards Reveal Animation
      if (servicesRef.current) {
        const serviceCards = Array.from(servicesRef.current.children);
        gsap.fromTo(
          serviceCards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    // 4. Ultra-smooth 60-120fps Cursor Tracking using gsap.quickTo
    // (Decoupled from React state to avoid re-rendering the whole component on every pixel move)
    let xTo: ((value: number) => void) | null = null;
    let yTo: ((value: number) => void) | null = null;
    let dotXTo: ((value: number) => void) | null = null;
    let dotYTo: ((value: number) => void) | null = null;

    if (cursorRef.current && cursorDotRef.current) {
      xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.2, ease: "power3" });
      yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.2, ease: "power3" });
      dotXTo = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.05, ease: "power1" });
      dotYTo = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.05, ease: "power1" });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to([cursorRef.current, cursorDotRef.current], { opacity: 1, duration: 0.2 });
      }
      if (xTo && yTo && dotXTo && dotYTo) {
        xTo(e.clientX);
        yTo(e.clientY);
        dotXTo(e.clientX);
        dotYTo(e.clientY);
      }
    };

    const handleMouseLeave = () => {
      gsap.to([cursorRef.current, cursorDotRef.current], { opacity: 0, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Revert context and clean up ScrollTriggers & listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#FAFAFA] text-gray-900 font-sans cursor-none select-none relative overflow-x-hidden min-h-screen"
    >
      {/* Outer Follower Ring Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference transition-[width,height] duration-200 transform -translate-x-1/2 -translate-y-1/2 opacity-0 ${
          cursorHovered
            ? "w-14 h-14 bg-white/80 ring-2 ring-white"
            : "w-8 h-8 border border-white bg-blue-500/20 backdrop-blur-[1px]"
        }`}
      />

      {/* Center Precise Dot Cursor */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 opacity-0"
      />

      {/* ================= HERO SECTION (Scroll Zoom) ================= */}
      <section className="h-screen overflow-hidden relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            ref={heroImageRef}
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80"
            alt="Hero Calming Mindful Background"
            className="w-full h-full object-cover brightness-[0.75] will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none" />
        </div>

        <div className="relative z-10 text-white text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-4 mb-4 text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
            Mindful Therapy & Wellness
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-md">
            Grow through what you go through
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Evidence-based emotional and psychological support tailored to your journey. Find peace, clarity, and resilience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full shadow-lg transition-transform active:scale-95"
            >
              Explore Services
            </a>
            <a
              href="#counters"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium rounded-full border border-white/30 transition-transform active:scale-95"
            >
              Our Impact
            </a>
          </div>
        </div>
      </section>

      {/* ================= COUNTERS SECTION (Animated Numbers) ================= */}
      <section id="counters" ref={countersRef} className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 rounded-2xl bg-gray-50/60 border border-gray-100 transition-all hover:shadow-md">
            <h2 className="text-5xl md:text-6xl font-black text-blue-600 mb-3 tracking-tight">
              {sessions.toLocaleString()}+
            </h2>
            <p className="text-lg text-gray-700 font-semibold mb-1">Sessions Held</p>
            <p className="text-sm text-gray-500">Guiding individuals through personal growth</p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50/60 border border-gray-100 transition-all hover:shadow-md">
            <h2 className="text-5xl md:text-6xl font-black text-blue-600 mb-3 tracking-tight">
              {clients}%
            </h2>
            <p className="text-lg text-gray-700 font-semibold mb-1">Client Satisfaction</p>
            <p className="text-sm text-gray-500">Report positive emotional outcomes</p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50/60 border border-gray-100 transition-all hover:shadow-md">
            <h2 className="text-5xl md:text-6xl font-black text-blue-600 mb-3 tracking-tight">
              {specialists.toLocaleString()}
            </h2>
            <p className="text-lg text-gray-700 font-semibold mb-1">Accredited Specialists</p>
            <p className="text-sm text-gray-500">Licensed counselors and therapists</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION (Staggered Reveal) ================= */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              Dedicated therapeutic approaches designed to fit your schedule, lifestyle, and individual goals.
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Individual Therapy
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Personal space to pause, reflect, and feel truly heard. One-on-one sessions tailored to conquer anxiety, stress, and self-discovery.
              </p>
            </div>

            <div
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Couples Counseling
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Guidance for navigating challenges, resolving conflict, and rebuilding deep connection and authentic communication.
              </p>
            </div>

            <div
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Online Therapy
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Secure, flexible video and chat therapy from anywhere in the world. Get high-quality support without judgment or travel time.
              </p>
            </div>

            <div
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Group Sessions
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Connect with others in a facilitated, safe environment. Share mutual experiences, build empathy, and heal together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
