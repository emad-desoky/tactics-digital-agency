import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FaCheckCircle,
  FaChartLine,
  FaBullhorn,
  FaCode,
  FaSearchDollar,
  FaHome,
  FaChevronRight,
  FaImages,
  FaArrowRight,
} from "react-icons/fa";

// 1. EXACT MATCH SEO METADATA
export const metadata = {
  title: "Best Marketing Agency in Egypt", // Strictly as requested
  description:
    "Looking for the best marketing agency in Egypt? Discover top-tier strategies for SEO, social media, and performance marketing in Cairo to grow your business in 2025.",
  keywords: [
    "best marketing agency in egypt",
    "digital marketing agency in egypt",
    "best marketing company egypt",
    "top advertising agencies egypt",
    "social media agency cairo",
    "performance marketing agency egypt",
  ],
  alternates: {
    canonical: "/blogs/best-marketing-agency-in-egypt",
  },
  openGraph: {
    title: "Best Marketing Agency in Egypt",
    description:
      "Your comprehensive guide to choosing the top digital partner in Cairo.",
    url: "https://tactics.eg/blogs/best-marketing-agency-in-egypt",
    type: "article",
    images: [
      {
        url: "/blogs/best-marketing-agency.png",
        width: 1200,
        height: 630,
        alt: "Best Digital Marketing Team in Egypt",
      },
    ],
  },
};

