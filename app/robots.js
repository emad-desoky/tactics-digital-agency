const BASE_URL = "https://www.tacticsdigitalagency.net";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/blog-panel", "/api/"] },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
