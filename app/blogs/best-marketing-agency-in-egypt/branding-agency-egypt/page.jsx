import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import ContactForm from "@/components/home-page/contact-details/NewContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  FaCheckCircle,
  FaArrowRight,
  FaChevronRight,
  FaHome,
  FaPalette,
  FaPencilRuler,
  FaBullseye,
  FaBook,
  FaLayerGroup,
  FaMagic,
} from "react-icons/fa";

export const metadata = {
  title: "Best Branding Agency Egypt 2026 | Brand Identity & Strategy Experts",
  description:
    "Discover the top branding agencies in Egypt for 2026. Expert brand identity design, brand strategy, and corporate rebranding services for Egyptian businesses and startups.",
  keywords: [
    "branding agency egypt",
    "brand identity cairo",
    "corporate branding egypt",
    "logo design egypt",
    "brand strategy agency",
    "rebranding services egypt",
    "visual identity design",
    "brand guidelines egypt",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical:
      "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/branding-agency-egypt",
  },
  openGraph: {
    title: "Best Branding Agency Egypt 2026 | Brand Identity Experts",
    description:
      "Expert branding services in Egypt. Logo design, brand strategy, and corporate identity for businesses.",
    url: "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/branding-agency-egypt",
    type: "article",
    images: [
      {
        url: "/blogs/branding-agency-egypt.jpg",
        width: 1200,
        height: 630,
        alt: "Branding Agency Egypt",
      },
    ],
  },
};

