// Sitemap for Tactics Digital Agency
// Blog SEO cleanup updated: August 26, 2026

const BASE_URL = "https://www.tacticsdigitalagency.net";
const SEO_UPDATE_DATE = new Date("2026-08-26");

export default function sitemap() {
  const currentDate = new Date();
  const staticPages = [
    { url: BASE_URL, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about-us`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blogs`, lastModified: SEO_UPDATE_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/gallery`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/careers`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/story`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.6 },
  ];
  const servicePages = [
    { url: `${BASE_URL}/services/performance-marketing`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/social-media`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/web-development`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
  ];
  const blogPosts = [
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt`, lastModified: SEO_UPDATE_DATE, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/branding-agency-egypt`, lastModified: SEO_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/content-creation-agency-egypt`, lastModified: SEO_UPDATE_DATE, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/content-strategy-agency`, lastModified: new Date("2026-06-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/performance-marketing`, lastModified: SEO_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/real-estate-marketing-egypt`, lastModified: SEO_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/seo-agency-egypt`, lastModified: SEO_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/social-media-agency`, lastModified: SEO_UPDATE_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/social-media-packages-egypt`, lastModified: SEO_UPDATE_DATE, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/blogs/best-marketing-agency-in-egypt/web-development-agency`, lastModified: new Date("2026-06-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blogs/digital-marketing-pricing-egypt`, lastModified: new Date("2026-06-17"), changeFrequency: "monthly", priority: 0.85 },
  ];
  return [...staticPages, ...servicePages, ...blogPosts];
}
