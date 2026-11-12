import { TrainingLocation } from "@/types";

export const LOCATIONS: TrainingLocation[] = [
  {
    id: "loc-chilworth",
    slug: "southampton-chilworth",
    name: "Chilworth Manor Hotel",
    city: "Southampton",
    address: "Chilworth, Southampton",
    postcode: "SO16 7PT",
    phone: "07917 587425",
    parkingInfo: "Extensive complimentary on-site parking directly outside the conference suites.",
    transportInfo: "Situated just off M27 (Junction 4) and M3 (Junction 14). 10 minutes from Southampton Airport Parkway and Southampton Central.",
    accessibility: "Ground floor dedicated training suites, step-free access throughout, accessible restrooms.",
    facilities: [
      "Spacious conference suites providing ample space for practical simulation stations",
      "Adult and paediatric manikin stations with dedicated AED trainers",
      "High-quality candidate dining and complimentary refreshments throughout the day",
      "Peaceful landscaped grounds ideal for focused clinical study"
    ]
  },
  {
    id: "loc-southampton-suite",
    slug: "southampton",
    name: "Southampton Resuscitation Suite",
    city: "Southampton",
    address: "18 Stornoway Close, Southampton, Hampshire",
    postcode: "SO16 9PN",
    phone: "07917 587425",
    parkingInfo: "Dedicated on-site candidate parking bays.",
    transportInfo: "Direct access from M27 (Junction 3). 10 minutes from Southampton Central rail station.",
    accessibility: "Level ground-floor access and accessible facilities.",
    facilities: [
      "Dedicated medical emergency simulation room",
      "Full range of commercial AED and airway trainers",
      "Small-cohort focused coaching environment"
    ]
  },
  {
    id: "loc-portsmouth",
    slug: "portsmouth",
    name: "Portsmouth Clinical Education Centre",
    city: "Portsmouth",
    address: "Solent Business Park, Whiteley, Fareham / Portsmouth",
    postcode: "PO15 7FY",
    phone: "07917 587425",
    parkingInfo: "Free visitor parking on site. EV charging points available.",
    transportInfo: "Junction 9 of the M27. 5 minutes from Swanwick station.",
    accessibility: "Full DDA compliant access with passenger lift.",
    facilities: [
      "Modern multimedia simulation suites",
      "1:1 manikin practice areas",
      "Clinical skill break-out zones"
    ]
  },
  {
    id: "loc-winchester",
    slug: "winchester",
    name: "Mercure Winchester Wessex Hotel",
    city: "Winchester",
    address: "Paternoster Row, Winchester",
    postcode: "SO23 9LQ",
    phone: "07917 587425",
    parkingInfo: "On-site hotel parking and nearby central Winchester car parks.",
    transportInfo: "10-minute walk from Winchester railway station; direct M3 access.",
    accessibility: "Ground floor level access throughout conference suites.",
    facilities: [
      "Dedicated high-spec resuscitation simulation suite",
      "Full airway, ALS and defibrillator training equipment setup",
      "Overlooking historic Winchester Cathedral with dedicated debriefing areas"
    ]
  }
];
