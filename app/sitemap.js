// Sitemap for Jeday Media - Auto-generated
// Last updated: April 2026

const BASE_URL = "https://jedaymedia.com";

export default function sitemap() {
  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
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
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Service pages
  const servicePages = [
    {
      url: `${BASE_URL}/web-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/seo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/social-media`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/digital-marketing-pricing-egypt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Blog posts - All blogs with SEO-optimized URLs
  const blogPosts = [
    // Pillar content - highest priority
    {
      url: `${BASE_URL}/blogs/best-marketing-agency-egypt`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Existing blogs
    {
      url: `${BASE_URL}/blogs/seo-agency-egypt`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/social-media-agency-egypt`,
      lastModified: new Date("2026-02-10"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/performance-marketing-egypt`,
      lastModified: new Date("2026-02-20"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/content-strategy-agency-egypt`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/web-development-agency-egypt`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blogs/real-estate-marketing-egypt`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs/branding-agency-egypt`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs/content-creation-agency-egypt`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs/digital-marketing-pricing-egypt`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // NEW BLOGS - April 2026 (Web & Mobile Development)
    {
      url: `${BASE_URL}/blogs/mobile-app-development-egypt-2026`,
      lastModified: new Date("2026-04-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs/ecommerce-website-development-egypt-2026`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs/website-redesign-egypt-2026`,
      lastModified: new Date("2026-04-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs/wordpress-website-development-egypt-2026`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs/landing-page-design-egypt-2026`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs/custom-web-application-development-egypt-2026`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs/small-business-website-egypt-2026`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs/corporate-website-development-egypt-2026`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return [...staticPages, ...servicePages, ...blogPosts];
}
