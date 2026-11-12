"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  CornerDownRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  HeartPulse,
  Sparkles,
  Menu,
  X,
  Pause,
  Play,
} from "lucide-react";
import ARTHero from "@/components/home/ARTHero";
import WhyChooseARTL from "@/components/home/WhyChooseARTL";
import BookingModal from "@/components/booking/BookingModal";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroMediaRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  // Text and action animation refs for hero
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const trustLineRef = useRef<HTMLDivElement | null>(null);

  // Mobile Navigation Drawer State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ARTL Resuscitation & Life Support Courses (Audited 100% Unique Context Images)
  const healthCareCourses = [
    {
      id: 0,
      title: "RCUK Immediate Life Support (ILS)",
      category: "RCUK Accredited",
      units: "1-Day Practical",
      image: "/images/real-training-classroom-lecture.jpg",
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
      image: "/images/why-practical-cpr.jpg",
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
      image: "/images/real-training-aed-defib.jpg",
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
      image: "/images/training-session.jpg",
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
      image: "/images/real-training-dental-cpr.jpg",
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
      title: "APLS Recertification Course (7th Edition)",
      category: "ALSG 7th Edition",
      units: "1-Day VLE + 1-Day F2F",
      image: "/images/why-educator-aed.jpg",
      overview: "Refresh your skills and renew your certification with the Advanced Paediatric Life Support (APLS) Recertification Course – 7th Edition. Delivered by expert instructors with extensive clinical experience.",
      competencies: [
        "Structured, sequential approach to assessment & treatment of seriously ill & injured children",
        "11 interactive online VLE modules covering trauma, airway, cardiac arrest, fluids & poisoning",
        "Face-to-face scenario practice: cardiac arrest management & life-saving procedures",
      ],
      target: "Medical ST4+ (Paediatrics, ED, Anaesthetics, ITU) & Experienced Nursing/AHPs",
      duration: "4-Year ALSG Certification • VLE + 1-Day Practical",
      href: "/courses/apls-recertification",
    },
    {
      id: 7,
      title: "Emergency Immediate Life Support (EILS)",
      category: "Acute Emergency",
      units: "1-Day Practical",
      image: "/images/why-emergency-prep.jpg",
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
    {
      id: 8,
      title: "Paediatric Immediate Life Support (PILS)",
      category: "Paediatric Care",
      units: "1-Day Practical",
      image: "/images/why-supportive-class.jpg",
      overview: "Paediatric emergency recognition, infant and child respiratory arrest management, anatomical airway differences, intraosseous access, and resuscitation algorithms.",
      competencies: [
        "Infant & child anatomical airway management & neutral positioning",
        "Paediatric foreign body airway obstruction emergency algorithms",
        "Fluid bolus administration & IO vascular access landmarking",
      ],
      target: "Paediatric Nurses, Community Clinicians & Dental Specialists",
      duration: "6.0 CPD Hours • Specialist Paediatric",
      href: "/courses/pils",
    },
  ];

  // 4 Core Why Choose Features (Authentic Clinical Photographs)
  const whyChooseUsPillars = [
    {
      id: 0,
      category: "Experienced Clinical Educators",
      headline: "Delivered by accredited instructors with over 15 years clinical teaching experience",
      description:
        "Our courses are led by senior resuscitation officers and clinicians qualified across multiple Resuscitation Council UK programmes, including ALS, GIC, EPALS, and ILSi.",
      badge: "15+ Years Clinical Experience",
      stats: "Senior Clinical Faculty",
      ctaText: "Meet Our Educators",
      href: "#about",
      image: "/images/clinical-instructor.jpg",
      thumb: "/images/clinical-instructor.jpg",
      highlights: [
        "Active emergency department & critical care backgrounds",
        "RCUK accredited ALS & ILS instructor faculty",
        "Personalized coaching tailored to all experience levels",
      ],
    },
    {
      id: 1,
      category: "Hands-on Practical Learning",
      headline: "High-fidelity simulation and immersive practical scenario drills",
      description:
        "Develop true muscle memory through high-performance CPR, manual defibrillation, and hospital-grade supraglottic airway management with realistic feedback manikins.",
      badge: "Realistic SimMan Practice",
      stats: "Zero-Risk Practical Skills",
      ctaText: "Explore Practical Courses",
      href: "#courses",
      image: "/images/practical-skills.jpg",
      thumb: "/images/practical-skills.jpg",
      highlights: [
        "Minimal hands-off chest compression intervals",
        "Adult & paediatric airway adjuncts and BVM drills",
        "Hospital-grade defibrillator safety & pacing algorithms",
      ],
    },
    {
      id: 2,
      category: "Real-world Emergency Preparation",
      headline: "Confidence and crisis leadership for critical clinical events",
      description:
        "Transform acute deterioration response with structured ABCDE physiological assessments and Crisis Resource Management (CRM) under realistic scenario pressure.",
      badge: "Crisis Leadership & CRM",
      stats: "Emergency Deterioration",
      ctaText: "View Emergency Scenarios",
      href: "#courses",
      image: "/images/training-session.jpg",
      thumb: "/images/training-session.jpg",
      highlights: [
        "Systematic early warning score (NEWS2) escalation",
        "SBAR clinical handover & multidisciplinary team choreography",
        "Reversible arrest causes (4 Hs & 4 Ts) diagnostic drills",
      ],
    },
    {
      id: 3,
      category: "Supportive Learning Environment",
      headline: "Low-stress, high-engagement coaching designed for clinical retention",
      description:
        "We foster an encouraging, interactive atmosphere where candidates can ask questions, refine techniques without pressure, and build genuine confidence for practice.",
      badge: "100% Candidate Centered",
      stats: "Supportive & Friendly",
      ctaText: "Read Candidate Reviews",
      href: "#testimonials",
      image: "/images/editorial-hero.jpg",
      thumb: "/images/editorial-hero.jpg",
      highlights: [
        "Low-stress, constructive debriefing and mentoring",
        "Open Q&A tailored to individual practice requirements",
        "Instant digital RCUK-endorsed & CPD certification",
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

  // Booking Modal State (Global Interactive Overlay)
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingCourse, setSelectedBookingCourse] = useState<any | null>(null);

  const handleOpenBooking = (courseData?: any) => {
    setSelectedBookingCourse(courseData || healthCareCourses[activeCourseIdx]);
    setBookingModalOpen(true);
  };

  // 3 Duplicated Sets of Courses for Seamless Infinite Loop (Never jumps backwards)
  const displayCourses = useMemo(() => {
    return [
      ...healthCareCourses.map((c, i) => ({ ...c, loopKey: `set0-${c.id}-${i}` })),
      ...healthCareCourses.map((c, i) => ({ ...c, loopKey: `set1-${c.id}-${i}` })),
      ...healthCareCourses.map((c, i) => ({ ...c, loopKey: `set2-${c.id}-${i}` })),
    ];
  }, [healthCareCourses]);

  // Course Showcase Scroll & Scaling State
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const courseScrollRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<number | null>(null);
  const isScrollingProgrammatically = useRef(false);
  const currentVirtualIdx = useRef(healthCareCourses.length); // Start at middle set (index 8)

  // Center-Focused Scaling: Active middle card scales smoothly to 1.0, adjacent cards shrink to 0.85
  const updateCardScales = useCallback(() => {
    const container = courseScrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>(".showcase-course-card");
    if (!cards.length) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const maxDist = Math.max(containerRect.width / 2, 220);

    let closestIdx = currentVirtualIdx.current;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const diff = Math.abs(containerCenter - cardCenter);

      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }

      const ratio = Math.min(diff / maxDist, 1);
      // Active center card: scale 1.0; flanking cards: scale 0.85
      const scale = 1.0 - ratio * 0.15;
      const opacity = 1.0 - ratio * 0.35;
      card.style.transform = `scale(${scale.toFixed(3)})`;
      card.style.opacity = `${opacity.toFixed(2)}`;
    });

    if (!isScrollingProgrammatically.current) {
      currentVirtualIdx.current = closestIdx;
    }
    const realIdx = closestIdx % healthCareCourses.length;
    setActiveCourseIdx((prev) => (prev !== realIdx ? realIdx : prev));
  }, [healthCareCourses.length]);

  // Silky Smooth RAF Scroll Animation (Zero Jumps, Gentle Ease-Out Easing)
  const smoothScrollToCard = useCallback(
    (virtualIdx: number, duration = 520) => {
      const container = courseScrollRef.current;
      if (!container) return;
      const cards = container.querySelectorAll<HTMLElement>(".showcase-course-card");
      if (!cards[virtualIdx]) return;

      if (animRef.current) cancelAnimationFrame(animRef.current);
      isScrollingProgrammatically.current = true;
      currentVirtualIdx.current = virtualIdx;

      const card = cards[virtualIdx];
      const targetLeft = Math.max(
        0,
        card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2
      );
      const startLeft = container.scrollLeft;
      const distance = targetLeft - startLeft;

      if (Math.abs(distance) < 2) {
        isScrollingProgrammatically.current = false;
        return;
      }

      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic: swift start with ultra-gentle cushioned landing
        const ease = 1 - Math.pow(1 - progress, 3);
        container.scrollLeft = startLeft + distance * ease;
        updateCardScales();

        if (progress < 1) {
          animRef.current = requestAnimationFrame(step);
        } else {
          isScrollingProgrammatically.current = false;
          // Silent seamless normalization for infinite loop:
          // If we advanced into set 2 (>= 16), silently jump back to set 1 (- 8 cards)
          if (virtualIdx >= healthCareCourses.length * 2) {
            const normalizedIdx = virtualIdx - healthCareCourses.length;
            const normalizedCard = cards[normalizedIdx];
            if (normalizedCard) {
              container.scrollLeft =
                normalizedCard.offsetLeft - container.clientWidth / 2 + normalizedCard.clientWidth / 2;
              currentVirtualIdx.current = normalizedIdx;
              updateCardScales();
            }
          } else if (virtualIdx < healthCareCourses.length) {
            const normalizedIdx = virtualIdx + healthCareCourses.length;
            const normalizedCard = cards[normalizedIdx];
            if (normalizedCard) {
              container.scrollLeft =
                normalizedCard.offsetLeft - container.clientWidth / 2 + normalizedCard.clientWidth / 2;
              currentVirtualIdx.current = normalizedIdx;
              updateCardScales();
            }
          }
        }
      };

      animRef.current = requestAnimationFrame(step);
    },
    [healthCareCourses.length, updateCardScales]
  );

  // Position at middle set immediately on mount (Index 8)
  useEffect(() => {
    const initialIndex = healthCareCourses.length;
    currentVirtualIdx.current = initialIndex;

    const timer = setTimeout(() => {
      const container = courseScrollRef.current;
      if (!container) return;
      const cards = container.querySelectorAll<HTMLElement>(".showcase-course-card");
      if (cards[initialIndex]) {
        const card = cards[initialIndex];
        container.scrollLeft =
          card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;
        updateCardScales();
      }
    }, 60);

    const handleResize = () => updateCardScales();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [healthCareCourses.length, updateCardScales]);

  const handleNextCourse = useCallback(() => {
    const nextVirtual = currentVirtualIdx.current + 1;
    smoothScrollToCard(nextVirtual, 520);
  }, [smoothScrollToCard]);

  const handlePrevCourse = useCallback(() => {
    const prevVirtual = currentVirtualIdx.current - 1;
    smoothScrollToCard(prevVirtual, 520);
  }, [smoothScrollToCard]);

  // Autoplay: Smoothly advances every 3.2s, pausing on hover and focus
  useEffect(() => {
    if (isCarouselHovered) return;

    const interval = setInterval(() => {
      handleNextCourse();
    }, 3200);

    return () => clearInterval(interval);
  }, [isCarouselHovered, handleNextCourse]);

  const handleCardClick = (virtualIdx: number) => {
    smoothScrollToCard(virtualIdx, 520);
  };

  // Why Choose Us Tab State
  const [activePillarIdx, setActivePillarIdx] = useState(0);

  // Active Testimonial State
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Touch handlers for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 40) {
        handleNextCourse();
      } else if (diff < -40) {
        handlePrevCourse();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
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

  // GSAP Animations: Hero Reveal, Hero Zoom & Bento Grid Rearrange
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Refined Hero Entrance Timeline
      const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (headlineRef.current) {
        heroTl.fromTo(
          headlineRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.15 }
        );
      }

      if (subtitleRef.current) {
        heroTl.fromTo(
          subtitleRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        );
      }

      if (ctaRef.current) {
        heroTl.fromTo(
          ctaRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          "-=0.4"
        );
      }

      if (trustLineRef.current) {
        heroTl.fromTo(
          trustLineRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3"
        );
      }

      // Hero Background Image Smooth Scrub Zoom
      if (heroImageRef.current && heroMediaRef.current) {
        gsap.fromTo(
          heroImageRef.current,
          { scale: 1.08 },
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

      // Bento Grid Scroll Animation: Clean, elegant stagger entrance with no conflicting transforms
      const bentoCards = [
        bentoCard1Ref.current,
        bentoCard2Ref.current,
        bentoCard3Ref.current,
        bentoCard4Ref.current,
      ].filter(Boolean);

      if (bentoCards.length > 0 && bentoContainerRef.current) {
        gsap.fromTo(
          bentoCards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: bentoContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Bento Card 3 rolling number count animation (from 0 to 15)
        const bentoCountObj = { val: 0 };
        gsap.to(bentoCountObj, {
          val: 15,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bentoCard3Ref.current || bentoContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            setBentoExpCount(Math.floor(bentoCountObj.val));
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const activeCourse = healthCareCourses[activeCourseIdx];
  const activePillar = whyChooseUsPillars[activePillarIdx];

  return (
    <div
      ref={containerRef}
      suppressHydrationWarning
      className="bg-white text-[#111111] font-sans min-h-screen overflow-x-hidden relative"
    >
      {/* ==============================================================
          01 — UNIFIED STICKY NAVIGATION (FROSTED GLASS BLUR 12PX, CALL BUTTON, DARK BLUE)
          ============================================================== */}
      <header
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-3.5 sm:py-4 px-6 sm:px-12 lg:px-16 pointer-events-auto transition-all bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-xs"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderColor: "rgba(229, 231, 235, 0.7)",
        }}
      >
        {/* Top-Left Corner: Elegant Brand Name with Official 3D Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 select-none group"
        >
          <img
            src="/images/artl-logo.png"
            alt="Advanced Resuscitation Training Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span
              className="font-serif text-lg sm:text-xl tracking-tight text-[#0F172A] font-bold leading-none drop-shadow-2xs"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              ART Resuscitation
            </span>
            <span className="text-[10px] tracking-wider uppercase text-[#0F172A]/70 font-mono font-bold">
              Training Ltd
            </span>
          </div>
        </Link>

        {/* Center: Clean Spaced Navigation Links (Deep Dark Blue Palette Hover) */}
        <nav className="hidden lg:flex items-center space-x-9 text-[13.5px] tracking-normal font-semibold text-[#0F172A]/85">
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
              className="text-[#0F172A]/85 hover:text-[#0F172A] transition-colors duration-200 font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Dedicated Call Button, Book Training & Mobile Menu Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3 text-[13px] font-normal text-[#0F172A]">
          {/* Dedicated Call Button (Liquid Metal Blue Shader) - Hidden on Mobile & Tablet */}
          <div className="hidden lg:block">
            <LiquidMetalButton
              label="Call Us"
              href="tel:07577437748"
              width={112}
              height={38}
              variant="blue"
              icon={<Phone className="w-3.5 h-3.5 text-teal-300" />}
            />
          </div>

          {/* Book Training Round Button (Liquid Metal Dark Chrome Shader) - Hidden on Mobile & Tablet */}
          <div className="hidden lg:block">
            <LiquidMetalButton
              label="Book Training"
              onClick={() => handleOpenBooking(activeCourse)}
              width={142}
              height={38}
              variant="dark"
              icon={<CornerDownRight className="w-3.5 h-3.5 text-slate-200" />}
            />
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#0F172A] hover:bg-black/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden absolute top-full left-0 w-full border-b shadow-2xl py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(16px)",
              borderColor: "rgba(0, 0, 0, 0.08)",
            }}
          >
            {[
              { label: "Courses", href: "#courses" },
              { label: "Who We Are", href: "#about" },
              { label: "Why Choose Us", href: "#why-choose-us" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Course Centres", href: "#centres" },
              { label: "Contact & Book", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#0F172A] hover:text-[#0F172A] py-2 border-b border-gray-100 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#0F172A]" />
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:07577437748"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0F172A] text-white text-xs font-semibold shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us (07577437748)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#1E293B] text-white text-xs font-semibold shadow-xs"
              >
                <CornerDownRight className="w-4 h-4" />
                <span>Book Course Training</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ==============================================================
          02 — ART PREMIUM HERO (CINEMATIC DISSOLVE & LIGHT SWEEP)
          ============================================================== */}
      <ARTHero onOpenBooking={handleOpenBooking} />

      {/* ==============================================================
          03 — WHO WE ARE SECTION (REFINED ASYMMETRIC BENTO GRID)
          ============================================================== */}
      <section id="about" className="py-16 sm:py-20 px-6 sm:px-12 lg:px-16 relative overflow-hidden border-b border-gray-200/80 select-none bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Pill Badge & Editorial Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 justify-center px-3.5 py-1 rounded-full bg-gray-100 border border-gray-200/80 text-[11px] font-mono uppercase tracking-[0.18em] text-gray-700 mb-3 shadow-xs">
              <img
                src="/images/artl-logo.png"
                alt="ARTL Logo"
                className="w-3.5 h-3.5 object-contain rounded-full"
              />
              <span>WHO WE ARE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.03em] leading-[1.14] text-gray-950 mb-3">
              Why healthcare leaders choose ARTL
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed font-normal">
              ART Resuscitation Training Ltd was established to provide high-quality, evidence-based resuscitation education for healthcare professionals, dental teams, and clinical staff across the UK.
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
          <div
            ref={bentoContainerRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
          >
            {/* CARD 1 (Left Tall Card - lg:col-span-5): Practical training 4:3 image, Headline, Round Button */}
            <div
              ref={bentoCard1Ref}
              className="lg:col-span-5 bg-[#F4F4F6] rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-gray-200/80 shadow-xs transition-shadow duration-300 hover:shadow-sm"
            >
              {/* Practical training image formatted in balanced 4:3 aspect ratio (Hands & Torso perfectly centered) */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-inner flex items-center justify-center mb-5 relative">
                <img
                  src="/images/bento/bento-cpr.jpg"
                  alt="Hands-on Practical Resuscitation Training"
                  style={{ objectFit: "cover", objectPosition: "center 42%" }}
                  className="w-full h-full object-cover object-[center_42%] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Middle Headline */}
              <div className="space-y-2.5 mb-5">
                <h3 className="text-base sm:text-lg font-medium tracking-tight text-gray-950 leading-snug">
                  Delivered by master clinical educators to provide practical, hands-on teaching supported by realistic simulation.
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Building genuine confidence so learners feel completely prepared for real emergencies.
                </p>
              </div>

              {/* Bottom Actions: Book Training Popup & Explore Courses */}
              <div className="flex items-center gap-3">
                <LiquidMetalButton
                  label="Book Training"
                  onClick={() => handleOpenBooking(healthCareCourses[0])}
                  width={146}
                  height={42}
                  variant="dark"
                  icon={<CornerDownRight className="w-3.5 h-3.5 text-slate-200" />}
                />
                <a
                  href="#courses"
                  className="text-xs font-semibold text-gray-600 hover:text-black transition-colors"
                >
                  Explore Courses
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN (lg:col-span-7): Top 2 cards + Bottom 1 wide card (Matched widths & heights) */}
            <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
              {/* TOP ROW: 2 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* CARD 2 (Top Middle): Trusted professionals with 16:9 image */}
                <div
                  ref={bentoCard2Ref}
                  className="bg-[#F4F4F6] rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-gray-200/80 shadow-xs transition-shadow duration-300 hover:shadow-sm"
                >
                  {/* 16:9 aspect ratio image */}
                  <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-inner flex items-center justify-center mb-4 relative pt-2 sm:pt-3">
                    <img
                      src="/images/bento/bento-handshake.jpg"
                      alt="Trusted Healthcare Partnerships"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                      className="w-full h-full object-cover object-[center_top] transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <p className="text-sm sm:text-base font-medium text-gray-950 leading-snug">
                    <strong className="font-semibold text-gray-950">Trusted by</strong>{" "}
                    <span className="text-gray-600 font-normal">
                      healthcare professionals, dental teams &amp; clinical staff across the UK.
                    </span>
                  </p>
                </div>

                {/* CARD 3 (Top Right): 15+ Statistic & Doctor Avatars (Circle Type Clinical Faculty) */}
                <div
                  ref={bentoCard3Ref}
                  className="bg-[#F4F4F6] rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-gray-200/80 shadow-xs transition-shadow duration-300 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">
                      Accredited Teaching
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-[10.5px] font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      RCUK Aligned
                    </span>
                  </div>

                  <div className="py-1.5 space-y-3">
                    <div>
                      <div className="text-4xl sm:text-5xl font-light tracking-tight text-gray-950 font-sans">
                        {bentoExpCount || 15}+
                      </div>
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-snug font-normal mt-1.5">
                        Years of accredited clinical teaching &amp; advanced resuscitation expertise.
                      </p>
                    </div>

                    {/* Circular Doctor & Clinical Faculty Avatars */}
                    <div className="pt-2.5 border-t border-gray-200/70">
                      <div className="flex items-center justify-between gap-3">
                        {/* Overlapping Circle Type Doctor Avatars */}
                        <div className="flex -space-x-2.5 overflow-hidden py-1">
                          <img
                            src="/images/lead-instructor.jpg"
                            alt="Dr. Raj - Senior Clinical Educator"
                            title="Dr. Raj - Senior Clinical Educator & Course Director"
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover object-[center_top] shadow-sm hover:scale-110 hover:z-10 transition-transform"
                          />
                          <img
                            src="/images/clinical-instructor.jpg"
                            alt="Derek - Senior Resuscitation Lead"
                            title="Derek - Senior Resuscitation Instructor"
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover object-[center_top] shadow-sm hover:scale-110 hover:z-10 transition-transform"
                          />
                          <img
                            src="/images/sarah-instructor.jpg"
                            alt="Jyothi - Clinical Educator"
                            title="Jyothi - Clinical Educator & Resus Lead"
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover object-[center_top] shadow-sm hover:scale-110 hover:z-10 transition-transform"
                          />
                          <img
                            src="/images/bento/bento-clinician.jpg"
                            alt="Accredited NHS Clinician"
                            title="NHS Acute Clinical Consultant"
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover object-[center_12%] shadow-sm hover:scale-110 hover:z-10 transition-transform"
                          />
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F172A] text-white text-[10px] font-bold font-mono ring-2 ring-white shadow-sm">
                            +15
                          </div>
                        </div>

                        {/* Doctor Faculty Label */}
                        <div className="text-right">
                          <span className="text-xs font-semibold text-gray-950 block leading-tight">
                            Doctor &amp; Faculty Leads
                          </span>
                          <span className="text-[10px] text-emerald-700 font-mono font-medium flex items-center justify-end gap-1 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            NHS Certified
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-gray-500 font-mono pt-2 border-t border-gray-200/60 flex items-center justify-between">
                    <span>Faculty: ALS • GIC • EPALS • ILSi</span>
                    <span className="text-[10px] text-gray-400">RCUK Faculty</span>
                  </div>
                </div>
              </div>

              {/* CARD 4 (Bottom Wide Card): Transforms emergency readiness + Doctor portrait (16:9, face & upper body visible) */}
              <div
                ref={bentoCard4Ref}
                className="bg-[#F4F4F6] rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between border border-gray-200/80 shadow-xs transition-shadow duration-300 hover:shadow-sm flex-1 gap-6"
              >
                {/* Left Side Content */}
                <div className="space-y-2.5 max-w-md">
                  <h3 className="text-lg sm:text-xl lg:text-[1.35rem] font-medium tracking-tight text-gray-950 leading-[1.28]">
                    Elevates resuscitation skills and <strong className="font-semibold text-gray-950">transforms</strong>{" "}
                    <span className="text-gray-600 font-normal">
                      emergency readiness into real clinical confidence.
                    </span>
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                    Qualified across multiple Resuscitation Council UK programmes including ALS, GIC, EPALS, and ILSi to maintain the highest standards of safety.
                  </p>
                </div>

                {/* Right Side Inset Doctor Portrait (Optimized framing, head & upper body clearly visible without cut off) */}
                <div className="w-full sm:w-56 md:w-64 h-48 sm:h-52 rounded-2xl overflow-hidden bg-white shadow-md flex items-center justify-center shrink-0 relative pt-2 sm:pt-3">
                  <img
                    src="/images/bento/bento-clinician.jpg"
                    alt="Accredited Clinical Educator"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    className="w-full h-full object-cover object-[center_top] transition-transform duration-500 hover:scale-105"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-950 hover:bg-black text-white text-xs font-medium whitespace-nowrap shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <span>Contact ARTL</span>
              <CornerDownRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ==============================================================
          04 — CENTERED HEALTHCARE COURSES CAROUSEL (CONTINUOUS AUTO-TRANSFER)
          ============================================================== */}
      <section
        id="courses"
        className="flex flex-col justify-start pt-8 sm:pt-12 pb-8 sm:pb-10 relative border-y border-gray-300/70 text-[#111111] overflow-hidden select-none bg-white"
      >
        {/* Section Header */}
        <div className="w-full px-5 sm:px-12 lg:px-16 text-left mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.95rem] font-normal tracking-[-0.03em] leading-[1.14] text-gray-950">
            <span className="block">Comprehensive, evidence-based</span>
            <span className="block sm:whitespace-nowrap">education across the full spectrum</span>
            <span className="block">of resuscitation &amp; life support.</span>
          </h2>

          <div className="mt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-950 hover:bg-black text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:scale-105 active:scale-95 group"
            >
              <span>View All Courses &amp; Dates</span>
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <CornerDownRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Continuous Accreditation Partner Logo / Credibility Ticker */}
        <div className="w-full overflow-hidden py-2.5 border-y border-gray-300/60 bg-white/50 mb-4 select-none">
          <div className="flex items-center gap-8 animate-marquee-left whitespace-nowrap will-change-transform text-xs font-mono uppercase tracking-wider text-gray-600">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 flex-shrink-0">
                <span className="flex items-center gap-2 font-semibold text-[#0B1720]">
                  <span className="w-2 h-2 rounded-full bg-[#087F8C]" /> Resuscitation Council UK (RCUK) Aligned
                </span>
                <span>•</span>
                <span>General Dental Council (GDC) Outcome C</span>
                <span>•</span>
                <span>CPD Certified Clinical Hours</span>
                <span>•</span>
                <span>Senior NHS Faculty &amp; Resuscitation Officers</span>
                <span>•</span>
                <span>In-House Hospital &amp; Practice Training</span>
                <span>•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pill Header (Synchronized responsive active course indicator) */}
        <div className="w-full max-w-[310px] sm:max-w-[380px] mx-auto mb-3 bg-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-sm border border-gray-200/70 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-800 z-20 transition-all duration-300">
          <span className="tracking-tight font-semibold text-[#0B1720]">{activeCourse.category}</span>
          <span className="tracking-tight text-gray-500 font-mono text-xs">{activeCourse.units}</span>
        </div>

        {/* Progressive Horizontal Course Showcase Track (Scroll-Driven Dynamic Scaling, 1.5s Autoplay) */}
        <div
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
          onFocusCapture={() => setIsCarouselHovered(true)}
          onBlurCapture={() => setIsCarouselHovered(false)}
          className="w-full relative py-3 group select-none"
        >
          {/* Subtle Side Fade Gradients */}
          <div className="hidden sm:block absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* Quick Floating Navigation Buttons */}
          <button
            onClick={handlePrevCourse}
            aria-label="Previous Course"
            className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-gray-200/80 items-center justify-center text-gray-800 hover:text-black hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextCourse}
            aria-label="Next Course"
            className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-gray-200/80 items-center justify-center text-gray-800 hover:text-black hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal Scrolling Track with Progressive Scaling (Silky Smooth Continuous Loop) */}
          <div
            ref={courseScrollRef}
            onScroll={updateCardScales}
            className="flex items-center gap-5 sm:gap-7 overflow-x-auto scrollbar-none py-6 px-[12vw] sm:px-[26vw]"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {displayCourses.map((course, idx) => {
              const realIdx = idx % healthCareCourses.length;
              const isActive = realIdx === activeCourseIdx;
              return (
                <div
                  key={course.loopKey}
                  onClick={() => handleCardClick(idx)}
                  className={`showcase-course-card w-[290px] sm:w-[350px] flex-shrink-0 cursor-pointer rounded-3xl p-4 bg-white border will-change-transform ${
                    isActive
                      ? "ring-2 ring-[#0F172A] shadow-xl border-transparent"
                      : "border-gray-200/80 shadow-md hover:shadow-lg hover:border-gray-300"
                  }`}
                  style={{
                    transformOrigin: "center center",
                    transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                  }}
                >
                  {/* 16:9 Image Aspect Ratio with Context-Specific High-Fidelity Asset */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 mb-3 shadow-xs">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-xs text-[10px] font-mono text-teal-300 font-semibold uppercase tracking-wider">
                      {course.category}
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-950 text-base leading-snug truncate">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono mt-2.5 pt-2 border-t border-gray-100">
                    <span className="font-medium text-gray-700">{course.units}</span>
                    <span className="text-[#0F172A] font-semibold">{course.duration.split("•")[0]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Full Rich Course Information Panel (Rock-solid fixed min-height, zero vertical jump) */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 mt-5 z-20">
          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-gray-200/80 transition-all duration-300 min-h-[220px] md:min-h-[200px] flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Column 1: Module Overview & Scope */}
              <div className="md:col-span-5 space-y-2 pr-0 md:pr-4 md:border-r border-gray-100 min-h-[140px] flex flex-col justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {activeCourse.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {activeCourse.units}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-medium text-gray-950">
                  {activeCourse.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                  {activeCourse.overview}
                </p>
              </div>

              {/* Column 2: Key Clinical Competencies & Skills */}
              <div className="md:col-span-4 space-y-2 pr-0 md:pr-4 md:border-r border-gray-100 min-h-[140px]">
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
              <div className="md:col-span-3 flex flex-col justify-between h-full min-h-[140px] space-y-3">
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

                <div className="pt-1 flex justify-center">
                  <LiquidMetalButton
                    label="Enquire & Book Course"
                    onClick={() => handleOpenBooking(activeCourse)}
                    width={220}
                    height={46}
                    variant="blue"
                    className="w-full flex justify-center"
                    icon={<ArrowUpRight className="w-4 h-4 text-teal-300" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Indicator Controls: Stepper & Navigation (Completely Stripped Playback Controls) */}
        <div className="flex items-center justify-center gap-3 mt-6 mb-2 z-20">
          <button
            onClick={handlePrevCourse}
            aria-label="Previous Course"
            className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-700 hover:text-black hover:scale-105 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full border border-gray-200/80 shadow-xs text-xs font-mono">
            <span className="text-gray-950 font-bold">{activeCourseIdx + 1}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{healthCareCourses.length}</span>
          </div>

          <button
            onClick={handleNextCourse}
            aria-label="Next Course"
            className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-700 hover:text-black hover:scale-105 active:scale-95 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ==============================================================
          05 — WHY CHOOSE ARTL (CARD-STACK SLIDING EFFECT - GSAP SCROLLTRIGGER)
          ============================================================== */}
      <WhyChooseARTL />

      {/* ==============================================================
          06 — HORIZONTAL REVIEWS TICKER (SEAMLESS IMMEDIATE TRANSITION, PT-0)
          ============================================================== */}
      <section id="testimonials" className="pt-0 pb-16 sm:pb-24 border-b border-gray-200/80 overflow-hidden relative select-none bg-white">
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
                    className={`w-[280px] sm:w-[380px] md:w-[410px] min-h-[185px] sm:min-h-[205px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between flex-shrink-0 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer ${review.bg}`}
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
                    className={`w-[280px] sm:w-[380px] md:w-[410px] min-h-[185px] sm:min-h-[205px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between flex-shrink-0 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer ${review.bg}`}
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
          07 — TRAINING LOCATIONS (TWO CONFIRMED PHOTOGRAPHIC VENUE CARDS)
          ============================================================== */}
      <section id="centres" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden border-b border-gray-200/80 bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#087F8C] font-mono font-semibold block mb-2.5">
              Training Locations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-normal tracking-[-0.03em] leading-[1.14] text-gray-950">
              Our accredited hotel training venues &amp; conference centres
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-3 leading-relaxed">
              We deliver public courses at premier hotel conference venues in Southampton and Winchester, alongside accredited in-house resuscitation training delivered nationwide.
            </p>
          </div>

          {/* Two Photographic Venue Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* VENUE CARD 1: Mercure Winchester Wessex Hotel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Authentic Venue Image */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-inner mb-6 relative">
                  <img
                    src="/images/mercure-winchester-hotel.jpg"
                    alt="Mercure Winchester Wessex Hotel Training Venue"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-medium text-white border border-white/10">
                      <MapPin className="w-3 h-3 text-teal-400" />
                      Winchester, Hampshire
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#087F8C] font-semibold">
                    Premier Hotel Training Venue
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 leading-snug">
                    Mercure Winchester Wessex Hotel
                  </h3>
                  <div className="flex items-start gap-2 text-xs text-gray-600 pt-1">
                    <MapPin className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                    <span>Paternoster Row, Winchester, SO23 9LQ</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal pt-1">
                    Situated in the heart of historic Winchester overlooking the Cathedral grounds. Features spacious, fully equipped conference suites designed for high-fidelity resuscitation drills, practical airway stations, and delegate dining.
                  </p>
                </div>

                {/* Key Venue Highlights */}
                <div className="space-y-2 mb-6 pt-3 border-t border-gray-200/70 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                    <span><strong>Transport:</strong> 10-minute walk from Winchester rail station; easy M3 access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                    <span><strong>Parking:</strong> On-site hotel parking and nearby central Winchester car parks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                    <span><strong>Facilities:</strong> Ground floor dedicated simulation suites with full step-free access</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200/80">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mercure+Winchester+Wessex+Hotel+Paternoster+Row+Winchester+SO23+9LQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F8F9FA] hover:bg-gray-100 border border-gray-300 text-xs font-medium text-gray-900 shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#087F8C]" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </a>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-950 hover:bg-black text-white text-xs font-medium shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Explore Course Dates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* VENUE CARD 2: Chilworth Manor Hotel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Authentic Venue Image */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-inner mb-6 relative">
                  <img
                    src="/images/chilworth-manor-hotel.jpg"
                    alt="Chilworth Manor Hotel Training Venue Southampton"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-medium text-white border border-white/10">
                      <MapPin className="w-3 h-3 text-teal-400" />
                      Southampton, Hampshire
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#087F8C] font-semibold">
                    Premier Hotel Training Venue
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 leading-snug">
                    Chilworth Manor Hotel
                  </h3>
                  <div className="flex items-start gap-2 text-xs text-gray-600 pt-1">
                    <MapPin className="w-4 h-4 text-[#087F8C] shrink-0 mt-0.5" />
                    <span>Chilworth, Southampton, SO16 7PT</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal pt-1">
                    Set in peaceful landscaped grounds, Chilworth Manor offers spacious ground-floor conference suites designed for intensive simulation stations, adult and paediatric manikin coaching, and high-quality delegate refreshments throughout the day.
                  </p>
                </div>

                {/* Key Venue Highlights */}
                <div className="space-y-2 mb-6 pt-3 border-t border-gray-200/70 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                    <span><strong>Parking:</strong> Extensive complimentary on-site parking directly outside suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                    <span><strong>Transport:</strong> Just off M27 (J4) &amp; M3 (J14); 10 mins from Southampton Parkway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087F8C]" />
                    <span><strong>Accessibility:</strong> Ground floor dedicated suites with full step-free access</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200/80">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chilworth+Manor+Hotel+Southampton+SO16+7PT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F8F9FA] hover:bg-gray-100 border border-gray-300 text-xs font-medium text-gray-900 shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#087F8C]" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </a>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-950 hover:bg-black text-white text-xs font-medium shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Explore Course Dates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
        className="min-h-screen flex flex-col justify-center px-6 sm:px-16 lg:px-24 text-gray-900 relative overflow-hidden bg-[#FAFAFA] border-t border-gray-200"
      >
        <div className="max-w-7xl w-full mx-auto py-16">
          {/* Official ARTL Brand Header with 3D Logo */}
          <div className="flex items-center gap-4 sm:gap-5 mb-8">
            <img
              src="/images/artl-logo.png"
              alt="Advanced Resuscitation Training Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg rounded-full bg-white/70 p-1 border border-white/80 shadow-sm"
            />
            <div>
              <span className="text-xs uppercase tracking-widest text-[#087F8C] font-mono block font-semibold">
                Resuscitation Council UK Accredited Provider
              </span>
              <span className="text-sm text-gray-600 font-sans">
                Official Life Support Education Provider &bull; Registered in England &amp; Wales
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-light tracking-tighter leading-none mb-12 sm:mb-16 text-gray-950">
            Advanced Resuscitation
            <span className="block text-[#087F8C] font-thin text-3xl sm:text-5xl lg:text-6xl mt-2">
              Training Ltd
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm opacity-90 pt-10 border-t border-gray-200">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-gray-500 mb-2 font-semibold">
                Contact &amp; Inquiries
              </p>
              <p className="text-xl font-semibold tracking-tight text-gray-900 mb-1">07577437748</p>
              <a
                href="mailto:advancedresustraining@gmail.com"
                className="text-gray-600 hover:text-[#087F8C] transition-colors text-xs"
              >
                advancedresustraining@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-gray-500 mb-2 font-semibold">
                Registered Office
              </p>
              <p className="text-sm font-normal text-gray-700 leading-relaxed">
                23 North Drive, Littleton,
                <br />
                Winchester, SO22 6QA
              </p>
              <p className="text-gray-500 text-xs mt-1">United Kingdom</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-gray-500 mb-2 font-semibold">
                Popular Courses
              </p>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li><a href="#courses" className="hover:text-[#087F8C] transition-colors">Immediate Life Support (ILS)</a></li>
                <li><a href="#courses" className="hover:text-[#087F8C] transition-colors">Advanced Life Support (ALS)</a></li>
                <li><a href="#courses" className="hover:text-[#087F8C] transition-colors">Basic Life Support &amp; AED</a></li>
                <li><a href="#courses" className="hover:text-[#087F8C] transition-colors">Dental In-House Training</a></li>
                <li><a href="#courses" className="hover:text-[#087F8C] transition-colors">Immediate Life Support Instructor (ILSi)</a></li>
                <li><a href="#courses" className="hover:text-[#087F8C] transition-colors">APLS Recertification</a></li>
                <li><a href="#courses" className="hover:text-[#087F8C] transition-colors">The Ultimate Life Support Course</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-gray-500 mb-2 font-semibold">
                Quick Links
              </p>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li><a href="#about" className="hover:text-[#087F8C] transition-colors">About Us</a></li>
                <li><a href="#centres" className="hover:text-[#087F8C] transition-colors">Our Course Centres</a></li>
                <li><a href="#why-choose-us" className="hover:text-[#087F8C] transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-[#087F8C] transition-colors">Candidate Testimonials</a></li>
                <li><a href="#contact" className="hover:text-[#087F8C] transition-colors">Course Evaluation Form</a></li>
                <li><a href="#contact" className="hover:text-[#087F8C] transition-colors">Refund &amp; Returns Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
            <div>&copy; 2026 Advanced Resuscitation Training Ltd (ARTL). All rights reserved.</div>
            <div className="mt-4 sm:mt-0 flex gap-6">
              <a href="#" className="hover:text-[#087F8C] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#087F8C] transition-colors">Terms of Training</a>
              <a href="#" className="hover:text-[#087F8C] transition-colors">RCUK Compliance</a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Interactive Booking Modal Overlay */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        course={selectedBookingCourse}
      />
    </div>
  );
}
