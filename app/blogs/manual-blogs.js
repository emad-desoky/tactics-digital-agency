// This file acts as a scalable registry for your manual SEO pages.
// To add a new manual page:
// 1. Create the folder app/blogs/your-new-slug/page.jsx
// 2. Add the metadata object to this array below.

export const manualBlogs = [
  {
    id: "best-marketing-agency-in-egypt", // Acts as the slug for routing
    title: "Best Marketing Agency in Egypt", // The card title
    description:
      "Discover top-tier strategies for SEO, social media, and performance marketing in Cairo to grow your business in 2025. A complete guide to choosing the right partner.",
    image: "/blogs/best-marketing-agency.png", // Ensure this image exists in your public folder
    date: "2024-12-04",
    tags: ["SEO", "Digital Marketing", "Agency", "Growth"],
    isManual: true, // Internal flag
  },
  // Add future manual pages here...
];
