"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export function CustomCursor() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  if (pathname === "/" || pathname === "/ioh") return null;

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    if (typeof window === "undefined") return;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Fast, hardware-accelerated spring followers using GSAP quickTo
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power3.out" });
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.06, ease: "power1.out" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.06, ease: "power1.out" });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([cursor, dot], { opacity: 1, duration: 0.25, overwrite: "auto" });
        isVisible = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to([cursor, dot], { opacity: 0, duration: 0.25, overwrite: "auto" });
      isVisible = false;
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, select, textarea, .interactive-card, [data-cursor]"
      ) as HTMLElement | null;

      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor-text");
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handlePointerOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handlePointerOver);
    };
  }, []);

  return (
    <div className="hidden sm:block">
      {/* Outer Follower Ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
          isHovered
            ? cursorText
              ? "w-20 h-20 rounded-full bg-[#087F8C]/90 text-white backdrop-blur-md shadow-lg shadow-[#087F8C]/30"
              : "w-14 h-14 rounded-full bg-[#087F8C]/20 border border-[#087F8C]/60 backdrop-blur-[2px] shadow-sm"
            : "w-8 h-8 rounded-full border border-[#087F8C]/70 bg-transparent"
        }`}
      >
        {cursorText && (
          <span
            ref={textRef}
            className="text-[10px] font-bold uppercase tracking-wider text-white select-none pointer-events-none text-center px-1"
          >
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[#087F8C] pointer-events-none z-[9999] opacity-0 -translate-x-1/2 -translate-y-1/2 will-change-transform transition-transform duration-150 ${
          isHovered ? "scale-0" : "scale-100"
        }`}
      />
    </div>
  );
}
