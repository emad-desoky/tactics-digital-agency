// Sitemap for Tactics Digital Agency
// Last updated: June 2026

const BASE_URL = "https://www.tacticsdigitalagency.net";

export default function sitemap() {
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/story`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Service pages
  const servicePages = [
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Blog pages
  const blogPosts = [
    // Pillar page
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    // Cluster pages under best-marketing-agency-in-egypt
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/branding-agency-egypt`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/content-creation-agency-egypt`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/content-strategy-agency`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/performance-marketing`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/real-estate-marketing-egypt`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/seo-agency-egypt`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/social-media-agency`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/social-media-packages-egypt`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/web-development-agency`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Standalone blogs
    {
      url: `${BASE_URL}/blogs/digital-marketing-pricing-egypt`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  return [...staticPages, ...servicePages, ...blogPosts];
}
