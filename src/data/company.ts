export interface CompanyProfile {
  name: string;
  tradingName: string;
  tagline: string;
  summary: string;
  positioning: string;
  principles: {
    number: string;
    title: string;
    description: string;
  }[];
  commitments: string[];
  contact: {
    phone: string;
    email: string;
    altEmail: string;
    address: string;
    venueName: string;
  };
}

export const COMPANY_PROFILE: CompanyProfile = {
  name: "Advanced Resuscitation Training Ltd",
  tradingName: "ART Resuscitation Training Ltd (ARTL)",
  tagline: "Life-support training for the moments that matter.",
  summary:
    "ART Resuscitation Training Ltd was established to provide high-quality, evidence-based resuscitation education for healthcare professionals, dental teams, and clinical staff across the UK.",
  positioning:
    "ART is a focused training provider built around an experienced team of clinical educators, bringing extensive teaching and real-world clinical experience into every course.",
  principles: [
    {
      number: "01",
      title: "Evidence-led education",
      description:
        "Training aligned with relevant national and international resuscitation guidance, ensuring current clinical best practice."
    },
    {
      number: "02",
      title: "Realistic practical learning",
      description:
        "Hands-on teaching supported by realistic simulation, high-fidelity manikins, and scenario-based decision making."
    },
    {
      number: "03",
      title: "Experienced educators",
      description:
        "Learn from accredited instructors, many of whom bring more than 15 years of teaching and clinical experience."
    }
  ],
  commitments: [
    "Deliver training aligned with national and international resuscitation guidelines",
    "Provide practical, hands-on teaching supported by realistic simulation",
    "Build confidence so learners feel prepared for real emergencies",
    "Maintain the highest standards of professionalism, safety, and educational quality"
  ],
  contact: {
    phone: "07917 587425",
    email: "info@advancedresuscitation.co.uk",
    altEmail: "Advanced.resus.training@gmail.com",
    address: "18 Stornoway Close, Southampton, Hampshire, SO16 9PN",
    venueName: "Chilworth Manor Hotel & Southampton Training Suites"
  }
};
