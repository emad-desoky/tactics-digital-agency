import { manualBlogs } from "./blogs/manual-blogs";
import prisma from "@/prisma/prisma";

const BASE_URL = "https://www.tacticsdigitalagency.net";

const publicStaticPages = [
  { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE_URL}/about-us`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/services`, lastModified: new Date("2026-08-29"), changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/services/performance-marketing`, lastModified: new Date("2026-08-29"), changeFrequency: "monthly", priority: 0.86 },
  { url: `${BASE_URL}/services/social-media`, lastModified: new Date("2026-08-29"), changeFrequency: "monthly", priority: 0.86 },
  { url: `${BASE_URL}/services/web-development`, lastModified: new Date("2026-08-29"), changeFrequency: "monthly", priority: 0.86 },
  { url: `${BASE_URL}/blogs`, lastModified: new Date("2026-08-29"), changeFrequency: "weekly", priority: 0.92 },
  { url: `${BASE_URL}/gallery`, changeFrequency: "monthly", priority: 0.65 },
  { url: `${BASE_URL}/careers`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE_URL}/story`, changeFrequency: "monthly", priority: 0.6 },
];

function manualBlogEntries() {
  return manualBlogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.id}`,
    lastModified: new Date(`${blog.date}T00:00:00Z`),
    changeFrequency: blog.isPillar ? "weekly" : "monthly",
    priority: blog.isPillar ? 0.94 : 0.82,
  }));
}

async function databaseBlogEntries() {
  try {
    const blogs = await prisma.blog.findMany({ select: { id: true, date: true, updatedAt: true } });
    return blogs.map((blog) => ({
      url: `${BASE_URL}/blogs/${blog.id}`,
      lastModified: blog.updatedAt || blog.date,
      changeFrequency: "monthly",
      priority: 0.72,
    }));
  } catch (error) {
    console.warn("Sitemap: database blogs unavailable; serving static/manual URLs only.", error?.message || error);
    return [];
  }
}

export default async function sitemap() {
  const dbBlogs = await databaseBlogEntries();
  // Database entries come first so curated manual SEO pages win on duplicate URLs.
  // This preserves the manual page's canonical lastModified, priority and pillar status.
  const all = [...publicStaticPages, ...dbBlogs, ...manualBlogEntries()];
  const deduped = new Map();
  for (const entry of all) deduped.set(entry.url, entry);
  return Array.from(deduped.values());
}
