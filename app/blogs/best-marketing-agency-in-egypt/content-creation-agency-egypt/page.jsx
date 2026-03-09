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
  FaCamera,
  FaVideo,
  FaPenFancy,
  FaMicrophone,
  FaInstagram,
  FaPhotoVideo,
} from "react-icons/fa";

export const metadata = {
  title: "Content Creation Agency Egypt 2026 | Video & Photography Experts",
  description:
    "Find the best content creation agency in Egypt for 2026. Expert video production, photography, social media content, and copywriting services for brands in Cairo.",
  keywords: [
    "content creation agency egypt",
    "video production cairo",
    "photography agency egypt",
    "social media content egypt",
    "copywriting services cairo",
    "ugc agency egypt",
    "reels production",
    "content marketing egypt",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical:
      "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/content-creation-agency-egypt",
  },
  openGraph: {
    title: "Content Creation Agency Egypt 2026 | Video & Photo Production",
    description:
      "Expert content creation services in Egypt. Video production, photography, and social media content for brands.",
    url: "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/content-creation-agency-egypt",
    type: "article",
    images: [
      {
        url: "/blogs/content-creation-egypt.jpg",
        width: 1200,
        height: 630,
        alt: "Content Creation Agency Egypt",
      },
    ],
  },
};

export default function ContentCreationPage() {
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
            name: "Content Creation Agency Egypt",
            item: "https://www.tacticsdigitalagency.net/blogs/best-marketing-agency-in-egypt/content-creation-agency-egypt",
          },
        ],
      },
      {
        "@type": "Article",
        headline:
          "Best Content Creation Agency in Egypt 2026: Video & Photography Experts",
        description:
          "Complete guide to content creation agencies in Egypt. Compare video production, photography, and social media content services.",
        author: { "@type": "Organization", name: "Tactics Digital Agency" },
        publisher: { "@type": "Organization", name: "Tactics Digital Agency" },
        datePublished: "2026-03-09",
        dateModified: new Date().toISOString().split("T")[0],
        image:
          "https://www.tacticsdigitalagency.net/blogs/content-creation-egypt.jpg",
        wordCount: 3000,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best content creation agency in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tactics is ranked as the leading content creation agency in Egypt for 2026, offering comprehensive video production, photography, social media content, and copywriting services for brands across all industries.",
            },
          },
          {
            "@type": "Question",
            name: "How much does content creation cost in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Content creation pricing in Egypt varies: social media content packages range from 15,000-50,000 EGP/month, video production from 10,000-100,000 EGP per project, and photography from 5,000-30,000 EGP per shoot.",
            },
          },
          {
            "@type": "Question",
            name: "What content formats perform best in Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Short-form video (Reels, TikTok) drives highest engagement in Egypt, followed by carousel posts, user-generated content (UGC), and behind-the-scenes content. Arabic content typically outperforms English for local audiences.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need Arabic or English content for Egypt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For B2C brands targeting Egyptian consumers, Arabic content typically performs 3-5x better. B2B and premium lifestyle brands often succeed with bilingual content. The best approach depends on your specific target audience.",
            },
          },
        ],
      },
    ],
  };

  const services = [
    {
      icon: FaVideo,
      title: "Video Production",
      description:
        "Professional video content including commercials, corporate videos, product videos, testimonials, and cinematic brand films.",
    },
    {
      icon: FaCamera,
      title: "Photography",
      description:
        "Product photography, lifestyle shoots, corporate headshots, event coverage, and food photography for all industries.",
    },
    {
      icon: FaInstagram,
      title: "Social Media Content",
      description:
        "Reels, TikToks, Stories, carousel posts, and feed content optimized for Egyptian audiences and platform algorithms.",
    },
    {
      icon: FaPenFancy,
      title: "Copywriting",
      description:
        "Compelling Arabic and English copy for social media, websites, ads, email campaigns, and brand messaging.",
    },
    {
      icon: FaMicrophone,
      title: "Podcast & Audio",
      description:
        "Podcast production, voiceover recording, jingles, and audio branding for radio and digital platforms.",
    },
    {
      icon: FaPhotoVideo,
      title: "UGC Production",
      description:
        "User-generated content style videos and photos that feel authentic and drive higher engagement and conversions.",
    },
  ];

  const contentTypes = [
    {
      type: "Short-Form Video",
      platforms: "Instagram Reels, TikTok, YouTube Shorts",
      bestFor: "Engagement, Reach, Brand Awareness",
      avgCost: "3,000-10,000 EGP/video",
    },
    {
      type: "Product Photography",
      platforms: "E-commerce, Social Media, Ads",
      bestFor: "Sales, Catalogs, Product Launches",
      avgCost: "5,000-20,000 EGP/shoot",
    },
    {
      type: "Corporate Video",
      platforms: "Website, LinkedIn, YouTube",
      bestFor: "B2B, Company Profiles, Investor Relations",
      avgCost: "25,000-80,000 EGP/project",
    },
    {
      type: "Social Media Posts",
      platforms: "Instagram, Facebook, LinkedIn",
      bestFor: "Daily Engagement, Community Building",
      avgCost: "8,000-25,000 EGP/month",
    },
    {
      type: "UGC Content",
      platforms: "TikTok, Instagram, Ads",
      bestFor: "Authenticity, Conversions, Trust",
      avgCost: "2,000-8,000 EGP/video",
    },
    {
      type: "Commercial Production",
      platforms: "TV, Cinema, Digital Pre-roll",
      bestFor: "Mass Reach, Brand Campaigns",
      avgCost: "50,000-500,000 EGP/project",
    },
  ];

  const stats = [
    { value: "1000+", label: "Videos Produced", subtext: "Annually" },
    { value: "85%", label: "Engagement Lift", subtext: "Average increase" },
    { value: "48hr", label: "Turnaround", subtext: "For social content" },
    { value: "15+", label: "Industries Served", subtext: "Diverse expertise" },
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
              src="/blogs/content-creation-egypt.jpg"
              alt="Content Creation Agency Egypt 2026"
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
              <span className="text-[rgb(255,228,0)]">Content Creation</span>
            </nav>

            <div className="inline-block bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/30 rounded-full px-4 py-1 text-[rgb(255,228,0)] text-sm font-medium mb-6">
              Video & Photography Experts
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Best{" "}
              <span className="text-[rgb(255,228,0)]">Content Creation</span>{" "}
              Agency in Egypt 2026
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Expert guide to content creation agencies in Egypt. Discover top
              video producers, photographers, and social media content creators
              for brands in Cairo and across Egypt.
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
                Why Content Creation Drives Growth in Egypt
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Egypt has{" "}
                <strong className="text-white">
                  over 50 million social media users
                </strong>
                , making it the largest market in the Arab world. Brands that
                invest in quality content see significantly higher engagement,
                trust, and conversions compared to those relying on stock
                imagery or low-quality posts.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The rise of short-form video on{" "}
                <strong className="text-white">
                  TikTok, Instagram Reels, and YouTube Shorts
                </strong>{" "}
                has transformed how Egyptian consumers discover and interact
                with brands. Professional content creation is no longer
                optional—it&apos;s essential for any brand serious about growth.
              </p>
              <div className="bg-[rgb(255,228,0)]/10 border-l-4 border-[rgb(255,228,0)] p-6 my-8 rounded-r-lg">
                <p className="text-white font-medium">
                  &ldquo;Content is the atomic particle of all digital
                  marketing. Without quality content, your ads, SEO, and social
                  media have nothing to amplify.&rdquo;
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  — Content Marketing Institute
                </p>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Content Creation Services Explained
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

            {/* Content Types & Pricing */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Content Types & Pricing Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-neutral-900 border border-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-neutral-800">
                    <tr>
                      <th className="text-left p-4 text-white font-semibold">
                        Content Type
                      </th>
                      <th className="text-left p-4 text-white font-semibold hidden md:table-cell">
                        Platforms
                      </th>
                      <th className="text-left p-4 text-white font-semibold hidden lg:table-cell">
                        Best For
                      </th>
                      <th className="text-left p-4 text-white font-semibold">
                        Avg. Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentTypes.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-800 hover:bg-neutral-800/50 transition-colors"
                      >
                        <td className="p-4 text-[rgb(255,228,0)] font-medium">
                          {item.type}
                        </td>
                        <td className="p-4 text-gray-300 hidden md:table-cell">
                          {item.platforms}
                        </td>
                        <td className="p-4 text-gray-300 hidden lg:table-cell">
                          {item.bestFor}
                        </td>
                        <td className="p-4 text-gray-300">{item.avgCost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Top Agencies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Top Content Creation Agencies in Egypt 2026
              </h2>

              <div className="space-y-8">
                <div className="border-2 border-[rgb(255,228,0)] rounded-lg p-8 bg-neutral-900/50 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-[rgb(255,228,0)] text-black text-xs font-bold px-3 py-1 rounded">
                    #1 RANKED
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Tactics - Best Full-Service Content Agency
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Tactics offers end-to-end content production with in-house
                    video, photography, and copywriting teams. Known for fast
                    turnarounds, strategic content planning, and seamless
                    integration with their digital marketing services.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                      Video Production
                    </span>
                    <span className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                      Photography
                    </span>
                    <span className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                      Social Content
                    </span>
                    <span className="bg-neutral-800 border border-gray-700 px-3 py-1 rounded text-sm text-gray-300">
                      Copywriting
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    <strong className="text-white">Pricing:</strong>{" "}
                    20,000-100,000 EGP/month |{" "}
                    <strong className="text-white">Best For:</strong> Brands
                    wanting integrated marketing
                  </p>
                </div>

                <div className="border border-gray-800 rounded-lg p-6 bg-neutral-900/50 hover:border-[rgb(255,228,0)]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">
                    2. Cairo Studios
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Premium production house specializing in high-end
                    commercials and brand films. Best for brands with larger
                    budgets seeking cinematic quality and TV-ready content.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Pricing: 50,000-300,000 EGP/project | Best For: TV
                    Commercials
                  </p>
                </div>

                <div className="border border-gray-800 rounded-lg p-6 bg-neutral-900/50 hover:border-[rgb(255,228,0)]/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">
                    3. Viral Content Egypt
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Specialized in short-form viral content and TikTok
                    production. Young, creative team that understands Egyptian
                    internet culture and trends.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Pricing: 15,000-40,000 EGP/month | Best For: TikTok, Reels
                  </p>
                </div>
              </div>
            </section>

            {/* Content Strategy Tips */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Content Strategy Tips for Egyptian Market
              </h2>

              <div className="space-y-6">
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" /> Language
                    & Localization
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Egyptian Arabic (Masri) outperforms Modern Standard
                        Arabic by 3-5x for consumer brands
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Franco-Arab (Arabic written in Latin letters) resonates
                        with younger audiences
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        B2B and luxury brands can succeed with English or
                        bilingual content
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" /> Platform
                    Priorities
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Instagram remains #1 for brand discovery in Egypt (30M+
                        users)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        TikTok is the fastest-growing platform with highest
                        organic reach
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Facebook Groups remain important for community-driven
                        brands
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        LinkedIn is essential for B2B and professional services
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-[rgb(255,228,0)]" /> Content
                    Formats That Work
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Short-form video (15-60 seconds) drives 4x more
                        engagement than static posts
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Behind-the-scenes and &ldquo;day in the life&rdquo;
                        content builds trust
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        UGC-style content outperforms polished ads for
                        conversions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaArrowRight className="text-[rgb(255,228,0)] mt-1 flex-shrink-0" />
                      <span>
                        Educational carousel posts drive saves and shares
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
                    What is the best content creation agency in Egypt?
                  </h3>
                  <p className="text-gray-300">
                    Tactics Digital Agency is ranked #1 for content creation in
                    Egypt for 2026, offering comprehensive video production,
                    photography, social media content, and copywriting services
                    with fast turnarounds and strategic integration.
                  </p>
                </div>
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    How much does content creation cost in Egypt?
                  </h3>
                  <p className="text-gray-300">
                    Content creation pricing varies: social media packages range
                    from 15,000-50,000 EGP/month, video production from
                    10,000-100,000 EGP per project, and photography from
                    5,000-30,000 EGP per shoot depending on complexity and
                    deliverables.
                  </p>
                </div>
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What content formats perform best in Egypt?
                  </h3>
                  <p className="text-gray-300">
                    Short-form video (Reels, TikTok) drives the highest
                    engagement, followed by carousel posts and UGC-style
                    content. Arabic content typically outperforms English 3-5x
                    for consumer brands targeting Egyptian audiences.
                  </p>
                </div>
                <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    How often should brands post content in Egypt?
                  </h3>
                  <p className="text-gray-300">
                    For optimal engagement, brands should post 1-2 Reels/TikToks
                    daily, 3-5 feed posts weekly, and Stories daily. Consistency
                    matters more than frequency—find a sustainable rhythm and
                    maintain quality.
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
                  href="/blogs/best-marketing-agency-in-egypt/branding-agency-egypt"
                  className="p-4 bg-neutral-900 rounded border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors group"
                >
                  <p className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2">
                    Branding Agency Egypt
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
