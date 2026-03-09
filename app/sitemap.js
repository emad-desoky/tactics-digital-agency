import { manualBlogs } from "./blogs/manual-blogs";

const BASE_URL = "https://www.tacticsdigitalagency.net";

export default function sitemap() {
  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/story`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Blog pages from manual blogs registry
  const blogPages = manualBlogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.id}`,
    lastModified: new Date(blog.date),
    changeFrequency: blog.isPillar ? "weekly" : "monthly",
    priority: blog.isPillar ? 0.9 : 0.7,
  }));

  return [...staticPages, ...blogPages];
}