export default function BestMarketingAgencyPage() {
  // 2. COMPLETE STRUCTURED DATA (SCHEMA MARKUP)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tactics.eg",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: "https://tactics.eg/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Best Marketing Agency in Egypt",
            item: "https://tactics.eg/blogs/best-marketing-agency-in-egypt",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Best Marketing Agency in Egypt",
        description:
          "A guide to finding the top digital marketing agency in Egypt for SEO and performance marketing.",
        author: {
          "@type": "Organization",
          name: "Tactics Digital Agency",
          url: "https://tactics.eg",
        },
        publisher: {
          "@type": "Organization",
          name: "Tactics Digital Agency",
          logo: {
            "@type": "ImageObject",
            url: "https://tactics.eg/logo.png",
          },
        },
        datePublished: "2024-12-04",
        dateModified: "2025-01-01",
        image: "https://tactics.eg/blogs/best-marketing-agency.png",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best marketing agency in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tactics Digital Agency is considered one of the top choices due to its data-driven approach, comprehensive SEO strategies, and high-ROI performance marketing campaigns in Cairo.",
            },
          },
          {
            "@type": "Question",
            name: "How much do digital marketing agencies charge in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prices vary based on scope, but professional agencies in Egypt typically offer retainer models ranging from EGP 15,000 to EGP 100,000+ depending on services like SEO, Media Buying, and Content Creation.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaData} />

      <div className="bg-neutral-900 min-h-screen text-gray-200 font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
        <Navbar />

        {/* --- CUSTOM HERO SECTION (REPLACES SLIDER) --- */}
        <div className="relative w-full py-20 lg:py-32 bg-neutral-950 overflow-hidden border-b border-gray-800">
          {/* Background Image/Pattern Overlay */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: "url(/blogs/best-marketing-agency.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-950/90 z-10" />

          <div className="container mx-auto px-4 lg:px-8 relative z-20">
            {/* Visual Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-8 font-medium"
            >
              <Link
                href="/"
                className="hover:text-[rgb(255,228,0)] transition-colors flex items-center gap-1"
              >
                <FaHome /> Home
              </Link>
              <FaChevronRight className="text-xs text-gray-600" />
              <Link
                href="/blogs"
                className="hover:text-[rgb(255,228,0)] transition-colors"
              >
                Blogs
              </Link>
              <FaChevronRight className="text-xs text-gray-600" />
              <span className="text-[rgb(255,228,0)]">
                Best Marketing Agency in Egypt
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/20 text-[rgb(255,228,0)] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[rgb(255,228,0)] animate-pulse"></span>
                2025 Industry Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Best Marketing Agency <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,228,0)] to-yellow-500">
                  in Egypt
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-8">
                Your ultimate guide to finding the right partner for SEO, social
                media, and performance marketing in Cairo.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 border-t border-gray-800 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(255,228,0)]">By Tactics Team</span>
                </div>
                <span className="hidden sm:block">•</span>
                <div>Updated: Dec 4, 2024</div>
                <span className="hidden sm:block">•</span>
                <div>8 Min Read</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT CONTAINER --- */}
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Article Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction & Internal Linking */}
              <section className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p className="lead text-xl md:text-2xl leading-relaxed font-light text-white mb-8">
                  Finding the{" "}
                  <strong className="text-[rgb(255,228,0)]">
                    best marketing agency in Egypt
                  </strong>{" "}
                  is not just about hiring a service provider; it's about
                  finding a growth partner. In the competitive markets of Cairo
                  and Alexandria, businesses need more than just "likes"—they
                  need tangible revenue.
                </p>
                <div className="bg-neutral-800/50 border-l-4 border-[rgb(255,228,0)] p-6 rounded-r-xl my-8">
                  <p className="italic m-0 text-gray-300">
                    "At{" "}
                    <Link
                      href="/"
                      className="text-[rgb(255,228,0)] font-bold hover:underline"
                      title="Tactics Digital Agency Home"
                    >
                      Tactics Digital Agency
                    </Link>
                    , we don't just follow trends; we set them. Our data-driven
                    approach ensures that every pound spent yields measurable
                    returns."
                  </p>
                </div>
                <p>
                  Whether you are a startup looking for a{" "}
                  <em>digital marketing agency in Egypt</em> to launch your
                  brand, or an established enterprise seeking to scale, this
                  guide breaks down the essential criteria. You can see examples
                  of our high-impact work in our{" "}
                  <Link
                    href="/gallery"
                    className="text-[rgb(255,228,0)] font-bold hover:underline"
                    title="View Our Work"
                  >
                    Gallery of Success Stories
                  </Link>
                  .
                </p>
              </section>

              {/* H2: Core Pillars */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-12 h-1 bg-[rgb(255,228,0)] rounded-full"></span>
                  What Makes a Top Marketing Company?
                </h2>
                <div className="bg-[rgb(43,43,43)]/50 p-8 rounded-2xl border border-gray-700 hover:border-[rgb(255,228,0)] transition-colors duration-300">
                  <p className="mb-6 text-gray-300">
                    The landscape has shifted. The{" "}
                    <strong>best marketing company in Egypt</strong> today must
                    excel in technical execution, not just creativity. Here are
                    the non-negotiables:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Proven SEO & Organic Growth",
                      "Transparent ROI Reporting",
                      "Cross-Platform Social Strategy",
                      "Advanced Web Development",
                      "Data-Driven Media Buying",
                      "Local Market Expertise",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-200"
                      >
                        <FaCheckCircle className="text-[rgb(255,228,0)] flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Services Visual Grid */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Why Specialization Matters
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-neutral-800 p-8 rounded-2xl border border-gray-700 hover:bg-neutral-800/80 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-[rgb(255,228,0)]/10 flex items-center justify-center mb-6 group-hover:bg-[rgb(255,228,0)] transition-colors">
                      <FaChartLine className="text-2xl text-[rgb(255,228,0)] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      SEO & Search
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Ranking for "marketing agency cairo" requires technical
                      excellence. We build long-term assets that bring free
                      organic traffic to your site.
                    </p>
                  </div>

                  <div className="group bg-neutral-800 p-8 rounded-2xl border border-gray-700 hover:bg-neutral-800/80 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-[rgb(255,228,0)]/10 flex items-center justify-center mb-6 group-hover:bg-[rgb(255,228,0)] transition-colors">
                      <FaBullhorn className="text-2xl text-[rgb(255,228,0)] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Performance Ads
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We focus on ROAS. Our media buying strategies on Facebook,
                      Instagram, and Google Ads are designed to convert, not
                      just distract.
                    </p>
                  </div>

                  <div className="group bg-neutral-800 p-8 rounded-2xl border border-gray-700 hover:bg-neutral-800/80 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-[rgb(255,228,0)]/10 flex items-center justify-center mb-6 group-hover:bg-[rgb(255,228,0)] transition-colors">
                      <FaCode className="text-2xl text-[rgb(255,228,0)] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Web Development
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Your website is your HQ. We build fast, secure Next.js
                      sites that serve as the foundation for your digital
                      success.
                    </p>
                  </div>

                  <div className="group bg-neutral-800 p-8 rounded-2xl border border-gray-700 hover:bg-neutral-800/80 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-[rgb(255,228,0)]/10 flex items-center justify-center mb-6 group-hover:bg-[rgb(255,228,0)] transition-colors">
                      <FaSearchDollar className="text-2xl text-[rgb(255,228,0)] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      ROI Focused
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Stop wasting budget. We implement advanced tracking to
                      ensure every EGP spent contributes to your bottom line.
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action Block */}
              <section className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(255,228,0)] to-yellow-600"></div>
                <div className="relative p-10 md:p-12 text-black flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-extrabold mb-2">
                      Ready to Dominate?
                    </h2>
                    <p className="font-medium text-lg opacity-90 max-w-md">
                      Partner with the agency that understands the Egyptian
                      market inside out.
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="flex-shrink-0 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-2xl"
                  >
                    Get Your Free Audit <FaArrowRight />
                  </Link>
                </div>
              </section>
            </div>

            {/* Right Column: Sticky Sidebar / Table of Contents */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-28">
                {/* TOC Widget */}
                <div className="bg-[rgb(43,43,43)]/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 mb-8 shadow-xl">
                  <h3 className="text-[rgb(255,228,0)] font-bold mb-6 uppercase text-sm tracking-widest border-b border-gray-700 pb-4">
                    Table of Contents
                  </h3>
                  <nav className="flex flex-col space-y-4 text-gray-400 text-sm font-medium">
                    <a href="#" className="flex items-center gap-3 text-white">
                      <span className="flex items-center justify-center w-6 h-6 rounded bg-[rgb(255,228,0)] text-black text-xs font-bold">
                        1
                      </span>
                      Introduction
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 hover:text-[rgb(255,228,0)] transition-colors"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-700 text-xs font-bold">
                        2
                      </span>
                      Top Marketing Criteria
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 hover:text-[rgb(255,228,0)] transition-colors"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-700 text-xs font-bold">
                        3
                      </span>
                      Our Services
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 hover:text-[rgb(255,228,0)] transition-colors"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-700 text-xs font-bold">
                        4
                      </span>
                      FAQ
                    </a>
                  </nav>
                </div>

                {/* Internal Link Widget: Gallery */}
                <div className="bg-neutral-800 p-8 rounded-2xl border border-gray-700 shadow-xl group hover:border-[rgb(255,228,0)] transition-colors">
                  <FaImages className="text-4xl text-[rgb(255,228,0)] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    See Our Work
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Browse our gallery to see how we've helped other Egyptian
                    businesses grow.
                  </p>
                  <Link
                    href="/gallery"
                    className="text-[rgb(255,228,0)] text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    View Gallery <FaArrowRight />
                  </Link>
                </div>

                {/* Tags Widget */}
                <div className="bg-[rgb(43,43,43)]/30 p-8 rounded-2xl border border-gray-700">
                  <h3 className="text-white font-bold mb-4">Trending Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Digital Marketing Egypt",
                      "SEO Cairo",
                      "Social Media",
                      "Web Development",
                      "ROI",
                      "Growth",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-neutral-900 text-xs text-gray-400 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-[rgb(255,228,0)] hover:text-white transition-all cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="bg-neutral-950 border-t border-gray-800">
          <div className="container mx-auto px-4 lg:px-8 py-20 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-16">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3">
                  How do I choose the best marketing agency in Egypt?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Look for case studies, ask for client references, and ensure
                  they have a strong technical team. Results speak louder than
                  promises.
                </p>
              </div>
              <div className="bg-neutral-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3">
                  What services do digital marketing agencies in Cairo offer?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Most top agencies offer SEO, Google Ads (PPC), Social Media
                  Management, Content Creation, and Web Development tailored to
                  the Egyptian market.
                </p>
              </div>
              <div className="bg-neutral-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3">
                  Why is SEO important for businesses in Egypt?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  SEO provides sustainable, long-term traffic without paying for
                  every click. It builds credibility and helps you capture
                  high-intent customers.
                </p>
              </div>
              <div className="bg-neutral-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3">
                  How much should I budget for marketing?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Budgets depend on goals, but a healthy marketing budget
                  typically ranges from 5-15% of your projected revenue to
                  ensure consistent growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
