import { Instructor } from "@/types";

export const INSTRUCTORS: Instructor[] = [
  {
    id: "inst-dr-raj",
    slug: "dr-raj",
    name: "Dr. Raj",
    role: "Senior Clinical Educator & Course Director",
    clinicalBackground: "Extensive background in advanced clinical resuscitation, acute care, and medical simulation education spanning over 15 years.",
    qualifications: [
      "Medical Practitioner & Resuscitation Specialist",
      "ALS (Advanced Life Support) Instructor",
      "GIC (Generic Instructor Course) Certified",
      "ILSi (Immediate Life Support Instructor) Faculty"
    ],
    instructorAccreditations: [
      "Course Director",
      "Advanced Resuscitation Faculty",
      "Generic Instructor Course (GIC)"
    ],
    experienceYears: 15,
    bio: "Dr. Raj leads clinical education at ART, bringing over 15 years of teaching and acute resuscitation experience. Praised by candidates for his calm, clear, and highly supportive teaching style, he focuses on practical confidence and clinical clarity rather than intimidation.",
    quote: "Our focus is simple: ensure every healthcare professional and dental practitioner leaves with the clarity, muscle memory, and confidence needed to act effectively when it matters most.",
    image: "/images/lead-instructor.jpg",
    coursesTaught: ["RCUK-ILS", "ALS", "ULS", "HMIMMS", "APLS-REC", "BLS", "D-ILS"]
  },
  {
    id: "inst-derek",
    slug: "derek",
    name: "Derek",
    role: "Senior Resuscitation Instructor & Clinical Educator",
    clinicalBackground: "Over 15 years of dedicated clinical resuscitation instruction across acute hospital and dental practice environments.",
    qualifications: [
      "Clinical Resuscitation Instructor",
      "ALS & ILS Instructor",
      "Simulation Scenario Lead",
      "EPALS / Paediatric Resuscitation Qualified"
    ],
    instructorAccreditations: [
      "Senior Instructor",
      "Clinical Simulation Lead"
    ],
    experienceYears: 15,
    bio: "Derek is known for his engaging, hands-on teaching approach and extensive clinical experience. He specialises in realistic scenario simulations that mirror the exact challenges clinicians encounter in surgery rooms and clinical wards.",
    quote: "Hands-on repetition and supportive debriefing are what transform theoretical knowledge into real-world composure during an emergency.",
    image: "/images/clinical-instructor.jpg",
    coursesTaught: ["RCUK-ILS", "D-ILS", "EPALS-REC", "BLS", "ALS"]
  },
  {
    id: "inst-jyothi",
    slug: "jyothi",
    name: "Jyothi",
    role: "Clinical Educator & Resuscitation Instructor",
    clinicalBackground: "Experienced clinical educator with a strong background in acute patient care and dental surgery medical emergency response.",
    qualifications: [
      "Registered Clinical Nurse & Educator",
      "Immediate Life Support Instructor",
      "BLS & AED Faculty Lead"
    ],
    instructorAccreditations: [
      "Clinical Educator",
      "Medical Emergencies Specialist"
    ],
    experienceYears: 12,
    bio: "Jyothi delivers high-engagement resuscitation teaching with an emphasis on team communication and clear closed-loop handover during medical collapse.",
    quote: "A well-coordinated team is the most effective resuscitation tool. We ensure every member of the clinic understands their exact role.",
    image: "/images/sarah-instructor.jpg",
    coursesTaught: ["BLS", "D-ILS", "RCUK-ILS", "EPALS-REC"]
  }
];

export const SUPPORT_TEAM = [
  {
    name: "Debbie",
    role: "Course Administration & Candidate Support Lead",
    bio: "Debbie oversees pre-course communication, registration support, and venue logistics at venues including Chilworth Manor Hotel and our clinical suites. Known for timely, reassuring candidate assistance."
  }
];
