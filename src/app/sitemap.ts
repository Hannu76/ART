import { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";
import { LOCATIONS } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://advancedresuscitation.co.uk";

  const staticRoutes = [
    "",
    "/courses",
    "/certifications",
    "/dental-teams",
    "/in-house-training",
    "/locations",
    "/about",
    "/instructors",
    "/reviews",
    "/resources",
    "/certificate-verification",
    "/contact",
    "/booking",
    "/privacy",
    "/terms",
    "/refund-policy"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const courseRoutes = COURSES.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  return [...staticRoutes, ...courseRoutes];
}
