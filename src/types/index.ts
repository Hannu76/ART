export type AudienceType = "dental" | "healthcare" | "in-house" | "recertification";

export interface Course {
  id: string;
  slug: string;
  code: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  audience: string[];
  audienceType: AudienceType[];
  duration: string;
  cpdHours: number;
  prerequisites: string[];
  learningOutcomes: string[];
  curriculum: {
    title: string;
    items: string[];
  }[];
  certification: string;
  validityYears: number;
  price: number;
  featured?: boolean;
  image: string;
  badge?: string;
}

export interface CourseDate {
  id: string;
  courseId: string;
  courseSlug: string;
  courseTitle: string;
  courseCode: string;
  date: string;
  formattedDate: string;
  startTime: string;
  endTime: string;
  locationId: string;
  locationName: string;
  locationCity: string;
  venue: string;
  capacity: number;
  booked: number;
  availableSeats: number;
  price: number;
  status: "available" | "limited" | "sold_out";
  leadInstructorId: string;
}

export interface Instructor {
  id: string;
  slug: string;
  name: string;
  role: string;
  clinicalBackground: string;
  qualifications: string[];
  instructorAccreditations: string[];
  experienceYears: number;
  bio: string;
  quote?: string;
  image: string;
  coursesTaught: string[];
}

export interface TrainingLocation {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  postcode: string;
  phone: string;
  parkingInfo: string;
  transportInfo: string;
  accessibility: string;
  facilities: string[];
}

export interface VerifiedReview {
  id: string;
  author: string;
  role: string;
  practiceOrTrust: string;
  courseTaken: string;
  date: string;
  rating: number;
  quote: string;
  verifiedPlatform: "Google Reviews" | "Post-Course Clinical Evaluation" | "Practice Manager Survey";
}

export interface VerifiedCertificate {
  certificateId: string;
  learnerName: string;
  professionalReg?: {
    body: "GDC" | "NMC" | "GMC" | "HCPC";
    number: string;
  };
  courseName: string;
  courseCode: string;
  issueDate: string;
  validUntil: string;
  cpdHours: number;
  status: "Active" | "Expired" | "Revoked";
  leadInstructor: string;
  trainingCentre: string;
}

export interface InHouseQuoteRequest {
  organisationName: string;
  contactName: string;
  email: string;
  phone: string;
  organisationType: "dental" | "gp" | "clinic" | "hospital" | "corporate";
  teamSize: number;
  courseCode: string;
  preferredLocation: string;
  preferredDates: string;
  additionalNotes?: string;
}
