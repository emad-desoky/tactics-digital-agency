import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import {
  FaChartLine,
  FaBullhorn,
  FaCode,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "Digital Marketing Services in Egypt | Tactics Agency",
  description:
    "Comprehensive digital marketing services in Egypt: SEO, Performance Marketing, Social Media, and Web Development focused on ROI and growth.",
};

const services = [
  {
    icon: <FaChartLine className="text-4xl text-[rgb(255,228,0)]" />,
    title: "Performance Marketing",
    description:
      "Data-driven ad campaigns on Meta, Google, and TikTok designed to generate qualified leads and measurable ROI.",
    link: "/services/performance-marketing",
  },
  {
    icon: <FaSearch className="text-4xl text-[rgb(255,228,0)]" />,
    title: "SEO (Search Engine Optimization)",
    description:
      "Rank on Page 1 of Google. We optimize your technical structure and content to capture high-intent organic traffic.",
    link: "/services/performance-marketing", // Merged with performance or could be separate. Linking to performance for now as it's related, or could create separate SEO page. Let's keep distinct.
  },
  {
    icon: <FaBullhorn className="text-4xl text-[rgb(255,228,0)]" />,
    title: "Social Media Management",
    description:
      "Engaging content creation, community management, and brand storytelling tailored to the Egyptian market.",
    link: "/services/social-media",
  },
  {
    icon: <FaCode className="text-4xl text-[rgb(255,228,0)]" />,
    title: "Web Development",
    description:
      "Fast, responsive, and SEO-optimized websites built with Next.js to convert visitors into customers.",
    link: "/services/web-development",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="py-20 lg:py-32 container mx-auto px-4 lg:px-8 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Our <span className="text-[rgb(255,228,0)]">Services</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          We don&apos;t just sell services; we sell growth. From SEO to paid
          ads, everything we do is measured by your bottom line.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-[rgb(255,228,0)] text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
        >
          Start Your Growth Journey <FaArrowRight />
        </Link>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-8 rounded-2xl border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-[rgb(255,228,0)] font-bold text-sm uppercase tracking-wider hover:underline flex items-center gap-2"
              >
                Learn More <FaArrowRight className="text-xs" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
