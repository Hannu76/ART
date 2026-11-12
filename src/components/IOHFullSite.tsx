"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CornerDownRight,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  HeartPulse,
  Sparkles,
} from "lucide-react";

export default function IOHFullSite() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroMediaRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Text animation refs for hero
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  // Timer & Carousel State for Right Metrics
  const [activeMetric, setActiveMetric] = useState<number>(0);
  const [timerProgress, setTimerProgress] = useState<number>(45);
  const [cursorHovered, setCursorHovered] = useState(false);

  // Metric values with animated rolling numbers
  const [candidateCount, setCandidateCount] = useState(15);
  const [rcukCompliance, setRcukCompliance] = useState(100);
  const [courseCentres, setCourseCentres] = useState(12);

  const metrics = [
    { id: 0, label: "Teaching Experience", value: `${candidateCount}+ Years`, display: "15+ Years" },
    { id: 1, label: "RCUK Guideline Compliance", value: `${rcukCompliance}%`, display: "100%" },
    { id: 2, label: "Accredited Instructors", value: "ALS • GIC • ILSi", display: "ALS • GIC" },
  ];

  // ARTL Resuscitation & Life Support Courses
  const healthCareCourses = [
    {
      id: 0,
      title: "RCUK Immediate Life Support (ILS)",
      category: "RCUK Accredited",
      units: "1-Day Practical",
      image: "/images/editorial-hero.jpg",
      overview: "Resuscitation Council UK aligned acute clinical resuscitation, peri-arrest rhythm recognition, safe defibrillation protocols, and structured ABCDE patient assessment.",
      competencies: [
        "Structured ABCDE patient physiological assessment",
        "Peri-arrest cardiac arrhythmia recognition & algorithm drills",
        "Manual defibrillator safety, charging and synchronized cardioversion",
      ],
      target: "Doctors, Nurses, Allied Health, Paramedics & Acute Clinicians",
      duration: "6.5 CPD Hours • RCUK Certified",
      href: "/courses/rcuk-ils",
    },
    {
      id: 1,
      title: "Advanced Life Support (ALS)",
      category: "Emergency & Critical Care",
      units: "2-Day Intensive",
      image: "/images/practical-skills.jpg",
      overview: "Gold-standard 2-day practical certification for clinicians leading cardiac arrest teams, manual defibrillation, emergency airway management, and post-resuscitation care.",
      competencies: [
        "Cardiac arrest team leadership & human factor crisis management",
        "Advanced airway management & endotracheal intubation co-factors",
        "Reversible causes of arrest (4 Hs & 4 Ts) diagnostic protocols",
      ],
      target: "Critical Care Clinicians, Anaesthetists, Emergency MDs & Regs",
      duration: "14.0 CPD Hours • 2-Day Practical",
      href: "/courses/als",
    },
    {
      id: 2,
      title: "Basic Life Support (BLS) & AED",
      category: "Core Healthcare",
      units: "Half-Day Practical",
      image: "/images/card-dental-1.jpg",
      overview: "High-performance chest compressions, adult & paediatric bag-valve-mask ventilations, foreign body airway obstruction drills, and rapid automated external defibrillator deployment.",
      competencies: [
        "High-performance CPR with minimal hands-off compression intervals",
        "Two-rescuer adult and paediatric bag-valve-mask ventilations",
        "Immediate AED prompt response & shock deliverability assessment",
      ],
      target: "All Healthcare Staff, Dental Teams & Clinical Support Staff",
      duration: "4.0 CPD Hours • Mandatory Update",
      href: "/courses/bls",
    },
    {
      id: 3,
      title: "The Ultimate Life Support Course",
      category: "Specialist Masterclass",
      units: "Masterclass",
      image: "/images/clinic-suite.jpg",
      overview: "Advanced masterclass covering complex arrhythmias, physiological stabilization, crisis leadership, emergency airway algorithms, and high-stakes simulation scenarios.",
      competencies: [
        "Complex peri-arrest arrhythmia management & pacing algorithms",
        "Post-cardiac arrest syndrome targeted temperature management",
        "Crisis Resource Management (CRM) in emergency theater environments",
      ],
      target: "Consultants, Resuscitation Officers & Clinical Practice Leads",
      duration: "10.0 CPD Hours • Advanced Masterclass",
      href: "/courses/ultimate-life-support",
    },
    {
      id: 4,
      title: "Dental In-house Training (Dental ILS)",
      category: "Dental Sedation",
      units: "Practice In-House",
      image: "/images/dental-training.jpg",
      overview: "Specialized in-chair emergency training tailored specifically for dental practices, sedation clinics, and dental surgeries covering medical emergency kits and airway management.",
      competencies: [
        "Supraglottic i-gel airway insertion & bag-valve-mask ventilations",
        "Emergency drug kit verification & anaphylaxis auto-injector protocols",
        "Team-based AED defibrillation drills for dental sedation clinics",
      ],
      target: "Dentists, Dental Nurses, Sedation Practice Teams & Hygienists",
      duration: "7.0 CPD Hours • GDC Outcome C",
      href: "/courses/dental-ils",
    },
    {
      id: 5,
      title: "Immediate Life Support Instructor (ILSi)",
      category: "Faculty & Instructor",
      units: "Instructor Cert",
      image: "/images/clinical-instructor.jpg",
      overview: "Accredited instructor training programme empowering experienced healthcare professionals to teach, assess, and facilitate RCUK Immediate Life Support courses.",
      competencies: [
        "Educational pedagogy & adult learning psychology in clinical skills",
        "Constructive debriefing & formative candidate appraisal methods",
        "Simulation scenario design & real-time fidelity management",
      ],
      target: "Experienced ILS Providers, Clinical Educators & Resus Leads",
      duration: "8.0 CPD Hours • Instructor Candidate",
      href: "/courses/ilsi",
    },
    {
      id: 6,
      title: "Paediatric Immediate Life Support (PILS / APLS)",
      category: "Paediatric Care",
      units: "1-Day Practical",
      image: "/images/card-dental-2.jpg",
      overview: "Paediatric emergency recognition, infant and child respiratory arrest management, anatomical airway differences, intraosseous access, and resuscitation algorithms.",
      competencies: [
        "Infant & child anatomical airway management & neutral positioning",
        "Paediatric foreign body airway obstruction emergency algorithms",
        "Fluid bolus administration & IO vascular access landmarking",
      ],
      target: "Paediatric Nurses, Community Clinicians & Dental Specialists",
      duration: "6.0 CPD Hours • Specialist Paediatric",
      href: "/courses/apls-recertification",
    },
    {
      id: 7,
      title: "Emergency Immediate Life Support (EILS)",
      category: "Acute Emergency",
      units: "1-Day Practical",
      image: "/images/training-session.jpg",
      overview: "Hands-on emergency response training for rapid response teams, ward staff, and clinic teams handling acute medical deterioration in pre-hospital and ward settings.",
      competencies: [
        "Rapid medical emergency recognition & early warning score escalation",
        "Airway adjuncts, oxygen delivery & non-invasive ventilation",
        "Team dynamics & structured SBAR clinical handover",
      ],
      target: "Ward Clinicians, Urgent Care Nurses & Allied Health Teams",
      duration: "6.0 CPD Hours • Clinical Emergency",
      href: "/courses/rcuk-ils",
    },
  ];

  // Why Choose Us / Clinical Distinction Dataset
  const whyChooseUsPillars = [
    {
      id: 0,
      category: "RCUK-Registered Courses",
      headline: "Accredited by the Resuscitation Council UK ensuring gold standard compliance",
      description:
        "All our training programs are accredited by the Resuscitation Council UK, ensuring the highest standards of quality and full compliance with national and international resuscitation guidelines.",
      badge: "100% RCUK Aligned",
      stats: "National Quality Compliance",
      ctaText: "Explore RCUK Courses",
      href: "#courses",
      image: "/images/editorial-hero.jpg",
      thumb: "/images/editorial-hero.jpg",
      highlights: [
        "Fully compliant with RCUK 2021/2025 clinical resuscitation guidelines",
        "Standardized curriculum recognized across all NHS Trusts & boards",
        "Verifiable digital certification upon course completion",
      ],
    },
    {
      id: 1,
      category: "Expert Clinical Trainers",
      headline: "Delivered by accredited instructors with over 15 years clinical experience",
      description:
        "Our courses are led by experienced clinicians qualified across multiple Resuscitation Council UK and international programmes including ALS, GIC, EPALS, and ILSi, ensuring genuine real-world expertise.",
      badge: "ALS • GIC • EPALS • ILSi",
      stats: "15+ Years Clinical Teaching",
      ctaText: "Meet Our Instructors",
      href: "#about",
      image: "/images/clinical-instructor.jpg",
      thumb: "/images/clinical-instructor.jpg",
      highlights: [
        "Instructors with active intensive care & emergency department backgrounds",
        "Supportive, friendly learning environment tailored to every skill level",
        "Expert feedback on complex ECG interpretation and crisis leadership",
      ],
    },
    {
      id: 2,
      category: "Realistic Hands-On Simulation",
      headline: "Practical, hands-on teaching supported by high-fidelity clinical simulation",
      description:
        "Gain real practical experience through realistic simulations and emergency scenarios. Train with hospital-grade airway devices, manual defibrillators, and SimMan mannequins to build real crisis confidence.",
      badge: "High-Fidelity SimMan Suite",
      stats: "Zero-Risk Realistic Practice",
      ctaText: "View Practical Training",
      href: "#courses",
      image: "/images/practical-skills.jpg",
      thumb: "/images/practical-skills.jpg",
      highlights: [
        "Invasive supraglottic airway & bag-valve-mask drills",
        "Safe defibrillator charging, shock delivery & team choreography",
        "Human factors & structured scenario debriefing",
      ],
    },
    {
      id: 3,
      category: "Nationally Recognized Certification",
      headline: "Endorsed certificates widely respected across healthcare & emergency services",
      description:
        "Upon successful completion, you’ll receive an RCUK-endorsed certificate and verifiable CPD hours, recognized across NHS trusts, dental sedation practices, and private hospital groups nationwide.",
      badge: "CPD & GDC Endorsed",
      stats: "Widely Respected Credential",
      ctaText: "Verify Certification",
      href: "/certifications",
      image: "/images/clinic-suite.jpg",
      thumb: "/images/clinic-suite.jpg",
      highlights: [
        "GDC Outcome C compliant for dental clinicians and sedation teams",
        "Instant digital certificate with tamper-proof validation",
        "Valid across acute hospitals, community clinics & private theaters",
      ],
    },
  ];

  // Dual-Direction Horizontal Reviews Dataset (Matching Reference Image Style)
  const reviewsTopRow = [
    {
      id: "top-1",
      quote:
        "I did my ILS course with ART Ltd on 22nd February. It was an incredible experience! The course instructors Derek and Dr Raj were very professional and experienced. Chilworth Manor venue was amazing!",
      name: "Olivia Richardson",
      location: "Southampton, UK",
      avatar: "/images/avatars/avatar1.jpg",
      bg: "bg-[#FFB7B2]",
      text: "text-[#271515]",
      subtext: "text-[#613232]",
    },
    {
      id: "top-2",
      quote:
        "As a clinical clinician, I appreciate the depth of evidence-based training and high-fidelity SimMan airway practice. The scenario debriefings have become my gold standard for emergency preparedness!",
      name: "Sophia Mitchell",
      location: "London, UK",
      avatar: "/images/avatars/avatar2.jpg",
      bg: "bg-[#FFDEB3]",
      text: "text-[#2B1906]",
      subtext: "text-[#6E4214]",
    },
    {
      id: "top-3",
      quote:
        "I never knew advanced resuscitation could feel so clear and intuitive! The instructors break down complex arrhythmias and safe defibrillation seamlessly. Plus, the RCUK certification arrived immediately!",
      name: "Aisha Khan",
      location: "London, UK",
      avatar: "/images/avatars/avatar3.jpg",
      bg: "bg-[#FFF099]",
      text: "text-[#2C2404]",
      subtext: "text-[#6B5A0F]",
    },
    {
      id: "top-4",
      quote:
        "The ALS simulation scenarios prepared our emergency department resuscitation team for high-stress cardiac arrest drills. Deeply practical airway and crisis leadership algorithms!",
      name: "Dr. Marcus Patel",
      location: "Bristol, UK",
      avatar: "/images/avatars/avatar4.jpg",
      bg: "bg-[#BBF7D0]",
      text: "text-[#0E2A15]",
      subtext: "text-[#236332]",
    },
  ];

  const reviewsBottomRow = [
    {
      id: "bot-1",
      quote:
        "Incredible dental sedation emergency training delivered directly at our clinic. Our dentists and nursing team gained tremendous real-life confidence with airway adjuncts and AED shock delivery!",
      name: "Laura Cook",
      location: "Winchester, UK",
      avatar: "/images/avatars/avatar5.jpg",
      bg: "bg-[#BAF2BB]",
      text: "text-[#0E2813]",
      subtext: "text-[#1F5428]",
    },
    {
      id: "bot-2",
      quote:
        "The variety of clinical scenarios is amazing! Whether reviewing paediatric neutral airway positioning or adult peri-arrest rhythms, this team has it all. Highly recommend!",
      name: "Emily Sanders",
      location: "Oxford, UK",
      avatar: "/images/avatars/avatar6.jpg",
      bg: "bg-[#BEE3F8]",
      text: "text-[#0D253D]",
      subtext: "text-[#215380]",
    },
    {
      id: "bot-3",
      quote:
        "This training has changed my emergency ward confidence for the better! The structured ABCDE physiological assessment helps me stay calm and systematic during critical patient deterioration.",
      name: "Priya Deshmukh",
      location: "Southampton, UK",
      avatar: "/images/avatars/avatar7.jpg",
      bg: "bg-[#E9D8FD]",
      text: "text-[#25143F]",
      subtext: "text-[#5A3391]",
    },
    {
      id: "bot-4",
      quote:
        "I'm obsessed with the high quality of teaching! Thanks Raj, Derek, Jyothi and Debbie for an excellent learning experience with zero stress and maximum practical skill retention.",
      name: "Mia Lawrence",
      location: "Portsmouth, UK",
      avatar: "/images/avatars/avatar8.jpg",
      bg: "bg-[#FED7E2]",
      text: "text-[#3B1226]",
      subtext: "text-[#7C2A54]",
    },
  ];

  // Carousel Active State & Auto-Transfer (2.0 seconds forward direction)
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [transferProgress, setTransferProgress] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(380);
  const [carouselGap, setCarouselGap] = useState(28);

  // Why Choose Us Tab State
  const [activePillarIdx, setActivePillarIdx] = useState(0);

  // Active Testimonial State
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Responsive Card Dimensions
  useEffect(() => {
    const updateDims = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setCarouselWidth(300);
          setCarouselGap(16);
        } else {
          setCarouselWidth(380);
          setCarouselGap(28);
        }
      }
    };
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  // Auto-Transfer Timer between Cards (Transfers automatically forward every 2.0s)
  useEffect(() => {
    if (isCarouselPaused) return;
    const intervalTime = 25;
    const totalStepTime = 2000; // 2.0 seconds forward movement
    const increment = (intervalTime / totalStepTime) * 100;

    const interval = setInterval(() => {
      setTransferProgress((prev) => {
        if (prev >= 100) {
          setActiveCourseIdx((curr) => (curr + 1) % healthCareCourses.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isCarouselPaused, healthCareCourses.length]);

  const handleCardClick = (idx: number) => {
    setActiveCourseIdx(idx);
    setTransferProgress(0);
  };

  const handlePrevCourse = () => {
    setActiveCourseIdx((curr) => (curr - 1 + healthCareCourses.length) % healthCareCourses.length);
    setTransferProgress(0);
  };

  const handleNextCourse = () => {
    setActiveCourseIdx((curr) => (curr + 1) % healthCareCourses.length);
    setTransferProgress(0);
  };

  const handlePrevPillar = () => {
    setActivePillarIdx((prev) => (prev - 1 + whyChooseUsPillars.length) % whyChooseUsPillars.length);
  };

  const handleNextPillar = () => {
    setActivePillarIdx((prev) => (prev + 1) % whyChooseUsPillars.length);
  };

  // Bento Grid Animation & Count State
  const bentoContainerRef = useRef<HTMLDivElement | null>(null);
  const bentoCard1Ref = useRef<HTMLDivElement | null>(null);
  const bentoCard2Ref = useRef<HTMLDivElement | null>(null);
  const bentoCard3Ref = useRef<HTMLDivElement | null>(null);
  const bentoCard4Ref = useRef<HTMLDivElement | null>(null);
  const [bentoExpCount, setBentoExpCount] = useState<number>(0);

  // 1. Live Continuous Timer for Right-Side Metrics
  useEffect(() => {
    const intervalTime = 50;
    const totalStepTime = 4000;
    const increment = (intervalTime / totalStepTime) * 100;

    const interval = setInterval(() => {
      setTimerProgress((prev) => {
        if (prev >= 100) {
          setActiveMetric((curr) => (curr + 1) % 3);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // 2. GSAP Animations: Text Reveal, Hero Zoom, Bento Grid Rearrange & Number Counting
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power2.out",
            delay: 0.5,
          }
        );
      }

      // Hero Background Image Smooth Scrub Zoom
      if (heroImageRef.current && heroMediaRef.current) {
        gsap.fromTo(
          heroImageRef.current,
          { scale: 1.1 },
          {
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: heroMediaRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // Number counting animations for Hero
      const countTarget = { exp: 0, rcuk: 0 };
      gsap.to(countTarget, {
        exp: 15,
        rcuk: 100,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          setCandidateCount(Math.floor(countTarget.exp));
          setRcukCompliance(Math.floor(countTarget.rcuk));
        },
      });

      // Bento Grid Scroll Animation: Cards fly in from scattered angles and lock into place
      if (bentoContainerRef.current) {
        if (bentoCard1Ref.current) {
          gsap.fromTo(
            bentoCard1Ref.current,
            { x: -70, y: 35, rotate: -3.5, opacity: 0 },
            {
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bentoContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (bentoCard2Ref.current) {
          gsap.fromTo(
            bentoCard2Ref.current,
            { y: -55, x: -20, rotate: 2.5, opacity: 0 },
            {
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              duration: 1.15,
              delay: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bentoContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (bentoCard3Ref.current) {
          gsap.fromTo(
            bentoCard3Ref.current,
            { x: 70, y: -40, rotate: -2.5, opacity: 0 },
            {
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              duration: 1.15,
              delay: 0.22,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bentoContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (bentoCard4Ref.current) {
          gsap.fromTo(
            bentoCard4Ref.current,
            { y: 70, scale: 0.93, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1.25,
              delay: 0.28,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bentoContainerRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Bento Card 3 rolling number count animation (from 0 to 15)
        const bentoCountObj = { val: 0 };
        gsap.to(bentoCountObj, {
          val: 15,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bentoContainerRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            setBentoExpCount(Math.floor(bentoCountObj.val));
          },
        });
      }
    }, containerRef);

    // Custom Cursor
    const cursor = cursorRef.current;
    if (cursor) {
      const xTo = gsap.quickTo(cursor, "x", { duration: 0.16, ease: "power2.out" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.16, ease: "power2.out" });

      let isVisible = false;

      const onMouseMove = (e: MouseEvent) => {
        if (!isVisible) {
          gsap.to(cursor, { opacity: 1, duration: 0.2 });
          isVisible = true;
        }
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const onMouseLeave = () => {
        gsap.to(cursor, { opacity: 0, duration: 0.2 });
        isVisible = false;
      };

      window.addEventListener("mousemove", onMouseMove, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseleave", onMouseLeave);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  const activeCourse = healthCareCourses[activeCourseIdx];
  const activePillar = whyChooseUsPillars[activePillarIdx];

  return (
    <div
      ref={containerRef}
      className="bg-white text-[#111111] font-sans cursor-none selection:bg-[#111111] selection:text-white min-h-screen overflow-x-hidden relative"
    >
      {/* ==============================================================
          00 — MINIMALIST CUSTOM CURSOR
          ============================================================== */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-[width,height] duration-200 ease-out will-change-transform ${
          cursorHovered ? "w-10 h-10 border border-white/80 bg-white/20" : "w-3 h-3 bg-white"
        }`}
      />

      {/* ==============================================================
          01 — NAVIGATION (BLACK TEXT & ROUND STUDENT LOGIN BUTTON)
          ============================================================== */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 sm:py-5 px-6 sm:px-12 lg:px-16 bg-white/90 backdrop-blur-md border-b border-gray-200/70 pointer-events-auto transition-all">
        {/* Top-Left Corner: Elegant Brand Name with Official 3D Logo */}
        <Link
          href="/"
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
          className="flex items-center gap-2.5 sm:gap-3 select-none group"
        >
          <img
            src="/images/artl-logo.png"
            alt="Advanced Resuscitation Training Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span
              className="font-serif text-lg sm:text-xl tracking-tight text-black font-semibold leading-none"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              ART Resuscitation
            </span>
            <span className="text-[10px] tracking-wider uppercase text-gray-500 font-mono">
              Training Ltd
            </span>
          </div>
        </Link>

        {/* Center: Clean Spaced Navigation Links (Black Text) */}
        <div className="hidden lg:flex items-center space-x-9 text-[13.5px] tracking-normal font-medium text-black">
          {[
            { label: "Courses", href: "#courses" },
            { label: "Who We Are", href: "#about" },
            { label: "Why Choose Us", href: "#why-choose-us" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Course Centres", href: "#centres" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="relative py-1 text-black opacity-85 hover:opacity-100 transition-opacity group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right: Phone & Student Login Round Button */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-[13px] font-normal text-black">
          <a
            href="tel:07577437748"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className="hidden sm:inline-flex items-center gap-1.5 text-black font-medium opacity-90 hover:opacity-100 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5 text-gray-700" />
            <span>07577437748</span>
          </a>

          {/* Student Login Round Pill Button */}
          <a
            href="#contact"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black hover:bg-gray-800 text-white text-xs font-medium tracking-tight transition-all shadow-sm hover:scale-105 group"
          >
            <CornerDownRight className="w-3.5 h-3.5 opacity-85 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            <span>Book Training</span>
          </a>
        </div>
      </nav>

      {/* ==============================================================
          02 — ROUNDED HERO WITH WHITE CORNERS & REDUCED H2-SIZED HEADLINE
          ============================================================== */}
      <section className="bg-white pt-20 sm:pt-24 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-8 select-none">
        <div
          ref={heroMediaRef}
          className="relative w-full h-[calc(100vh-6.5rem)] min-h-[580px] sm:min-h-[640px] max-h-[880px] rounded-3xl sm:rounded-[2.75rem] lg:rounded-[3.25rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white flex flex-col justify-end px-6 sm:px-12 lg:px-16 pb-10 sm:pb-14"
        >
          {/* Full Viewport Background Image with GSAP Scroll Zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              ref={heroImageRef as any}
              className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] will-change-transform"
            >
              <img
                src="/images/training-session.jpg"
                alt="Advanced Resuscitation Training Seminar"
                className="w-full h-full object-cover object-[center_35%] brightness-100 contrast-[1.02]"
              />
            </div>

            {/* Subtle Gradient Framing */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35 pointer-events-none" />
          </div>

          {/* Hero Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-end w-full">
            {/* Bottom Left: Tagline & Refined Sized Heading */}
            <div className="lg:col-span-8 max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                <img
                  src="/images/artl-logo.png"
                  alt="ARTL Logo"
                  className="w-4 h-4 object-contain rounded-full shadow-xs"
                />
                <span>Resuscitation Council UK Accredited Provider</span>
              </div>

              {/* Reduced / Resized Heading */}
              <h1
                ref={headlineRef}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.95rem] font-normal tracking-[-0.025em] leading-[1.14] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]"
              >
                <span className="block font-semibold">Save Lives with Confidence</span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] font-light text-white/90 mt-1">
                  Advanced Resuscitation Training Ltd
                </span>
              </h1>

              {/* Mission Statement */}
              <p
                ref={subtitleRef}
                className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed font-light max-w-xl pt-0.5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
              >
                We are dedicated to providing top-quality resuscitation training to healthcare professionals. Our courses equip you with the skills and knowledge to save lives in critical moments.
              </p>

              {/* Features of Our Courses Pills */}
              <div className="pt-1 pb-1">
                <div className="text-[11px] text-white/80 font-medium mb-1.5 drop-shadow">
                  Features of Our Courses:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    RCUK-Registered Courses
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-medium">
                    <Users className="w-3.5 h-3.5 text-sky-300" />
                    Expert Trainers
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    Nationally Recognized Certification
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#courses"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-black text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-105"
                >
                  <span>Explore RCUK Courses</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#about"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium transition-all"
                >
                  <span>Who We Are</span>
                  <CornerDownRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Stacked Metric Rows & Round CTA */}
            <div className="lg:col-span-4 flex flex-col justify-end items-end w-full space-y-6 sm:space-y-7">
              <div className="w-full max-w-sm space-y-4">
                {metrics.map((m) => {
                  const isActive = activeMetric === m.id;
                  return (
                    <div
                      key={m.id}
                      onClick={() => {
                        setActiveMetric(m.id);
                        setTimerProgress(0);
                      }}
                      onMouseEnter={() => setCursorHovered(true)}
                      onMouseLeave={() => setCursorHovered(false)}
                      className="relative pt-2.5 cursor-pointer group select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
                    >
                      {/* Top Base Divider Line */}
                      <div suppressHydrationWarning className="w-full h-[1px] bg-white/40 relative overflow-hidden">
                        {/* Active Progress Timer Bar */}
                        {isActive && (
                          <div
                            suppressHydrationWarning
                            className="h-full bg-white transition-[width] duration-75 ease-linear"
                            style={{ width: `${timerProgress}%` }}
                          />
                        )}
                      </div>

                      {/* Metric Label */}
                      <div className="text-[11.5px] text-white/80 tracking-normal mt-2 mb-0.5 font-light group-hover:text-white transition-colors">
                        {m.label}
                      </div>

                      {/* Metric Value & Three Dots */}
                      <div className="flex items-center justify-between text-white">
                        <span className="text-2xl sm:text-3xl font-light tracking-tight group-hover:scale-105 transition-transform origin-left">
                          {m.value}
                        </span>
                        <div className="text-white/60 tracking-widest text-base group-hover:text-white transition-colors">
                          •••
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom-Right "Contact Instructors" Round Pill Button */}
              <a
                href="#contact"
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="inline-flex items-center justify-between gap-4 px-6 py-3.5 rounded-full bg-black/45 hover:bg-black/70 backdrop-blur-md border border-white/30 hover:border-white/50 text-white text-xs sm:text-sm font-medium transition-all shadow-xl group hover:scale-105"
              >
                <span>Speak to Course Coordinator</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <CornerDownRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          03 — WHO WE ARE SECTION (BENTO GRID WITH REALITY IMAGES)
          ============================================================== */}
      <section id="about" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-white border-b border-gray-200/80 select-none">
        <div className="max-w-7xl mx-auto">
          {/* Centered Pill Badge & Editorial Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 justify-center px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200/80 text-[11px] font-mono uppercase tracking-[0.2em] text-gray-700 mb-4 shadow-sm">
              <img
                src="/images/artl-logo.png"
                alt="ARTL Logo"
                className="w-4 h-4 object-contain rounded-full"
              />
              <span>WHO WE ARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-[-0.03em] leading-[1.12] text-gray-950 mb-4">
              Why healthcare leaders choose ARTL
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
              ART Resuscitation Training Ltd (ARTL) was established to provide high-quality, evidence-based resuscitation education for healthcare professionals, dental teams, and clinical staff across the UK.
            </p>
          </div>

          {/* Asymmetric Bento Grid (Matching User Reference Image) */}
          <div
            ref={bentoContainerRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
          >
            {/* CARD 1 (Left Tall Card - lg:col-span-4): Inset CPR Hands Image, Handcrafted Headline, Round Button */}
            <div
              ref={bentoCard1Ref}
              className="lg:col-span-4 bg-[#F4F4F6] rounded-[2.25rem] sm:rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md will-change-transform"
            >
              {/* Top Inset Image Card */}
              <div className="w-full h-52 sm:h-60 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-inner flex items-center justify-center mb-6 relative">
                <img
                  src="/images/bento/bento-cpr.jpg"
                  alt="Hands-on Resuscitation Practice"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Middle Headline */}
              <div className="space-y-3 mb-6">
                <h3 className="text-lg sm:text-[1.3rem] font-medium tracking-tight text-gray-950 leading-snug">
                  Delivered by master clinical educators to provide practical, hands-on teaching supported by realistic simulation.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Building genuine confidence so learners feel completely prepared for real emergencies.
                </p>
              </div>

              {/* Bottom Rounded Pill Button */}
              <div>
                <a
                  href="#courses"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium tracking-tight shadow-md hover:scale-105 transition-all group self-start"
                >
                  <span>Explore Courses</span>
                  <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform font-bold">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT 2-ROW GRID (lg:col-span-8): Top 2 cards + Bottom 1 wide card */}
            <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6">
              {/* TOP ROW: 2 Cards (Middle Handshake + Right 15+ Years Chess Piece) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* CARD 2 (Top Middle): Inset Handshake Image + "Trusted by" */}
                <div
                  ref={bentoCard2Ref}
                  className="bg-[#F4F4F6] rounded-[2.25rem] sm:rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md min-h-[260px] will-change-transform"
                >
                  {/* Top Inset Image Card */}
                  <div className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden bg-white shadow-inner flex items-center justify-center mb-5 relative">
                    <img
                      src="/images/bento/bento-handshake.jpg"
                      alt="Trusted Medical Partnerships"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <p className="text-base sm:text-lg font-medium text-gray-950 leading-snug">
                    <strong className="font-semibold text-gray-950">Trusted by</strong>{" "}
                    <span className="text-gray-500 font-normal">
                      healthcare professionals, dental teams &amp; clinical staff across the UK.
                    </span>
                  </p>
                </div>

                {/* CARD 3 (Top Right): 15+ Years Metric + 3D Chess Crown Piece */}
                <div
                  ref={bentoCard3Ref}
                  className="bg-[#F4F4F6] rounded-[2.25rem] sm:rounded-[2.5rem] p-6 sm:p-7 flex items-center justify-between border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md min-h-[260px] will-change-transform"
                >
                  {/* Left Text with Rolling Number Count Effect */}
                  <div className="space-y-1.5 pr-2">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-950 font-sans">
                      {bentoExpCount || 15}+
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-snug font-normal">
                      Years of accredited clinical teaching &amp; advanced resuscitation expertise.
                    </p>
                  </div>

                  {/* Right Inset 3D Chess Crown Trophy */}
                  <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-sky-50 to-slate-50 border border-sky-100/70 p-1.5 shadow-inner flex items-center justify-center flex-shrink-0 relative">
                    <img
                      src="/images/bento/bento-badge.jpg"
                      alt="Quality & Heritage"
                      className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* CARD 4 (Bottom Wide Card): Transforms emergency readiness + Doctor portrait */}
              <div
                ref={bentoCard4Ref}
                className="bg-[#F4F4F6] rounded-[2.25rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-md flex-1 gap-6 will-change-transform"
              >
                {/* Left Side Content */}
                <div className="max-w-md space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.7rem] font-medium tracking-tight text-gray-950 leading-[1.25]">
                    Elevates resuscitation skills and <strong className="font-semibold text-gray-950">transforms</strong>{" "}
                    <span className="text-gray-500 font-normal">
                      emergency readiness into real clinical confidence.
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    Qualified across multiple Resuscitation Council UK programmes including ALS, GIC, EPALS, and ILSi to maintain the highest standards of safety.
                  </p>
                </div>

                {/* Right Side Inset Doctor Portrait */}
                <div className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-md flex items-center justify-center flex-shrink-0 relative">
                  <img
                    src="/images/bento/bento-clinician.jpg"
                    alt="Accredited Clinical Instructor"
                    className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Concluding Supportive Environment Promise Pill */}
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                <strong>Our ARTL Pledge:</strong> We take pride in offering a supportive, friendly learning environment where participants gain the knowledge and confidence to perform at their best when it matters most.
              </p>
            </div>
            <a
              href="#contact"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-950 hover:bg-black text-white text-xs font-medium whitespace-nowrap shadow-sm hover:scale-105 transition-all"
            >
              <span>Contact ARTL</span>
              <CornerDownRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ==============================================================
          04 — CENTERED HEALTHCARE COURSES CAROUSEL (2.0s AUTO-TRANSFER)
          ============================================================== */}
      <section
        id="courses"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
        className="flex flex-col justify-start pt-8 sm:pt-12 pb-8 sm:pb-10 bg-[#E9ECEF] relative border-y border-gray-300/70 text-[#111111] overflow-hidden select-none"
      >
        {/* Section Header */}
        <div className="w-full px-6 sm:px-12 lg:px-16 text-left mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.95rem] font-normal tracking-[-0.03em] leading-[1.14] text-gray-950">
            <span className="block">Comprehensive, evidence-based</span>
            <span className="block whitespace-nowrap">education across the full spectrum</span>
            <span className="block">of resuscitation &amp; life support.</span>
          </h2>

          <div className="mt-4">
            <a
              href="#contact"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-950 hover:bg-black text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:scale-105 group"
            >
              <span>View All Courses &amp; Dates</span>
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <CornerDownRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Top Pill Header */}
        <div className="w-[310px] sm:w-[380px] mx-auto mb-4 bg-white rounded-full px-6 py-3.5 shadow-sm border border-gray-200/70 flex items-center justify-between text-sm font-medium text-gray-800 z-20 transition-all duration-300">
          <span className="tracking-tight">{activeCourse.category}</span>
          <span className="tracking-tight text-gray-500 font-normal">{activeCourse.units}</span>
        </div>

        {/* Horizontal Card Track mathematically centered on active card */}
        <div className="w-full overflow-hidden relative py-2">
          <div
            className="flex items-start transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{
              transform: `translateX(calc(50vw - ${activeCourseIdx * (carouselWidth + carouselGap) + carouselWidth / 2}px))`,
            }}
          >
            {healthCareCourses.map((course, idx) => {
              const isActive = idx === activeCourseIdx;
              return (
                <div
                  key={course.id}
                  onClick={() => handleCardClick(idx)}
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                  style={{ width: `${carouselWidth}px`, marginRight: `${carouselGap}px` }}
                  className={`flex-shrink-0 transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "opacity-100 scale-100"
                      : "opacity-40 hover:opacity-75 scale-[0.96]"
                  }`}
                >
                  {/* Card Container */}
                  <div
                    className={`bg-white rounded-3xl p-3 sm:p-4 transition-all duration-300 ${
                      isActive
                        ? "shadow-xl border border-gray-200/90"
                        : "shadow-sm border border-gray-200/40"
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3
                      className={`mt-3.5 px-1 font-medium transition-colors ${
                        isActive
                          ? "text-gray-950 text-lg sm:text-xl"
                          : "text-gray-600 text-base sm:text-lg truncate"
                      }`}
                    >
                      {course.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Full Rich Course Information Panel */}
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 mt-5 z-20">
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-gray-200/80 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Column 1: Module Overview & Scope */}
              <div className="md:col-span-5 space-y-2 pr-0 md:pr-4 md:border-r border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {activeCourse.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {activeCourse.units}
                  </span>
                </div>
                <h4 className="text-xl font-medium text-gray-950">
                  {activeCourse.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                  {activeCourse.overview}
                </p>
              </div>

              {/* Column 2: Key Clinical Competencies & Skills */}
              <div className="md:col-span-4 space-y-2 pr-0 md:pr-4 md:border-r border-gray-100">
                <div className="text-[11px] text-gray-400 font-semibold tracking-wider uppercase">
                  Key Competencies &amp; Skills
                </div>
                <ul className="space-y-2">
                  {activeCourse.competencies?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Accreditation, Audience & Action */}
              <div className="md:col-span-3 flex flex-col justify-between h-full space-y-3">
                <div>
                  <div className="text-[11px] text-gray-400 font-semibold tracking-wider uppercase mb-0.5">
                    Accreditation &amp; CPD
                  </div>
                  <div className="text-xs font-medium text-gray-900 mb-2">
                    {activeCourse.duration}
                  </div>
                  <div className="text-[11px] text-gray-400 font-semibold tracking-wider uppercase mb-0.5">
                    Target Audience
                  </div>
                  <div className="text-xs text-gray-600 leading-snug">
                    {activeCourse.target}
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href="#contact"
                    onMouseEnter={() => setCursorHovered(true)}
                    onMouseLeave={() => setCursorHovered(false)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gray-950 hover:bg-black text-white text-xs font-medium tracking-tight transition-all shadow-sm hover:scale-[1.02] group"
                  >
                    <span>Enquire &amp; Book Course</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows, Counter & Auto-Transfer Timer Progress (2.0s forward) */}
        <div className="flex items-center justify-center gap-5 mt-5 mb-1 z-20">
          <button
            onClick={handlePrevCourse}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            aria-label="Previous Course"
            className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-black hover:scale-105 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="text-xs font-mono text-gray-500">
              <span className="text-gray-900 font-semibold">{activeCourseIdx + 1}</span> / {healthCareCourses.length}
            </div>
            <div className="w-24 h-1.5 bg-gray-300/80 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gray-900 rounded-full transition-[width] duration-75 ease-linear"
                style={{ width: `${transferProgress}%` }}
              />
            </div>
          </div>

          <button
            onClick={handleNextCourse}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            aria-label="Next Course"
            className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-black hover:scale-105 active:scale-95 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ==============================================================
          05 — WHY CHOOSE US (ROUND BUTTONS & ROUND IMAGE CARDS)
          ============================================================== */}
      <section
        id="why-choose-us"
        className="py-16 sm:py-24 px-6 sm:px-12 lg:px-16 bg-[#F8F9FA] text-[#111111] relative border-b border-gray-200/80"
      >
        <div className="max-w-7xl mx-auto">
          {/* Centered Editorial Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-mono block mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-[-0.03em] leading-[1.12] text-gray-950">
              Why clinicians choose Advanced Resuscitation Training Ltd
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-3">
              Learn from expert instructors with hands-on experience in emergency medical care. Our comprehensive curriculum prepares you for real-world challenges.
            </p>
          </div>

          {/* 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Interactive Tab Pill, Dynamic Text, and Round Button */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Rounded Tab Pill Switcher (< Active Category >) */}
              <div className="inline-flex items-center gap-1 bg-white rounded-full p-1.5 shadow-sm border border-gray-200/90 mb-6">
                <button
                  onClick={handlePrevPillar}
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                  aria-label="Previous Feature"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-4 text-xs sm:text-sm font-medium text-gray-900 tracking-tight select-none">
                  {activePillar.category}
                </span>
                <button
                  onClick={handleNextPillar}
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                  aria-label="Next Feature"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic Prominent Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-normal tracking-[-0.025em] leading-[1.18] text-gray-950 mb-4 transition-all duration-300">
                {activePillar.headline}
              </h3>

              {/* Dynamic Narrative Paragraph */}
              <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal mb-6 transition-all duration-300">
                {activePillar.description}
              </p>

              {/* Clinical Highlights Bullet List */}
              <div className="space-y-2.5 mb-8 w-full">
                {activePillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] flex-shrink-0 font-medium">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Rounded CTA Button */}
              <div>
                <a
                  href={activePillar.href}
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                  className="inline-flex items-center justify-between gap-5 px-7 py-3.5 sm:py-4 rounded-full bg-gray-950 hover:bg-black text-white text-xs sm:text-sm font-medium tracking-tight shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                >
                  <span>{activePillar.ctaText}</span>
                  <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <CornerDownRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Rounded Thumbnail Cards & Large Rounded Showcase Image */}
            <div className="lg:col-span-7 flex items-center gap-3 sm:gap-5">
              {/* Vertical Stack of 4 Rounded Thumbnail Cards */}
              <div className="flex flex-col gap-3 sm:gap-3.5 flex-shrink-0">
                {whyChooseUsPillars.map((pillar, idx) => {
                  const isSelected = idx === activePillarIdx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillarIdx(idx)}
                      onMouseEnter={() => setCursorHovered(true)}
                      onMouseLeave={() => setCursorHovered(false)}
                      aria-label={`Select ${pillar.category}`}
                      className={`relative w-16 sm:w-20 aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-300 ${
                        isSelected
                          ? "ring-2 ring-gray-950 ring-offset-2 scale-105 shadow-md opacity-100"
                          : "opacity-45 hover:opacity-85 hover:scale-100"
                      }`}
                    >
                      <img
                        src={pillar.thumb}
                        alt={pillar.category}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </button>
                  );
                })}
              </div>

              {/* Featured Showcase Card with Prominent Rounded Corners */}
              <div className="relative flex-1 aspect-[4/3] sm:aspect-[16/11] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-100 group">
                <img
                  src={activePillar.image}
                  alt={activePillar.category}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Top Badge: Rounded Pill */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {activePillar.badge}
                  </span>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/70 block font-mono">
                      Our Commitment
                    </span>
                    <span className="text-sm sm:text-base font-medium tracking-tight">
                      {activePillar.stats}
                    </span>
                  </div>
                  <span className="text-xs text-white/80 font-mono bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    0{activePillarIdx + 1} / 0{whyChooseUsPillars.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          06 — HORIZONTAL REVIEWS TICKER (TOP: RIGHT-TO-LEFT, BOTTOM: LEFT-TO-RIGHT)
          ============================================================== */}
      <section id="testimonials" className="py-20 sm:py-28 bg-white border-b border-gray-200/80 overflow-hidden relative select-none">
        <div className="w-full">
          {/* Centered Editorial Header Matching User Image */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-gray-950 mb-3.5">
              What people are saying?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it—see what our healthcare professionals have to say about their experience!
            </p>
          </div>

          {/* Dual-Row Infinite Horizontal Ticker Stream */}
          <div className="relative w-full overflow-hidden space-y-6 sm:space-y-7">
            {/* Left & Right Subtle Blur Vignette Mask */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-20" />

            {/* Row 1: Moving Right to Left */}
            <div className="flex overflow-hidden group">
              <div className="animate-marquee-left flex items-stretch gap-5 sm:gap-6 pr-5 sm:pr-6">
                {[...reviewsTopRow, ...reviewsTopRow, ...reviewsTopRow].map((review, idx) => (
                  <div
                    key={`top-${review.id}-${idx}`}
                    onMouseEnter={() => setCursorHovered(true)}
                    onMouseLeave={() => setCursorHovered(false)}
                    className={`w-[320px] sm:w-[380px] md:w-[410px] min-h-[190px] sm:min-h-[205px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between flex-shrink-0 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer ${review.bg}`}
                  >
                    <p className={`text-[13px] sm:text-[14px] leading-relaxed font-normal mb-5 ${review.text}`}>
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3.5 pt-1">
                      <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/80 shadow-sm bg-white/40">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-sm sm:text-base font-semibold leading-tight ${review.text}`}>
                          {review.name}
                        </span>
                        <span className={`text-xs font-medium leading-normal mt-0.5 ${review.subtext}`}>
                          {review.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Moving Left to Right */}
            <div className="flex overflow-hidden group">
              <div className="animate-marquee-right flex items-stretch gap-5 sm:gap-6 pr-5 sm:pr-6">
                {[...reviewsBottomRow, ...reviewsBottomRow, ...reviewsBottomRow].map((review, idx) => (
                  <div
                    key={`bot-${review.id}-${idx}`}
                    onMouseEnter={() => setCursorHovered(true)}
                    onMouseLeave={() => setCursorHovered(false)}
                    className={`w-[320px] sm:w-[380px] md:w-[410px] min-h-[190px] sm:min-h-[205px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between flex-shrink-0 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer ${review.bg}`}
                  >
                    <p className={`text-[13px] sm:text-[14px] leading-relaxed font-normal mb-5 ${review.text}`}>
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3.5 pt-1">
                      <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/80 shadow-sm bg-white/40">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-sm sm:text-base font-semibold leading-tight ${review.text}`}>
                          {review.name}
                        </span>
                        <span className={`text-xs font-medium leading-normal mt-0.5 ${review.subtext}`}>
                          {review.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Google Review Rating Pill CTA */}
          <div className="mt-10 sm:mt-14 flex justify-center px-6">
            <a
              href="https://www.google.com/search?q=advanced+resuscitation+training+ltd+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F8F9FA] hover:bg-gray-100 border border-gray-200/90 text-xs font-medium text-gray-900 shadow-sm transition-all hover:scale-105"
            >
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold">Rated 5.0 on Google Reviews</span>
              <span className="text-gray-400 font-normal">• Verified Feedback ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==============================================================
          07 — COURSE CENTRES & COMMITMENT TO EXCELLENCE
          ============================================================== */}
      <section id="centres" className="py-16 sm:py-20 px-6 sm:px-12 lg:px-16 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-mono block">
                Our Commitment to Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight">
                Empowering healthcare professionals with life-saving skills.
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                At Advanced Resuscitation Training Ltd, we’re passionate about empowering individuals and teams with the skills to save lives. While we’re a dedicated specialist initiative, our experienced trainers and RCUK-registered courses are designed to deliver the highest standards of resuscitation training.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/10 px-4 py-2 rounded-full border border-white/15">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chilworth Manor Hotel, Southampton</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/10 px-4 py-2 rounded-full border border-white/15">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Winchester &amp; UK In-House Centres</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/15 p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white mb-2">Book Your Place or Request In-House Training</h3>
              <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                Contact Debbie and Dr Raj directly for upcoming course availability, dental sedation dates, and group rates.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:07577437748"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white text-black hover:bg-gray-100 text-xs font-semibold transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 07577437748</span>
                </a>
                <a
                  href="mailto:advancedresustraining@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-all"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>advancedresustraining@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          08 — MONUMENTAL ARTL EDITORIAL FOOTER
          ============================================================== */}
      <section
        ref={footerRef}
        id="contact"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-16 lg:px-24 bg-[#0d0d0d] text-white relative"
      >
        <div className="max-w-7xl w-full mx-auto py-16">
          {/* Official ARTL Brand Header with 3D Logo */}
          <div className="flex items-center gap-4 sm:gap-5 mb-8">
            <img
              src="/images/artl-logo.png"
              alt="Advanced Resuscitation Training Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg rounded-full bg-white/5 p-1 border border-white/10"
            />
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono block">
                Resuscitation Council UK Accredited Provider
              </span>
              <span className="text-sm text-slate-400 font-sans">
                Official Life Support Education Provider &bull; Registered in England &amp; Wales
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-light tracking-tighter leading-none mb-12 sm:mb-16 text-white">
            Advanced Resuscitation
            <span className="block text-slate-400 font-thin text-3xl sm:text-5xl lg:text-6xl mt-2">
              Training Ltd
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm opacity-90 pt-10 border-t border-white/15">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-slate-500 mb-2">
                Contact &amp; Inquiries
              </p>
              <p className="text-xl font-light tracking-tight text-white mb-1">07577437748</p>
              <a
                href="mailto:advancedresustraining@gmail.com"
                className="text-slate-400 hover:text-white transition-colors text-xs"
              >
                advancedresustraining@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-slate-500 mb-2">
                Registered Office
              </p>
              <p className="text-sm font-light text-white leading-relaxed">
                23 North Drive, Littleton,
                <br />
                Winchester, SO22 6QA
              </p>
              <p className="text-slate-400 text-xs mt-1">United Kingdom</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-slate-500 mb-2">
                Popular Courses
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li><a href="#courses" className="hover:text-white transition-colors">Immediate Life Support (ILS)</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Advanced Life Support (ALS)</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Basic Life Support &amp; AED</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Dental In-House Training</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Immediate Life Support Instructor (ILSi)</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">APLS Recertification</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">The Ultimate Life Support Course</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-slate-500 mb-2">
                Quick Links
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#centres" className="hover:text-white transition-colors">Our Course Centres</a></li>
                <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Candidate Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Course Evaluation Form</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Refund &amp; Returns Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <div>&copy; 2026 Advanced Resuscitation Training Ltd (ARTL). All rights reserved.</div>
            <div className="mt-4 sm:mt-0 flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Training</a>
              <a href="#" className="hover:text-white transition-colors">RCUK Compliance</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
