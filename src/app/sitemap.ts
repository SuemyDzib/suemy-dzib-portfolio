import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Genera /sitemap.xml para Google Search Console.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
