// This file acts as a scalable registry for your manual SEO pages.
// To add a new manual page:
// 1. Create the folder app/blogs/your-new-slug/page.jsx
// 2. Add the metadata object to this array below.

export const manualBlogs = [
  {
    id: "best-marketing-agency-in-egypt", // Acts as the slug for routing
    title: "Best Marketing Agency in Egypt (2025 Review)", // The card title
    description:
      "We reviewed the top 10 best marketing agencies in Egypt for 2025. Compare pricing, services, and results. Find out why Tactics ranks #1 for SEO and Performance.",
    image: "/blogs/best-marketing-agency.png", // Corrected path
    date: "2024-12-04",
    tags: ["SEO", "Digital Marketing", "Agency", "Growth"],
    isManual: true, // Internal flag
  },
  // Add future manual pages here...
];
