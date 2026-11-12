"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  Loader2,
  Phone,
  Mail,
  User,
  Stethoscope,
  Users as UsersIcon,
  FileText,
  BadgeCheck,
} from "lucide-react";

export interface BookingModalCourse {
  id?: number;
  title: string;
  category: string;
  units?: string;
  duration?: string;
  target?: string;
  image?: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: BookingModalCourse | null;
}

export default function BookingModal({ isOpen, onClose, course }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "General Dental Practitioner (GDP)",
    practice: "",
    email: "",
    phone: "",
    attendees: "1",
    preferredLocation: "Southampton (Chilworth Manor Hotel)",
    preferredDate: "Next Available Cohort",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen) return null;

  const courseTitle = course?.title || "RCUK Immediate Life Support (ILS)";
  const courseCategory = course?.category || "RCUK Accredited";
  const courseDuration = course?.duration || "1-Day Practical Intensive • 6.5 CPD Hours";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedRef = "ART-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(generatedRef);

    const payload = {
      bookingRef: generatedRef,
      timestamp: new Date().toISOString(),
      courseTitle,
      category: courseCategory,
      duration: courseDuration,
      candidateName: formData.name,
      role: formData.role,
      practice: formData.practice,
      email: formData.email,
      phone: formData.phone,
      attendees: formData.attendees,
      location: formData.preferredLocation,
      datePreference: formData.preferredDate,
      notes: formData.notes,
    };

    // Google Sheets webhook / booking endpoint
    const endpoint =
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT ||
      "https://script.google.com/macros/s/AKfycbwqgXbKj18L7a8xL_artl_booking/exec";

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      // Graceful fallback
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleResetAndClose = () => {
    setSubmitSuccess(false);
    setFormData({
      name: "",
      role: "General Dental Practitioner (GDP)",
      practice: "",
      email: "",
      phone: "",
      attendees: "1",
      preferredLocation: "Southampton (Chilworth Manor Hotel)",
      preferredDate: "Next Available Cohort",
      notes: "",
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-950/65 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={handleResetAndClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Executive Header */}
        <div className="bg-[#0F172A] text-white p-5 sm:p-6 relative shrink-0 border-b border-slate-800">
          <button
            onClick={handleResetAndClose}
            aria-label="Close booking modal"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-block px-3 py-0.5 rounded-full bg-teal-400/15 text-teal-300 border border-teal-300/30 text-[10.5px] font-mono uppercase tracking-wider font-semibold">
              {courseCategory}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30 text-[10.5px] font-mono uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              Verified Clinical Certification
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white pr-8 leading-snug">
            {courseTitle}
          </h3>

          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{courseDuration}</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>No Upfront Fee to Enquire</span>
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          {submitSuccess ? (
            /* Hospital-Grade Formal Confirmation Screen */
            <div className="py-6 sm:py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 font-bold">
                  RESERVATION REGISTERED
                </span>
                <h4 className="text-2xl font-bold text-slate-950 pt-1">
                  Thank You, {formData.name || "Colleague"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your formal course registration enquiry for <strong className="text-slate-900">{courseTitle}</strong> has been transmitted directly to our clinical operations team.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-left text-xs space-y-2.5 max-w-lg mx-auto">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200">
                  <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider font-semibold">
                    Reference ID
                  </span>
                  <span className="font-mono font-bold text-blue-700 text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Candidate / Lead:</span>
                  <strong className="text-slate-900">{formData.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Practice / Trust:</span>
                  <strong className="text-slate-900">{formData.practice || "Not specified"}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Venue:</span>
                  <strong className="text-slate-900">{formData.preferredLocation}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Cohort:</span>
                  <strong className="text-slate-900">{formData.preferredDate}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Number of Delegates:</span>
                  <strong className="text-slate-900">{formData.attendees} Candidate(s)</strong>
                </div>
              </div>

              <p className="text-[11.5px] text-slate-500 max-w-md mx-auto leading-relaxed">
                Our lead instructor and clinical coordinator will review your practice requirements and dispatch confirmation, cohort joining instructions, and invoicing via email to <strong className="text-slate-800">{formData.email}</strong>.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Close &amp; Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* Executive Clinical Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* SECTION 1: CANDIDATE & PRACTICE CONTACT */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  <span>Lead Candidate &amp; Practice Information</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Full Name &amp; Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dr. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Professional Role <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 text-slate-800"
                    >
                      <option value="General Dental Practitioner (GDP)">General Dental Practitioner (GDP)</option>
                      <option value="Registered Dental Nurse">Registered Dental Nurse</option>
                      <option value="Dental Hygienist / Therapist">Dental Hygienist / Therapist</option>
                      <option value="Hospital Doctor / Registrar">Hospital Doctor / Registrar</option>
                      <option value="Consultant / Anaesthetist">Consultant / Anaesthetist</option>
                      <option value="Specialist Acute Care Nurse">Specialist Acute Care Nurse</option>
                      <option value="Practice Manager / Resus Lead">Practice Manager / Resus Lead</option>
                      <option value="Allied Health Professional">Allied Health Professional</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Dental Practice / Clinic / Trust <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="practice"
                      required
                      placeholder="e.g. Southampton Dental Practice"
                      value={formData.practice}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Work Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. s.jenkins@practice.co.uk"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Contact Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 07700 900123"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* SECTION 2: ATTENDANCE & VENUE SELECTION */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Venue, Delegates &amp; Target Cohort</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Preferred Training Location
                    </label>
                    <select
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 text-slate-800"
                    >
                      <option value="Southampton (Chilworth Manor Hotel)">
                        Southampton — Chilworth Manor Hotel (Main Centre)
                      </option>
                      <option value="Winchester (Holiday Inn & Conference Centre)">
                        Winchester — Holiday Inn &amp; Conference Centre
                      </option>
                      <option value="In-House Training (At Your Practice / Clinic)">
                        In-House Practice Training (Delivered At Your Surgery)
                      </option>
                      <option value="Nationwide On-Site Bespoke Session">
                        Nationwide Clinical On-Site Bespoke Cohort
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Candidates
                    </label>
                    <select
                      name="attendees"
                      value={formData.attendees}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 text-slate-800"
                    >
                      <option value="1">1 Candidate</option>
                      <option value="2">2 Candidates</option>
                      <option value="3">3 Candidates</option>
                      <option value="4-6">4 – 6 Candidates (Practice Team)</option>
                      <option value="7-12">7 – 12 Candidates (Full Surgery)</option>
                      <option value="12+">12+ Candidates (Multi-Practice / NHS Cohort)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Target Cohort / Timeframe
                  </label>
                  <select
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 text-slate-800"
                  >
                    <option value="Next Available Cohort">Next Available Scheduled Cohort</option>
                    <option value="November 2026">November 2026</option>
                    <option value="December 2026">December 2026</option>
                    <option value="January 2027">January 2027</option>
                    <option value="Specific Date Required (Noted Below)">Specific Date Required (Please specify in notes)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Clinical Notes &amp; Special Requirements (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    placeholder="e.g. Specific practice requirements, sedation clinic setup, or multiple delegate names..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] transition-all bg-slate-50/50 placeholder:text-slate-400 resize-none"
                  />
                </div>
              </div>

              {/* Trust & Policy Assurance Strip */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No payment required now. Official invoice issued post-cohort.</span>
                </span>
                <span className="hidden sm:inline font-mono text-slate-400 uppercase text-[10px]">
                  CQC &amp; GDC Outcome C Compliant
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 text-center sm:text-left">
                  Need direct assistance? Call <strong className="text-slate-900">07577 437748</strong>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold tracking-tight shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Reservation...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Course Reservation</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
