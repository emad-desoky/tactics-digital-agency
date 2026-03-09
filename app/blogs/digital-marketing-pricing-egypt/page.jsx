"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import NewContactForm from "@/components/home-page/contact-details/NewContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FaCheckCircle,
  FaChartLine,
  FaHome,
  FaChevronRight,
  FaArrowRight,
  FaMoneyBillWave,
  FaCalculator,
  FaExclamationTriangle,
  FaPercent,
} from "react-icons/fa";

export default function DigitalMarketingPricingPage() {
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
            name: "Digital Marketing Pricing Egypt 2026",
            item: "https://tactics.eg/blogs/digital-marketing-pricing-egypt-2026",
          },
        ],
      },
      {
        "@type": "Article",
        headline:
          "Digital Marketing Pricing in Egypt 2026: Complete Cost Guide",
        alternativeHeadline: "How Much Does Digital Marketing Cost in Egypt?",
        description:
          "Complete pricing guide for digital marketing services in Egypt 2026. Compare costs for SEO, Google Ads, social media, and web development from top agencies.",
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
        datePublished: "2026-03-09",
        dateModified: new Date().toISOString().split("T")[0],
        image: "https://tactics.eg/blogs/digital-marketing-pricing-egypt.jpg",
        wordCount: 3200,
        articleSection: "Digital Marketing",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does digital marketing cost in Egypt in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Digital marketing in Egypt costs between 15,000-150,000+ EGP monthly depending on services. Basic social media starts at 15,000 EGP, SEO ranges 20,000-60,000 EGP, and full-stack marketing packages cost 80,000-150,000+ EGP monthly.",
            },
          },
          {
            "@type": "Question",
            name: "What is the average SEO cost in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SEO services in Egypt range from 20,000-80,000 EGP monthly. Basic local SEO starts at 20,000 EGP, national SEO campaigns cost 35,000-60,000 EGP, and enterprise-level SEO with technical audits costs 60,000-80,000+ EGP monthly.",
            },
          },
          {
            "@type": "Question",
            name: "How much should I budget for Google Ads in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Google Ads management in Egypt typically costs 15-20% of ad spend as agency fees, plus the actual ad budget. Minimum recommended ad spend is 30,000 EGP monthly for competitive industries like real estate or healthcare.",
            },
          },
          {
            "@type": "Question",
            name: "Is it worth hiring a digital marketing agency in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, hiring an agency typically delivers 200-400% ROI through expertise, tools access, and time savings. Agencies like Tactics provide comprehensive strategies that in-house teams often cannot match due to resource constraints.",
            },
          },
          {
            "@type": "Question",
            name: "What factors affect digital marketing pricing in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Key factors include: industry competitiveness, target market size (local vs national), service scope (single channel vs omnichannel), campaign complexity, and agency reputation. Real estate and healthcare typically cost more due to high competition.",
            },
          },
        ],
      },
    ],
  };

  const pricingTiers = [
    {
      service: "Social Media Management",
      basic: "15,000 - 25,000",
      standard: "25,000 - 45,000",
      premium: "45,000 - 80,000",
      includes:
        "Content creation, posting, community management, monthly reports",
    },
    {
      service: "SEO Services",
      basic: "20,000 - 35,000",
      standard: "35,000 - 60,000",
      premium: "60,000 - 100,000",
      includes:
        "On-page SEO, link building, technical audits, keyword research",
    },
    {
      service: "Google Ads Management",
      basic: "15% of spend",
      standard: "12-15% of spend",
      premium: "10-12% + retainer",
      includes:
        "Campaign setup, optimization, A/B testing, conversion tracking",
    },
    {
      service: "Web Development",
      basic: "50,000 - 100,000",
      standard: "100,000 - 250,000",
      premium: "250,000 - 500,000+",
      includes: "Design, development, SEO setup, mobile optimization, CMS",
    },
    {
      service: "Content Marketing",
      basic: "20,000 - 35,000",
      standard: "35,000 - 60,000",
      premium: "60,000 - 100,000",
      includes: "Blog posts, video scripts, infographics, email sequences",
    },
    {
      service: "Branding & Identity",
      basic: "30,000 - 60,000",
      standard: "60,000 - 120,000",
      premium: "120,000 - 300,000",
      includes: "Logo, brand guidelines, visual identity, brand strategy",
    },
  ];

  return (
    <>
      <JsonLd data={schemaData} />

      <div className="bg-neutral-950 min-h-screen text-gray-200 font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
        <Navbar />

        {/* Hero Section */}
        <header className="relative w-full py-20 lg:py-32 bg-neutral-900 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/blogs/digital-marketing-pricing-egypt.jpg"
              alt="Digital Marketing Pricing Guide Egypt 2026"
              fill
              className="object-cover blur-sm"
              priority
              sizes="(max-width: 768px) 100vw, 100vw"
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
                Digital Marketing Pricing Egypt 2026
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/20 text-[rgb(255,228,0)] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                <FaMoneyBillWave className="text-sm" />
                2026 Pricing Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Digital Marketing Pricing <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,228,0)] to-yellow-500">
                  in Egypt 2026
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
                Complete cost breakdown for{" "}
                <strong>SEO, Google Ads, social media, web development</strong>,
                and more. Know exactly what to budget before hiring an agency in
                Egypt.
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
                    <span className="text-xs">Industry Pricing Research</span>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-800"></div>
                <div>
                  Published: <span className="text-white">Mar 9, 2026</span>
                </div>
                <div>
                  Read Time: <span className="text-white">10 Min</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Article Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Intro Section */}
              <section className="prose prose-lg prose-invert max-w-none text-gray-300">
                <p className="lead text-xl md:text-2xl leading-relaxed font-light text-white mb-8">
                  Understanding{" "}
                  <strong>digital marketing costs in Egypt</strong> is crucial
                  before investing in any agency or campaign. This guide breaks
                  down real pricing data from the Egyptian market.
                </p>
                <p>
                  Whether you&apos;re a startup with a limited budget or an
                  enterprise seeking comprehensive marketing solutions, knowing
                  the market rates helps you make informed decisions and avoid
                  overpaying or underpaying for services.
                </p>
                <p className="mt-6">
                  At{" "}
                  <Link
                    href="/blogs/best-marketing-agency-in-egypt"
                    className="text-[rgb(255,228,0)] hover:underline font-bold"
                  >
                    Tactics Digital Agency
                  </Link>
                  , we believe in transparent pricing. This guide shares real
                  market data to help you budget effectively—whether you choose
                  us or another agency.
                </p>

                <div className="bg-neutral-900 border border-gray-700 p-6 rounded-xl my-8">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <FaCalculator className="text-[rgb(255,228,0)]" /> Quick
                    Price Summary (EGP/Month):
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm m-0 p-0 list-none">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Social Media: 15,000 - 80,000
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      SEO: 20,000 - 100,000
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Google Ads: 10-20% of spend
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Web Dev: 50,000 - 500,000+ (one-time)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Full-Stack Package: 80,000 - 150,000+
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[rgb(255,228,0)] rounded-full"></span>
                      Branding: 30,000 - 300,000 (project)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Complete Pricing Table */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaChartLine className="text-[rgb(255,228,0)]" />
                  Complete Digital Marketing Pricing Table (2026)
                </h2>
                <p className="text-gray-300 mb-8">
                  Below is a comprehensive breakdown of digital marketing
                  service costs in Egypt. All prices are in Egyptian Pounds
                  (EGP) and reflect 2026 market rates.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-gray-300 text-sm border border-gray-700 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-neutral-800">
                        <th className="text-left py-4 px-4 text-white font-semibold border-b border-gray-700">
                          Service
                        </th>
                        <th className="text-left py-4 px-4 text-green-400 font-semibold border-b border-gray-700">
                          Basic (EGP)
                        </th>
                        <th className="text-left py-4 px-4 text-[rgb(255,228,0)] font-semibold border-b border-gray-700">
                          Standard (EGP)
                        </th>
                        <th className="text-left py-4 px-4 text-purple-400 font-semibold border-b border-gray-700">
                          Premium (EGP)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingTiers.map((tier, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-800 hover:bg-neutral-900/50 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <div className="font-semibold text-white">
                              {tier.service}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {tier.includes}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-green-400">
                            {tier.basic}
                          </td>
                          <td className="py-4 px-4 text-[rgb(255,228,0)]">
                            {tier.standard}
                          </td>
                          <td className="py-4 px-4 text-purple-400">
                            {tier.premium}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Factors Affecting Price */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  What Affects Digital Marketing Pricing in Egypt?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/50 transition-colors">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <FaPercent className="text-[rgb(255,228,0)]" /> Industry
                      Competition
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Real estate, healthcare, and fintech have higher costs due
                      to competitive keywords and high customer lifetime value.
                      Expect 30-50% premium over standard rates.
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/50 transition-colors">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <FaChartLine className="text-[rgb(255,228,0)]" />{" "}
                      Geographic Scope
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Local Cairo campaigns cost less than national or MENA-wide
                      campaigns. Multi-language content adds 20-40% to content
                      costs.
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/50 transition-colors">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <FaCheckCircle className="text-[rgb(255,228,0)]" />{" "}
                      Service Scope
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Single-channel campaigns (only SEO or only ads) cost less
                      than integrated omnichannel strategies that require
                      coordination.
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/50 transition-colors">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <FaExclamationTriangle className="text-[rgb(255,228,0)]" />{" "}
                      Agency Tier
                    </h3>
                    <p className="text-gray-400 text-sm">
                      International agencies (Ogilvy, TBWA) charge 2-3x local
                      rates. Mid-tier agencies like Tactics offer enterprise
                      quality at competitive pricing.
                    </p>
                  </div>
                </div>
              </section>

              {/* ROI Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Expected ROI from Digital Marketing in Egypt
                </h2>
                <p className="text-gray-300 mb-6">
                  When evaluating costs, consider the return. Here&apos;s what
                  top agencies typically deliver:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-[rgb(255,228,0)]/30 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-[rgb(255,228,0)] mb-2">
                      200-400%
                    </div>
                    <p className="text-gray-300 text-sm">Average Annual ROI</p>
                  </div>
                  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-[rgb(255,228,0)]/30 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-[rgb(255,228,0)] mb-2">
                      3-6 Months
                    </div>
                    <p className="text-gray-300 text-sm">
                      Typical Payback Period
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-[rgb(255,228,0)]/30 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-[rgb(255,228,0)] mb-2">
                      3-5x
                    </div>
                    <p className="text-gray-300 text-sm">
                      ROAS on Paid Campaigns
                    </p>
                  </div>
                </div>

                <div className="bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/30 rounded-xl p-6">
                  <h3 className="text-white font-bold mb-3">
                    Looking for the Best Value?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    See our comprehensive review of the{" "}
                    <Link
                      href="/blogs/best-marketing-agency-in-egypt"
                      className="text-[rgb(255,228,0)] hover:underline font-bold"
                    >
                      Best Digital Marketing Agencies in Egypt 2026
                    </Link>{" "}
                    to compare pricing, services, and client results across top
                    agencies.
                  </p>
                  <Link
                    href="/blogs/best-marketing-agency-in-egypt"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,228,0)] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    View Agency Rankings <FaArrowRight />
                  </Link>
                </div>
              </section>

              {/* Budget Recommendations */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Recommended Monthly Budgets by Business Size
                </h2>
                <div className="space-y-6">
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-3 text-xl">
                      Startups & Small Businesses
                    </h3>
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      25,000 - 50,000 EGP/month
                    </div>
                    <p className="text-gray-400 text-sm">
                      Focus on 1-2 channels (social media + SEO or paid ads).
                      Build foundation before scaling.
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-3 text-xl">
                      Medium Businesses
                    </h3>
                    <div className="text-3xl font-bold text-[rgb(255,228,0)] mb-2">
                      50,000 - 120,000 EGP/month
                    </div>
                    <p className="text-gray-400 text-sm">
                      Multi-channel approach with SEO, paid ads, and content
                      marketing. Dedicated account management.
                    </p>
                  </div>
                  <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-3 text-xl">
                      Enterprise & Large Corporations
                    </h3>
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      150,000+ EGP/month
                    </div>
                    <p className="text-gray-400 text-sm">
                      Full-stack marketing with dedicated teams, advanced
                      analytics, and custom solutions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Blogs */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Related Guides
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/blogs/best-marketing-agency-in-egypt"
                    className="group bg-neutral-900 border border-gray-800 rounded-lg p-4 hover:border-[rgb(255,228,0)]/50 transition-all"
                  >
                    <span className="text-[rgb(255,228,0)] text-sm font-medium">
                      Pillar Guide
                    </span>
                    <h3 className="text-white font-semibold mt-1 group-hover:text-[rgb(255,228,0)] transition-colors">
                      Best Digital Agency in Egypt 2026
                    </h3>
                  </Link>
                  <Link
                    href="/blogs/best-marketing-agency-in-egypt/real-estate-marketing-egypt"
                    className="group bg-neutral-900 border border-gray-800 rounded-lg p-4 hover:border-[rgb(255,228,0)]/50 transition-all"
                  >
                    <span className="text-[rgb(255,228,0)] text-sm font-medium">
                      Industry Focus
                    </span>
                    <h3 className="text-white font-semibold mt-1 group-hover:text-[rgb(255,228,0)] transition-colors">
                      Real Estate Marketing Egypt
                    </h3>
                  </Link>
                  <Link
                    href="/blogs/best-marketing-agency-in-egypt/branding-agency-egypt"
                    className="group bg-neutral-900 border border-gray-800 rounded-lg p-4 hover:border-[rgb(255,228,0)]/50 transition-all"
                  >
                    <span className="text-[rgb(255,228,0)] text-sm font-medium">
                      Service Focus
                    </span>
                    <h3 className="text-white font-semibold mt-1 group-hover:text-[rgb(255,228,0)] transition-colors">
                      Branding Agency Egypt
                    </h3>
                  </Link>
                  <Link
                    href="/blogs/best-marketing-agency-in-egypt/content-creation-agency-egypt"
                    className="group bg-neutral-900 border border-gray-800 rounded-lg p-4 hover:border-[rgb(255,228,0)]/50 transition-all"
                  >
                    <span className="text-[rgb(255,228,0)] text-sm font-medium">
                      Service Focus
                    </span>
                    <h3 className="text-white font-semibold mt-1 group-hover:text-[rgb(255,228,0)] transition-colors">
                      Content Creation Agency Egypt
                    </h3>
                  </Link>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="group bg-neutral-900 border border-gray-800 rounded-lg">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-white font-semibold">
                      How much does digital marketing cost in Egypt in 2026?
                      <FaChevronRight className="transform group-open:rotate-90 transition-transform text-[rgb(255,228,0)]" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-300">
                      Digital marketing in Egypt costs between 15,000-150,000+
                      EGP monthly depending on services. Basic social media
                      starts at 15,000 EGP, SEO ranges 20,000-60,000 EGP, and
                      full-stack marketing packages cost 80,000-150,000+ EGP
                      monthly.
                    </div>
                  </details>
                  <details className="group bg-neutral-900 border border-gray-800 rounded-lg">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-white font-semibold">
                      What is the average SEO cost in Egypt?
                      <FaChevronRight className="transform group-open:rotate-90 transition-transform text-[rgb(255,228,0)]" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-300">
                      SEO services in Egypt range from 20,000-80,000 EGP
                      monthly. Basic local SEO starts at 20,000 EGP, national
                      SEO campaigns cost 35,000-60,000 EGP, and enterprise-level
                      SEO with technical audits costs 60,000-80,000+ EGP
                      monthly.
                    </div>
                  </details>
                  <details className="group bg-neutral-900 border border-gray-800 rounded-lg">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-white font-semibold">
                      Is it worth hiring a digital marketing agency in Egypt?
                      <FaChevronRight className="transform group-open:rotate-90 transition-transform text-[rgb(255,228,0)]" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-300">
                      Yes, hiring an agency typically delivers 200-400% ROI
                      through expertise, tools access, and time savings.
                      Agencies like{" "}
                      <Link
                        href="/blogs/best-marketing-agency-in-egypt"
                        className="text-[rgb(255,228,0)] hover:underline"
                      >
                        Tactics
                      </Link>{" "}
                      provide comprehensive strategies that in-house teams often
                      cannot match due to resource constraints.
                    </div>
                  </details>
                  <details className="group bg-neutral-900 border border-gray-800 rounded-lg">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-white font-semibold">
                      How much should I budget for Google Ads in Egypt?
                      <FaChevronRight className="transform group-open:rotate-90 transition-transform text-[rgb(255,228,0)]" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-300">
                      Google Ads management typically costs 15-20% of ad spend
                      as agency fees, plus the actual ad budget. Minimum
                      recommended ad spend is 30,000 EGP monthly for competitive
                      industries like real estate or healthcare.
                    </div>
                  </details>
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-[rgb(255,228,0)]/30 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4">
                  Get a Custom Quote
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Every business is unique. Get a personalized pricing proposal
                  based on your specific goals and budget.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-[rgb(255,228,0)] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Request Free Quote
                </Link>
                <p className="text-gray-500 text-xs mt-4 text-center">
                  No obligation. Response within 24 hours.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Tactics by the Numbers
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Avg. Client ROAS</span>
                    <span className="text-[rgb(255,228,0)] font-bold">
                      342%
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Client Retention</span>
                    <span className="text-[rgb(255,228,0)] font-bold">92%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                    <span className="text-gray-400">Campaigns Delivered</span>
                    <span className="text-[rgb(255,228,0)] font-bold">
                      150+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Leads Generated</span>
                    <span className="text-[rgb(255,228,0)] font-bold">
                      6.2M+
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Contact Form Section */}
        <section className="bg-neutral-900 border-t border-gray-800 py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Contact us for a free consultation and custom pricing based on
                your business needs.
              </p>
            </div>
            <NewContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
