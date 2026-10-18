import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// All routes are static and public. Update this list when pages are added.
const routes = ["", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
