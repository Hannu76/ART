export interface FAQItem {
  id: string;
  category: "courses" | "dental" | "in-house" | "certificates" | "booking";
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "dental",
    question: "Do your dental emergency courses comply with GDC Enhanced CPD requirements?",
    answer: "Yes. Our Medical Emergencies and CPR for Dental Practice courses strictly align with the General Dental Council (GDC) Enhanced CPD scheme under Development Outcome C (Maintenance and development of knowledge and skill within your field of practice). Each participant receives a verifiable CPD certificate with GDC-compliant educational aims, learning outcomes, and precise hours."
  },
  {
    id: "faq-2",
    category: "courses",
    question: "What is the difference between ILS and BLS?",
    answer: "Basic Life Support (BLS) focuses on early recognition of cardiac arrest, high-quality chest compressions, rescue ventilations, and safe use of an Automated External Defibrillator (AED). Immediate Life Support (ILS) builds upon BLS by adding the systematic ABCDE approach to deteriorating patients, supraglottic airway devices (such as i-gel), suction, emergency drug administration protocols, and multidisciplinary team leader dynamics."
  },
  {
    id: "faq-3",
    category: "in-house",
    question: "Can ART deliver training at our dental practice or clinic?",
    answer: "Absolutely. We routinely deliver bespoke in-house training across the South of England and nationwide UK. Our clinical educators bring all necessary simulation equipment, adult and child QCPR manikins, trainer defibrillators, oxygen cylinders, and emergency drug trainer kits directly to your premises, allowing your team to train in your real clinical environment."
  },
  {
    id: "faq-4",
    category: "certificates",
    question: "How quickly are certificates issued after completing a course?",
    answer: "Certificates are issued electronically within 24 hours of successful course completion. Each digital certificate contains a unique validation reference (e.g., ART-ILS-XXXXX) that can be verified immediately through our public Certificate Verification tool by employers, trust education leads, or CQC inspectors."
  },
  {
    id: "faq-5",
    category: "courses",
    question: "Who teaches the ART courses?",
    answer: "All ART courses are exclusively taught by experienced, actively practicing NHS resuscitation officers, intensive care sisters, emergency medicine consultants, and advanced paramedic practitioners who hold recognized Resuscitation Council UK / European Resuscitation Council instructor certifications."
  },
  {
    id: "faq-6",
    category: "booking",
    question: "What is your cancellation and date transfer policy?",
    answer: "We understand clinical schedules can change. Candidates may transfer their booking to an alternative date free of charge with at least 14 days' written notice. Cancellations made more than 14 days prior to the course date receive a full refund minus a modest £15 administration fee. Full details are available in our Booking Terms."
  }
];
