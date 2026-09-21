import { DATA } from "@/data/resume";
import { slugify } from "@/lib/utils";
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.ahirrr.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/gallery`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const projectPages = DATA.projects.map((project) => ({
    url: `${SITE_URL}/projects/${slugify(project.title)}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...projectPages];
}
