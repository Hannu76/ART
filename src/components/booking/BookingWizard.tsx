"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { COURSE_DATES } from "@/data/dates";
import { COURSES } from "@/data/courses";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { Check, Calendar, MapPin, Printer } from "lucide-react";

interface CandidateInfo {
  name: string;
  role: string;
  regNumber: string;
}

export const BookingWizard: React.FC = () => {
  const searchParams = useSearchParams();
  const initialDateId = searchParams.get("dateId");

  const [selectedDateId, setSelectedDateId] = useState<string>(
    initialDateId || COURSE_DATES[0].id
  );
  const [candidateCount, setCandidateCount] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [candidates, setCandidates] = useState<CandidateInfo[]>([
    { name: "", role: "Dentist", regNumber: "" }
  ]);
  const [billingContact, setBillingContact] = useState({
    name: "",
    email: "",
    phone: "",
    practiceOrOrg: "",
    paymentMethod: "card"
  });
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>("");

  useEffect(() => {
    if (initialDateId && COURSE_DATES.some((d) => d.id === initialDateId)) {
      setSelectedDateId(initialDateId);
    }
  }, [initialDateId]);

  const selectedDate = COURSE_DATES.find((d) => d.id === selectedDateId) || COURSE_DATES[0];
  const course = COURSES.find((c) => c.code === selectedDate.courseCode) || COURSES[0];

  const handleCandidateCountChange = (count: number) => {
    setCandidateCount(count);
    const updated = [...candidates];
    while (updated.length < count) {
      updated.push({ name: "", role: "Dental Nurse", regNumber: "" });
    }
    setCandidates(updated.slice(0, count));
  };

  const updateCandidate = (index: number, field: keyof CandidateInfo, value: string) => {
    const updated = [...candidates];
    updated[index][field] = value;
    setCandidates(updated);
  };

  const totalFee = selectedDate.price * candidateCount;

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "ART-BK-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setBookingConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (bookingConfirmed) {
    return (
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 sm:p-12 max-w-2xl mx-auto space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#EBF4F5] text-[#087F8C] flex items-center justify-center mx-auto">
          <Check className="w-6 h-6" />
        </div>

        <div className="text-center space-y-1">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B1720]">
            Booking Confirmed
          </h2>
          <p className="text-xs text-[#52616B]">
            A formal confirmation and joining instructions pack has been sent to{" "}
            <strong className="text-[#0B1720]">{billingContact.email || "your email"}</strong>.
          </p>
        </div>

        <div className="bg-[#FAFAFA] rounded-lg border border-[#E5E7EB] p-6 space-y-3 text-xs text-[#52616B]">
          <div className="flex justify-between pb-3 border-b border-[#E5E7EB]">
            <span className="text-[#80909A] uppercase tracking-wider text-[10px] font-semibold">Booking Reference</span>
            <span className="font-mono font-bold text-[#087F8C]">{bookingRef}</span>
          </div>
          <div className="flex justify-between">
            <span>Course:</span>
            <strong className="text-[#0B1720]">{selectedDate.courseTitle} ({selectedDate.courseCode})</strong>
          </div>
          <div className="flex justify-between">
            <span>Date &amp; Time:</span>
            <strong className="text-[#0B1720]">{selectedDate.formattedDate} ({selectedDate.startTime} – {selectedDate.endTime})</strong>
          </div>
          <div className="flex justify-between">
            <span>Venue:</span>
            <strong className="text-[#0B1720]">{selectedDate.locationName}</strong>
          </div>
          <div className="flex justify-between">
            <span>Candidates ({candidateCount}):</span>
            <strong className="text-[#0B1720]">{candidates.map((c) => c.name || "Candidate").join(", ")}</strong>
          </div>
          <div className="flex justify-between pt-2 border-t border-[#E5E7EB] text-sm">
            <span className="font-bold text-[#0B1720]">Total Fee:</span>
            <span className="font-bold text-[#0B1720]">{formatCurrency(totalFee)}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button
            type="button"
            onClick={() => window.print()}
            variant="secondary"
            size="md"
            className="flex-1"
            icon={<Printer className="w-4 h-4" />}
            iconPosition="left"
          >
            Print confirmation
          </Button>
          <Button href="/" variant="primary" size="md" className="flex-1">
            Return to homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Wizard Form */}
      <div className="lg:col-span-8 bg-white rounded-xl border border-[#E5E7EB] p-6 sm:p-10 space-y-8">
        {/* Step Header */}
        <div className="flex items-center gap-6 border-b border-[#E5E7EB] pb-4 text-xs font-semibold">
          <span className={currentStep === 1 ? "text-[#087F8C]" : "text-[#80909A]"}>
            1. Select Session
          </span>
          <span className="text-[#CBD6DA]">&bull;</span>
          <span className={currentStep === 2 ? "text-[#087F8C]" : "text-[#80909A]"}>
            2. Candidate Details
          </span>
          <span className="text-[#CBD6DA]">&bull;</span>
          <span className={currentStep === 3 ? "text-[#087F8C]" : "text-[#80909A]"}>
            3. Payment Details
          </span>
        </div>

        {/* STEP 1 */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#0B1720]">
                Select scheduled date &amp; places
              </h2>
            </div>

            <div className="space-y-3">
              {COURSE_DATES.filter((d) => d.status !== "sold_out").map((dateOption) => {
                const isSelected = dateOption.id === selectedDateId;
                return (
                  <button
                    key={dateOption.id}
                    type="button"
                    onClick={() => setSelectedDateId(dateOption.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? "border-[#087F8C] bg-[#EBF4F5]/50"
                        : "border-[#E5E7EB] hover:bg-[#FAFAFA]"
                    }`}
                  >
                    <div>
                      <div className="font-heading font-bold text-sm text-[#0B1720]">
                        {dateOption.courseTitle} ({dateOption.courseCode})
                      </div>
                      <div className="text-xs text-[#52616B] mt-0.5">
                        {dateOption.formattedDate} &bull; {dateOption.locationCity} ({dateOption.startTime} – {dateOption.endTime})
                      </div>
                    </div>
                    <div className="sm:text-right">
                      <div className="font-bold text-sm text-[#0B1720]">
                        {formatCurrency(dateOption.price)}
                      </div>
                      <span className="text-[11px] text-[#287A58]">
                        {dateOption.availableSeats} places remaining
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E5E7EB]">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#52616B] mb-2">
                Number of Candidates:
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleCandidateCountChange(num)}
                    className={`w-9 h-9 rounded-md font-bold text-xs transition-colors cursor-pointer ${
                      candidateCount === num
                        ? "bg-[#087F8C] text-white"
                        : "bg-[#F4F6F6] text-[#52616B] hover:bg-[#EAEAEA]"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="button"
                onClick={() => setCurrentStep(2)}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Continue to candidate details &rarr;
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#0B1720]">
                Candidate information
              </h2>
              <p className="text-xs text-[#52616B] mt-0.5">
                Names and registration details will appear on official certificates.
              </p>
            </div>

            <div className="space-y-4">
              {candidates.map((cand, idx) => (
                <div key={idx} className="p-4 bg-[#FAFAFA] rounded-lg border border-[#E5E7EB] space-y-3">
                  <span className="text-xs font-bold text-[#087F8C]">Candidate #{idx + 1}</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <label className="block text-[#52616B] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={cand.name}
                        onChange={(e) => updateCandidate(idx, "name", e.target.value)}
                        placeholder="e.g. Dr. Joanne Kelly"
                        className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#52616B] mb-1">Clinical Role</label>
                      <select
                        value={cand.role}
                        onChange={(e) => updateCandidate(idx, "role", e.target.value)}
                        className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                      >
                        <option value="Dentist">Dentist</option>
                        <option value="Dental Nurse">Dental Nurse</option>
                        <option value="Dental Hygienist">Dental Hygienist</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Registered Nurse">Registered Nurse</option>
                        <option value="Paramedic">Paramedic</option>
                        <option value="Practice Manager">Practice Manager</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#52616B] mb-1">Reg No. (GDC/NMC/GMC)</label>
                      <input
                        type="text"
                        value={cand.regNumber}
                        onChange={(e) => updateCandidate(idx, "regNumber", e.target.value)}
                        placeholder="e.g. 198274 (optional)"
                        className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" onClick={() => setCurrentStep(1)} variant="secondary" size="md">
                &larr; Back
              </Button>
              <Button type="button" onClick={() => setCurrentStep(3)} variant="primary" size="md" className="flex-1">
                Continue to payment &rarr;
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {currentStep === 3 && (
          <form onSubmit={handleCompleteBooking} className="space-y-6">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#0B1720]">
                Billing contact &amp; payment method
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#52616B] mb-1">Billing Contact Name *</label>
                <input
                  type="text"
                  required
                  value={billingContact.name}
                  onChange={(e) => setBillingContact({ ...billingContact, name: e.target.value })}
                  placeholder="e.g. Practice Administrator"
                  className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#52616B] mb-1">Confirmation Email *</label>
                <input
                  type="email"
                  required
                  value={billingContact.email}
                  onChange={(e) => setBillingContact({ ...billingContact, email: e.target.value })}
                  placeholder="admin@practice.co.uk"
                  className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#52616B] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={billingContact.phone}
                  onChange={(e) => setBillingContact({ ...billingContact, phone: e.target.value })}
                  placeholder="07917 000000"
                  className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#52616B] mb-1">Practice / Organisation</label>
                <input
                  type="text"
                  value={billingContact.practiceOrOrg}
                  onChange={(e) => setBillingContact({ ...billingContact, practiceOrOrg: e.target.value })}
                  placeholder="e.g. Solent Dental Surgery"
                  className="w-full border border-[#D5DCDD] rounded-md px-3 py-2 text-[#0B1720] focus:border-[#087F8C] focus:outline-none"
                />
              </div>
            </div>

            {/* Payment Option */}
            <div className="pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#52616B] mb-2">
                Payment Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setBillingContact({ ...billingContact, paymentMethod: "card" })}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    billingContact.paymentMethod === "card"
                      ? "border-[#087F8C] bg-[#EBF4F5]"
                      : "border-[#E5E7EB] hover:bg-[#FAFAFA]"
                  }`}
                >
                  <div className="font-bold text-xs text-[#0B1720]">Credit / Debit Card</div>
                  <div className="text-[11px] text-[#52616B]">Instant card authorization</div>
                </button>

                <button
                  type="button"
                  onClick={() => setBillingContact({ ...billingContact, paymentMethod: "invoice" })}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    billingContact.paymentMethod === "invoice"
                      ? "border-[#087F8C] bg-[#EBF4F5]"
                      : "border-[#E5E7EB] hover:bg-[#FAFAFA]"
                  }`}
                >
                  <div className="font-bold text-xs text-[#0B1720]">Practice Invoice</div>
                  <div className="text-[11px] text-[#52616B]">30-day payment term</div>
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" onClick={() => setCurrentStep(2)} variant="secondary" size="md">
                &larr; Back
              </Button>
              <Button type="submit" variant="primary" size="lg" className="flex-1">
                Complete Booking ({formatCurrency(totalFee)})
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Summary Box */}
      <div className="lg:col-span-4 bg-white rounded-xl border border-[#E5E7EB] p-6 space-y-4 sticky top-24">
        <h3 className="font-heading font-bold text-base text-[#0B1720] pb-3 border-b border-[#E5E7EB]">
          Booking Summary
        </h3>
        <div className="space-y-2 text-xs text-[#52616B]">
          <div>
            <span className="text-[#80909A] block uppercase text-[10px]">Course</span>
            <strong className="text-[#0B1720] text-sm block mt-0.5">{selectedDate.courseTitle}</strong>
          </div>
          <div>
            <span className="text-[#80909A] block uppercase text-[10px]">Date</span>
            <strong className="text-[#0B1720] block mt-0.5">{selectedDate.formattedDate}</strong>
          </div>
          <div>
            <span className="text-[#80909A] block uppercase text-[10px]">Venue</span>
            <span className="text-[#0B1720] block mt-0.5">{selectedDate.locationName}</span>
          </div>
          <div className="pt-2 border-t border-[#E5E7EB] flex justify-between text-sm">
            <span className="font-bold text-[#0B1720]">Total Fee:</span>
            <span className="font-bold text-[#087F8C]">{formatCurrency(totalFee)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
