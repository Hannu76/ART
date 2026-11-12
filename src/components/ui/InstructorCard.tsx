import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instructor } from "@/types";
import { Badge } from "./Badge";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface InstructorCardProps {
  instructor: Instructor;
}

export const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-[#E3E9EB] hover:border-[#087F8C] transition-all duration-200 hover:shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#E8F5F6]">
          <Image
            src={instructor.image}
            alt={instructor.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <Badge variant="brand" size="sm" className="mb-1.5">
            {instructor.experienceYears}+ Years Clinical Resus
          </Badge>
          <h4 className="text-lg font-bold text-[#0B1720] truncate">
            {instructor.name}
          </h4>
          <p className="text-xs text-[#087F8C] font-medium mt-0.5 line-clamp-1">
            {instructor.role}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-[#52616B] leading-relaxed line-clamp-3">
        {instructor.clinicalBackground}
      </p>

      {/* Qualifications list */}
      <div className="mt-4 pt-3 border-t border-[#F0F4F5] space-y-1.5 text-xs text-[#52616B]">
        {instructor.instructorAccreditations.slice(0, 2).map((acc, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-[#064E56]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#087F8C] shrink-0" />
            <span className="truncate">{acc}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t border-[#F0F4F5] flex items-center justify-between">
        <span className="text-xs text-[#788994]">
          Teaches: {instructor.coursesTaught.join(", ")}
        </span>
        <Link
          href={`/instructors`}
          className="text-xs font-semibold text-[#087F8C] hover:text-[#064E56] inline-flex items-center gap-1"
        >
          View Profile <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
