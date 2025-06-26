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
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
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
