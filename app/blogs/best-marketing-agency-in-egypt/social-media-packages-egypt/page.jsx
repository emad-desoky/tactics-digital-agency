import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import ContactForm from "@/components/home-page/contact-details/NewContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronRight,
  FaHome,
  FaInstagram,
  FaBullhorn,
  FaChartLine,
  FaCamera,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";

export const metadata = {
  title: "Social Media Packages Egypt 2026 | Prices & Plans",
  description:
    "Compare social media packages in Egypt for 2026. See prices, deliverables, content volume, ads management, and how to choose the right plan.",
  keywords: [
    "social media packages egypt",
    "social media management packages egypt",
    "social media agency egypt pricing",
    "social media marketing packages egypt",
    "social media packages cairo",
    "facebook ads agency egypt",
    "instagram marketing egypt",
    "social media management egypt",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical:
      "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/social-media-packages-egypt",
  },
  openGraph: {
    title: "Social Media Packages Egypt 2026 | Prices & Plans",
    description:
      "Compare social media marketing packages in Egypt by price, content volume, ad management, reporting, and growth potential.",
    url: "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/social-media-packages-egypt",
    type: "article",
    images: [
      {
        url: "/blogs/social-media-packages-egypt.png",
        width: 1200,
        height: 630,
        alt: "Social Media Packages Egypt 2026 pricing guide by Tactics Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Packages Egypt 2026",
    description:
      "See realistic social media package pricing, deliverables, and plan recommendations for Egyptian businesses.",
    images: ["/blogs/social-media-packages-egypt.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Packages Egypt 2026",
    description:
      "See realistic social media package pricing, deliverables, and plan recommendations for Egyptian businesses.",
    images: ["/blogs/social-media-packages-egypt.jpg"],
  },
};

const packages = [
  {
    name: "Starter Social Media Package",
    price: "15,000–25,000 EGP / month",
    bestFor: "Startups, small businesses, local service providers",
    includes: [
      "8–12 posts per month",
      "Basic static designs",
      "Captions in Arabic or English",
      "Monthly content calendar",
      "Basic community management",
      "Monthly performance report",
    ],
    notFor:
      "Brands that need daily content, video production, or aggressive lead generation.",
  },
  {
    name: "Growth Social Media Package",
    price: "25,000–45,000 EGP / month",
    bestFor:
      "Growing brands that need consistent content and stronger engagement",
    includes: [
      "12–20 posts per month",
      "Reels and short-form video concepts",
      "Content calendar and campaign planning",
      "Community management",
      "Basic Meta Ads support",
      "Monthly insights and recommendations",
    ],
    notFor:
      "Large brands that need full production, paid media strategy, and weekly reporting.",
  },
  {
    name: "Performance Social Media Package",
    price: "45,000–80,000+ EGP / month",
    bestFor:
      "Brands that need leads, sales, and measurable campaign performance",
    includes: [
      "20–30+ monthly content assets",
      "Reels, TikTok, stories, and carousels",
      "Meta Ads campaign management",
      "Creative testing",
      "Landing page recommendations",
      "Weekly optimization reports",
    ],
    notFor:
      "Businesses without a clear offer, ad budget, or sales follow-up process.",
  },
  {
    name: "Full-Service Social Media Package",
    price: "80,000–150,000+ EGP / month",
    bestFor:
      "Real estate, e-commerce, education, healthcare, and premium brands",
    includes: [
      "Full content strategy",
      "Photo and video production",
      "Meta Ads and TikTok Ads management",
      "Influencer coordination",
      "Community management",
      "Weekly reporting and strategy calls",
    ],
    notFor: "Very small businesses that only need basic posting.",
  },
];

const faqs = [
  {
    q: "How much do social media packages cost in Egypt?",
    a: "Social media packages in Egypt usually range from 15,000 to 150,000+ EGP per month. The price depends on content volume, video production, number of platforms, community management, advertising support, and reporting depth.",
  },
  {
    q: "What is included in a social media management package?",
    a: "A standard package usually includes content planning, post design, captions, scheduling, community management, monthly reporting, and basic strategy. Higher-tier packages include reels, video production, paid ads, influencer coordination, and weekly optimization.",
  },
  {
    q: "Do social media packages include ad spend?",
    a: "Usually no. Agency fees and ad spend are separate. The package covers strategy, content, management, and optimization, while the media budget is paid directly to Meta, TikTok, LinkedIn, or other ad platforms.",
  },
  {
    q: "Which social media package is best for small businesses in Egypt?",
    a: "Most small businesses should start with a 15,000–25,000 EGP monthly package if they need consistent posting. If they need leads, sales, or paid campaigns, a growth or performance package is usually more effective.",
  },
  {
    q: "How long does social media marketing take to show results?",
    a: "Basic engagement improvements can appear within 30–60 days. Lead generation and sales performance usually need 90 days of content testing, audience learning, ad optimization, and offer refinement.",
  },
];

export default function SocialMediaPackagesEgyptPage() {
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
            item: "https://www.tacticsdigitalagency.net",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: "https://www.tacticsdigitalagency.net/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Best Marketing Agency in Egypt",
            item: "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Social Media Packages Egypt",
            item: "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/social-media-packages-egypt",
          },
        ],
      },
      {
        "@type": "Article",
        headline:
          "Social Media Packages Egypt 2026: Prices, Plans & What’s Included",
        description:
          "Compare social media packages in Egypt for 2026, including pricing, deliverables, ad management, content production, and how to choose the right package.",
        author: {
          "@type": "Organization",
          name: "Tactics Digital Agency",
          url: "https://www.tacticsdigitalagency.net",
        },
        publisher: {
          "@type": "Organization",
          name: "Tactics Digital Agency",
          logo: {
            "@type": "ImageObject",
            url: "https://www.tacticsdigitalagency.net/logo.png",
          },
        },
        datePublished: "2026-06-17",
        dateModified: "2026-06-17",
        image:
          "https://www.tacticsdigitalagency.net/blogs/social-media-packages-egypt.png",
        mainEntityOfPage:
          "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/social-media-packages-egypt",
        articleSection: "Social Media Marketing",
        wordCount: 2400,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaData} />

      <div className="bg-neutral-950 min-h-screen text-gray-200 font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
        <Navbar />

        <header className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-neutral-900 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="/blogs/social-media-packages-egypt.png"
              alt="Social Media Packages Egypt 2026 pricing plans and deliverables"
              fill
              className="object-cover opacity-35"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/35 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40 z-10" />

          <div className="container mx-auto px-4 lg:px-8 relative z-20">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-8"
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
              <Link
                href="/blogs/best-marketing-agency-in-egypt"
                className="hover:text-[rgb(255,228,0)] transition-colors"
              >
                Best Agency Guide
              </Link>
              <FaChevronRight className="text-xs text-gray-600" />
              <span className="text-[rgb(255,228,0)]">
                Social Media Packages
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/30 rounded-full px-4 py-1 text-[rgb(255,228,0)] text-sm font-medium mb-6">
              <FaMoneyBillWave />
              2026 Pricing Guide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Social Media Packages{" "}
              <span className="text-[rgb(255,228,0)]">Egypt 2026</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              Compare social media packages in Egypt by price, deliverables,
              content volume, ad management, and growth potential. Use this
              guide to choose the right plan before hiring a social media
              agency.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[rgb(255,228,0)] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Get a Custom Package <FaArrowRight />
              </Link>
              <Link
                href="/blogs/best-marketing-agency-in-egypt/social-media-agency"
                className="inline-flex items-center gap-2 border border-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:border-[rgb(255,228,0)] hover:text-[rgb(255,228,0)] transition-colors"
              >
                Compare Social Media Agencies
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 lg:px-8 py-16">
          <article className="max-w-5xl mx-auto">
            <section className="mb-16">
              <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Quick Answer: Social Media Package Prices in Egypt
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Most social media packages in Egypt cost between{" "}
                  <strong className="text-white">
                    15,000 and 150,000+ EGP per month
                  </strong>
                  . A basic package covers posting and community management,
                  while a full-service package includes strategy, content
                  production, paid ads, reporting, and performance optimization.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-[rgb(255,228,0)] mt-1" />
                    <p className="text-gray-300">
                      <strong className="text-white">Starter:</strong>{" "}
                      15,000–25,000 EGP/month
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-[rgb(255,228,0)] mt-1" />
                    <p className="text-gray-300">
                      <strong className="text-white">Growth:</strong>{" "}
                      25,000–45,000 EGP/month
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-[rgb(255,228,0)] mt-1" />
                    <p className="text-gray-300">
                      <strong className="text-white">Performance:</strong>{" "}
                      45,000–80,000+ EGP/month
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-[rgb(255,228,0)] mt-1" />
                    <p className="text-gray-300">
                      <strong className="text-white">Full-service:</strong>{" "}
                      80,000–150,000+ EGP/month
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Social Media Package Pricing Varies in Egypt
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Social media management is not one fixed service. A low-cost
                package may only include designs and captions, while a serious
                growth package includes strategy, content production, ad
                management, analytics, community handling, and creative testing.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Egyptian businesses should not choose based on price alone. The
                right package depends on your industry, audience, sales cycle,
                content needs, and whether your goal is awareness, engagement,
                leads, or direct sales.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <FaInstagram className="text-[rgb(255,228,0)] text-3xl mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Content Volume
                  </h3>
                  <p className="text-gray-400">
                    More posts, reels, stories, and carousels require more
                    planning, copywriting, design, and production time.
                  </p>
                </div>
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <FaCamera className="text-[rgb(255,228,0)] text-3xl mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Production Quality
                  </h3>
                  <p className="text-gray-400">
                    Photography, reels, UGC-style videos, motion graphics, and
                    commercial shoots increase cost but improve brand
                    perception.
                  </p>
                </div>
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <FaBullhorn className="text-[rgb(255,228,0)] text-3xl mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Paid Ads Support
                  </h3>
                  <p className="text-gray-400">
                    Packages with Meta Ads strategy, tracking, testing, and
                    optimization cost more because they influence revenue
                    directly.
                  </p>
                </div>
              </div>
            </section>
            <section className="mb-16">
              <div className="grid lg:grid-cols-12 gap-8 items-center bg-neutral-900 border border-gray-800 rounded-2xl p-6 lg:p-8 overflow-hidden">
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-2 bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/30 rounded-full px-4 py-1 text-[rgb(255,228,0)] text-sm font-medium mb-5">
                    <FaChartLine />
                    Visual Package Breakdown
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">
                    Compare Social Media Packages Visually
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    The visual below summarizes the four main social media
                    package levels: Starter, Growth, Performance, and
                    Full-Service. Use it to compare pricing, deliverables, and
                    the type of business each package fits.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <FaCheckCircle className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      Starter packages are best for basic visibility.
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <FaCheckCircle className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      Growth packages add stronger content planning and
                      engagement.
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <FaCheckCircle className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      Performance packages focus on leads, ads, and weekly
                      optimization.
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative rounded-xl overflow-hidden border border-gray-700 bg-black shadow-xl">
                    <Image
                      src="/blogs/social-media-packages-egypt.png"
                      alt="Visual comparison of social media packages in Egypt including Starter Growth Performance and Full-Service plans"
                      width={1200}
                      height={630}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Social Media Packages in Egypt: Price Comparison
              </h2>

              <div className="overflow-x-auto rounded-xl border border-gray-800">
                <table className="w-full text-left bg-neutral-900">
                  <thead className="bg-neutral-800 text-white">
                    <tr>
                      <th className="p-4">Package</th>
                      <th className="p-4">Monthly Price</th>
                      <th className="p-4">Best For</th>
                      <th className="p-4">Not Ideal For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packages.map((pkg) => (
                      <tr key={pkg.name} className="border-t border-gray-800">
                        <td className="p-4 text-white font-semibold">
                          {pkg.name}
                        </td>
                        <td className="p-4 text-[rgb(255,228,0)] font-bold">
                          {pkg.price}
                        </td>
                        <td className="p-4 text-gray-300">{pkg.bestFor}</td>
                        <td className="p-4 text-gray-400">{pkg.notFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                What Each Social Media Package Includes
              </h2>

              <div className="space-y-6">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="bg-neutral-900 border border-gray-800 rounded-xl p-6"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-[rgb(255,228,0)] font-bold mb-4">
                      {pkg.price}
                    </p>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Best for:</strong>{" "}
                      {pkg.bestFor}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <FaCheckCircle className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                How to Choose the Right Social Media Package
              </h2>

              <div className="bg-neutral-900 border border-gray-800 rounded-xl p-6 lg:p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <FaUsers className="text-[rgb(255,228,0)] text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Choose Starter if you need consistency
                      </h3>
                      <p className="text-gray-300">
                        This is enough for a small business that needs a
                        professional presence but is not yet investing heavily
                        in ads or lead generation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <FaChartLine className="text-[rgb(255,228,0)] text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Choose Growth if you need stronger engagement
                      </h3>
                      <p className="text-gray-300">
                        This works for brands that need better content quality,
                        more frequent posting, audience development, and
                        campaign structure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <FaBullhorn className="text-[rgb(255,228,0)] text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Choose Performance if you need leads or sales
                      </h3>
                      <p className="text-gray-300">
                        If your goal is customer acquisition, you need content,
                        ads, tracking, landing page alignment, and weekly
                        optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-[rgb(255,228,0)] text-black rounded-xl p-8 lg:p-10">
                <h2 className="text-3xl font-bold mb-4">
                  Need a Social Media Package Built Around Leads?
                </h2>
                <p className="text-lg mb-6">
                  Tactics builds social media packages for Egyptian businesses
                  that need strategy, content, ads, and measurable growth — not
                  random posting.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Request a Custom Social Media Plan <FaArrowRight />
                </Link>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Common Mistakes When Comparing Social Media Packages
              </h2>

              <div className="space-y-4">
                {[
                  "Choosing the cheapest package without checking content quality.",
                  "Assuming ad spend is included in the agency fee.",
                  "Paying for posts without strategy, reporting, or campaign goals.",
                  "Ignoring video content, even though reels and short-form content drive stronger reach.",
                  "Not connecting social media activity to leads, calls, WhatsApp messages, or sales.",
                ].map((mistake) => (
                  <div
                    key={mistake}
                    className="flex items-start gap-3 bg-neutral-900 border border-gray-800 rounded-lg p-4"
                  >
                    <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{mistake}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Related Social Media & Marketing Guides
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/blogs/best-marketing-agency-in-egypt/social-media-agency"
                  className="bg-neutral-900 border border-gray-800 rounded-lg p-5 hover:border-[rgb(255,228,0)]/50 transition-colors"
                >
                  <h3 className="text-white font-bold mb-2">
                    Best Social Media Agency in Egypt
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Compare leading social media agencies and service models.
                  </p>
                </Link>

                <Link
                  href="/blogs/digital-marketing-pricing-egypt"
                  className="bg-neutral-900 border border-gray-800 rounded-lg p-5 hover:border-[rgb(255,228,0)]/50 transition-colors"
                >
                  <h3 className="text-white font-bold mb-2">
                    Digital Marketing Pricing Egypt
                  </h3>
                  <p className="text-gray-400 text-sm">
                    See pricing for SEO, ads, web development, branding, and
                    full-service marketing.
                  </p>
                </Link>

                <Link
                  href="/blogs/best-marketing-agency-in-egypt/content-creation-agency-egypt"
                  className="bg-neutral-900 border border-gray-800 rounded-lg p-5 hover:border-[rgb(255,228,0)]/50 transition-colors"
                >
                  <h3 className="text-white font-bold mb-2">
                    Content Creation Agency Egypt
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Learn when to add video, photography, UGC, and reels
                    production.
                  </p>
                </Link>

                <Link
                  href="/services"
                  className="bg-neutral-900 border border-gray-800 rounded-lg p-5 hover:border-[rgb(255,228,0)]/50 transition-colors"
                >
                  <h3 className="text-white font-bold mb-2">
                    Tactics Services
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Explore full-service digital marketing support for Egyptian
                    businesses.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Social Media Packages Egypt: FAQs
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="bg-neutral-900 border border-gray-800 rounded-lg p-5"
                  >
                    <summary className="cursor-pointer text-white font-bold">
                      {faq.q}
                    </summary>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Final Recommendation
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The best social media package in Egypt is not always the most
                expensive one. It is the package that matches your business
                stage, content needs, ad budget, sales process, and reporting
                expectations.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                If you need simple visibility, start small. If you need leads,
                sales, and measurable growth, choose a performance-focused
                package with content, paid ads, tracking, and weekly
                optimization.
              </p>

              <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get a Custom Social Media Package for Your Business
                </h3>
                <p className="text-gray-300 mb-6">
                  Tell us your industry, monthly budget, and growth target.
                  We’ll recommend the right package structure for your business.
                </p>
                <ContactForm />
              </div>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
