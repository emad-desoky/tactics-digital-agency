"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  BarChart3, 
  Shield, 
  Zap,
  ArrowRight, 
  Clock, 
  CheckCircle, 
  Star,
  Globe,
  Users,
  DollarSign,
  Package,
  Smartphone,
  Search,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Award,
  Target,
  Layers
} from "lucide-react";

export const metadata = {
  title: "E-Commerce Website Development Egypt 2026 | Launch Your Online Store | Jeday Media",
  description: "Build a high-converting e-commerce website in Egypt 2026. Shopify, WooCommerce, custom solutions. Expert online store development from Jeday Media. Get started today.",
  keywords: "ecommerce website egypt, online store development egypt, shopify egypt, woocommerce egypt, ecommerce development cairo, online shop egypt 2026, build online store egypt",
  openGraph: {
    title: "E-Commerce Website Development Egypt 2026 | Launch Your Online Store",
    description: "Complete guide to building a successful e-commerce website in Egypt. Platforms, costs, features, and expert development services.",
    type: "article",
    publishedTime: "2026-04-16T00:00:00.000Z",
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
            Egypt&apos;s leading e-commerce and digital solutions agency. We build stores that sell.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">E-Commerce Services</h4>
          <ul className="space-y-3">
            <li><Link href="/blogs/ecommerce-website-development-egypt-2026" className="text-gray-400 hover:text-orange-500 transition-colors">Online Store Development</Link></li>
            <li><Link href="/web-development" className="text-gray-400 hover:text-orange-500 transition-colors">Web Development</Link></li>
            <li><Link href="/blogs/seo-agency-egypt" className="text-gray-400 hover:text-orange-500 transition-colors">E-Commerce SEO</Link></li>
            <li><Link href="/blogs/performance-marketing-egypt" className="text-gray-400 hover:text-orange-500 transition-colors">Performance Marketing</Link></li>
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
    phone: "",
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
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-gray-600 text-lg">
              Get a free e-commerce consultation. Our experts will help you choose the right platform and features.
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="+20 xxx xxx xxxx"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your E-Commerce Project</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="What products will you sell? How many products? Any specific features needed?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              Get Free E-Commerce Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default function EcommerceWebsiteDevelopmentEgyptBlog() {
  const platforms = [
    { 
      name: "Shopify", 
      price: "$29-299/mo + dev", 
      best: "Small to medium stores", 
      pros: ["Easy to use", "Fast setup", "Great apps", "Secure hosting"],
      cons: ["Transaction fees", "Limited customization"],
      icon: ShoppingCart
    },
    { 
      name: "WooCommerce", 
      price: "$0 (self-hosted)", 
      best: "WordPress users", 
      pros: ["Free & open source", "Full control", "Unlimited products", "No transaction fees"],
      cons: ["Requires hosting", "More maintenance"],
      icon: Globe
    },
    { 
      name: "Custom Solution", 
      price: "$15,000+", 
      best: "Large enterprises", 
      pros: ["Complete control", "Unique features", "Scalable", "No platform limits"],
      cons: ["Higher cost", "Longer development"],
      icon: Layers
    },
  ];

  const features = [
    { icon: CreditCard, title: "Payment Integration", description: "Accept payments via local gateways (Fawry, PayMob) and international options (Stripe, PayPal)" },
    { icon: Truck, title: "Shipping Integration", description: "Connect with Egyptian couriers like Aramex, DHL, Bosta for automated shipping" },
    { icon: Smartphone, title: "Mobile-First Design", description: "70% of Egyptian shoppers browse on mobile. Your store must be mobile-optimized" },
    { icon: Shield, title: "Secure Checkout", description: "SSL certificates, PCI compliance, and fraud protection for customer trust" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Track sales, inventory, customer behavior, and marketing performance" },
    { icon: Search, title: "SEO Optimization", description: "Built-in SEO features to rank higher in Google Egypt searches" },
  ];

  const pricingTiers = [
    { 
      name: "Starter Store", 
      price: "$2,000 - $5,000", 
      features: ["Up to 50 products", "Basic design template", "Payment integration", "Mobile responsive", "3 months support"],
      timeline: "2-4 weeks"
    },
    { 
      name: "Growth Store", 
      price: "$5,000 - $15,000", 
      features: ["Up to 500 products", "Custom design", "Advanced payment options", "Shipping integration", "Inventory management", "6 months support"],
      timeline: "4-8 weeks",
      popular: true
    },
    { 
      name: "Enterprise Store", 
      price: "$15,000+", 
      features: ["Unlimited products", "Custom functionality", "Multi-vendor support", "Advanced analytics", "API integrations", "12 months support"],
      timeline: "8-16 weeks"
    },
  ];

  const egyptStats = [
    { value: "62M+", label: "Internet Users in Egypt" },
    { value: "$6B+", label: "E-Commerce Market Size" },
    { value: "35%", label: "YoY Growth Rate" },
    { value: "70%", label: "Mobile Shopping Rate" },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/blogs" className="text-orange-400 hover:text-orange-300 transition-colors">Blog</Link>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400">E-Commerce</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-orange-500">E-Commerce</span> Website Development Egypt 2026
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Launch a high-converting online store in Egypt. From Shopify to custom solutions, discover how to build an e-commerce website that sells 24/7 and scales with your business.
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-400">12 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">April 16, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-400">Expert Guide</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2">
                    Start Your Store
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#platforms" className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                    Compare Platforms
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/ecommerce-website-egypt.jpg"
                    alt="E-Commerce Website Development Egypt 2026 - Jeday Media"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold">$6B+</div>
                    <div className="text-sm">Egypt E-Com Market</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Egypt E-Commerce Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900">Why E-Commerce in Egypt is Booming</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {egyptStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Comparison */}
        <section id="platforms" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Platform Comparison</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choosing the Right E-Commerce Platform
              </h2>
              <p className="text-lg text-gray-600">
                The platform you choose affects your store&apos;s performance, scalability, and total cost. Here&apos;s how the top options compare.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl hover:border-orange-200 transition-all">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <platform.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <div className="text-orange-500 font-semibold mb-2">{platform.price}</div>
                  <div className="text-sm text-gray-500 mb-6">Best for: {platform.best}</div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                    <ul className="space-y-2">
                      {platform.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                    <ul className="space-y-2">
                      {platform.cons.map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-4 h-4 text-red-500">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-orange-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Not Sure Which Platform to Choose?
                  </h3>
                  <p className="text-gray-600">
                    Our <Link href="/web-development" className="text-orange-600 hover:underline font-medium">web development experts</Link> can analyze your specific needs and recommend the best solution. We&apos;ve built 100+ e-commerce stores in Egypt.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                    Get Expert Advice
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Must-Have Features</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Essential E-Commerce Features for Egypt
              </h2>
              <p className="text-lg text-gray-600">
                Selling online in Egypt requires specific features. Here&apos;s what every Egyptian e-commerce store needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Investment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                E-Commerce Development Pricing in Egypt
              </h2>
              <p className="text-lg text-gray-600">
                Transparent pricing for every business size. Choose the package that fits your goals.
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
                  <div className="text-sm text-gray-500 mb-6">Timeline: {tier.timeline}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${tier.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border border-orange-500 text-orange-500 hover:bg-orange-50'}`}>
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                View our complete <Link href="/digital-marketing-pricing-egypt" className="text-orange-600 hover:underline font-medium">digital marketing pricing guide</Link> for bundled services.
              </p>
            </div>
          </div>
        </section>

        {/* E-Commerce Success Tips */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Success Tips</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How to Make Your E-Commerce Store Successful
              </h2>
              <p className="text-lg text-gray-400">
                Building the store is just step one. Here&apos;s how to drive traffic and convert visitors into customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  icon: Search, 
                  title: "Invest in E-Commerce SEO", 
                  description: "Rank for product searches and category keywords. Our SEO team can help you dominate Google Egypt.",
                  link: { text: "E-Commerce SEO Services", href: "/blogs/seo-agency-egypt" }
                },
                { 
                  icon: TrendingUp, 
                  title: "Run Performance Marketing", 
                  description: "Use Facebook, Instagram, and Google Ads to drive targeted traffic that converts.",
                  link: { text: "Performance Marketing", href: "/blogs/performance-marketing-egypt" }
                },
                { 
                  icon: Users, 
                  title: "Build Social Presence", 
                  description: "Egyptian consumers trust brands with active social media. Build engagement before pushing sales.",
                  link: { text: "Social Media Services", href: "/blogs/social-media-agency-egypt" }
                },
                { 
                  icon: Target, 
                  title: "Focus on Customer Experience", 
                  description: "Fast shipping, easy returns, and excellent support turn one-time buyers into loyal customers.",
                  link: null
                },
              ].map((tip, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                    <tip.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                  <p className="text-gray-400 mb-4">{tip.description}</p>
                  {tip.link && (
                    <Link href={tip.link.href} className="text-orange-500 font-medium hover:underline flex items-center gap-1">
                      {tip.link.text}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <span className="text-white/80 font-semibold mb-4 block">Success Story</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    How We Helped an Egyptian Fashion Brand Reach $500K/Month
                  </h2>
                  <p className="text-white/90 mb-8">
                    We built a custom Shopify store with Arabic/English support, integrated local payment gateways, and ran targeted social ads. The result? 10x revenue growth in 12 months.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Custom bilingual Shopify store</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Fawry & PayMob integration</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Instagram Shopping setup</span>
                    </li>
                  </ul>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
                    View Case Studies
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white/10 rounded-2xl p-8 text-center">
                    <div className="text-6xl font-bold mb-4">10x</div>
                    <div className="text-xl">Revenue Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Web Development Agency Egypt", href: "/blogs/web-development-agency-egypt", description: "Build any type of website with Egypt's top developers" },
                { title: "Mobile App Development Egypt", href: "/blogs/mobile-app-development-egypt-2026", description: "Add a mobile app to your e-commerce ecosystem" },
                { title: "Digital Marketing Pricing Egypt", href: "/digital-marketing-pricing-egypt", description: "Complete pricing for all our digital services" },
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
