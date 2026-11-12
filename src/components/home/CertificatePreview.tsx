"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Award,
  CheckCircle2,
  Download,
  Eye,
  QrCode,
  ShieldCheck,
  Sparkles,
  FileCheck2,
  HeartPulse,
} from "lucide-react";

export const CertificatePreview: React.FC = () => {
  const [candidateName, setCandidateName] = useState("Dr. Sarah Jenkins, BDS");
  const [certType, setCertType] = useState<"dils" | "uls" | "bls">("dils");
  const [viewMode, setViewMode] = useState<"interactive" | "original">("interactive");

  const certData = {
    dils: {
      title: "DENTAL IMMEDIATE LIFE SUPPORT LEVEL 3 (VTQ)",
      subtitle: "Theory and hands-on clinical simulation training",
      credits: "7 CPD Credits",
      cpdNum: "#1019986",
      certId: "ART-DILS-2026-001",
      standards: "In accordance with UK Resuscitation Council guidance and meets GDC Development Outcome C",
      topics: [
        "Medical emergencies in dental practice",
        "ABCDE clinical patient assessment",
        "Adult Basic and Immediate Life Support",
        "Airway management, i-gel & suction",
        "Emergency oxygen therapy protocols",
        "Automated External Defibrillator (AED) deployment",
        "Full dental surgery scenario simulations",
      ],
      director: "Dr Anil Rajashekar",
      directorRole: "Instructor & Course Director",
      director2: "Dr Jyothi Chintamani",
      director2Role: "Clinical Educator",
      originalImage: "/images/cert-dils.jpg",
    },
    uls: {
      title: "THE ULTIMATE LIFE SUPPORT COURSE (ULS)",
      subtitle: "Advanced resuscitation and acute medical emergencies",
      credits: "10 CPDs",
      cpdNum: "#788976",
      certId: "E76BKL90PI8F",
      standards: "Approved healthcare professional resuscitation and peri-arrest management",
      topics: [
        "Advanced life support algorithms",
        "Manual and automated defibrillation safety",
        "Complex airway adjuncts and ventilation",
        "Peri-arrest arrhythmias and emergency pharmacology",
        "High-performance resuscitation team leadership",
        "Post-resuscitation care and clinical handover",
      ],
      director: "Dr Anil Golla-Rajashekar",
      directorRole: "Emergency Medicine Consultant, ULS Director",
      director2: "Dr Hesham A. K. Ibrahim",
      director2Role: "Emergency Medicine Consultant, Co-Director",
      originalImage: "/images/cert-uls.jpg",
    },
    bls: {
      title: "BASIC LIFE SUPPORT IN ADULTS (BLS & AED)",
      subtitle: "Hands-on emergency resuscitation training session",
      credits: "4 CPD Credits",
      cpdNum: "#1019872",
      certId: "ART-BLS-2026-042",
      standards: "Guidelines on providing effective CPR and rapid defibrillation in adult patients",
      topics: [
        "Immediate recognition of cardiac arrest",
        "High-quality chest compression technique",
        "Airway opening and rescue ventilation",
        "Safe Automated External Defibrillator (AED) use",
        "Management of foreign body airway obstruction",
        "Recovery position and emergency services handover",
      ],
      director: "Dr Anil Rajashekar",
      directorRole: "Instructor, Advanced Resuscitation Training",
      director2: "Dr Jyothi Chintamani",
      director2Role: "Clinical Educator",
      originalImage: "/images/cert-bls.jpg",
    },
  };

  const currentCert = certData[certType];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8F9FA] via-[#EFF6F8] to-[#F8F9FA] border-t border-[#E2E8F0]">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[11px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verifiable Clinical Qualifications</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B1720]">
              CPD CERTIFICATE LIVE PREVIEW
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-xl">
              Type your name below to see how your verified certificate is formatted upon course completion. Accredited by The CPD Group with instant online QR verification.
            </p>
          </div>

          {/* Toggle between Interactive Preview & Original Certificate Scan */}
          <div className="flex items-center p-1 bg-white border border-[#CBD5E1] rounded-full shadow-2xs">
            <button
              type="button"
              onClick={() => setViewMode("interactive")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "interactive"
                  ? "bg-[#088395] text-white shadow-xs"
                  : "text-[#64748B] hover:text-[#0B1720]"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("original")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "original"
                  ? "bg-[#088395] text-white shadow-xs"
                  : "text-[#64748B] hover:text-[#0B1720]"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Official Document</span>
            </button>
          </div>
        </div>

        {/* Certificate Controls: Name Input & Course Switcher */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 mb-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            
            {/* Live Name Input */}
            <div className="md:col-span-6 space-y-1.5">
              <label htmlFor="candidate-name-input" className="block text-xs font-bold uppercase tracking-wider text-[#0B1720]">
                Enter Candidate Name (Live On Certificate)
              </label>
              <div className="relative">
                <input
                  id="candidate-name-input"
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Dr. Sarah Jenkins, BDS"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0B1720] focus:outline-none focus:border-[#088395] focus:bg-white transition-all"
                />
                <span className="absolute right-3 top-2.5 text-[11px] font-semibold text-[#088395] pointer-events-none">
                  Live Previewing
                </span>
              </div>
            </div>

            {/* Course Selector Tabs */}
            <div className="md:col-span-6 space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1720]">
                Select Qualification Track
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setCertType("dils")}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex-1 min-w-[130px] border ${
                    certType === "dils"
                      ? "bg-[#088395] text-white border-[#088395] shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:bg-[#F1F5F9]"
                  }`}
                >
                  Dental ILS (7 CPD)
                </button>
                <button
                  type="button"
                  onClick={() => setCertType("uls")}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex-1 min-w-[130px] border ${
                    certType === "uls"
                      ? "bg-[#088395] text-white border-[#088395] shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:bg-[#F1F5F9]"
                  }`}
                >
                  Ultimate Life Support (10 CPD)
                </button>
                <button
                  type="button"
                  onClick={() => setCertType("bls")}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex-1 min-w-[130px] border ${
                    certType === "bls"
                      ? "bg-[#088395] text-white border-[#088395] shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:bg-[#F1F5F9]"
                  }`}
                >
                  Basic Life Support (4 CPD)
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="max-w-4xl mx-auto">
          {viewMode === "interactive" ? (
            /* ==============================================================
               INTERACTIVE LIVE CERTIFICATE CANVAS (Authentic Layout)
               ============================================================== */
            <div className="relative bg-[#FFFDF8] rounded-2xl border-8 border-double border-[#D4AF37] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden text-center text-[#0B1720]">
              
              {/* Corner Gold Ribbon Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-30 pointer-events-none" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D4AF37] to-transparent opacity-30 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#D4AF37] to-transparent opacity-30 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#D4AF37] to-transparent opacity-30 pointer-events-none" />

              {/* Certificate Top Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D4AF37]/30 pb-6 mb-6">
                {/* ART Brand Logo */}
                <div className="flex items-center gap-2.5 text-left">
                  <img
                    src="/images/artl-logo.png"
                    alt="Advanced Resuscitation Training Logo"
                    className="w-10 h-10 object-contain rounded-full shadow-xs"
                  />
                  <div>
                    <span className="font-heading text-base font-extrabold tracking-tight text-[#0B1720] block leading-none">
                      ADVANCED RESUSCITATION TRAINING
                    </span>
                    <span className="text-[10px] text-[#64748B] font-semibold uppercase tracking-wider">
                      Resuscitation Education Ltd
                    </span>
                  </div>
                </div>

                {/* The CPD Group Badge */}
                <div className="px-3.5 py-1.5 rounded-lg border border-[#D4AF37] bg-[#FFF9E6] text-center shadow-2xs">
                  <span className="text-[9px] font-black uppercase text-[#B45309] block leading-none">
                    THE CPD GROUP &bull; ACCREDITED ACTIVITY
                  </span>
                  <span className="text-xs font-black text-[#0B1720]">
                    {currentCert.credits} &bull; {currentCert.cpdNum}
                  </span>
                  <span className="text-[9px] text-[#78350F] block">
                    Verify @ thecpdregister.com
                  </span>
                </div>

                {/* Dental Arch Nurse Training Partner Logo */}
                <div className="text-right">
                  <span className="text-xs font-bold text-[#DC2626] block leading-none">
                    Dental Arch
                  </span>
                  <span className="text-[10px] text-[#64748B] font-semibold">
                    Nurse Training Ltd
                  </span>
                </div>
              </div>

              {/* Certificate Main Title */}
              <div className="space-y-1 my-4">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-widest text-[#0B1720] uppercase">
                  CERTIFICATE
                </h3>
                <div className="text-xs sm:text-sm font-serif tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                  OF ACHIEVEMENT
                </div>
                <p className="text-xs font-serif text-[#64748B] pt-2 italic">
                  This certificate is proudly presented to
                </p>
              </div>

              {/* LIVE CANDIDATE NAME ON GOLD RIBBON */}
              <div className="my-6 max-w-lg mx-auto">
                <div className="relative py-3 px-8 bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FDE68A] rounded-xl shadow-md border border-[#F59E0B]/40">
                  <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wide text-[#78350F] block drop-shadow-xs">
                    {candidateName.trim() || "Your Name Here"}
                  </span>
                </div>
              </div>

              {/* Course Title & Objectives */}
              <div className="space-y-2 max-w-2xl mx-auto my-6 text-xs sm:text-sm">
                <p className="text-[#64748B]">
                  For successfully completing the theory and hands-on clinical simulation session on
                </p>
                <div className="font-heading text-lg sm:text-xl font-black text-[#0B1720] uppercase tracking-tight py-1 text-[#088395]">
                  {currentCert.title}
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed italic max-w-xl mx-auto">
                  {currentCert.standards}
                </p>
              </div>

              {/* Topics Included Grid */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-4 my-6 text-left max-w-2xl mx-auto">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-2">
                  Clinical Competencies Covered:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#334155]">
                  {currentCert.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#088395] shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dates & Verification Row */}
              <div className="flex flex-wrap items-center justify-around gap-4 text-xs text-[#64748B] py-3 border-y border-[#E2E8F0]">
                <div>
                  <span className="font-bold text-[#0B1720]">Course Date:</span> 12/07/2026
                </div>
                <div>
                  <span className="font-bold text-[#0B1720]">Certificate Valid Until:</span> 12/07/2027
                </div>
                <div>
                  <span className="font-bold text-[#0B1720]">Certificate No:</span> {currentCert.certId}
                </div>
              </div>

              {/* Signatures & Gold Seal */}
              <div className="flex flex-wrap items-end justify-between gap-6 pt-8 mt-4 text-left">
                {/* Director 1 */}
                <div className="space-y-1">
                  <div className="font-serif italic text-lg text-[#088395] font-bold border-b border-[#0B1720] pb-1 w-44">
                    {currentCert.director}
                  </div>
                  <div className="text-xs font-bold text-[#0B1720]">{currentCert.director}</div>
                  <div className="text-[10px] text-[#64748B]">{currentCert.directorRole}</div>
                  <div className="text-[9px] text-[#94A3B8]">Advanced Resuscitation Training Ltd</div>
                </div>

                {/* Center Gold CPD Seal */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D97706] via-[#F59E0B] to-[#FDE68A] p-1 shadow-lg border-2 border-white">
                    <div className="w-full h-full rounded-full border border-dashed border-[#78350F] flex flex-col items-center justify-center text-[#78350F]">
                      <span className="text-[9px] font-black uppercase leading-none">CPD</span>
                      <span className="text-base font-black leading-tight">
                        {certType === "uls" ? "10" : certType === "dils" ? "7" : "4"}
                      </span>
                      <span className="text-[8px] font-bold uppercase leading-none">Hours</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] mt-1 uppercase tracking-wider">
                    Official Seal
                  </span>
                </div>

                {/* Director 2 / QR Code */}
                <div className="flex items-center gap-3 text-right">
                  <div className="space-y-1">
                    <div className="font-serif italic text-lg text-[#088395] font-bold border-b border-[#0B1720] pb-1 w-40">
                      {currentCert.director2}
                    </div>
                    <div className="text-xs font-bold text-[#0B1720]">{currentCert.director2}</div>
                    <div className="text-[10px] text-[#64748B]">{currentCert.director2Role}</div>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg p-1 border border-[#CBD5E1] shadow-2xs flex items-center justify-center">
                    <QrCode className="w-10 h-10 text-[#0B1720]" />
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* ==============================================================
               OFFICIAL SCANNED DOCUMENT VIEW
               ============================================================== */
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-xl overflow-hidden flex flex-col items-center">
              <div className="relative w-full aspect-[1/1.4] max-w-xl rounded-xl overflow-hidden border border-[#CBD5E1] shadow-md">
                <Image
                  src={currentCert.originalImage}
                  alt={`${currentCert.title} Official Document`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between w-full max-w-xl text-xs text-[#64748B]">
                <span>Official accredited physical parchment sample</span>
                <Link
                  href="/certificate-verification"
                  className="text-xs font-bold text-[#088395] hover:underline flex items-center gap-1"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify an existing certificate</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Information Notice */}
        <div className="mt-8 text-center text-xs text-[#64748B]">
          Looking to verify an issued certificate?{" "}
          <Link href="/certificate-verification" className="font-bold text-[#088395] hover:underline">
            Use our live Certificate Verification lookup tool &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
};