export default function BrandingAgencyPage() {
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
            name: "Best Marketing Agency",
            item: "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Branding Agency Egypt",
            item: "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/branding-agency-egypt",
          },
        ],
      },
      {
        "@type": "Article",
        headline:
          "Best Branding Agency in Egypt 2026: Brand Identity & Strategy Experts",
        description:
          "Complete guide to branding agencies in Egypt. Compare services, pricing, and brand strategy expertise for businesses.",
        author: { "@type": "Organization", name: "Tactics Digital Agency" },
        publisher: { "@type": "Organization", name: "Tactics Digital Agency" },
        datePublished: "2026-03-09",
        dateModified: new Date().toISOString().split("T")[0],
        image:
          "https://www.tacticsdigitalagency.net/blogs/branding-agency-egypt.jpg",
        wordCount: 3100,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best branding agency in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tactics is ranked as the leading branding agency in Egypt for 2026, offering comprehensive brand identity design, strategy development, and corporate rebranding for businesses across all industries.",
            },
          },
          {
            "@type": "Question",
            name: "How much does branding cost in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Professional branding packages in Egypt range from 25,000 EGP for startups to 200,000+ EGP for comprehensive corporate rebranding including full brand guidelines, collateral design, and brand strategy.",
            },
          },
          {
            "@type": "Question",
            name: "What is included in a brand identity package?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A complete brand identity package includes logo design, color palette, typography system, brand guidelines document, business card design, letterhead, social media templates, and brand voice guidelines.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a branding project take in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A complete branding project typically takes 4-8 weeks for startups and 8-16 weeks for corporate rebranding, depending on complexity and approval cycles.",
            },
          },
        ],
      },
    ],
  };

  const services = [
    {
      icon: FaPalette,
      title: "Brand Identity Design",
      description:
        "Complete visual identity systems including logo, color palette, typography, and iconography that represent your brand essence.",
    },
    {
      icon: FaBullseye,
      title: "Brand Strategy",
      description:
        "Strategic brand positioning, competitor analysis, target audience definition, and brand messaging framework development.",
    },
    {
      icon: FaBook,
      title: "Brand Guidelines",
      description:
        "Comprehensive brand books documenting logo usage, color specifications, typography rules, and application examples.",
    },
    {
      icon: FaPencilRuler,
      title: "Collateral Design",
      description:
        "Business cards, letterheads, packaging, signage, and marketing materials that maintain brand consistency.",
    },
    {
      icon: FaLayerGroup,
      title: "Digital Brand Assets",
      description:
        "Social media templates, email signatures, presentation decks, and digital advertising templates.",
    },
    {
      icon: FaMagic,
      title: "Rebranding Services",
      description:
        "Strategic brand evolution or complete transformation for established businesses looking to modernize or pivot.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "Deep dive into your business, industry, competitors, and target audience. We conduct stakeholder interviews and market analysis.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Define brand positioning, personality, values, and messaging. Create the strategic foundation for all creative work.",
    },
    {
      number: "03",
      title: "Creative Exploration",
      description:
        "Develop multiple creative directions including logo concepts, color palettes, and typography options for review.",
    },
    {
      number: "04",
      title: "Design Refinement",
      description:
        "Refine chosen direction based on feedback. Perfect every detail from logo variations to secondary elements.",
    },
    {
      number: "05",
      title: "Brand Guidelines",
      description:
        "Document everything in a comprehensive brand book with usage rules, specifications, and examples.",
    },
    {
      number: "06",
      title: "Asset Delivery",
      description:
        "Deliver all files in required formats with templates and assets ready for immediate use across all channels.",
    },
  ];

  const stats = [
    { value: "200+", label: "Brands Created", subtext: "Since 2018" },
    {
      value: "50+",
      label: "Corporate Rebrands",
      subtext: "Successfully launched",
    },
    {
      value: "95%",
      label: "Client Retention",
      subtext: "Return for more services",
    },
    { value: "4-8", label: "Weeks Average", subtext: "Project timeline" },
  ];

  return (
    <>
      <JsonLd data={schemaData} />
      <div className="bg-neutral-950 min-h-screen text-gray-200 font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
        <Navbar />

        {/* Hero Section */}
        <header className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-neutral-900 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/blogs/branding-agency-egypt.jpg"
              alt="Branding Agency Egypt 2026"
              fill
              className="object-cover blur-sm"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/90 to-neutral-900/80 z-10" />

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
              <span className="text-[rgb(255,228,0)]">Branding Agency</span>
            </nav>

            <div className="inline-block bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/30 rounded-full px-4 py-1 text-[rgb(255,228,0)] text-sm font-medium mb-6">
              Brand Identity Experts
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Best{" "}
              <span className="text-[rgb(255,228,0)]">Branding Agency</span> in
              Egypt 2026
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Expert guide to branding agencies in Egypt. Discover top brand
              identity designers specializing in logo creation, brand strategy,
              and corporate identity for startups and enterprises.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 lg:px-8 py-16">
          <article className="max-w-4xl mx-auto">
            {/* Stats Section */}
            <section className="mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-neutral-900 border border-gray-800 rounded-lg p-6 text-center hover:border-[rgb(255,228,0)]/30 transition-colors"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-[rgb(255,228,0)] mb-2">
                      {stat.value}
                    </div>
                    <p className="text-white font-medium mb-1">{stat.label}</p>
                    <p className="text-gray-500 text-sm">{stat.subtext}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Introduction */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Professional Branding Matters in Egypt
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                In Egypt&apos;s competitive market, your brand is often the
                first—and sometimes only—impression customers have of your
                business. With{" "}
                <strong className="text-white">
                  over 10,000 new businesses
                </strong>{" "}
                registered annually in Egypt, standing out requires more than a
                logo—it requires a complete brand identity system.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Professional branding creates{" "}
                <strong className="text-white">
                  trust, recognition, and emotional connection
                </strong>{" "}
                with your audience. Studies show that consistent brand
                presentation across all platforms increases revenue by up to
                23%.
              </p>
              <div className="bg-[rgb(255,228,0)]/10 border-l-4 border-[rgb(255,228,0)] p-6 my-8 rounded-r-lg">
                <p className="text-white font-medium">
                  &ldquo;Your brand is not what you say it is. It&apos;s what
                  your customers say it is. Great branding aligns both
                  perspectives.&rdquo;
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  — Marty Neumeier, Brand Gap
                </p>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Branding Services Explained
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/30 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[rgb(255,228,0)]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(255,228,0)]/20 transition-colors">
                        <service.icon className="text-[rgb(255,228,0)] text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                The Branding Process
              </h2>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-6 items-start bg-neutral-900 border border-gray-800 rounded-lg p-6 hover:border-[rgb(255,228,0)]/30 transition-colors"
                  >
                    <div className="text-5xl font-bold text-[rgb(255,228,0)]/20 flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Agencies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Top Branding Agencies in Egypt 2026
              </h2>

              <div className="space-y-8">
                <div className="border-2 border-[rgb(255,228,0)] rounded-lg p-8 bg-neutral-900/50 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-[rgb(255,228,0)] text-black text-xs font-bold px-3 py-1 rounded">
                    #1 RANKED
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Tactics - Best Overall Branding Agency
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Tactics combines strategic thinking with world-class design
                    execution. Known for creating memorable brand identities for
                    tech startups, real estate developers, and FMCG companies
                    across Egypt and the MENA region.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                      Brand Strategy
                    </span>
                    <span className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                      Logo Design
                    </span>
                    <span className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                      Brand Guidelines
                    </span>
                    <span className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                      Rebranding
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-white">Pricing:</strong>{" "}
                    40,000-200,000 EGP |{" "}
                    <strong className="text-white">Best For:</strong> Startups,
                    Tech, Real Estate
                  </p>
                </div>

                <div className="border border-gray-800 rounded-lg p-6 bg-neutral-900/50 hover:border-[rgb(255,228,0)]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">
                    2. Kairo Design Studio
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Boutique studio specializing in premium luxury branding.
                    Strong focus on hospitality, fashion, and lifestyle brands
                    with attention to craft and detail.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Pricing: 50,000-150,000 EGP | Best For: Luxury Brands
                  </p>
                </div>

                <div className="border border-gray-800 rounded-lg p-6 bg-neutral-900/50 hover:border-[rgb(255,228,0)]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">
                    3. Baseline Creative
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Full-service agency with strong corporate branding
                    capabilities. Experience with banks, telecom companies, and
                    government entities in Egypt.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Pricing: 60,000-250,000 EGP | Best For: Corporate,
                    Enterprise
                  </p>
                </div>
              </div>
            </section>

            {/* Pricing Guide */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Branding Pricing Guide Egypt 2026
              </h2>
              <div className="space-y-6">
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" /> Startup
                    Package (25,000-50,000 EGP)
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>Logo design with 3 initial concepts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Primary color palette and typography selection
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>Basic brand guidelines (10-15 pages)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>Business card and letterhead design</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" />{" "}
                    Professional Package (50,000-100,000 EGP)
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Everything in Startup + brand strategy workshop
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>Comprehensive brand guidelines (30-50 pages)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>Social media templates and digital assets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>Presentation deck template</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" />{" "}
                    Enterprise Package (100,000-250,000+ EGP)
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Full brand audit, competitor analysis, and positioning
                        strategy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Complete visual identity system with sub-brands
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Brand architecture and naming for product lines
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Complete collateral design including packaging and
                        signage
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Brand launch strategy and internal rollout support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What is the best branding agency in Egypt?
                  </h3>
                  <p className="text-gray-300">
                    Tactics Digital Agency is ranked #1 for branding in Egypt
                    for 2026, offering comprehensive brand identity design,
                    strategy development, and corporate rebranding for startups
                    and enterprises across all industries.
                  </p>
                </div>
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    How much does professional branding cost in Egypt?
                  </h3>
                  <p className="text-gray-300">
                    Branding packages in Egypt range from 25,000 EGP for startup
                    basics to 200,000+ EGP for comprehensive corporate
                    rebranding including full brand guidelines, collateral
                    design, and strategic positioning.
                  </p>
                </div>
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What is included in a brand identity package?
                  </h3>
                  <p className="text-gray-300">
                    A complete brand identity package typically includes logo
                    design, color palette, typography system, brand guidelines
                    document, business card design, letterhead, social media
                    templates, and brand voice guidelines.
                  </p>
                </div>
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    How long does a branding project take?
                  </h3>
                  <p className="text-gray-300">
                    A complete branding project typically takes 4-8 weeks for
                    startups and 8-16 weeks for corporate rebranding, depending
                    on the complexity of the project and approval cycles.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="bg-[rgb(255,228,0)]/5 border border-[rgb(255,228,0)]/20 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                Related Articles in This Guide
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/blogs/best-marketing-agency-in-egypt"
                  className="p-4 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors group"
                >
                  <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2">
                    Main Guide: Best Marketing Agency
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </Link>
                <Link
                  href="/blogs/best-marketing-agency-in-egypt/real-estate-marketing-egypt"
                  className="p-4 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors group"
                >
                  <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2">
                    Real Estate Marketing
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </Link>
                <Link
                  href="/blogs/best-marketing-agency-in-egypt/content-creation-agency-egypt"
                  className="p-4 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors group"
                >
                  <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2">
                    Content Creation Agency
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </Link>
                <Link
                  href="/blogs/best-marketing-agency-in-egypt/seo-agency-egypt"
                  className="p-4 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors group"
                >
                  <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2">
                    SEO Agency Egypt
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </Link>
              </div>
            </section>
          </article>
        </main>

        {/* Contact Form */}
        <ContactForm />

        <Footer />
      </div>
    </>
  );
}
