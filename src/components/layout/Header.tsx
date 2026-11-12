"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const links = [
    { label: "Courses", href: "/courses" },
    { label: "Certifications", href: "/certifications" },
    { label: "For Dental Teams", href: "/dental-teams" },
    { label: "In-House Training", href: "/in-house-training" },
    { label: "Locations", href: "/locations" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E5E9EB] shadow-2xs">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo matching the target mockup */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#088395]"
            aria-label="Advanced Resuscitation Training Home"
          >
            {/* Official ARTL 3D Logo */}
            <img
              src="/images/artl-logo.png"
              alt="Advanced Resuscitation Training Logo"
              className="w-11 h-11 object-contain rounded-full drop-shadow-xs shrink-0"
            />
            
            <div className="flex flex-col">
              <div className="font-heading text-xl font-black tracking-tight text-[#0B1720] leading-none">
                ART<span className="text-[#088395]">.</span>
              </div>
              <span className="text-[10px] font-semibold text-[#64748B] tracking-tight uppercase leading-tight mt-0.5">
                Advanced Resuscitation <br className="hidden sm:block" />Training Ltd
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main navigation">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-xs font-semibold transition-colors py-1.5",
                    isActive
                      ? "text-[#088395] font-bold"
                      : "text-[#334155] hover:text-[#088395]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Icon Button */}
            <Link
              href="/courses"
              className="p-2 rounded-full text-[#64748B] hover:text-[#088395] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Search courses"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Find a Course Pill Button with Liquid Metal Shader */}
            <LiquidMetalButton
              label="Find a course"
              href="/courses"
              width={138}
              height={38}
              variant="blue"
              icon={<ChevronDown className="w-3.5 h-3.5 text-teal-300" />}
            />

            {/* Verify Certificate Outline Pill */}
            <Link
              href="/certificate-verification"
              className="px-4 py-2.5 rounded-full bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#CBD5E1] text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#088395]" />
              <span>Verify Certificate</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0B1720] hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-[#088395]"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-[#E5E9EB] px-6 py-5 shadow-lg space-y-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-semibold text-[#334155] hover:text-[#088395]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#E5E9EB] space-y-3">
            <Link
              href="/certificate-verification"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-xs font-semibold text-[#088395]"
            >
              <ShieldCheck className="w-4 h-4" />
              Verify Certificate
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 rounded-full bg-[#088395] text-white text-xs font-bold"
            >
              Find a Course
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
