"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/data/courses";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";

export const CourseDiscovery: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<"all" | "dental" | "healthcare" | "in-house">("dental");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter courses based on role and selection
  const filteredCourses = COURSES.filter((course) => {
    if (selectedRole === "dental") {
      return course.audienceType.includes("dental");
    }
    if (selectedRole === "healthcare") {
      return course.audienceType.includes("healthcare");
    }
    if (selectedRole === "in-house") {
      return course.audienceType.includes("in-house");
    }
    return true;
  }).slice(0, 4);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-12">
      {/* 1. Refined Segmented Discovery Interface */}
      <div className="bg-[#F8FAFA] border border-[#E5E7EB] rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#087F8C] block mb-1">
            Course Discovery
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[#0B1720]">
            Find training for your clinical role
          </h3>
          <p className="text-xs sm:text-sm text-[#52616B] mt-1">
            Choose the training that matches your role, setting, and required certification.
          </p>
        </div>

        {/* Role Segmented Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-[#E5E7EB] rounded-xl max-w-lg mx-auto mb-6 shadow-xs">
          <button
            type="button"
            onClick={() => setSelectedRole("dental")}
            className={`flex-1 min-w-[130px] py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              selectedRole === "dental"
                ? "bg-[#0B1720] text-white shadow-xs"
                : "text-[#52616B] hover:text-[#0B1720] hover:bg-[#F4F6F6]"
            }`}
          >
            Dental professional
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole("healthcare")}
            className={`flex-1 min-w-[130px] py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              selectedRole === "healthcare"
                ? "bg-[#0B1720] text-white shadow-xs"
                : "text-[#52616B] hover:text-[#0B1720] hover:bg-[#F4F6F6]"
            }`}
          >
            Healthcare professional
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole("in-house")}
            className={`flex-1 min-w-[130px] py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
              selectedRole === "in-house"
                ? "bg-[#0B1720] text-white shadow-xs"
                : "text-[#52616B] hover:text-[#0B1720] hover:bg-[#F4F6F6]"
            }`}
          >
            Organisation / team
          </button>
        </div>

        {/* Secondary filters & CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#E5E7EB] text-xs">
          <div>
            <label htmlFor="course-location" className="block text-[11px] font-semibold text-[#52616B] mb-1">
              Location
            </label>
            <select
              id="course-location"
              aria-label="Location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 text-[#0B1720] font-medium focus:outline-none focus:border-[#087F8C]"
            >
              <option value="all">All venues (Southampton &amp; On-site)</option>
              <option value="chilworth">Chilworth Manor Hotel, Southampton</option>
              <option value="inhouse">Your practice / clinical facility</option>
            </select>
          </div>

          <div>
            <label htmlFor="course-duration" className="block text-[11px] font-semibold text-[#52616B] mb-1">
              Duration &amp; Format
            </label>
            <select
              id="course-duration"
              aria-label="Duration and format"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 text-[#0B1720] font-medium focus:outline-none focus:border-[#087F8C]"
            >
              <option value="all">All formats (Full day &amp; Half day)</option>
              <option value="1day">1 Day Intensive (6.5h CPD)</option>
              <option value="halfday">Half Day / Practice Update (3.5h–4h CPD)</option>
            </select>
          </div>

          <div className="flex items-end">
            <Link
              href="/courses"
              className="w-full py-2.5 px-4 bg-[#087F8C] hover:bg-[#075E67] text-white font-semibold rounded-lg text-center transition-all shadow-xs inline-flex items-center justify-center gap-1.5"
            >
              <span>View all available courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Synora-Inspired Editorial Visual Cards Section */}
      <div>
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#087F8C] block mb-1">
              Curated Courses
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B1720]">
              Practical training. Verifiable competence.
            </h3>
            <p className="text-xs sm:text-sm text-[#52616B] mt-1 max-w-xl">
              Evidence-based resuscitation courses structured to meet General Dental Council, CQC, and national healthcare guidance.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white hover:bg-[#F4F6F6] flex items-center justify-center text-[#0B1720] transition-colors"
              aria-label="Previous courses"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white hover:bg-[#F4F6F6] flex items-center justify-center text-[#0B1720] transition-colors"
              aria-label="Next courses"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container with physical depth cards */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar"
        >
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#087F8C]/40 snap-start"
            >
              {/* Image Area with Subtle Scrim */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4F6F6]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Course Code Chip */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#0B1720] border border-black/5">
                  {course.code}
                </div>

                {/* Price on image corner */}
                <div className="absolute bottom-3 right-3 bg-[#0B1720]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-bold text-white">
                  {formatCurrency(course.price)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-heading text-base font-bold text-[#0B1720] group-hover:text-[#087F8C] transition-colors leading-snug">
                    <Link href={`/courses/${course.slug}`}>
                      {course.title}
                    </Link>
                  </h4>

                  <p className="mt-2 text-xs text-[#52616B] leading-relaxed line-clamp-2">
                    {course.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0F2F2] space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[#52616B]">
                    <span>{course.duration.split("(")[0].trim()}</span>
                    <span className="font-semibold text-[#087F8C]">{course.cpdHours}h CPD</span>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full py-2 px-3 rounded-lg bg-[#F4F6F6] group-hover:bg-[#087F8C] group-hover:text-white text-[#0B1720] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
