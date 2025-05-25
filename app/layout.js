import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: {
    default: "Tactics Digital Agency - Premier Digital Marketing Solutions",
    template: "%s | Tactics Digital Agency",
  },
  description:
    "Transform your business with Tactics Digital Agency. We provide cutting-edge digital marketing, web development, SEO, and branding solutions to help your business thrive in the digital landscape.",
  keywords: [
    "digital marketing agency",
    "web development",
    "SEO services",
    "branding",
    "social media marketing",
    "digital transformation",
    "online marketing",
    "website design",
  ],
  authors: [{ name: "Tactics Digital Agency" }],
  creator: "Tactics Digital Agency",
  publisher: "Tactics Digital Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tacticsdigitalagency.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Tactics Digital Agency - Premier Digital Marketing Solutions",
    description:
      "Transform your business with cutting-edge digital marketing, web development, SEO, and branding solutions.",
    siteName: "Tactics Digital Agency",
    images: [
      {
        url: "/og-image.jpg", // Main OG image
        width: 1200,
        height: 630,
        alt: "Tactics Digital Agency - Digital Marketing Solutions",
      },
      {
        url: "/og-image-square.jpg", // Square variant
        width: 1200,
        height: 1200,
        alt: "Tactics Digital Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tactics Digital Agency - Premier Digital Marketing Solutions",
    description:
      "Transform your business with cutting-edge digital marketing, web development, SEO, and branding solutions.",
    creator: "@tacticsdigital", // Replace with your Twitter handle
    images: ["/twitter-image.jpg"],
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
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tactics Digital Agency",
              url: "https://tacticsdigitalagency.com",
              logo: "https://tacticsdigitalagency.com/logo.png",
              description:
                "Premier digital marketing agency providing web development, SEO, and branding solutions",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US", // Update with your country
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://facebook.com/tacticsdigital",
                "https://twitter.com/tacticsdigital",
                "https://linkedin.com/company/tacticsdigital",
                "https://instagram.com/tacticsdigital",
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
