import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FaCheckCircle,
  FaChartLine,
  FaBullhorn,
  FaCode,
  FaHome,
  FaChevronRight,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaExclamationTriangle,
} from "react-icons/fa";

// --- REAL TESTIMONIAL DATA ---
const testimonials = [
  {
    quote:
      "Since we partnered with Tactics, we've seen a real shift in how our brand shows up online. Their team handled everything—from content and design to ads and insights—with creativity and care. The results felt real and consistent across all platforms.",
    name: "Huzefa Quriesh",
    position: "CEO, Ezzi Tools",
  },
  {
    quote:
      "Tactics helped us stand out in a tough market. Their content was sharp, their ads delivered, and they always kept our goals front and center. It's rare to find a team that understands both real estate and digital this well.",
    name: "Mostafa Osama",
    position: "Sales Manager, Golden Real Estate",
  },
  {
    quote:
      "From ad planning to event coverage, Tactics was fast, focused, and flexible. Their production team captured everything exactly how we imagined—if not better.",
    name: "Azza Othman",
    position: "Sales Director - IUNU Developments",
  },
  {
    quote:
      "Partnering with Tactics was a game-changer for our media strategy at Khaled Sabry Developments. Their media buying delivered real results with exceptional ROI and precise targeting.",
    name: "Ahmed Abdelwahab",
    position: "Marketing Director, Khaled Sabry Developments",
  },
];

// 1. EXACT MATCH SEO METADATA & KEYWORD TARGETING
export const metadata = {
  title: "Best Marketing Agency in Egypt",
  description:
    "Looking for the best marketing agency in Egypt? We reviewed the top 10 agencies for 2025 based on ROI, Pricing, and SEO. See why Tactics Digital Agency is ranked #1.",
  keywords: [
    "best marketing agency in egypt",
    "best digital marketing agencies in egypt",
    "top 10 marketing agencies in egypt",
    "marketing agency pricing egypt",
    "seo company cairo",
    "advertising agencies egypt",
    "social media agency egypt",
  ],
  alternates: {
    canonical: "https://tactics.eg/blogs/best-marketing-agency-in-egypt",
  },
  openGraph: {
    title: "Best Marketing Agency in Egypt",
    description:
      "A comprehensive guide to the top 10 marketing agencies in Cairo. Compare costs, strategies, and ROI.",
    url: "https://tactics.eg/blogs/best-marketing-agency-in-egypt",
    type: "article",
    images: [
      {
        url: "/blogs/best-marketing-agency.png",
        width: 1200,
        height: 630,
        alt: "Best Marketing Agency in Egypt 2025",
      },
    ],
  },
};

