"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  RefreshCw, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  CheckCircle, 
  ArrowRight, 
  Star,
  Zap,
  Target,
  Users,
  Search,
  Smartphone,
  BarChart3,
  Shield,
  Layers,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Award,
  Globe,
  Eye,
  MousePointer
} from "lucide-react";

export const metadata = {
  title: "Website Redesign Egypt 2026 | When & How to Rebuild Your Site | Jeday Media",
  description: "Is your website outdated? Learn when to redesign your website in Egypt 2026. Signs, costs, process, and expert tips from Jeday Media. Get a free website audit.",
  keywords: "website redesign egypt, rebuild website egypt, website modernization cairo, update website egypt 2026, website revamp egypt, old website fix egypt",
  openGraph: {
    title: "Website Redesign Egypt 2026 | When & How to Rebuild Your Site",
    description: "Complete guide to website redesign in Egypt. Know when it's time to rebuild, what it costs, and how to do it right.",
    type: "article",
    publishedTime: "2026-04-17T00:00:00.000Z",
    authors: ["Jeday Media"],
  },
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Jeday Media</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-orange-500 transition-colors">Services</Link>
            <Link href="/blogs" className="text-orange-500 font-medium">Blog</Link>
            <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors">About</Link>
            <Link href="/contact" className="bg-orange-500 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition-colors">
              Get Started
            </Link>
          </nav>

          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gray-900 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-gray-900 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-gray-900 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col p-4 gap-4">
            <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors py-2">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-orange-500 transition-colors py-2">Services</Link>
            <Link href="/blogs" className="text-orange-500 font-medium py-2">Blog</Link>
            <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors py-2">About</Link>
            <Link href="/contact" className="bg-orange-500 text-white px-6 py-3 rounded-full text-center hover:bg-orange-600 transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-xl font-bold">Jeday Media</span>
          </div>
          <p className="text-gray-400 mb-6">
            Egypt&apos;s premier web development and digital marketing agency. We rebuild brands for the modern web.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Web Services</h4>
          <ul className="space-y-3">
            <li><Link href="/blogs/website-redesign-egypt-2026" className="text-gray-400 hover:text-orange-500 transition-colors">Website Redesign</Link></li>
            <li><Link href="/web-development" className="text-gray-400 hover:text-orange-500 transition-colors">Web Development</Link></li>
            <li><Link href="/blogs/ecommerce-website-development-egypt-2026" className="text-gray-400 hover:text-orange-500 transition-colors">E-Commerce Development</Link></li>
            <li><Link href="/blogs/seo-agency-egypt" className="text-gray-400 hover:text-orange-500 transition-colors">SEO Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/blogs" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</Link></li>
            <li><Link href="/case-studies" className="text-gray-400 hover:text-orange-500 transition-colors">Case Studies</Link></li>
            <li><Link href="/digital-marketing-pricing-egypt" className="text-gray-400 hover:text-orange-500 transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-orange-500" />
              Cairo, Egypt
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone className="w-5 h-5 text-orange-500" />
              +20 123 456 7890
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-orange-500" />
              hello@jedaymedia.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2026 Jeday Media. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get a Free Website Audit
            </h2>
            <p className="text-gray-600 text-lg">
              Not sure if you need a redesign? Our experts will analyze your website and give you honest feedback.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Current Website URL</label>
              <input
                type="url"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What Issues Are You Facing?</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="Describe any problems with your current website..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              Get Free Website Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default function WebsiteRedesignEgyptBlog() {
  const warningSignsData = [
    { icon: Smartphone, title: "Not Mobile-Friendly", description: "Over 70% of Egyptian users browse on mobile. If your site doesn't work on phones, you're losing 70% of potential customers." },
    { icon: Clock, title: "Slow Load Times", description: "Sites that take more than 3 seconds to load lose 40% of visitors. Speed directly impacts your bottom line." },
    { icon: TrendingUp, title: "Declining Traffic", description: "If your organic traffic is dropping, Google may be penalizing your outdated site in search rankings." },
    { icon: Eye, title: "Outdated Design", description: "First impressions matter. An old design signals an outdated business and destroys credibility." },
    { icon: MousePointer, title: "Low Conversion Rates", description: "If visitors aren't converting to leads or sales, your site's UX likely needs a complete overhaul." },
    { icon: Shield, title: "Security Vulnerabilities", description: "Old websites are prime targets for hackers. Outdated plugins and frameworks put your business at risk." },
  ];

  const processSteps = [
    { step: 1, title: "Discovery & Audit", description: "We analyze your current site, competitors, and target audience to understand what's working and what's not.", duration: "1 week" },
    { step: 2, title: "Strategy & Planning", description: "Create a detailed roadmap including information architecture, content strategy, and technical requirements.", duration: "1-2 weeks" },
    { step: 3, title: "Design Phase", description: "Our designers create modern, conversion-focused mockups that align with your brand and goals.", duration: "2-3 weeks" },
    { step: 4, title: "Development", description: "Build your new site using modern technologies with a focus on speed, security, and SEO.", duration: "3-6 weeks" },
    { step: 5, title: "Testing & Launch", description: "Rigorous QA testing, content migration, and seamless launch with zero downtime.", duration: "1-2 weeks" },
    { step: 6, title: "Optimization", description: "Post-launch monitoring, performance tuning, and continuous improvements based on real data.", duration: "Ongoing" },
  ];

  const pricingTiers = [
    { 
      name: "Refresh", 
      price: "$3,000 - $8,000", 
      description: "Update the look without major changes",
      features: ["New visual design", "Mobile optimization", "Performance tuning", "Basic SEO fixes", "Content updates"],
      timeline: "3-5 weeks",
      best: "Sites needing a visual update"
    },
    { 
      name: "Rebuild", 
      price: "$8,000 - $20,000", 
      description: "Complete overhaul with new features",
      features: ["Custom design", "New architecture", "CMS migration", "Advanced SEO", "Conversion optimization", "Analytics setup"],
      timeline: "6-10 weeks",
      best: "Outdated sites needing modernization",
      popular: true
    },
    { 
      name: "Enterprise", 
      price: "$20,000+", 
      description: "Complex, large-scale projects",
      features: ["Enterprise architecture", "Custom integrations", "Multi-language", "Advanced security", "Dedicated support", "Training included"],
      timeline: "10-20 weeks",
      best: "Large organizations with complex needs"
    },
  ];

  const benefitsData = [
    { icon: TrendingUp, value: "3x", label: "Average Traffic Increase", description: "Modern, SEO-optimized sites rank higher" },
    { icon: MousePointer, value: "2.5x", label: "Conversion Rate Boost", description: "Better UX means more leads and sales" },
    { icon: Clock, value: "50%", label: "Faster Load Times", description: "Modern tech stack = lightning speed" },
    { icon: Shield, value: "100%", label: "Security Improvement", description: "Latest security standards and practices" },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/blogs" className="text-orange-400 hover:text-orange-300 transition-colors">Blog</Link>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400">Website Redesign</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-orange-500">Website Redesign</span> Egypt 2026: When & How to Rebuild
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Is your website costing you customers? Learn the warning signs that it&apos;s time for a redesign, what it costs in Egypt, and how to do it without losing SEO rankings.
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-400">14 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">April 17, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-400">Expert Guide</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2">
                    Get Free Website Audit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#warning-signs" className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                    Check Warning Signs
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/website-redesign-egypt.jpg"
                    alt="Website Redesign Egypt 2026 - Jeday Media"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-sm">Sites Redesigned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">What a Redesign Can Do for Your Business</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{benefit.value}</div>
                  <div className="font-semibold text-gray-900 mb-1">{benefit.label}</div>
                  <div className="text-sm text-gray-500">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section id="warning-signs" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Is It Time?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                6 Warning Signs You Need a Website Redesign
              </h2>
              <p className="text-lg text-gray-600">
                Not every website needs a redesign. But if you&apos;re seeing these signs, your website is actively hurting your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {warningSignsData.map((sign, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all group">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                    <sign.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{sign.title}</h3>
                  <p className="text-gray-600">{sign.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Seeing 3+ of These Signs?
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    If your website shows three or more of these warning signs, you&apos;re likely losing significant revenue every month. A redesign isn&apos;t just an expense&mdash;it&apos;s an investment that pays for itself.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
                    Get Urgent Audit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How We Redesign Websites Without Losing SEO
              </h2>
              <p className="text-lg text-gray-600">
                A bad redesign can destroy your search rankings. Our proven process protects your SEO while transforming your site.
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Learn more about our{" "}
                <Link href="/web-development" className="text-orange-600 hover:underline font-medium">
                  web development process
                </Link>{" "}
                and{" "}
                <Link href="/blogs/seo-agency-egypt" className="text-orange-600 hover:underline font-medium">
                  SEO services
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Investment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Website Redesign Pricing in Egypt 2026
              </h2>
              <p className="text-lg text-gray-600">
                Transparent pricing based on project scope. Every project includes SEO migration and mobile optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-3xl p-8 ${tier.popular ? 'ring-2 ring-orange-500 shadow-xl' : 'border border-gray-200'}`}>
                  {tier.popular && (
                    <div className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-orange-500 mb-2">{tier.price}</div>
                  <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
                  <div className="text-sm text-gray-500 mb-6">
                    <strong>Timeline:</strong> {tier.timeline}<br />
                    <strong>Best for:</strong> {tier.best}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${tier.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border border-orange-500 text-orange-500 hover:bg-orange-50'}`}>
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                See our complete <Link href="/digital-marketing-pricing-egypt" className="text-orange-600 hover:underline font-medium">pricing guide</Link> for all services.
              </p>
            </div>
          </div>
        </section>

        {/* Redesign vs New Website */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Decision Guide</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Redesign vs. Build from Scratch?
              </h2>
              <p className="text-lg text-gray-400">
                Sometimes a redesign is enough. Sometimes you need to start fresh. Here&apos;s how to decide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <RefreshCw className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Choose Redesign When:</h3>
                <ul className="space-y-3">
                  {[
                    "Your current CMS still works well",
                    "Site structure is solid, just looks dated",
                    "You have good SEO rankings to protect",
                    "Content is still relevant and accurate",
                    "Budget is limited but improvements needed",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Build New When:</h3>
                <ul className="space-y-3">
                  {[
                    "CMS is outdated or insecure",
                    "Site architecture is fundamentally broken",
                    "You need completely new functionality",
                    "Content needs complete overhaul anyway",
                    "Current site can't be mobile-optimized",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">Not sure which you need?</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                Get Expert Assessment
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* SEO Protection Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-orange-500 font-semibold mb-4 block">SEO Protection</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How We Protect Your Rankings During Redesign
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Many redesigns destroy years of SEO work. Our process preserves and even improves your search rankings.
                </p>

                <ul className="space-y-4">
                  {[
                    { title: "URL Mapping", description: "We map all old URLs to new ones with proper 301 redirects" },
                    { title: "Content Audit", description: "Preserve and improve your best-performing content" },
                    { title: "Technical SEO", description: "Implement modern SEO best practices throughout" },
                    { title: "Speed Optimization", description: "Faster sites rank higher - we optimize everything" },
                    { title: "Structured Data", description: "Rich snippets and schema markup for better visibility" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href="/blogs/seo-agency-egypt" className="text-orange-600 font-medium hover:underline flex items-center gap-1">
                    Learn more about our SEO services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-12 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Our SEO Guarantee</h3>
                <p className="text-white/90 mb-8">
                  We&apos;re so confident in our SEO migration process that we guarantee no ranking drops. If your main keywords drop within 3 months of launch, we&apos;ll fix it free.
                </p>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                      <Shield className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-white/80">Ranking Protection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Web Development Agency Egypt", href: "/blogs/web-development-agency-egypt", description: "Full web development services from Egypt's top agency" },
                { title: "E-Commerce Website Development", href: "/blogs/ecommerce-website-development-egypt-2026", description: "Build a high-converting online store" },
                { title: "SEO Agency Egypt", href: "/blogs/seo-agency-egypt", description: "Rank higher and get more organic traffic" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{link.title}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div id="contact">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
