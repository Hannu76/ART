import { VerifiedCertificate } from "@/types";

export const VERIFIED_CERTIFICATES: Record<string, VerifiedCertificate> = {
  "ART-ILS-84920": {
    certificateId: "ART-ILS-84920",
    learnerName: "Dr. Alistair Finch",
    professionalReg: {
      body: "GDC",
      number: "182746"
    },
    courseName: "Immediate Life Support (ILS)",
    courseCode: "ILS",
    issueDate: "12 September 2026",
    validUntil: "12 September 2027",
    cpdHours: 6.5,
    status: "Active",
    leadInstructor: "Sarah Jenkins (Lead Clinical Educator)",
    trainingCentre: "Southampton Resuscitation Suite"
  },
  "ART-BLS-29104": {
    certificateId: "ART-BLS-29104",
    learnerName: "Emma Richardson",
    professionalReg: {
      body: "GDC",
      number: "249811"
    },
    courseName: "Medical Emergencies & CPR for Dental Practice",
    courseCode: "DENTAL-CPR",
    issueDate: "04 October 2026",
    validUntil: "04 October 2027",
    cpdHours: 4.0,
    status: "Active",
    leadInstructor: "David Davies (Senior Resuscitation Officer)",
    trainingCentre: "Portsmouth Clinical Education Centre"
  },
  "ART-PILS-55291": {
    certificateId: "ART-PILS-55291",
    learnerName: "Claire Higgins",
    professionalReg: {
      body: "GDC",
      number: "219084"
    },
    courseName: "Paediatric Immediate Life Support (PILS)",
    courseCode: "PILS",
    issueDate: "18 May 2026",
    validUntil: "18 May 2027",
    cpdHours: 6.0,
    status: "Active",
    leadInstructor: "Sarah Jenkins (Lead Clinical Educator)",
    trainingCentre: "Winchester & Mid-Hampshire Centre"
  },
  "ART-ILS-61042": {
    certificateId: "ART-ILS-61042",
    learnerName: "Joanne Bradley",
    professionalReg: {
      body: "NMC",
      number: "08B1902E"
    },
    courseName: "Immediate Life Support (ILS)",
    courseCode: "ILS",
    issueDate: "15 July 2026",
    validUntil: "15 July 2027",
    cpdHours: 6.5,
    status: "Active",
    leadInstructor: "David Davies (Senior Resuscitation Officer)",
    trainingCentre: "Southampton Resuscitation Suite"
  },
  "ART-ILS-90412": {
    certificateId: "ART-ILS-90412",
    learnerName: "Mark Henderson",
    professionalReg: {
      body: "HCPC",
      number: "RA58912"
    },
    courseName: "Basic Life Support & AED (BLS & AED)",
    courseCode: "BLS",
    issueDate: "20 April 2025",
    validUntil: "20 April 2026",
    cpdHours: 3.5,
    status: "Expired",
    leadInstructor: "Sarah Jenkins (Lead Clinical Educator)",
    trainingCentre: "Bournemouth & Dorset Training Hub"
  }
};
