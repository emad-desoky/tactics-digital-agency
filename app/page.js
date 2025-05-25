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
  title: "Home - Transform Your Business with Digital Excellence",
  description:
    "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy to accelerate your business growth in the digital world.",
  openGraph: {
    title:
      "Tactics Digital Agency - Transform Your Business with Digital Excellence",
    description:
      "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Tactics Digital Agency Homepage",
      },
    ],
  },
  twitter: {
    title:
      "Tactics Digital Agency - Transform Your Business with Digital Excellence",
    description:
      "Welcome to Tactics Digital Agency. We specialize in digital marketing, web development, SEO optimization, and brand strategy.",
    images: ["/twitter-home.jpg"],
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
