"use client";

import React from "react";
import Link from "next/link";
import { COURSE_DATES } from "@/data/dates";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const UpcomingDatesTable: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = React.useState<string>("all");
  const [selectedLocation, setSelectedLocation] = React.useState<string>("all");

  const filteredDates = COURSE_DATES.filter((item) => {
    if (selectedCourse !== "all" && item.courseSlug !== selectedCourse) return false;
    if (selectedLocation !== "all" && item.locationCity.toLowerCase() !== selectedLocation.toLowerCase()) return false;
    return true;
  }).slice(0, 6);

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-xs">
      {/* Refined Minimal Filter Bar */}
      <div className="p-4 bg-[#FAFAFA] border-b border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <label htmlFor="filter-course" className="text-[#52616B] font-medium">Course:</label>
            <select
              id="filter-course"
              aria-label="Filter by course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="bg-white border border-[#E5E7EB] rounded-md px-2.5 py-1 text-xs text-[#0B1720] focus:outline-none focus:border-[#087F8C]"
            >
              <option value="all">All Courses</option>
              <option value="bls">Basic Life Support (BLS)</option>
              <option value="dental-ils">Dental Immediate Life Support (Dental ILS)</option>
              <option value="rcuk-ils">RCUK Immediate Life Support (ILS)</option>
              <option value="apls-recertification">APLS Recertification</option>
              <option value="epals-recertification">EPALS Recertification</option>
              <option value="als">Advanced Life Support (ALS)</option>
              <option value="hmimms">HMIMMS Major Incident Management</option>
              <option value="ultimate-life-support">The Ultimate Life Support Course (ULS)</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <label htmlFor="filter-location" className="text-[#52616B] font-medium">Location:</label>
            <select
              id="filter-location"
              aria-label="Filter by location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-white border border-[#E5E7EB] rounded-md px-2.5 py-1 text-xs text-[#0B1720] focus:outline-none focus:border-[#087F8C]"
            >
              <option value="all">All Locations</option>
              <option value="southampton">Southampton (Chilworth Manor)</option>
              <option value="portsmouth">Portsmouth</option>
              <option value="winchester">Winchester</option>
            </select>
          </div>
        </div>

        <span className="text-[11px] text-[#52616B]">
          Showing {filteredDates.length} confirmed dates
        </span>
      </div>

      {/* Clean schedule table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-[#52616B] font-semibold uppercase tracking-wider text-[11px] bg-[#FAFAFA]/50">
              <th className="py-3.5 px-6">Course</th>
              <th className="py-3.5 px-6">Date</th>
              <th className="py-3.5 px-6">Location</th>
              <th className="py-3.5 px-6">Fee</th>
              <th className="py-3.5 px-6">Availability</th>
              <th className="py-3.5 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB]">
            {filteredDates.map((item) => (
              <tr key={item.id} className="hover:bg-[#F9FAFA] transition-colors group">
                <td className="py-4 px-6 font-semibold text-[#0B1720]">
                  <Link href={`/courses/${item.courseSlug}`} className="hover:text-[#087F8C]">
                    {item.courseTitle}
                  </Link>
                </td>
                <td className="py-4 px-6 text-[#52616B]">
                  {item.formattedDate}
                </td>
                <td className="py-4 px-6 text-[#52616B]">
                  {item.locationCity}
                </td>
                <td className="py-4 px-6 font-medium text-[#0B1720]">
                  {formatCurrency(item.price)}
                </td>
                <td className="py-4 px-6">
                  {item.status === "sold_out" ? (
                    <span className="text-[#B42318] text-xs font-medium">Sold out</span>
                  ) : item.status === "limited" ? (
                    <span className="text-[#C2872C] text-xs font-medium">{item.availableSeats} places remaining</span>
                  ) : (
                    <span className="text-[#287A58] text-xs font-medium">Available</span>
                  )}
                </td>
                <td className="py-4 px-6 text-right">
                  {item.status === "sold_out" ? (
                    <Link
                      href="/contact"
                      className="text-xs font-medium text-[#52616B] hover:text-[#087F8C]"
                    >
                      Waitlist
                    </Link>
                  ) : (
                    <Link
                      href={`/booking?dateId=${item.id}`}
                      className="text-xs font-semibold text-[#087F8C] hover:text-[#075E67] inline-flex items-center gap-1"
                    >
                      Book <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-[#FAFAFA] border-t border-[#E5E7EB] text-center">
        <Link
          href="/courses"
          className="text-xs font-semibold text-[#087F8C] hover:underline inline-flex items-center gap-1"
        >
          View all scheduled dates &rarr;
        </Link>
      </div>
    </div>
  );
};
