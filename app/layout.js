import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import SocialMediaPopups from "@/components/SocialMediaPopups";

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
        url: "/og-tactics-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tactics Digital Agency - 360° Digital Growth Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tactics Digital Agency - 360° Digital Growth Solutions",
    description:
      "Creativity-driven digital growth with comprehensive 360° digital marketing solutions, web development, SEO, branding, and creative services.",
    creator: "@tacticsdigital",
    images: ["/og-tactics-image.jpg"],
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

        {/* Robots meta */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Structured data for organization */}
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
                url: "https://www.tacticsdigitalagency.net/og-tactics-image.jpg",
                width: 1200,
                height: 630,
              },
              image:
                "https://www.tacticsdigitalagency.net/og-tactics-image.jpg",
              description:
                "Creativity-driven digital growth with comprehensive 360° digital marketing solutions",
              slogan: "creativity-driven digital growth",
              foundingDate: "2020",
              address: [
                {
                  "@type": "PostalAddress",
                  name: "Digital Kitchen",
                  streetAddress: "Joseph Tito Axis - Nozha",
                  addressLocality: "Cairo",
                  addressCountry: "EG",
                },
                {
                  "@type": "PostalAddress",
                  name: "Media Studio",
                  streetAddress: "10th district - Zahraa Nasr City",
                  addressLocality: "Cairo",
                  addressCountry: "EG",
                },
                {
                  "@type": "PostalAddress",
                  name: "Business Dev. Office",
                  streetAddress: "Plaza España Mall, Second Al Shiekh Zayed",
                  addressLocality: "Giza",
                  addressCountry: "EG",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20-122-223-8755",
                contactType: "customer service",
                email: "ask@tacticsdigitalagency.net",
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
                name: "Egypt",
              },
              areaServed: "Egypt",
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
        <NextUIProvider>
          {children}
          <SocialMediaPopups />
        </NextUIProvider>
      </body>
    </html>
  );
}
