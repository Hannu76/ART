"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { COURSES } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { AudienceType } from "@/types";
import { ArrowRight } from "lucide-react";

export const CourseFinder: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<AudienceType | "all">("all");
  const [selectedCourse, setSelectedCourse] = useState<string>("all");

  const roleOptions: { label: string; value: AudienceType | "all" }[] = [
    { label: "All professions", value: "all" },
    { label: "Dental professionals", value: "dental" },
    { label: "Healthcare professionals", value: "healthcare" },
    { label: "Practices & organisations", value: "in-house" },
  ];

  const courseOptions = [
    { label: "All courses", value: "all" },
    { label: "BLS", value: "BLS" },
    { label: "Dental ILS", value: "D-ILS" },
    { label: "RCUK ILS", value: "RCUK-ILS" },
    { label: "ALS", value: "ALS" },
    { label: "APLS Recert", value: "APLS-REC" },
    { label: "EPALS Recert", value: "EPALS-REC" },
    { label: "HMIMMS", value: "HMIMMS" },
    { label: "ULS", value: "ULS" },
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      if (selectedRole !== "all" && !course.audienceType.includes(selectedRole)) {
        return false;
      }
      if (selectedCourse !== "all" && course.code !== selectedCourse) {
        return false;
      }
      return true;
    });
  }, [selectedRole, selectedCourse]);

  return (
    <div id="course-finder" className="scroll-mt-24">
      {/* Refined Selector Box */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-8 mb-10 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Role Filter */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#52616B] mb-2.5">
              I am a...
            </span>
            <div className="flex flex-wrap gap-2">
              {roleOptions.map((opt) => {
                const active = selectedRole === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedRole(opt.value)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      active
                        ? "bg-[#087F8C] text-white shadow-xs"
                        : "bg-[#F4F6F6] text-[#52616B] hover:text-[#0B1720] hover:bg-[#EAEAEA]"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Looking for */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#52616B] mb-2.5">
              Looking for...
            </span>
            <div className="flex flex-wrap gap-2">
              {courseOptions.map((opt) => {
                const active = selectedCourse === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedCourse(opt.value)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      active
                        ? "bg-[#087F8C] text-white shadow-xs"
                        : "bg-[#F4F6F6] text-[#52616B] hover:text-[#0B1720] hover:bg-[#EAEAEA]"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-[#F0F2F2] flex items-center justify-between text-xs text-[#52616B]">
          <span>
            Showing <strong className="text-[#0B1720]">{filteredCourses.length}</strong> matching {filteredCourses.length === 1 ? "qualification" : "qualifications"}
          </span>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1 font-semibold text-[#087F8C] hover:underline"
          >
            <span>View all courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
