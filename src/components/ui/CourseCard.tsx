import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="card-physical flex flex-col bg-white rounded-lg border border-[#E5E7EB] overflow-hidden group">
      {/* Clean Course Image without floating badges */}
      <div className="relative h-48 w-full bg-[#F4F6F6] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-103"
        />
      </div>

      {/* Course Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="text-[11px] font-semibold text-[#087F8C] uppercase tracking-wider">
          {course.code}
        </div>

        <h3 className="font-heading text-lg font-bold text-[#0B1720] mt-1 group-hover:text-[#087F8C] transition-colors">
          <Link href={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        <p className="mt-2 text-xs text-[#52616B] leading-relaxed line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Minimal Meta Row */}
        <div className="mt-6 pt-4 border-t border-[#F0F2F2] flex items-center justify-between text-xs">
          <span className="text-[#52616B]">
            {course.duration.split("(")[0].trim()} &bull; {course.cpdHours}h CPD
          </span>
          <span className="font-bold text-[#0B1720]">
            From {formatCurrency(course.price)}
          </span>
        </div>

        {/* Text link CTA */}
        <div className="mt-4 pt-2">
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087F8C] group-hover:text-[#075E67] transition-colors"
          >
            <span>View course</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
