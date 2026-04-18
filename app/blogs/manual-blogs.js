// This file acts as a scalable registry for your manual SEO pages.
// To add a new manual page:
// 1. Create the folder app/blogs/your-new-slug/page.jsx
// 2. Add the metadata object to this array below.

export const manualBlogs = [
  // PILLAR PAGE
  {
    id: "best-marketing-agency-in-egypt",
    title: "Best Marketing Agency in Egypt (2026 Review)",
    description:
      "We reviewed the top 10 best marketing agencies in Egypt for 2026. Compare pricing, services, and results. Find out why Tactics ranks #1 for SEO and Performance.",
    image: "/blogs/best-marketing-agency.png",
    date: "2024-12-04",
    tags: ["SEO", "Digital Marketing", "Agency", "Growth"],
    isManual: true,
    isPillar: true,
  },

  // CLUSTER PAGES (under best-marketing-agency-in-egypt)
  {
    id: "best-marketing-agency-in-egypt/seo-agency-egypt",
    title: "Best SEO Agency in Egypt 2026",
    description:
      "Find the best SEO agency in Egypt for 2026. Expert rankings, pricing, and services comparison for top SEO companies in Cairo and across Egypt.",
    image: "/blogs/seo-agency-egypt.jpg",
    date: "2024-12-04",
    tags: ["SEO", "Agency", "Egypt"],
    isManual: true,
    isPillar: false,
  },
  {
    id: "best-marketing-agency-in-egypt/social-media-agency",
    title: "Best Social Media Agency in Egypt 2026",
    description:
      "Discover the top social media marketing agencies in Egypt for 2026. Compare services, pricing, and results from leading social media experts.",
    image: "/blogs/social-media-agency.jpg",
    date: "2024-12-04",
    tags: ["Social Media", "Agency", "Egypt"],
    isManual: true,
    isPillar: false,
  },
  {
    id: "best-marketing-agency-in-egypt/performance-marketing",
    title: "Best Performance Marketing Agency Egypt 2026",
    description:
      "Find the best performance marketing agency in Egypt for Google Ads, Meta Ads, and paid campaigns. Compare ROI, pricing, and results.",
    image: "/blogs/performance-marketing.jpg",
    date: "2024-12-04",
    tags: ["Performance Marketing", "Google Ads", "Meta Ads"],
    isManual: true,
    isPillar: false,
  },
  {
    id: "best-marketing-agency-in-egypt/content-strategy-agency",
    title: "Best Content Strategy Agency Egypt 2026",
    description:
      "Discover top content strategy agencies in Egypt for 2026. Expert content planning, SEO content, and brand storytelling services.",
    image: "/blogs/content-strategy-agency.jpg",
    date: "2024-12-04",
    tags: ["Content Strategy", "Content Marketing", "Agency"],
    isManual: true,
    isPillar: false,
  },
  {
    id: "best-marketing-agency-in-egypt/web-development-agency",
    title: "Best Web Development Agency Egypt 2026",
    description:
      "Find the best web development agency in Egypt for 2026. Expert website design, e-commerce, and custom development services.",
    image: "/blogs/web-development-agency.jpg",
    date: "2024-12-04",
    tags: ["Web Development", "Website Design", "E-commerce"],
    isManual: true,
    isPillar: false,
  },
  {
    id: "best-marketing-agency-in-egypt/real-estate-marketing-egypt",
    title: "Real Estate Marketing Agency Egypt 2026",
    description:
      "Find the best real estate marketing agency in Egypt for 2026. Expert property marketing, lead generation, and digital campaigns for developers.",
    image: "/blogs/real-estate-marketing-egypt.jpg",
    date: "2026-03-09",
    tags: ["Real Estate", "Property Marketing", "Lead Generation"],
    isManual: true,
    isPillar: false,
  },
  {
    id: "best-marketing-agency-in-egypt/branding-agency-egypt",
    title: "Best Branding Agency Egypt 2026",
    description:
      "Discover the top branding agencies in Egypt for 2026. Expert brand identity, logo design, and corporate rebranding services.",
    image: "/blogs/branding-agency-egypt.jpg",
    date: "2026-03-09",
    tags: ["Branding", "Brand Identity", "Logo Design"],
    isManual: true,
    isPillar: false,
  },
  {
    id: "best-marketing-agency-in-egypt/content-creation-agency-egypt",
    title: "Best Content Creation Agency Egypt 2026",
    description:
      "Find the best content creation agency in Egypt for 2026. Expert video production, photography, social media content, and copywriting.",
    image: "/blogs/content-creation-egypt.jpg",
    date: "2026-03-09",
    tags: ["Content Creation", "Video Production", "Photography"],
    isManual: true,
    isPillar: false,
  },

  // STANDALONE BLOGS - MARKETING
  {
    id: "digital-marketing-pricing-egypt",
    title: "Digital Marketing Pricing Egypt 2026: Complete Cost Guide",
    description:
      "Complete pricing guide for digital marketing services in Egypt 2026. Compare costs for SEO, Google Ads, social media, web development from top agencies.",
    image: "/blogs/digital-marketing-pricing-egypt.jpg",
    date: "2026-03-09",
    tags: ["Pricing", "Budget", "Cost Guide", "Digital Marketing"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
];
