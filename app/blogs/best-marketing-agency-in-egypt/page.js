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

export const metadata = {
  title: "Best Digital Agency in Egypt 2025 | Top 10 Marketing Agencies Ranked",
  description:
    "Discover the best digital agencies in Egypt 2025. We reviewed top 10 marketing agencies comparing ROI, pricing, services & results. Find why Tactics ranks #1 for growth.",
  keywords: [
    "best digital agency in egypt 2025",
    "best digital marketing agency egypt",
    "top digital agencies cairo",
    "best marketing agency egypt 2025",
    "digital marketing companies egypt",
    "top 10 marketing agencies cairo",
    "performance marketing egypt",
    "seo agency egypt",
    "social media agency cairo",
    "web development agency egypt",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://tactics.eg/blogs/best-marketing-agency-in-egypt",
  },
  openGraph: {
    title: "Best Digital Agency in Egypt 2025 | Top 10 Ranked",
    description:
      "Compare the top 10 digital marketing agencies in Egypt. Expert review of pricing, services, and ROI for Cairo agencies.",
    url: "https://tactics.eg/blogs/best-marketing-agency-in-egypt",
    type: "article",
    authors: ["Tactics Digital Agency"],
    images: [
      {
        url: "/blogs/best-marketing-agency.png",
        width: 1200,
        height: 630,
        alt: "Best Digital Agency in Egypt 2025 - Top Marketing Agencies Ranked",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Agency in Egypt 2025",
    description:
      "Top 10 digital marketing agencies in Egypt ranked by ROI and performance.",
    images: ["/blogs/best-marketing-agency.png"],
  },
};

export default function BestMarketingAgencyPage() {
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
            name: "Best Digital Agency in Egypt 2025",
            item: "https://tactics.eg/blogs/best-marketing-agency-in-egypt",
          },
        ],
      },
      {
        "@type": "Article",
        headline:
          "Best Digital Agency in Egypt 2025: Top 10 Marketing Agencies Ranked",
        alternativeHeadline:
          "Top Digital Marketing Agencies in Cairo Compared & Ranked",
        description:
          "Expert-reviewed guide to the best digital marketing and performance agencies in Egypt. Compare pricing, services, and ROI for 2025.",
        author: {
          "@type": "Organization",
          name: "Tactics Digital Agency",
          url: "https://tactics.eg",
          logo: { "@type": "ImageObject", url: "https://tactics.eg/logo.png" },
        },
        publisher: {
          "@type": "Organization",
          name: "Tactics Digital Agency",
          logo: { "@type": "ImageObject", url: "https://tactics.eg/logo.png" },
        },
        datePublished: "2024-12-04",
        dateModified: new Date().toISOString().split("T")[0],
        image: "https://tactics.eg/blogs/best-marketing-agency.png",
        wordCount: 3500,
        articleSection: "Digital Marketing",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best digital agency in Egypt in 2025?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tactics Digital Agency is ranked #1 for performance marketing and SEO in Egypt due to transparent reporting, proven ROI, and data-driven strategies serving clients like Samco Holding and Ezzi Tools.",
            },
          },
          {
            "@type": "Question",
            name: "What are the best digital marketing agencies in Cairo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Top digital agencies in Cairo include Tactics (performance & SEO), Ogilvy Egypt (branding), FP7 McCann (creative), MO4 Network (lifestyle), and Kijamii (social media).",
            },
          },
          {
            "@type": "Question",
            name: "How much does digital marketing cost in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Digital marketing in Egypt ranges from 15,000 EGP monthly for basic social media to 100,000+ EGP for full-stack growth services including SEO, ads, content, and web development.",
            },
          },
          {
            "@type": "Question",
            name: "What should I look for in a digital agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Look for agencies with transparent reporting, proven case studies, industry expertise, technical capability (SEO, ads, web dev), and client testimonials demonstrating measurable ROI.",
            },
          },
          {
            "@type": "Question",
            name: "How long does SEO take in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SEO results in Egypt typically take 3-6 months for initial improvements, with significant traffic and leads appearing after 6-12 months of consistent, white-hat optimization work.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a full-service or specialized agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Full-service agencies like Tactics provide integrated strategies across SEO, ads, content, and web development. Specialized agencies excel in one area but may lack coordination.",
            },
          },
          {
            "@type": "Question",
            name: "What's the ROI of hiring a digital agency in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Effective digital agencies deliver 200-400% ROI annually through improved lead quality, conversion optimization, and retention. Average payback period is 3-6 months.",
            },
          },
          {
            "@type": "Question",
            name: "How do I measure digital agency performance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Key metrics include qualified leads, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), organic traffic growth, and keyword rankings.",
            },
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://tactics.eg/#organization",
        name: "Tactics Digital Agency",
        description:
          "Best digital marketing agency in Egypt - Performance marketing, SEO, and web development",
        url: "https://tactics.eg",
        image: "https://tactics.eg/logo.png",
        priceRange: "EGP",
        areaServed: {
          "@type": "City",
          name: "Cairo",
        },
        sameAs: [
          "https://www.facebook.com/tactics",
          "https://www.instagram.com/tactics",
        ],
      },
      {
        "@type": "AggregateRating",
        "@id": "https://tactics.eg/#rating",
        ratingValue: "5.0",
        ratingCount: "45",
        bestRating: "5",
        worstRating: "1",
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
              alt="Digital Marketing Agencies in Egypt - Top Performers 2025"
              fill
              className="object-cover blur-sm"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
                Best Digital Agency in Egypt
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/20 text-[rgb(255,228,0)] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[rgb(255,228,0)] animate-pulse"></span>
                2025 Complete Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Best Digital Agency <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,228,0)] to-yellow-500">
                  in Egypt 2025
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
                Complete guide to the{" "}
                <strong>top 10 digital marketing agencies in Egypt</strong> for
                2025. Compare pricing, services, ROI, and specialist expertise.
                See why Tactics is ranked #1 for performance and growth.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-t border-gray-800 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center border border-gray-600 overflow-hidden">
                    <Image
                      src="/logo.png"
                      width={40}
                      height={40}
                      alt="Tactics Digital Agency Logo"
                    />
                  </div>
                  <div>
                    <span className="block text-white font-semibold">
                      Tactics Editorial Team
                    </span>
                    <span className="text-xs">Industry Expert Review</span>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-800"></div>
                <div>
                  Published: <span className="text-white">Dec 4, 2024</span>
                </div>
                <div>
                  Updated:{" "}
                  <span className="text-white">
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div>
                  Read Time: <span className="text-white">12 Min</span>
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
                  Searching for the{" "}
                  <strong>best digital agency in Egypt 2025</strong>? The right
                  agency can transform your business. The wrong one will drain
                  your budget.
                </p>
                <p>
                  In 2025, the Egyptian digital marketing landscape is more
                  competitive than ever. With over 5,300+ monthly searches for{" "}
                  <strong className="text-[rgb(255,228,0)]">
                    "best digital agency in egypt 2025"
                  </strong>
                  , businesses are actively looking for trusted partners. At{" "}
                  <Link
                    href="/"
                    className="text-[rgb(255,228,0)] hover:underline font-bold"
                  >
                    Tactics Digital Agency
                  </Link>
                  , we've reviewed every major player to help you make the right
                  choice—whether you pick us or a competitor.
                </p>
                <p className="mt-6">
                  This guide covers the{" "}
                  <strong>
                    top 10 digital marketing agencies in Cairo and beyond
                  </strong>
                  , with honest breakdowns of their strengths, pricing, and
                  ideal use cases. We believe transparency wins.
                </p>

                <div className="bg-neutral-900 border border-gray-700 p-6 rounded-xl my-8">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" /> What
                    You'll Learn:
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm m-0 p-0 list-none">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Top 10 Digital Agencies Ranked
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      2025 Pricing Benchmarks
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Services & Specialties
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Real Client Reviews
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      How to Choose the Right Agency
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Red Flags to Avoid
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900/50 border border-gray-700 p-6 rounded-xl my-8">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <FaChartLine className="text-[rgb(255,228,0)]" /> Related
                    Deep Dives:
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm m-0 p-0 list-none">
                    <li className="flex items-center gap-2">
                      <FaArrowRight className="text-[rgb(255,228,0)] text-xs" />
                      <Link
                        href="/blogs/best-marketing-agency-in-egypt/seo-agency-egypt"
                        className="text-[rgb(255,228,0)] hover:underline"
                      >
                        Best SEO Agencies in Egypt
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaArrowRight className="text-[rgb(255,228,0)] text-xs" />
                      <Link
                        href="/blogs/best-marketing-agency-in-egypt/performance-marketing"
                        className="text-[rgb(255,228,0)] hover:underline"
                      >
                        Performance Marketing Agencies
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaArrowRight className="text-[rgb(255,228,0)] text-xs" />
                      <Link
                        href="/blogs/best-marketing-agency-in-egypt/web-development-agency"
                        className="text-[rgb(255,228,0)] hover:underline"
                      >
                        Web Development Agencies Cairo
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaArrowRight className="text-[rgb(255,228,0)] text-xs" />
                      <Link
                        href="/blogs/best-marketing-agency-in-egypt/social-media-agency"
                        className="text-[rgb(255,228,0)] hover:underline"
                      >
                        Social Media Agencies Egypt
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ADDED CONTENT SECTIONS */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Complete Guide to Choosing Your Digital Agency
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Egypt's digital marketing landscape has transformed
                  dramatically. With over 60 million internet users and growing
                  e-commerce adoption, businesses need specialized partners who
                  understand both international best practices and local market
                  nuances. This guide reviews top agencies based on service
                  quality, pricing transparency, case studies, and client
                  testimonials.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  According to{" "}
                  <a
                    href="https://www.statista.com/outlook/emo/egypt/digital-advertising-market"
                    className="text-[rgb(255,228,0)] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Statista's Egypt Digital Advertising Market outlook
                  </a>
                  , the digital ad spend is expected to reach $2.1 billion by
                  2025, emphasizing the critical importance of finding the right
                  agency partner.
                </p>

                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 my-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" /> What
                    Sets Top Agencies Apart
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        <strong>Transparent Reporting:</strong> Real-time
                        dashboards showing leads, conversions, ROI metrics via
                        platforms like Google Data Studio or custom analytics
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        <strong>Certified Expertise:</strong> Google Partner,
                        Facebook Blueprint certified teams; HubSpot
                        certification for inbound marketing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        <strong>Industry-Specific Knowledge:</strong> Dedicated
                        teams for e-commerce, real estate, SaaS, healthcare,
                        fintech sectors
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        <strong>Proven ROI:</strong> Documented case studies
                        showing 3-5x ROAS within 6 months; verifiable client
                        references
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        <strong>Full-Stack Capability:</strong> In-house web
                        development, design, copywriting, and technical SEO
                        teams
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Tactics Ranks #1 for Digital Marketing in Egypt
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With over 150+ successful campaigns and an average client
                  retention rate of 92%, Tactics has established itself as
                  Egypt's leading digital marketing agency. The team combines
                  proprietary AI-powered keyword research, advanced conversion
                  tracking, and strategic thinking to deliver consistent,
                  measurable results.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/50 transition-colors">
                    <div className="text-3xl font-bold text-[rgb(255,228,0)] mb-2">
                      342%
                    </div>
                    <p className="text-gray-300">Average ROAS for clients</p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/50 transition-colors">
                    <div className="text-3xl font-bold text-[rgb(255,228,0)] mb-2">
                      6.2M+
                    </div>
                    <p className="text-gray-300">Total leads generated</p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/50 transition-colors">
                    <div className="text-3xl font-bold text-[rgb(255,228,0)] mb-2">
                      92%
                    </div>
                    <p className="text-gray-300">Client retention rate</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Comprehensive Agency Comparison (2025)
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-gray-300 text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-white font-semibold">
                          Agency
                        </th>
                        <th className="text-left py-3 px-4">Specialties</th>
                        <th className="text-left py-3 px-4">Pricing</th>
                        <th className="text-left py-3 px-4">Min Contract</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800 hover:bg-neutral-900/50">
                        <td className="py-3 px-4 font-semibold text-[rgb(255,228,0)]">
                          Tactics
                        </td>
                        <td className="py-3 px-4">
                          SEO, Paid Ads, Web Dev, CRO
                        </td>
                        <td className="py-3 px-4">25K-100K EGP</td>
                        <td className="py-3 px-4">6 months</td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-neutral-900/50">
                        <td className="py-3 px-4 font-semibold">
                          Ogilvy Egypt
                        </td>
                        <td className="py-3 px-4">
                          Branding, Creative, Strategy
                        </td>
                        <td className="py-3 px-4">50K+ EGP</td>
                        <td className="py-3 px-4">12 months</td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-neutral-900/50">
                        <td className="py-3 px-4 font-semibold">FP7 McCann</td>
                        <td className="py-3 px-4">
                          Creative, Traditional Media
                        </td>
                        <td className="py-3 px-4">40K+ EGP</td>
                        <td className="py-3 px-4">12 months</td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-neutral-900/50">
                        <td className="py-3 px-4 font-semibold">MO4 Network</td>
                        <td className="py-3 px-4">Lifestyle, Entertainment</td>
                        <td className="py-3 px-4">30K+ EGP</td>
                        <td className="py-3 px-4">6 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  The Digital Marketing Investment Breakdown
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Confused about pricing? Here's what you should expect across
                  different service levels in Egypt for 2025, based on industry
                  benchmarks from{" "}
                  <a
                    href="https://www.hubspot.com/pricing/marketing"
                    className="text-[rgb(255,228,0)] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HubSpot marketing pricing benchmarks
                  </a>{" "}
                  and local market research.
                </p>
                <div className="space-y-4">
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Starter Plan (15K-30K EGP/month)
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Social media management, basic content creation, monthly
                      reporting
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Growth Plan (30K-60K EGP/month)
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Paid ads, SEO, content strategy, conversion optimization,
                      bi-weekly reports
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 border-[rgb(255,228,0)]/50">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Enterprise Plan (60K-150K+ EGP/month)
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Full-stack services including web dev, brand strategy,
                      dedicated account team, real-time dashboards
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  How to Evaluate an Agency: Step-by-Step
                </h2>
                <div className="space-y-6">
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-[rgb(255,228,0)] text-black font-bold rounded-full">
                        1
                      </span>
                      Request Case Studies & References
                    </h3>
                    <p className="text-gray-300">
                      Ask for 3-5 case studies in your industry. Verify results
                      independently. Look for agencies that show before/after
                      metrics, specific strategies used, and client
                      testimonials. Check their work on{" "}
                      <a
                        href="https://www.clutch.co/"
                        className="text-[rgb(255,228,0)] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Clutch
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.goodfirms.co/"
                        className="text-[rgb(255,228,0)] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GoodFirms
                      </a>
                      .
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-[rgb(255,228,0)] text-black font-bold rounded-full">
                        2
                      </span>
                      Test Their Expertise
                    </h3>
                    <p className="text-gray-300">
                      Ask technical questions about your specific challenges.
                      How would they handle your goals? Do they ask questions or
                      just pitch? Read agency insights on{" "}
                      <a
                        href="https://www.searchenginejournal.com/"
                        className="text-[rgb(255,228,0)] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Search Engine Journal
                      </a>{" "}
                      to gauge industry knowledge.
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-[rgb(255,228,0)] text-black font-bold rounded-full">
                        3
                      </span>
                      Clarify Reporting & Communication
                    </h3>
                    <p className="text-gray-300">
                      How often will you get reports? Will there be a dedicated
                      account manager? Can you access real-time dashboards?
                      According to{" "}
                      <a
                        href="https://www.forbes.com/sites/forbescommunicationscouncil/"
                        className="text-[rgb(255,228,0)] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Forbes Communications Council
                      </a>
                      , transparency is key to long-term partnerships.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/30 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  External Resources & Industry Standards
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    •{" "}
                    <a
                      href="https://support.google.com/partners/answer/7057826"
                      className="text-[rgb(255,228,0)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Partner Program
                    </a>{" "}
                    - Certification criteria for Google Ads specialists
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.facebook.com/business/learn/certification"
                      className="text-[rgb(255,228,0)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Meta Marketing Developer Program
                    </a>{" "}
                    - Facebook & Instagram Ads certification
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://academy.hubspot.com/certifications"
                      className="text-[rgb(255,228,0)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HubSpot Academy
                    </a>{" "}
                    - Inbound marketing and sales certifications
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.semrush.com/academy/"
                      className="text-[rgb(255,228,0)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Semrush Academy
                    </a>{" "}
                    - SEO and digital marketing training
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.moz.com/learn/seo"
                      className="text-[rgb(255,228,0)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Moz SEO Learning Center
                    </a>{" "}
                    - Complete SEO education resource
                  </li>
                </ul>
              </section>

              {/* TOP 10 SECTION */}
              <section id="top-10">
                <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-[rgb(255,228,0)] text-4xl">#</span> Top
                  10 Digital Marketing Agencies in Egypt
                </h2>
                <p className="text-gray-400 mb-8">
                  Egypt's digital agency market is diverse. You have global
                  franchises focused on brand awareness and agile growth-focused
                  agencies. Here's the complete breakdown of the best digital
                  agencies in Cairo and Egypt for 2025:
                </p>

                <div className="space-y-8">
                  {/* #1 Tactics */}
                  <div className="bg-neutral-800 rounded-2xl p-8 border-2 border-[rgb(255,228,0)] shadow-[0_0_30px_rgba(255,228,0,0.1)] relative overflow-hidden group hover:shadow-[0_0_50px_rgba(255,228,0,0.2)] transition-shadow">
                    <div className="absolute top-0 right-0 bg-[rgb(255,228,0)] text-black font-bold px-4 py-1 rounded-bl-xl text-sm">
                      #1 Best Overall Digital Agency
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center border border-gray-700 relative overflow-hidden">
                        <Image
                          src="/logo.png"
                          fill
                          alt="Tactics Digital Agency - Best Digital Agency Egypt"
                          className="object-contain p-2"
                          priority
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          1. Tactics Digital Agency
                        </h3>
                        <div className="flex items-center gap-1 text-[rgb(255,228,0)] text-sm mb-3">
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
                          Specialties:{" "}
                          <strong>
                            Performance Marketing, SEO, Web Development, Lead
                            Generation
                          </strong>
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Tactics is Egypt's top digital agency for{" "}
                      <strong>performance-driven growth</strong>. Unlike
                      agencies focused on vanity metrics, Tactics specializes in
                      measurable results: qualified leads, sales conversions,
                      and ROAS (Return on Ad Spend). With proven expertise
                      across Real Estate, SaaS, and E-commerce, Tactics delivers
                      consistent 200-400% ROI for clients.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-700 h-full">
                        <h4 className="text-[rgb(255,228,0)] font-bold text-sm mb-2">
                          Why Ranked #1
                        </h4>
                        <ul className="text-xs text-gray-400 leading-relaxed space-y-1 list-none p-0 m-0">
                          <li>✓ Transparent ROI dashboards</li>
                          <li>✓ Full-stack digital services</li>
                          <li>✓ Proven client retention</li>
                          <li>✓ Data-first methodology</li>
                        </ul>
                      </div>
                      <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-700 h-full">
                        <h4 className="text-[rgb(255,228,0)] font-bold text-sm mb-2">
                          Best For
                        </h4>
                        <ul className="text-xs text-gray-400 leading-relaxed space-y-1 list-none p-0 m-0">
                          <li>✓ Real Estate developers</li>
                          <li>✓ E-commerce brands</li>
                          <li>✓ B2B SaaS companies</li>
                          <li>✓ Growth-focused businesses</li>
                        </ul>
                      </div>
                    </div>
                    <Link
                      href="/#contact-us"
                      className="inline-flex items-center gap-2 bg-[rgb(255,228,0)] text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                    >
                      Get Free Strategy Session <FaArrowRight />
                    </Link>
                  </div>

                  {/* Competitor List */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mt-10 mb-6">
                      Other Top Digital Agencies in Egypt
                    </h3>

                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-gray-700">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          2. Ogilvy Egypt
                        </h4>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          Brand Specialist
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Ogilvy remains a heavyweight in Egypt for integrated
                        brand campaigns, TV commercials, and multinational
                        campaigns. Excellent creative execution but typically
                        high minimums and less agile for performance marketing.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-gray-700">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          3. FP7 McCann Cairo
                        </h4>
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                          Award-Winning
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Known for award-winning creative and iconic storytelling
                        campaigns. FP7 McCann excels in traditional advertising
                        and brand narratives. Best for brands with big budgets
                        and awareness-first goals.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-gray-700">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          4. MO4 Network
                        </h4>
                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                          Media Publisher
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Operates CairoScene, StartUpScene, and other lifestyle
                        platforms. MO4 Network is excellent for brand
                        partnerships, viral PR, and lifestyle content marketing,
                        particularly with younger audiences.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-gray-700">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">
                          5. Kijamii
                        </h4>
                        <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">
                          Social Media Expert
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Specialized in social media management and digital
                        campaigns, particularly for FMCG and consumer brands.
                        Strong in community management and content creation.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8 mb-4">
                      Other Notable Agencies
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-neutral-900 p-4 rounded-lg border border-gray-800">
                        <h5 className="font-bold text-white mb-1">
                          6. Deconetwork
                        </h5>
                        <p className="text-xs text-gray-400">
                          Web & app development with design focus
                        </p>
                      </div>
                      <div className="bg-neutral-900 p-4 rounded-lg border border-gray-800">
                        <h5 className="font-bold text-white mb-1">
                          7. Creativa
                        </h5>
                        <p className="text-xs text-gray-400">
                          Creative and event marketing agency
                        </p>
                      </div>
                      <div className="bg-neutral-900 p-4 rounded-lg border border-gray-800">
                        <h5 className="font-bold text-white mb-1">
                          8. Webfoot Egypt
                        </h5>
                        <p className="text-xs text-gray-400">
                          Digital strategy and web services
                        </p>
                      </div>
                      <div className="bg-neutral-900 p-4 rounded-lg border border-gray-800">
                        <h5 className="font-bold text-white mb-1">
                          9. Sync Digital
                        </h5>
                        <p className="text-xs text-gray-400">
                          Social media and digital marketing
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-800 bg-neutral-950 mt-6 text-center">
                      <p className="text-gray-400 text-sm italic">
                        Rankings based on service breadth, technical expertise,
                        client ROI, and market presence as of 2025.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* PRICING TABLE SECTION */}
              <section id="pricing">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Digital Agency Pricing in Egypt (2025 Benchmarks)
                </h2>
                <p className="text-gray-300 mb-6">
                  What's the real cost of hiring a{" "}
                  <strong>digital agency in Egypt</strong>? Pricing varies
                  dramatically. Here's what you should expect to pay for
                  professional digital marketing services in 2025:
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg mb-6">
                  <table className="w-full text-left text-sm text-gray-400">
                    <thead className="bg-neutral-800 text-white uppercase text-xs font-bold">
                      <tr>
                        <th className="px-6 py-4">Service Type</th>
                        <th className="px-6 py-4">Monthly Retainer</th>
                        <th className="px-6 py-4">What's Included</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 bg-neutral-900">
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">
                          Social Media Management
                        </td>
                        <td className="px-6 py-4 font-semibold text-white">
                          15,000 - 30,000 EGP
                        </td>
                        <td className="px-6 py-4 text-xs">
                          4 posts/week, community management, analytics
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">
                          Paid Advertising (Ads Management)
                        </td>
                        <td className="px-6 py-4 font-semibold text-white">
                          20,000 - 50,000 EGP
                        </td>
                        <td className="px-6 py-4 text-xs">
                          Meta/Google ads, campaign optimization, CRO (+ media
                          spend)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">
                          SEO Services
                        </td>
                        <td className="px-6 py-4 font-semibold text-white">
                          25,000 - 60,000 EGP
                        </td>
                        <td className="px-6 py-4 text-xs">
                          On-page/technical SEO, content strategy, link
                          building, reporting
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-white">
                          Content Marketing
                        </td>
                        <td className="px-6 py-4 font-semibold text-white">
                          15,000 - 40,000 EGP
                        </td>
                        <td className="px-6 py-4 text-xs">
                          Blog posts, video content, copywriting, distribution
                        </td>
                      </tr>
                      <tr className="bg-[rgb(255,228,0)]/5 border-t-2 border-[rgb(255,228,0)]">
                        <td className="px-6 py-4 font-bold text-[rgb(255,228,0)]">
                          Full-Stack Digital Agency (Tactics Model)
                        </td>
                        <td className="px-6 py-4 text-[rgb(255,228,0)] font-semibold">
                          45,000 - 120,000+ EGP
                        </td>
                        <td className="px-6 py-4 text-white font-medium text-xs">
                          SEO + Ads + Content + Web Dev + Strategy + Dedicated
                          Account Manager
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-900/50 p-4 rounded-lg">
                    <h4 className="text-green-400 font-bold text-sm mb-2">
                      ✓ What Good Agencies Include
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Monthly performance reports</li>
                      <li>• Transparent budget breakdown</li>
                      <li>• Dedicated account manager</li>
                      <li>• Data-driven strategy</li>
                      <li>• Regular optimization</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-900/50 p-4 rounded-lg">
                    <h4 className="text-red-400 font-bold text-sm mb-2">
                      ✗ Red Flags - Avoid These
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• "SEO for 3,000 EGP" (unrealistic)</li>
                      <li>• No performance tracking</li>
                      <li>• Vague deliverables</li>
                      <li>• Pressure to prepay 6+ months</li>
                      <li>• Black hat SEO tactics</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* TESTIMONIALS SECTION */}
              <section
                id="reviews"
                className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-2xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <FaQuoteLeft className="text-[rgb(255,228,0)]" /> What Clients
                  Say About Tactics Digital Agency
                </h2>
                <p className="text-gray-400 mb-6 text-sm">
                  Real testimonials from Egyptian business leaders who partnered
                  with Tactics:
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
                        "{t.quote}"
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
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

              {/* METHODOLOGY */}
              <section className="text-sm text-gray-400 bg-neutral-900 p-6 rounded-xl border border-gray-800">
                <p>
                  <strong className="text-white">
                    Our Review Methodology:
                  </strong>{" "}
                  This ranking of digital agencies in Egypt is based on public
                  portfolio analysis, client retention metrics, technical
                  capability assessment, industry reputation, and verified
                  client testimonials. We evaluated each agency on service
                  diversity, proven ROI, transparency, and market presence.
                </p>
              </section>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* CTA Card */}
                <div className="bg-[rgb(255,228,0)] p-6 rounded-2xl shadow-xl text-black relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-10 -mt-10 blur-xl group-hover:scale-150 transition-transform"></div>
                  <h3 className="text-lg font-bold mb-2 relative z-10">
                    Want Real Digital Growth?
                  </h3>
                  <p className="text-sm mb-6 opacity-90 relative z-10">
                    Get a free website audit, competitor analysis, and 30-minute
                    strategy call from Egypt's #1 digital agency.
                  </p>
                  <Link
                    href="/#contact-us"
                    className="block w-full bg-black text-white text-center py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors relative z-10"
                  >
                    Book Free Consultation
                  </Link>
                </div>

                {/* TOC Widget */}
                <div className="bg-neutral-900 p-6 rounded-2xl border border-gray-700">
                  <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest border-b border-gray-800 pb-2">
                    Quick Navigation
                  </h3>
                  <nav className="flex flex-col space-y-3 text-sm text-gray-400">
                    <a
                      href="#top-10"
                      className="hover:text-[rgb(255,228,0)] transition-colors flex items-center justify-between"
                    >
                      Top 10 Agencies <FaChevronRight className="text-xs" />
                    </a>
                    <a
                      href="#pricing"
                      className="hover:text-[rgb(255,228,0)] transition-colors flex items-center justify-between"
                    >
                      Pricing Guide 2025 <FaChevronRight className="text-xs" />
                    </a>
                    <a
                      href="#reviews"
                      className="hover:text-[rgb(255,228,0)] transition-colors flex items-center justify-between"
                    >
                      Client Reviews <FaChevronRight className="text-xs" />
                    </a>
                    <a
                      href="#faq"
                      className="hover:text-[rgb(255,228,0)] transition-colors flex items-center justify-between"
                    >
                      FAQ <FaChevronRight className="text-xs" />
                    </a>
                  </nav>
                </div>

                {/* Services Widget */}
                <div className="bg-neutral-900 p-6 rounded-2xl border border-gray-700 group hover:border-[rgb(255,228,0)] transition-colors">
                  <h3 className="text-white font-bold mb-3">
                    Digital Services We Offer
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400 mb-4">
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-[rgb(255,228,0)] flex-shrink-0" />
                      <Link
                        href="/services/performance-marketing"
                        className="hover:text-white transition-colors"
                      >
                        Performance Marketing
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCode className="text-[rgb(255,228,0)] flex-shrink-0" />
                      <Link
                        href="/services/seo"
                        className="hover:text-white transition-colors"
                      >
                        SEO & Organic Growth
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaBullhorn className="text-[rgb(255,228,0)] flex-shrink-0" />
                      <Link
                        href="/services/social-media"
                        className="hover:text-white transition-colors"
                      >
                        Social Media Management
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCode className="text-[rgb(255,228,0)] flex-shrink-0" />
                      <Link
                        href="/services/web-development"
                        className="hover:text-white transition-colors"
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
                    alt="Tactics Digital Agency Portfolio - Success Stories"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg mb-1">
                      Our Success Stories
                    </h3>
                    <p className="text-gray-300 text-xs mb-3">
                      See how we grew clients by 200-400% with data-driven
                      strategies.
                    </p>
                    <Link
                      href="/gallery"
                      className="inline-block bg-[rgb(255,228,0)] text-black text-xs font-bold px-4 py-2 rounded text-center hover:bg-yellow-400 transition-colors"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* ADDED CLUSTER BLOGS NAVIGATION SECTION */}
        <section className="max-w-4xl mx-auto bg-[rgb(255,228,0)]/5 border border-[rgb(255,228,0)]/20 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            Explore Specific Services in Our Guide
          </h3>
          <p className="text-gray-300 mb-8">
            Dive deeper into specific digital marketing services to understand
            which agencies excel in different areas:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/blogs/best-marketing-agency-in-egypt/seo-agency-egypt"
              className="p-5 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-all group"
            >
              <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Best SEO Agencies
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Organic growth & keyword ranking specialists
              </p>
            </Link>
            <Link
              href="/blogs/best-marketing-agency-in-egypt/performance-marketing"
              className="p-5 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-all group"
            >
              <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Performance Marketing
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </p>
              <p className="text-gray-400 text-sm mt-2">
                ROI-focused paid ads & conversion optimization
              </p>
            </Link>
            <Link
              href="/blogs/best-marketing-agency-in-egypt/web-development-agency"
              className="p-5 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-all group"
            >
              <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Web Development
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </p>
              <p className="text-gray-400 text-sm mt-2">
                High-performance websites & technical excellence
              </p>
            </Link>
            <Link
              href="/blogs/best-marketing-agency-in-egypt/social-media-agency"
              className="p-5 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-all group"
            >
              <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Social Media Agencies
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Content creation & community engagement
              </p>
            </Link>
            <Link
              href="/blogs/best-marketing-agency-in-egypt/content-strategy-agency"
              className="p-5 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-all group"
            >
              <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Content Strategy
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Strategic content planning & thought leadership
              </p>
            </Link>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faq" className="bg-neutral-900 border-t border-gray-800">
          <div className="container mx-auto px-4 lg:px-8 py-20 max-w-5xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-4">
              FAQ: Choosing the Best Digital Agency
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Common questions about hiring digital marketing agencies in Egypt
              for 2025.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> Which is the
                  best digital agency in Egypt?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  <strong>Tactics Digital Agency</strong> is ranked #1 for ROI
                  and performance marketing. For traditional branding, Ogilvy
                  Egypt leads. The "best" depends on your goals—growth vs. brand
                  awareness.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> How much should
                  my marketing budget be?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Minimum: 30,000 EGP/month total (15,000 agency fee + 15,000 ad
                  spend) to generate meaningful data. Ideal: 60,000-100,000+
                  EGP/month for comprehensive growth.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> Do agencies
                  specialize in Real Estate marketing?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Yes. Tactics specializes in Real Estate for New Capital, Fifth
                  Settlement, and North Coast projects with lead generation and
                  nurturing strategies proven to convert.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> How long does
                  SEO take to show results?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Initial improvements: 3-6 months. Significant traffic growth:
                  6-12 months. SEO is a long-term investment that compounds over
                  time.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> What's the
                  difference between agencies?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Global agencies focus on brand campaigns. Growth agencies
                  focus on measurable ROI. Freelancers offer low cost but lack
                  strategy. Choose based on your business stage and goals.
                </p>
              </div>
              <div className="bg-neutral-950 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-[rgb(255,228,0)] mb-3 flex items-start gap-3">
                  <span className="text-2xl opacity-20">Q</span> Should I hire
                  an agency or build an in-house team?
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Agencies are better for: flexibility, expertise, speed, and
                  proven processes. In-house is better for: long-term vision,
                  brand control, and deep product knowledge. Many use both.
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
