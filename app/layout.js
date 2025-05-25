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
  // This is crucial - it sets the base URL for all relative paths
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
        // Using absolute URL to ensure it works across all domains
        url: "https://www.tacticsdigitalagency.net/og-tactics-image.jpg",
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
    images: ["https://www.tacticsdigitalagency.net/og-tactics-image.jpg"],
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
  // Get the current domain dynamically
  const currentDomain = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://www.tacticsdigitalagency.net";

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

        {/* Essential Open Graph tags - Using absolute URLs */}
        <meta
          property="og:title"
          content="Tactics Digital Agency - 360° Digital Growth Solutions"
        />
        <meta
          property="og:description"
          content="Creativity-driven digital growth with comprehensive 360° digital marketing solutions, web development, SEO, branding, and creative services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.tacticsdigitalagency.net/"
        />
        <meta property="og:site_name" content="Tactics Digital Agency" />

        {/* Image meta tags - Using absolute URLs for both domains */}
        <meta
          property="og:image"
          content="https://www.tacticsdigitalagency.net/og-tactics-image.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.tacticsdigitalagency.net/og-tactics-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content="Tactics Digital Agency - 360° Digital Growth Solutions"
        />

        {/* Fallback image for Vercel domain */}
        <meta
          property="og:image"
          content="https://tactics-digital-agency.vercel.app/og-tactics-image.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://tactics-digital-agency.vercel.app/og-tactics-image.jpg"
        />

        {/* Additional image meta tags for WhatsApp compatibility */}
        <meta
          name="image"
          content="https://www.tacticsdigitalagency.net/og-tactics-image.jpg"
        />
        <meta
          name="thumbnail"
          content="https://www.tacticsdigitalagency.net/og-tactics-image.jpg"
        />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tactics Digital Agency - 360° Digital Growth Solutions"
        />
        <meta
          name="twitter:description"
          content="Creativity-driven digital growth with comprehensive 360° digital marketing solutions, web development, SEO, branding, and creative services."
        />
        <meta
          name="twitter:image"
          content="https://www.tacticsdigitalagency.net/og-tactics-image.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Tactics Digital Agency - 360° Digital Growth Solutions"
        />

        {/* WhatsApp specific meta tags */}
        <meta
          property="whatsapp:image"
          content="https://www.tacticsdigitalagency.net/og-tactics-image.jpg"
        />
        <meta property="whatsapp:title" content="Tactics Digital Agency" />
        <meta
          property="whatsapp:description"
          content="Welcome to TACTICS DIGITAL AGENCY - 360° Digital Growth Solutions"
        />

        {/* Domain verification meta tags */}
        <link rel="canonical" href="https://www.tacticsdigitalagency.net/" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* DNS prefetch for faster loading */}
        <link rel="dns-prefetch" href="//www.tacticsdigitalagency.net" />
        <link rel="preconnect" href="https://www.tacticsdigitalagency.net" />

        {/* Structured data */}
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
      </head>
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
