import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: {
    default: "Tactics Digital Agency - 360° Digital Growth Solutions",
    template: "%s | Tactics Digital Agency",
  },
  description:
    "Creativity-driven digital growth with Tactics Digital Agency. We provide comprehensive 360° digital marketing solutions, web development, SEO, branding, and creative services to accelerate your business growth.",
  keywords: [
    "digital marketing agency",
    "360 digital agency",
    "web development",
    "SEO services",
    "branding",
    "creative agency",
    "digital growth",
    "social media marketing",
    "digital transformation",
    "online marketing",
    "website design",
    "tactics digital",
  ],
  authors: [{ name: "Tactics Digital Agency" }],
  creator: "Tactics Digital Agency",
  publisher: "Tactics Digital Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.tacticsdigitalagency.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tacticsdigitalagency.net",
    title: "Tactics Digital Agency - 360° Digital Growth Solutions",
    description:
      "Creativity-driven digital growth with comprehensive 360° digital marketing solutions, web development, SEO, branding, and creative services.",
    siteName: "Tactics Digital Agency",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
        width: 1200,
        height: 630,
        alt: "Tactics Digital Agency - 360° Digital Growth Solutions",
        type: "image/jpeg",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Tactics Digital Agency Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tactics Digital Agency - 360° Digital Growth Solutions",
    description:
      "Creativity-driven digital growth with comprehensive 360° digital marketing solutions, web development, SEO, branding, and creative services.",
    creator: "@tacticsdigital",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
        alt: "Tactics Digital Agency - 360° Digital Growth Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:image:secure_url":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
    "fb:app_id": "your-facebook-app-id",
    "twitter:image:alt":
      "Tactics Digital Agency - 360° Digital Growth Solutions",
    "linkedin:owner": "your-linkedin-company-id",
    // WhatsApp specific optimization
    "whatsapp:image":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffe400" />
        <meta name="msapplication-TileColor" content="#ffe400" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />

        {/* Enhanced Open Graph tags */}
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s"
        />
        <meta
          property="og:image:secure_url"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content="Tactics Digital Agency - 360° Digital Growth Solutions"
        />

        {/* Enhanced Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s"
        />
        <meta
          name="twitter:image:alt"
          content="Tactics Digital Agency - 360° Digital Growth Solutions"
        />

        {/* WhatsApp specific meta tags */}
        <meta
          property="whatsapp:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s"
        />

        <meta property="og:site_name" content="Tactics Digital Agency" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_SA" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tactics Digital Agency",
              alternateName: "Tactics 360° Digital Agency",
              url: "https://www.tacticsdigitalagency.net",
              logo: {
                "@type": "ImageObject",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
                width: 1200,
                height: 630,
              },
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
              description:
                "Creativity-driven digital growth with comprehensive 360° digital marketing solutions",
              slogan: "creativity-driven digital growth",
              foundingDate: "2020",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressRegion: "Riyadh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: [
                "https://facebook.com/tacticsdigital",
                "https://twitter.com/tacticsdigital",
                "https://linkedin.com/company/tacticsdigital",
                "https://instagram.com/tacticsdigital",
              ],
              serviceArea: {
                "@type": "Place",
                name: "Worldwide",
              },
              areaServed: "Worldwide",
              knowsAbout: [
                "Digital Marketing",
                "Web Development",
                "SEO",
                "Branding",
                "Social Media Marketing",
                "Creative Design",
                "Digital Strategy",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tactics Digital Agency",
              url: "https://www.tacticsdigitalagency.net",
              description: "360° Digital Growth Solutions",
              publisher: {
                "@type": "Organization",
                name: "Tactics Digital Agency",
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.tacticsdigitalagency.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
