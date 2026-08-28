/**
 * Digital Marketing Agency Egypt 2026 — scalable pillar/cluster registry.
 * Add future clusters here, then create the matching page.jsx.
 */
export const SITE_URL = "https://www.tacticsdigitalagency.net";
export const BLOG_BASE = "/blogs/digital-marketing-agency-egypt";

export const pillar = {
  slug: "digital-marketing-agency-egypt",
  path: BLOG_BASE,
  title: "Digital Marketing Agency in Egypt 2026: Services, Strategy & How to Choose",
  metaTitle: "Digital Marketing Agency Egypt 2026: Buyer Guide",
  description: "Compare digital marketing agencies in Egypt by services, strategy, measurement, team, lead quality and commercial fit before choosing a partner.",
  excerpt: "A commercial buyer guide for businesses looking to hire a digital marketing agency in Egypt in 2026.",
  image: "/blogs/digital-marketing-agency-egypt-2026.webp",
  imageAlt: "Digital marketing agency in Egypt 2026 strategy and service planning",
  datePublished: "2026-08-29",
  dateModified: "2026-08-29",
};

export const clusters = [
  {
    slug: "digital-marketing-services-egypt",
    title: "Digital Marketing Services Egypt 2026: What Your Business Actually Needs",
    metaTitle: "Digital Marketing Services Egypt 2026: Buyer Guide",
    description: "Compare digital marketing services in Egypt across SEO, paid media, social, content, websites, tracking and CRO to build the right scope.",
    excerpt: "Choose the right service mix instead of buying every channel at once.",
    image: "/blogs/digital-marketing-services-egypt-2026.webp",
    imageAlt: "Digital marketing services in Egypt service mix for 2026",
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
  },
  {
    slug: "digital-marketing-agency-cairo",
    title: "Digital Marketing Agency Cairo 2026: Local Buyer Guide",
    metaTitle: "Digital Marketing Agency Cairo 2026: How to Choose",
    description: "Looking for a digital marketing agency in Cairo? Compare services, local collaboration, SEO, paid media, social, tracking and lead generation.",
    excerpt: "A Cairo-focused guide for businesses comparing local digital marketing partners.",
    image: "/blogs/digital-marketing-agency-cairo-2026.webp",
    imageAlt: "Digital marketing agency in Cairo Egypt 2026",
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
  },
];

export function getClusterBySlug(slug) {
  return clusters.find((cluster) => cluster.slug === slug) || null;
}

export function getSiblings(currentSlug) {
  return clusters.filter((cluster) => cluster.slug !== currentSlug);
}

export function getAllBlogEntries() {
  return [
    { url: `${SITE_URL}${BLOG_BASE}`, lastModified: pillar.dateModified, changeFrequency: "weekly", priority: 0.94 },
    ...clusters.map((cluster) => ({
      url: `${SITE_URL}${BLOG_BASE}/${cluster.slug}`,
      lastModified: cluster.dateModified,
      changeFrequency: "monthly",
      priority: 0.84,
    })),
  ];
}
