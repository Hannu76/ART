"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { Check } from "lucide-react";

export const InHouseCalculator: React.FC = () => {
  const [courseType, setCourseType] = useState<"dental" | "ils" | "bls">("dental");
  const [teamSize, setTeamSize] = useState<number>(8);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    practiceName: "",
    contactName: "",
    email: "",
    phone: "",
    postcode: "",
    preferredMonth: "Next 30 Days",
    notes: ""
  });

  const calculatePrice = () => {
    let base = 450;
    let extraRate = 45;
    if (courseType === "ils") {
      base = 850;
      extraRate = 95;
    } else if (courseType === "bls") {
      base = 395;
      extraRate = 35;
    }

    const additionalLearners = Math.max(0, teamSize - 6);
    return base + additionalLearners * extraRate;
  };

  const estimatedPrice = calculatePrice();
  const perPersonPrice = Math.round(estimatedPrice / teamSize);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
      <div className="p-6 sm:p-8 bg-[#0B1720] text-white">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D89B3D] block mb-1">
          Estimate Calculator
        </span>
        <h3 className="font-heading text-2xl font-bold text-white">
          In-house training quotation estimator
        </h3>
        <p className="text-xs text-[#CBD6DA] mt-1 max-w-lg leading-relaxed">
          Transparent pricing inclusive of all simulation equipment, manikins, travel across Hampshire, and digital certificates.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Programme */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#52616B] mb-2.5">
                1. Select training programme
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setCourseType("dental")}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    courseType === "dental"
                      ? "border-[#087F8C] bg-[#EBF4F5] text-[#064E56]"
                      : "border-[#E5E7EB] hover:bg-[#FAFAFA] text-[#0B1720]"
                  }`}
                >
                  <div className="font-bold text-xs">Dental Practice CPR</div>
                  <div className="text-[11px] text-[#52616B] mt-0.5">3.5 hours &bull; GDC Outcome C</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCourseType("ils")}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    courseType === "ils"
                      ? "border-[#087F8C] bg-[#EBF4F5] text-[#064E56]"
                      : "border-[#E5E7EB] hover:bg-[#FAFAFA] text-[#0B1720]"
                  }`}
                >
                  <div className="font-bold text-xs">Immediate Life Support</div>
                  <div className="text-[11px] text-[#52616B] mt-0.5">1 Full Day &bull; Sedation &amp; Acute</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCourseType("bls")}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    courseType === "bls"
                      ? "border-[#087F8C] bg-[#EBF4F5] text-[#064E56]"
                      : "border-[#E5E7EB] hover:bg-[#FAFAFA] text-[#0B1720]"
                  }`}
                >
                  <div className="font-bold text-xs">BLS &amp; AED</div>
                  <div className="text-[11px] text-[#52616B] mt-0.5">3.5 hours &bull; Core Team Resus</div>
                </button>
              </div>
            </div>

            {/* 2. Team Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#52616B]">
                  2. Number of candidates
                </label>
                <span className="font-heading text-base font-bold text-[#087F8C]">
                  {teamSize} {teamSize === 1 ? "person" : "people"}
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="24"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                className="w-full accent-[#087F8C] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#80909A] mt-1">
                <span>4 minimum</span>
                <span>12 practice team</span>
                <span>24 max cohort</span>
              </div>
            </div>

            {/* Calculated Fee Row */}
            <div className="bg-[#FAFAFA] rounded-lg border border-[#E5E7EB] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[#52616B] block">Estimated Total Group Fee:</span>
                <span className="font-heading text-2xl font-bold text-[#0B1720]">
                  {formatCurrency(estimatedPrice)}
                </span>
                <span className="text-[#287A58] font-medium ml-2">
                  (approx. {formatCurrency(perPersonPrice)} per person)
                </span>
              </div>
              <div className="text-[#52616B] text-right">
                <div>Includes all equipment &amp; certificates</div>
              </div>
            </div>

            {/* 3. Contact Details */}
            <div className="pt-3 border-t border-[#E5E7EB] space-y-4">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#52616B]">
                3. Practice or clinic details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#52616B] mb-1 font-medium">Practice / Clinic Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.practiceName}
                    onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                    placeholder="e.g. Abbey Dental Practice"
                    className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#52616B] mb-1 font-medium">Contact Name &amp; Role *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Practice Manager)"
                    className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#52616B] mb-1 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="manager@practice.co.uk"
                    className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#52616B] mb-1 font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01962 000000"
                    className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#52616B] mb-1 text-xs font-medium">
                  Additional Notes (e.g. surgery rooms, sedation practice, preferred dates)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your team setup or any specific dates..."
                  className="w-full text-xs border border-[#D5DCDD] rounded-md p-2.5 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Request formal in-house quotation
              </Button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EBF4F5] text-[#087F8C] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-heading text-2xl font-bold text-[#0B1720]">
              In-House Request Received
            </h4>
            <p className="text-sm text-[#52616B] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#0B1720]">{formData.contactName || "Practice Manager"}</strong>. Our clinical coordinator will prepare a tailored proposal for <strong className="text-[#0B1720]">{formData.practiceName}</strong> ({teamSize} candidates) and email you within 1 working day.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#087F8C] hover:underline cursor-pointer"
              >
                &larr; Calculate another estimate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
