"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Stethoscope, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="bg-[#0B1720] text-[#CBD6DA] border-t border-[#1C2C38] pt-16 pb-12 text-xs">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Clinical Details */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#087F8C] flex items-center justify-center text-white">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white tracking-tight">
                  ART<span className="text-[#087F8C]">.</span>
                </span>
                <span className="text-[10px] block uppercase tracking-wider text-[#788994] font-medium">
                  Advanced Resuscitation Training Ltd
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Practical, evidence-led resuscitation and medical emergency education for dental teams, healthcare professionals, and clinical organisations across the UK.
            </p>

            <div className="space-y-1 text-xs text-[#CBD6DA] pt-1">
              <div>18 Stornoway Close, Southampton, Hampshire, SO16 9PN</div>
              <div>
                Telephone:{" "}
                <a href="tel:07917587425" className="hover:text-white transition-colors">
                  07917 587425
                </a>
              </div>
              <div>
                Email:{" "}
                <a href="mailto:info@advancedresuscitation.co.uk" className="hover:text-white transition-colors">
                  info@advancedresuscitation.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Courses */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">
              Courses
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <Link href="/courses/rcuk-ils" className="hover:text-white transition-colors">
                  RCUK Immediate Life Support
                </Link>
              </li>
              <li>
                <Link href="/courses/dental-ils" className="hover:text-white transition-colors">
                  Dental Immediate Life Support
                </Link>
              </li>
              <li>
                <Link href="/courses/bls" className="hover:text-white transition-colors">
                  Basic Life Support (BLS)
                </Link>
              </li>
              <li>
                <Link href="/courses/als" className="hover:text-white transition-colors">
                  Advanced Life Support (ALS)
                </Link>
              </li>
              <li>
                <Link href="/courses/ultimate-life-support" className="hover:text-white transition-colors">
                  Ultimate Life Support (ULS)
                </Link>
              </li>
              <li>
                <Link href="/courses/apls-recertification" className="hover:text-white transition-colors">
                  APLS / EPALS Recertification
                </Link>
              </li>
              <li>
                <Link href="/courses/hmimms" className="hover:text-white transition-colors">
                  HMIMMS Major Incident
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <Link href="/dental-teams" className="hover:text-white transition-colors">
                  Dental Practice Teams
                </Link>
              </li>
              <li>
                <Link href="/in-house-training" className="hover:text-white transition-colors">
                  In-House Team Training
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Southampton Suite
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Venues &amp; Facilities
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Learner Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">
              Trust &amp; Governance
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About ART
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-white transition-colors">
                  Clinical Educators
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  Certifications &amp; CPD
                </Link>
              </li>
              <li>
                <Link href="/certificate-verification" className="hover:text-white transition-colors flex items-center gap-1.5 text-[#087F8C]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verify Certificate
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Clinical Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[#788994] gap-4">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Advanced Resuscitation Training Ltd. Registered in England &amp; Wales.
            </p>
            <p className="text-[11px] text-[#52616B] mt-0.5">
              Course guidelines conform to UK Resuscitation Council &amp; European Resuscitation Council scientific standards.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
