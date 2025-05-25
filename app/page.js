import Hero from "@/components/home-page/hero/Hero";
import OurStory from "@/components/home-page/ourstory/OurStory";
import Achievements from "@/components/home-page/achievements/Achievements";
import Partners from "@/components/home-page/partners/Partners";
import OurMix from "@/components/home-page/our-mix/OurMix";
import OurValues from "@/components/home-page/our-values/OurValues";
import ContactDetails from "@/components/home-page/contact-details/ContactDetails";
import { ServicesParallax } from "@/components/home-page/services-parallax/ServicesParallax";
import TestimonialSection from "@/components/home-page/they-say/Testimonials";
import ContactForm from "@/components/home-page/contact-details/NewContactForm";
import Footer from "@/components/home-page/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title:
    "Tactics Digital Agency - Transform Your Business with Digital Excellence",
  description:
    "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy to accelerate your business growth in the digital world.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tacticsdigitalagency.net/",
    title:
      "Tactics Digital Agency - Transform Your Business with Digital Excellence",
    description:
      "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy to accelerate your business growth in the digital world.",
    siteName: "Tactics Digital Agency",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
        width: 1200,
        height: 630,
        alt: "Tactics Digital Agency - Digital Excellence",
        type: "image/jpeg",
      },
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Tactics Digital Agency Homepage",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tactics Digital Agency - Transform Your Business with Digital Excellence",
    description:
      "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy to accelerate your business growth in the digital world.",
    creator: "@tacticsdigital",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
        alt: "Tactics Digital Agency - Digital Excellence",
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
  alternates: {
    canonical: "https://www.tacticsdigitalagency.net/",
  },
  other: {
    // Enhanced social media meta tags
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:image:secure_url":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
    "twitter:image:alt":
      "Tactics Digital Agency - Transform Your Business with Digital Excellence",
    // WhatsApp optimization
    "whatsapp:image":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
    // LinkedIn optimization
    "linkedin:owner": "tactics-digital-agency",
  },
};

export default function Home() {
  // Structured data for homepage
  const structuredData = {
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
      "Transform Your Business with Digital Excellence. We specialize in digital marketing, web development, SEO optimization, and brand strategy.",
    slogan: "Transform Your Business with Digital Excellence",
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Digital Marketing",
      "Web Development",
      "SEO Optimization",
      "Brand Strategy",
      "Social Media Marketing",
      "Creative Design",
      "Digital Transformation",
    ],
    offers: {
      "@type": "Service",
      name: "Digital Marketing Services",
      description:
        "Comprehensive digital marketing solutions including SEO, web development, and brand strategy",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div>
        <Navbar />
        <Hero />
        <OurStory />
        <Achievements />
        <TestimonialSection />
        <ServicesParallax />
        <Partners />
        <OurMix />
        <OurValues />
        <ContactDetails />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
