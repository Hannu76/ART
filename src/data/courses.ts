import { Course } from "@/types";

export const COURSES: Course[] = [
  {
    id: "course-bls",
    slug: "bls",
    code: "BLS",
    title: "Basic Life Support (BLS)",
    tagline: "Essential evidence-based CPR, AED deployment, and airway management for healthcare and dental teams.",
    shortDescription: "A high-impact practical course delivering core adult and paediatric CPR, pocket mask ventilation, automated external defibrillation, and choking relief.",
    fullDescription: "Basic Life Support remains the single most critical foundation in the chain of survival. This intensive practical session ensures clinicians, dental staff, and care teams can deliver uncompromising compression depth, optimal rate, minimal interruption, and immediate defibrillation using modern AED trainers. Built strictly around UK Resuscitation Council scientific guidelines.",
    audience: [
      "Dental practice teams (dentists, hygienists, nurses, receptionists)",
      "Healthcare assistants and clinical support workers",
      "Allied health professionals (physiotherapists, radiographers, podiatrists)",
      "Medical and dental students",
      "Care home clinical teams and community nurses"
    ],
    audienceType: ["healthcare", "dental", "in-house"],
    duration: "Half Day (3.5 Hours)",
    cpdHours: 4.0,
    prerequisites: ["Open to all healthcare professionals, dental practitioners, and clinical support staff"],
    learningOutcomes: [
      "Immediate recognition of unresponsiveness and agonal breathing",
      "High-quality adult chest compressions (5–6cm depth, 100–120 bpm)",
      "Paediatric resuscitation adaptations (5 initial rescue breaths, 15:2 compression ratio)",
      "Safe and rapid Automated External Defibrillator (AED) pad placement and shock delivery",
      "Pocket mask and bag-valve-mask rescue ventilation techniques",
      "Foreign body airway obstruction (choking) relief in conscious and unconscious casualties"
    ],
    curriculum: [
      {
        title: "Module 1: High-Performance CPR Foundations",
        items: [
          "Chain of survival and the science of early defibrillation",
          "Adult and paediatric chest compressions on Laerdal QCPR manikins",
          "Effective rescue breaths and pocket mask seal"
        ]
      },
      {
        title: "Module 2: AED & Scenario Drills",
        items: [
          "AED voice prompts, pad positioning, and safety protocols",
          "Managing choking in adults, children, and infants",
          "Recovery position and handover to emergency medical services"
        ]
      }
    ],
    certification: "CPD Group Accredited BLS & AED Certificate (Valid 1 Year, 4.0 CPD Hours)",
    validityYears: 1,
    price: 85,
    featured: true,
    image: "/images/practical-skills.jpg",
    badge: "Core Foundation"
  },
  {
    id: "course-dental-ils",
    slug: "dental-ils",
    code: "D-ILS",
    title: "Dental Immediate Life Support (Dental ILS)",
    tagline: "Surgery-centred resuscitation and medical emergency training compliant with GDC Development Outcome C.",
    shortDescription: "Specialist immediate life support tailored specifically for dental practices, sedation clinics, and dental surgeons, covering in-chair collapse, airway adjuncts, and emergency drugs.",
    fullDescription: "Designed specifically for the unique clinical environment of the dental surgery. We train dentists, sedation teams, hygienists, and dental nurses in the recognition and management of acute medical collapse in the dental chair. Covers ABCDE assessment, i-gel supraglottic airways, high-flow medical oxygen, AED deployment, and the 8 core emergency dental drugs. Fully complies with GDC Enhanced CPD requirements and CQC inspection standards.",
    audience: [
      "General Dental Practitioners (GDPs) and Practice Principals",
      "Dental Sedation Practitioners & Implant Teams",
      "Dental Hygienists & Dental Therapists",
      "Registered Dental Nurses & Trainees",
      "Dental Practice Managers & Clinical Leads"
    ],
    audienceType: ["dental", "in-house"],
    duration: "1 Day (09:00 – 16:30) or Half-Day In-House Session",
    cpdHours: 7.0,
    prerequisites: ["Suitable for all members of the primary dental care team"],
    learningOutcomes: [
      "Safe management of medical collapse while a patient is in the dental chair",
      "Systematic ABCDE clinical assessment of deteriorating patients",
      "Supraglottic airway insertion (i-gel), medical suction, and bag-valve-mask ventilation",
      "Medical oxygen cylinder assembly, flow rates, and non-rebreathe mask administration",
      "Verification and administration of the 8 standard dental emergency drug kit preparations",
      "Full compliance with General Dental Council (GDC) Development Outcome C"
    ],
    curriculum: [
      {
        title: "Morning: In-Surgery Emergency Protocols",
        items: [
          "The systematic ABCDE assessment tailored to dental patients",
          "Emergency drug box verification: Adrenaline, Aspirin, Glucagon, GTN, Salbutamol, Midazolam",
          "Medical oxygen cylinder handling, regulator safety, and flow rates"
        ]
      },
      {
        title: "Afternoon: Practical Surgery Simulation",
        items: [
          "Managing cardiac arrest in the dental chair: safe rapid transfer to floor",
          "Airway management: suction, oropharyngeal airways, and i-gel deployment",
          "Full practice simulation drills: Anaphylaxis, severe asthma, syncope, and hypoglycaemia"
        ]
      }
    ],
    certification: "GDC Development Outcome C & CPD Group Accredited Dental ILS Certificate (Valid 1 Year, 7.0 CPD Hours)",
    validityYears: 1,
    price: 175,
    featured: true,
    image: "/images/dental-training.jpg",
    badge: "GDC Outcome C Compliant"
  },
  {
    id: "course-rcuk-ils",
    slug: "rcuk-ils",
    code: "RCUK-ILS",
    title: "RCUK Immediate Life Support (ILS)",
    tagline: "Recognise deterioration, manage acute peri-arrest emergencies, and deliver structured team resuscitation.",
    shortDescription: "The definitive multidisciplinary 1-day course aligned with Resuscitation Council UK guidelines for doctors, acute nurses, paramedics, and clinical teams.",
    fullDescription: "Immediate Life Support (ILS) provides healthcare professionals with the essential knowledge and practical skills required to treat adult patients in cardiac arrest and acute clinical deterioration. Delivered by practicing NHS resuscitation officers and emergency clinicians, this practical course focuses on hands-on airway management with supraglottic adjuncts (i-gel), rapid manual and automated defibrillation, high-quality chest compressions, emergency pharmacology, and non-technical team leadership.",
    audience: [
      "Hospital doctors, junior doctors, core trainees, and clinical fellows",
      "Acute ward, intensive care, and day surgery registered nurses",
      "Dentists and dental sedation teams requiring formal ILS credentials",
      "Paramedics and ambulance emergency clinicians",
      "Operating department practitioners (ODPs) and allied health specialists"
    ],
    audienceType: ["healthcare", "dental", "in-house"],
    duration: "1 Day (08:30 – 17:00)",
    cpdHours: 6.5,
    prerequisites: [
      "Prior basic life support knowledge recommended",
      "Active clinical practitioner, dental surgeon, or healthcare professional"
    ],
    learningOutcomes: [
      "Structured ABCDE assessment of the acutely deteriorating adult patient",
      "High-performance CPR incorporating real-time feedback and team pit-crew dynamics",
      "Safe, prompt manual defibrillation and Automated External Defibrillator (AED) usage",
      "Airway adjunct insertion (i-gel/supraglottic airways) and bag-valve-mask ventilation",
      "Emergency pharmacology administration for anaphylaxis, cardiac arrest, and peri-arrest arrhythmias",
      "Structured clinical handover communication using the SBAR framework"
    ],
    curriculum: [
      {
        title: "Morning: Core Clinical Foundations",
        items: [
          "Causes and prevention of adult cardiac arrest",
          "The systematic ABCDE assessment methodology",
          "Supraglottic airway management (i-gel), suction, and oxygen therapy",
          "High-performance chest compressions and safe rhythm checks"
        ]
      },
      {
        title: "Afternoon: Simulation & Team Assessment",
        items: [
          "Manual and automated defibrillation safety drills",
          "Anaphylaxis, acute coronary syndromes, and asthma management",
          "Cardiac arrest algorithm in hospital and clinic settings",
          "Continuous formative assessment and realistic scenario debriefs"
        ]
      }
    ],
    certification: "UK Resuscitation Guidelines Compliant ILS Certificate (Valid 1 Year, 6.5 CPD Hours)",
    validityYears: 1,
    price: 195,
    featured: true,
    image: "/images/editorial-hero.jpg",
    badge: "RCUK Aligned"
  },
  {
    id: "course-apls-recertification",
    slug: "apls-recertification",
    code: "APLS-REC",
    title: "APLS Recertification Course (7th Edition)",
    tagline: "Advanced Paediatric Life Support Recertification – Refresh skills and renew your certification with the 7th Edition.",
    shortDescription: "Designed for experienced healthcare professionals and delivered by expert instructors with extensive clinical experience, reinforcing essential knowledge and practical skills in paediatric emergency management.",
    fullDescription: "Refresh your skills and renew your certification with the Advanced Paediatric Life Support (APLS) Recertification Course – 7th Edition. Designed for experienced healthcare professionals and delivered by expert instructors with extensive clinical experience, this course reinforces essential knowledge and practical skills in paediatric emergency management to maintain confidence and competence in critical situations.",
    audience: [
      "Medical Candidates (Minimum level ST4 or equivalent practising in acute paediatrics, emergency medicine, anaesthetics, or critical care)",
      "Nursing & AHP Candidates (Completion of at least two full 2-day APLS courses, currently practising in acute paediatrics, emergency medicine, theatres, or critical care)",
      "Consultant Paediatricians, Emergency Medicine Physicians & Anaesthetists",
      "Paediatric Intensive Care (PICU) & High Dependency (HDU) Specialist Nurses"
    ],
    audienceType: ["healthcare", "recertification"],
    duration: "2 Days (1 Day VLE Online + 1 Day Face-to-Face)",
    cpdHours: 14.0,
    prerequisites: [
      "Previous completion of a full APLS course (no more than 6 months out of date)",
      "Completion of all 11 VLE e-modules and the current APLS manual before attending",
      "Valid Paediatric BLS certificate (within 12 months)",
      "Medical: Minimum level ST4 or equivalent, currently practising in acute paediatrics or related specialty",
      "Nursing & AHP: Completion of at least two full 2-day APLS courses, currently practising in acute paediatrics, emergency medicine, theatres, or critical care"
    ],
    learningOutcomes: [
      "Refresh knowledge and skills in the recognition and management of life-threatening paediatric emergencies",
      "Reinforce a structured, sequential approach to assessment and treatment",
      "Provide hands-on practice in key life-saving procedures",
      "Test the retention and application of APLS principles through practical assessments"
    ],
    curriculum: [
      {
        title: "Online Learning (VLE) – 1 Day (11 Interactive E-Modules)",
        items: [
          "The seriously ill and injured child",
          "Airway, breathing, circulation, disability, exposure (ABCDE)",
          "Trauma management (head, chest, abdominal injuries)",
          "Cardiac arrest and BLS",
          "Fluids, electrolytes, acid–base balance, and poisoning"
        ]
      },
      {
        title: "Face-to-Face Course – 1 Day (Practical & Scenario-Based)",
        items: [
          "Managing the seriously ill child",
          "Structured approach to the injured child",
          "Cardiac arrest management",
          "Delivered by experienced APLS instructors practising in paediatrics, emergency medicine, anaesthetics, or critical care"
        ]
      }
    ],
    certification: "ALSG APLS Certification (Valid for 4 years, with continued access to ALSG's Virtual Learning Environment VLE)",
    validityYears: 4,
    price: 395,
    featured: true,
    image: "/images/why-educator-aed.jpg",
    badge: "ALSG 7th Edition"
  },
  {
    id: "course-epals-recertification",
    slug: "epals-recertification",
    code: "EPALS-REC",
    title: "EPALS Recertification (European Paediatric Advanced Life Support)",
    tagline: "Standardised European paediatric resuscitation revalidation for multidisciplinary acute teams.",
    shortDescription: "Intensive revalidation course covering European Resuscitation Council & RCUK paediatric algorithms, shockable/non-shockable rhythms, and team debriefing.",
    fullDescription: "For clinicians requiring renewal of their European Paediatric Advanced Life Support (EPALS) credential. Emphasises early intervention in paediatric respiratory failure and circulatory shock to prevent cardiac arrest. Candidates practice high-performance paediatric CPR (15:2 ratio), manual defibrillation, intraosseous access, emergency drug calculations, post-resuscitation care, and structured team coordination during cardiac arrest simulations.",
    audience: [
      "Paediatric Doctors, Registrars & Clinical Fellows",
      "Emergency Department & Urgent Care Clinicians",
      "Paediatric HDU, PICU & Surgical Ward Nurses",
      "Hospital Resuscitation Officers & Paediatric Educators"
    ],
    audienceType: ["healthcare", "recertification"],
    duration: "1 Day (08:30 – 17:30)",
    cpdHours: 8.0,
    prerequisites: [
      "Must hold a current or recently expired EPALS provider certificate",
      "Prior provider certificate copy submitted at enrolment"
    ],
    learningOutcomes: [
      "Identification of early signs of respiratory distress and circulatory failure in children",
      "Age-appropriate airway management (neutral infant position, sniffing position in children)",
      "High-performance paediatric BLS and advanced airway ventilation",
      "Safe manual defibrillation and synchronized cardioversion in paediatric tachycardias",
      "Rapid intraosseous access and volume replacement protocols",
      "Team leadership and human factors in paediatric resuscitation"
    ],
    curriculum: [
      {
        title: "Morning: Science & Practical Skill Refinement",
        items: [
          "ERC/RCUK paediatric guideline updates",
          "Airway adjuncts, BVM, and emergency oxygen protocols",
          "Vascular access: intraosseous needle placement (EZ-IO)"
        ]
      },
      {
        title: "Afternoon: Simulation Testing Stations",
        items: [
          "Paediatric cardiac arrest: VF/pVT and asystole/PEA algorithms",
          "Peri-arrest arrhythmias: SVT, bradycardia, and broad-complex tachycardia",
          "Comprehensive team leader assessment and debriefing"
        ]
      }
    ],
    certification: "EPALS Recertification Certificate (Valid 4 Years, 8.0 CPD Hours)",
    validityYears: 4,
    price: 395,
    featured: false,
    image: "/images/hero-training.jpg",
    badge: "EPALS European Revalidation"
  },
  {
    id: "course-als",
    slug: "als",
    code: "ALS",
    title: "Advanced Life Support (ALS)",
    tagline: "The premier multi-day advanced resuscitation course for adult cardiac arrest management and team leadership.",
    shortDescription: "A comprehensive 2-day course training clinicians to lead cardiac arrest teams, deliver manual defibrillation, manage peri-arrest arrhythmias, and treat reversible causes.",
    fullDescription: "Advanced Life Support (ALS) is the international benchmark in adult resuscitation education. Over 2 intensive days, participants master the systematic ABCDE assessment, the adult ALS cardiac arrest algorithm, safe manual defibrillation, airway management with supraglottic devices and endotracheal intubation, intraosseous needles, emergency pharmacology (adrenaline, amiodarone), peri-arrest tachycardia/bradycardia algorithms, reversible causes (4 Hs & 4 Ts), arterial blood gas interpretation, and post-cardiac arrest syndrome management. Strong focus on leadership, human factors, and crisis resource management.",
    audience: [
      "Emergency Department & ICU Doctors",
      "Medical Registrars, Core Trainees & Foundation Doctors",
      "Resuscitation Officers & Advanced Clinical Practitioners",
      "Critical Care, Theatre & Acute Ward Sisters",
      "Specialist Paramedics & Pre-Hospital Doctors"
    ],
    audienceType: ["healthcare", "in-house"],
    duration: "2 Days (08:00 – 17:30 each day)",
    cpdHours: 14.0,
    prerequisites: [
      "Medical, dental, nursing, or paramedic registration",
      "Pre-course learning manual and pre-test completion"
    ],
    learningOutcomes: [
      "Systematic ABCDE assessment and treatment of acutely deteriorating adult patients",
      "Mastery of the ALS adult cardiac arrest algorithm (shockable and non-shockable rhythms)",
      "Safe and rapid manual defibrillation with minimal compression interruption",
      "Airway management: supraglottic devices, bag-valve-mask, and intubation assistance",
      "Systematic identification and management of the reversible causes of cardiac arrest (4 Hs and 4 Ts)",
      "High-performance team leadership, non-technical skills, and post-resuscitation care"
    ],
    curriculum: [
      {
        title: "Day 1: Acute Management & Core Skills",
        items: [
          "Causes and prevention of cardiac arrest; ABCDE approach",
          "Airway management and arterial blood gas (ABG) analysis",
          "Safe manual defibrillation and rhythm recognition workshop",
          "Initial cardiac arrest simulation stations (CASTeaches)"
        ]
      },
      {
        title: "Day 2: Advanced Simulations & Assessment",
        items: [
          "Peri-arrest arrhythmias: tachycardias and bradycardias",
          "Cardiac arrest in special circumstances (pregnancy, trauma, hypothermia)",
          "Post-resuscitation care and targeted temperature management",
          "Final scenario-based team leadership assessment (CASTest)"
        ]
      }
    ],
    certification: "Advanced Life Support (ALS) Certificate (Valid 4 Years, 14.0 CPD Hours)",
    validityYears: 4,
    price: 495,
    featured: true,
    image: "/images/editorial-hero.jpg",
    badge: "Gold Standard Resuscitation"
  },
  {
    id: "course-hmimms",
    slug: "hmimms",
    code: "HMIMMS",
    title: "HMIMMS (Hospital Major Incident Medical Management & Support)",
    tagline: "The definitive hospital major incident preparedness, command, control, and mass-casualty surge course.",
    shortDescription: "A comprehensive 2-day major incident management course for hospital leadership, emergency departments, and acute operational incident commanders.",
    fullDescription: "Hospital Major Incident Medical Management and Support (HMIMMS) provides hospital clinicians and management staff with the structured systems required to plan for, activate, and manage mass-casualty incidents, CBRN events, and hospital surges. Using the internationally recognised CSCATTT model (Command & Control, Safety, Communication, Assessment, Triage, Treatment, Transport), candidates participate in practical tabletop exercises, triage sieve and sort drills, hospital capacity decompression strategies, and inter-agency coordination with emergency services.",
    audience: [
      "Emergency Medicine Consultants & Clinical Directors",
      "Hospital Incident Commanders & Site Operations Leads",
      "Senior Emergency & Critical Care Nurse Managers",
      "Trauma Team Leads & Surgical Consultants",
      "Disaster Preparedness & NHS Resilience Officers"
    ],
    audienceType: ["healthcare", "in-house"],
    duration: "2 Days (08:30 – 17:00 each day)",
    cpdHours: 14.0,
    prerequisites: [
      "Senior clinical, nursing, or operational leadership role in a hospital or trust",
      "Review of HMIMMS candidate manual prior to course"
    ],
    learningOutcomes: [
      "Application of the CSCATTT operational framework during hospital major incidents",
      "Effective Command and Control structure within the Hospital Control Centre (HCC)",
      "Hospital triage protocols: Triage Sieve and Triage Sort for mass casualty influx",
      "Establishment of reception, resuscitation, definitive care, and discharge surges",
      "CBRN / Hazmat contaminated casualty reception and secondary contamination prevention",
      "Inter-agency communication with ambulance services, police, and regional resilience forums"
    ],
    curriculum: [
      {
        title: "Day 1: Principles & Tabletop Command",
        items: [
          "The CSCATTT model and major incident activation protocols",
          "Hospital Control Centre (HCC) operations and role action cards",
          "Hospital Triage Sieve and Sort practical workshops",
          "Initial tabletop mass-casualty simulation"
        ]
      },
      {
        title: "Day 2: Surge, Contamination & Complex Scenarios",
        items: [
          "Decontamination and managing CBRN / Hazmat incidents",
          "Paediatric and vulnerable casualty considerations in major incidents",
          "Hospital surge expansion and emergency department decompression",
          "Full-scale hospital major incident simulation exercise"
        ]
      }
    ],
    certification: "HMIMMS Major Incident Management Certificate (Valid 4 Years, 14.0 CPD Hours)",
    validityYears: 4,
    price: 525,
    featured: true,
    image: "/images/resuscitation-lead.jpg",
    badge: "Major Incident Command"
  },
  {
    id: "course-ultimate-life-support",
    slug: "ultimate-life-support",
    code: "ULS",
    title: "The Ultimate Life Support Course (ULS)",
    tagline: "Masterclass in high-performance resuscitation, acute peri-arrest crises, and simulation leadership.",
    shortDescription: "A premier 10 CPD credit advanced clinical emergency masterclass delivered by Emergency Medicine Consultants and Senior Resuscitation Officers.",
    fullDescription: "The Ultimate Life Support Course (ULS) is ART's pinnacle resuscitation masterclass, designed for senior clinicians who demand clinical excellence in acute crises. Beyond standard algorithms, ULS immerses participants in complex peri-arrest physiological instability, advanced mechanical ventilation, invasive monitoring, complex cardiac arrhythmias, cardiogenic shock, and high-performance team ergonomics. Includes high-fidelity simulation debriefing using video review and real-time biometric feedback.",
    audience: [
      "Consultants in Emergency Medicine & Acute Care",
      "Consultant Anaesthetists & Intensivists",
      "Resuscitation Team Leaders & Advanced Clinical Practitioners",
      "Senior Dental Sedation Practitioners & Implant Specialists"
    ],
    audienceType: ["healthcare", "dental", "in-house"],
    duration: "1.5 Days (08:30 – 17:30 & 08:30 – 13:00)",
    cpdHours: 10.0,
    prerequisites: [
      "Prior completion of ALS, ILS, or equivalent acute clinical experience",
      "Pre-course emergency scenario preparation"
    ],
    learningOutcomes: [
      "Mastery of complex peri-arrest haemodynamic and respiratory stabilization",
      "Advanced interpretation of challenging cardiac arrhythmias and ultrasound in arrest",
      "High-performance resuscitation team leadership and human factor optimization",
      "Difficult airway management algorithms and front-of-neck access drills",
      "Post-resuscitation neuroprotection and critical care transfer principles"
    ],
    curriculum: [
      {
        title: "Day 1: Masterclass Physiology & Complex Scenarios",
        items: [
          "Advanced haemodynamics and peri-arrest pharmacology",
          "Challenging arrhythmias: refractory VF, wide-complex tachycardia, and pacing",
          "High-fidelity immersive arrest simulations with video debriefing"
        ]
      },
      {
        title: "Day 2: Leadership, Crisis Management & Assessment",
        items: [
          "Crisis resource management and cognitive load in resuscitation",
          "Front-of-neck emergency airway access and invasive line safety",
          "Final masterclass team scenario evaluation and master certification"
        ]
      }
    ],
    certification: "The CPD Group Accredited ULS Masterclass Certificate (Certificate #788976, 10.0 CPD Credits)",
    validityYears: 2,
    price: 275,
    featured: true,
    image: "/images/editorial-hero.jpg",
    badge: "Clinical Masterclass (10 CPDs)"
  }
];
