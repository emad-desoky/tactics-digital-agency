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
import VideoBackgroundWithControls from "@/components/home-page/video-background-with-controls"; // Import the new Client Component

export const metadata = {
  title: "Tactics Digital Agency - Creativity Driven Digital Growth",
  description:
    "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy to accelerate your business growth in the digital world.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tacticsdigitalagency.net/",
    title: "Tactics Digital Agency - Creativity Driven Digital Growth",
    description:
      "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy to accelerate your business growth in the digital world.",
    siteName: "Tactics Digital Agency",
    images: [
      {
        url: "https://www.tacticsdigitalagency.net/og-tactics-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tactics Digital Agency - Digital Excellence",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tactics Digital Agency - Creativity Driven Digital Growth",
    description:
      "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy to accelerate your business growth in the digital world.",
    creator: "@tacticsdigital",
    images: ["https://www.tacticsdigitalagency.net/og-tactics-image.jpg"],
  },
  alternates: {
    canonical: "https://www.tacticsdigitalagency.net/",
  },
};

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />

        <OurStory />
        <Achievements />
        {/* Video Section with controls, now a separate Client Component */}
        <VideoBackgroundWithControls />
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