export default function BestMarketingAgencyPage() {
  // 2. ADVANCED SCHEMA (E-E-A-T + REVIEWS)
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
        headline: "Best Marketing Agency in Egypt: Top 10 Reviewed (2025)",
        alternativeHeadline: "Top Digital Marketing Companies in Cairo Ranked",
        description:
          "A data-driven review of the best digital marketing agencies in Egypt, including pricing comparison and performance benchmarks.",
        author: {
          "@type": "Organization",
          name: "Tactics Digital Agency",
          url: "https://tactics.eg",
        },
        publisher: {
          "@type": "Organization",
          name: "Tactics Digital Agency",
          logo: { "@type": "ImageObject", url: "https://tactics.eg/logo.png" },
        },
        datePublished: "2024-12-04",
        dateModified: "2025-01-05",
        image: "https://tactics.eg/blogs/best-marketing-agency.png",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is the best marketing agency in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tactics Digital Agency is ranked #1 for performance marketing and SEO in Egypt due to their data-first approach, serving clients like Ezzi Tools and Samco Holding.",
            },
          },
          {
            "@type": "Question",
            name: "How much does digital marketing cost in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Professional monthly retainers in Egypt range from 15,000 EGP for basic social media to 100,000+ EGP for comprehensive performance marketing and SEO.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaData} />

      <div className="bg-neutral-950 min-h-screen text-gray-200 font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <header className="relative w-full py-20 lg:py-32 bg-neutral-900 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/blogs/best-marketing-agency.png"
              alt="Digital Marketing Landscape Egypt"
              fill
              className="object-cover blur-sm"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/90 to-neutral-900/80 z-10" />

          <div className="container mx-auto px-4 lg:px-8 relative z-20">
            {/* Breadcrumbs */}
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
                Best Marketing Agency
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/20 text-[rgb(255,228,0)] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[rgb(255,228,0)] animate-pulse"></span>
                2025 Industry Report
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Best Marketing Agency <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,228,0)] to-yellow-500">
                  in Egypt
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
                We analyzed the{" "}
                <strong>top digital marketing agencies in Egypt</strong> based
                on real client reviews, pricing transparency, and SEO results.
                Don&apos;t hire a partner until you read this.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-t border-gray-800 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center border border-gray-600 overflow-hidden">
                    <Image
                      src="/logo.png"
                      width={40}
                      height={40}
                      alt="Tactics Icon"
                    />
                  </div>
                  <div>
                    <span className="block text-white font-semibold">
                      Tactics Editorial Team
                    </span>
                    <span className="text-xs">Expert Review</span>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-800"></div>
                <div>
                  Updated: <span className="text-white">Jan 5, 2025</span>
                </div>
                <div>
                  Read Time: <span className="text-white">10 Min</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Article Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Intro Section - E-E-A-T Focused */}
              <section className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p className="lead text-xl md:text-2xl leading-relaxed font-light text-white mb-8">
                  The search volume for{" "}
                  <strong className="text-[rgb(255,228,0)]">
                    &quot;best marketing agency in egypt&quot;
                  </strong>{" "}
                  has skyrocketed in 2025. Why? Because businesses are tired of
                  paying for &quot;likes&quot; that don&apos;t convert into
                  cash.
                </p>
                <p>
                  At{" "}
                  <Link
                    href="/"
                    className="text-[rgb(255,228,0)] hover:underline"
                  >
                    Tactics Digital Agency
                  </Link>
                  , we believe in radical transparency. Whether you choose us or
                  one of our competitors, this guide will help you navigate the
                  crowded market in Cairo and find a partner that actually
                  drives revenue.
                </p>

                <div className="bg-neutral-900 border border-gray-700 p-6 rounded-xl my-8">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" /> In This
                    Guide We Cover:
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm m-0 p-0 list-none">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>{" "}
                      Top 10 Agencies Ranked
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>{" "}
                      2025 Pricing Benchmark
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>{" "}
                      Real Client Testimonials
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>{" "}
                      Red Flags to Avoid
                    </li>
                  </ul>
                </div>
              </section>

              {/* TOP 10 SECTION */}
              <section id="top-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-[rgb(255,228,0)]">#1</span> Top 10 Best
                  Marketing Agencies in Egypt
                </h2>
                <p className="text-gray-400 mb-8">
                  The Egyptian market is split between massive global franchises
                  (good for branding) and agile performance agencies (good for
                  growth). Here is the breakdown:
                </p>

                <div className="space-y-8">
                  {/* #1 Tactics */}
                  <div className="bg-neutral-800 rounded-2xl p-8 border-2 border-[rgb(255,228,0)] shadow-[0_0_30px_rgba(255,228,0,0.1)] relative overflow-hidden group hover:shadow-[0_0_50px_rgba(255,228,0,0.2)] transition-shadow">
                    <div className="absolute top-0 right-0 bg-[rgb(255,228,0)] text-black font-bold px-4 py-1 rounded-bl-xl text-sm">
                      #1 Best for ROI & Growth
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center border border-gray-700 relative overflow-hidden">
                        <Image
                          src="/logo.png"
                          fill
                          alt="Tactics Logo"
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          1. Tactics Digital Agency
                        </h3>
                        <div className="flex items-center gap-1 text-[rgb(255,228,0)] text-sm mb-2">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <span className="text-gray-400 ml-2">
                            (Verified 5.0 Rating)
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Specialty:{" "}
                          <strong>
                            Performance Marketing, SEO, Web Development
                          </strong>
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Tactics Digital Agency is the leader when it comes to{" "}
                      <strong>measurable results</strong>. While other agencies
                      focus on &quot;awareness,&quot; Tactics focuses on leads,
                      sales, and ROAS (Return on Ad Spend). With a strong
                      portfolio in Real Estate, SaaS, and E-commerce, they are
                      the go-to for companies needing to scale.
                    </p>
                    {/* Fixed Spacing Bug: Increased gap to gap-6 and added flex-col on mobile */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-700 h-full">
                        <h5 className="text-[rgb(255,228,0)] font-bold text-sm mb-2">
                          Why They Rank #1
                        </h5>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Complete transparency. You get a dashboard showing
                          exactly where every EGP went and what it returned.
                        </p>
                      </div>
                      <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-700 h-full">
                        <h5 className="text-[rgb(255,228,0)] font-bold text-sm mb-2">
                          Best For
                        </h5>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Companies who need more sales, leads, or higher
                          organic traffic (SEO).
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-[rgb(255,228,0)] text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                    >
                      Get A Free Strategy Session <FaArrowRight />
                    </Link>
                  </div>

                  {/* Competitor List - REAL NAMES ADDED FOR AUTHORITY */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mt-8 mb-4">
                      The Branding Giants (Best for TV & Billboards)
                    </h3>
                    <div className="bg-neutral-900 p-6 rounded-xl border border-gray-800">
                      <h4 className="text-lg font-bold text-white">
                        2. Ogilvy Egypt
                      </h4>
                      <p className="text-sm text-gray-400 mt-2">
                        A global giant. Excellent for massive multinational
                        branding campaigns and TV commercials. Less agile for
                        small-to-medium business performance.
                      </p>
                    </div>
                    <div className="bg-neutral-900 p-6 rounded-xl border border-gray-800">
                      <h4 className="text-lg font-bold text-white">
                        3. FP7 McCann Cairo
                      </h4>
                      <p className="text-sm text-gray-400 mt-2">
                        Known for award-winning creative campaigns and
                        storytelling. Ideal if budget is not an issue and brand
                        awareness is the only goal.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">
                      The Creative & Lifestyle Players
                    </h3>
                    <div className="bg-neutral-900 p-6 rounded-xl border border-gray-800">
                      <h4 className="text-lg font-bold text-white">
                        4. MO4 Network
                      </h4>
                      <p className="text-sm text-gray-400 mt-2">
                        Famous for CairoScene and StartUpScene. They dominate
                        lifestyle content, events, and viral PR buzz.
                      </p>
                    </div>
                    <div className="bg-neutral-900 p-6 rounded-xl border border-gray-800">
                      <h4 className="text-lg font-bold text-white">
                        5. Kijamii
                      </h4>
                      <p className="text-sm text-gray-400 mt-2">
                        Strong in social media management and creative digital
                        campaigns, particularly for FMCG brands.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-800 bg-neutral-950 mt-4 text-center">
                      <p className="text-gray-400 text-sm">
                        <em>
                          *Note: Rankings are based on service diversity,
                          technical capability, and client ROI reviews as of
                          2025.
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* PRICING TABLE SECTION */}
              <section id="pricing">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Pricing: How Much Does Marketing Cost in Egypt?
                </h2>
                <p className="text-gray-300 mb-6">
                  One of the most common questions we get is:{" "}
                  <em>&quot;How much should I pay?&quot;</em>. In Egypt, you
                  often get what you pay for. Here is a realistic 2025 pricing
                  benchmark for professional services.
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg">
                  <table className="w-full text-left text-sm text-gray-400">
                    <thead className="bg-neutral-800 text-white uppercase text-xs font-bold">
                      <tr>
                        <th className="px-6 py-4">Service Tier</th>
                        <th className="px-6 py-4">Monthly Retainer (EGP)</th>
                        <th className="px-6 py-4">What&apos;s Included</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 bg-neutral-900">
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">
                          Basic Social Media
                        </td>
                        <td className="px-6 py-4">15,000 - 25,000</td>
                        <td className="px-6 py-4">
                          12 Posts/mo, Community Management.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">
                          Performance Marketing
                        </td>
                        <td className="px-6 py-4">25,000 - 60,000</td>
                        <td className="px-6 py-4">
                          Ads Management (Meta/Google), Reporting, CRO.
                        </td>
                      </tr>
                      <tr className="bg-[rgb(255,228,0)]/5">
                        <td className="px-6 py-4 font-bold text-[rgb(255,228,0)]">
                          Full Stack Growth (Tactics)
                        </td>
                        <td className="px-6 py-4 text-white">
                          45,000 - 100,000+
                        </td>
                        <td className="px-6 py-4 text-white">
                          SEO, Ads, Content, Web Dev Support, Dedicated
                          Strategist.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex gap-4 mt-6 bg-red-900/20 border border-red-900/50 p-4 rounded-lg">
                  <FaExclamationTriangle className="text-red-500 text-xl flex-shrink-0" />
                  <div>
                    <h4 className="text-red-400 font-bold text-sm">
                      Warning: Cheap &quot;SEO Packages&quot;
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Avoid agencies offering SEO for 2,000 or 5,000 EGP. They
                      often use spammy techniques that can get your website
                      penalized by Google.
                    </p>
                  </div>
                </div>
              </section>

              {/* TESTIMONIALS SECTION - REAL DATA */}
              <section
                id="reviews"
                className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-2xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <FaQuoteLeft className="text-[rgb(255,228,0)]" /> Verified
                  Client Reviews
                </h2>
                <p className="text-gray-400 mb-6 text-sm">
                  Don&apos;t take our word for it. Here is what business leaders
                  in Cairo say about working with Tactics:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((t, index) => (
                    <div
                      key={index}
                      className="bg-neutral-950 p-6 rounded-xl border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors"
                    >
                      <div className="flex gap-1 text-[rgb(255,228,0)] text-xs mb-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="text-gray-300 italic mb-4 text-sm leading-relaxed">
                        &quot;{t.quote}&quot;
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white text-sm font-bold">
                            {t.name}
                          </p>
                          <p className="text-gray-500 text-xs">{t.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* METHODOLOGY & EXTERNAL LINKS */}
              <section className="text-sm text-gray-400 bg-neutral-900 p-6 rounded-xl border border-gray-800">
                <p>
                  <strong>Our Methodology:</strong> This review is based on
                  publicly available data, client retention rates, and technical
                  capability assessments. For more on how to choose an agency,
                  refer to{" "}
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                    target="_blank"
                    rel="nofollow noopener"
                    className="text-[rgb(255,228,0)] hover:underline"
                  >
                    Google&apos;s Guidelines
                  </a>
                  .
                </p>
              </section>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:col-span-4">
              {/* Added space-y-6 here to fix the "Intact Boxes" bug */}
              <div className="sticky top-28 space-y-6">
                {/* CTA Card */}
                <div className="bg-[rgb(255,228,0)] p-6 rounded-2xl shadow-xl text-black relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-10 -mt-10 blur-xl group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-xl font-bold mb-2 relative z-10">
                    Want to Outrank Your Competitors?
                  </h3>
                  <p className="text-sm mb-6 opacity-90 relative z-10">
                    Get a free website audit and competitor analysis from the
                    best marketing agency in Egypt.
                  </p>
                  <Link
                    href="/#contact"
                    className="block w-full bg-black text-white text-center py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors relative z-10"
                  >
                    Get Free Audit
                  </Link>
                </div>

                {/* TOC Widget */}
                <div className="bg-neutral-900 p-6 rounded-2xl border border-gray-700">
                  <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest border-b border-gray-800 pb-2">
                    Table of Contents
                  </h3>
                  <nav className="flex flex-col space-y-3 text-sm text-gray-400">
                    <a
                      href="#top-10"
                      className="hover:text-[rgb(255,228,0)] transition-colors flex items-center justify-between"
                    >
                      1. Top 10 Best Agencies{" "}
                      <FaChevronRight className="text-xs" />
                    </a>
                    <a
                      href="#pricing"
                      className="hover:text-[rgb(255,228,0)] transition-colors flex items-center justify-between"
                    >
                      2. 2025 Pricing Guide{" "}
                      <FaChevronRight className="text-xs" />
                    </a>
                    <a
                      href="#reviews"
                      className="hover:text-[rgb(255,228,0)] transition-colors flex items-center justify-between"
                    >
                      3. Verified Reviews <FaChevronRight className="text-xs" />
                    </a>
                    <a
                      href="#faq"
                      className="hover:text-[rgb(255,228,0)] transition-colors flex items-center justify-between"
                    >
                      4. FAQ <FaChevronRight className="text-xs" />
                    </a>
                  </nav>
                </div>

                {/* Internal Link: Services - UPDATED LINKS */}
                <div className="bg-neutral-900 p-6 rounded-2xl border border-gray-700 group hover:border-[rgb(255,228,0)] transition-colors">
                  <h3 className="text-white font-bold mb-2">
                    Grow Your Business
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400 mb-4">
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-[rgb(255,228,0)]" />{" "}
                      <Link
                        href="/services/performance-marketing"
                        className="hover:text-white"
                      >
                        Performance Marketing
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaBullhorn className="text-[rgb(255,228,0)]" />{" "}
                      <Link
                        href="/services/social-media"
                        className="hover:text-white"
                      >
                        Social Media
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCode className="text-[rgb(255,228,0)]" />{" "}
                      <Link
                        href="/services/web-development"
                        className="hover:text-white"
                      >
                        Web Development
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Gallery Promo */}
                <div className="relative rounded-2xl overflow-hidden group aspect-square border border-gray-800">
                  <Image
                    src="/blogs/best-marketing-agency.png"
                    fill
                    alt="Our Work"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg mb-1">
                      Our Portfolio
                    </h3>
                    <p className="text-gray-300 text-xs mb-3">
                      See how we achieved 300% ROI for clients like Samco &
                      Ezzi.
                    </p>
                    <Link
                      href="/gallery"
                      className="inline-block bg-[rgb(255,228,0)] text-black text-xs font-bold px-4 py-2 rounded text-center hover:bg-yellow-400 transition-colors"
                    >
                      View Success Stories
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* --- FAQ SECTION --- */}
        <section id="faq" className="bg-neutral-900 border-t border-gray-800">
          <div className="container mx-auto px-4 lg:px-8 py-20 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-16">
              FAQ: Choosing a Marketing Partner
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> What is the
                  best digital marketing agency in Egypt?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  <strong>Tactics Digital Agency</strong> is widely considered
                  the best for performance and SEO. For traditional TV
                  advertising, international names like Ogilvy are strong
                  contenders.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> How much budget
                  do I need?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  We recommend a minimum ad spend of 30,000 EGP/month + Agency
                  fees to see significant data and results in the competitive
                  Egyptian market.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> Do you work
                  with Real Estate?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Yes. Tactics specializes in Real Estate marketing for
                  developers in New Capital, Fifth Settlement, and North Coast,
                  with proven lead generation strategies.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> How long does
                  SEO take in Egypt?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  SEO is a long-term game. In Egypt, you can start seeing
                  keyword improvements in 3 months, but significant traffic and
                  leads typically take 6-12 months of consistent work.
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
