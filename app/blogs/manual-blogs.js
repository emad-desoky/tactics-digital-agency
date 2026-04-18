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

  // STANDALONE BLOGS - WEB DEVELOPMENT (NEW)
  {
    id: "mobile-app-development-egypt-2026",
    title: "Mobile App Development Egypt 2026: Complete Guide",
    description:
      "Complete guide to mobile app development in Egypt 2026. iOS, Android, Flutter & React Native. Costs from EGP 50,000. Free consultation from top developers.",
    image: "/images/mobile-app-development-egypt.jpg",
    date: "2026-04-18",
    tags: ["Mobile Apps", "App Development", "iOS", "Android", "Flutter"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
  {
    id: "ecommerce-website-development-egypt-2026",
    title: "E-Commerce Website Development Egypt 2026: Launch Your Online Store",
    description:
      "Expert e-commerce website development in Egypt 2026. Shopify, WooCommerce, custom stores. Payment integration, inventory management. From EGP 25,000.",
    image: "/images/ecommerce-website-egypt.jpg",
    date: "2026-04-18",
    tags: ["E-Commerce", "Online Store", "Shopify", "WooCommerce"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
  {
    id: "website-redesign-egypt-2026",
    title: "Website Redesign Egypt 2026: When & How to Rebuild Your Site",
    description:
      "Complete guide to website redesign in Egypt 2026. Signs you need a redesign, process, costs, and SEO protection. Modernize your site from EGP 20,000.",
    image: "/images/website-redesign-egypt.jpg",
    date: "2026-04-18",
    tags: ["Website Redesign", "Web Modernization", "UX Design"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
  {
    id: "wordpress-website-development-egypt-2026",
    title: "WordPress Website Development Egypt 2026: Best WordPress Developers",
    description:
      "Expert WordPress website development in Egypt 2026. Custom themes, WooCommerce, plugins & maintenance. Professional WordPress sites from EGP 15,000.",
    image: "/images/wordpress-development-egypt.jpg",
    date: "2026-04-18",
    tags: ["WordPress", "CMS", "WooCommerce", "Website Development"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
  {
    id: "landing-page-design-egypt-2026",
    title: "Landing Page Design Egypt 2026: High-Converting Pages",
    description:
      "Professional landing page design in Egypt 2026. Conversion-optimized pages that turn visitors into customers. From EGP 8,000. A/B testing included.",
    image: "/images/landing-page-design-egypt.jpg",
    date: "2026-04-18",
    tags: ["Landing Pages", "Conversion Optimization", "Lead Generation"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
  {
    id: "custom-web-application-development-egypt-2026",
    title: "Custom Web Application Development Egypt 2026: SaaS & Enterprise Apps",
    description:
      "Expert custom web application development in Egypt 2026. SaaS platforms, dashboards, CRM systems & enterprise apps. React, Node.js, Python.",
    image: "/images/custom-web-application-egypt.jpg",
    date: "2026-04-18",
    tags: ["Web Applications", "SaaS", "Custom Software", "Enterprise"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
  {
    id: "small-business-website-egypt-2026",
    title: "Small Business Website Egypt 2026: Affordable Websites for SMEs",
    description:
      "Affordable small business websites in Egypt 2026. Professional websites from EGP 10,000. Perfect for startups, restaurants, clinics & local businesses.",
    image: "/images/small-business-website-egypt.jpg",
    date: "2026-04-18",
    tags: ["Small Business", "SME", "Affordable", "Local Business"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
  {
    id: "corporate-website-development-egypt-2026",
    title: "Corporate Website Development Egypt 2026: Enterprise Web Design",
    description:
      "Premium corporate website development in Egypt 2026. Enterprise-grade design for large companies, banks & multinationals. Multilingual, secure & scalable.",
    image: "/images/corporate-website-egypt.jpg",
    date: "2026-04-18",
    tags: ["Corporate", "Enterprise", "Multilingual", "Professional"],
    isManual: true,
    isPillar: false,
    isStandalone: true,
  },
];
