"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Smartphone, 
  Code, 
  Rocket, 
  DollarSign, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Target,
  Zap,
  Shield,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Award,
  Globe,
  Layers
} from "lucide-react";

export const metadata = {
  title: "How to Build a Mobile App in Egypt 2026 | Complete Development Guide | Jeday Media",
  description: "Learn how to build a successful mobile app in Egypt 2026. Discover costs, timelines, best practices, and why Egyptian app development is your smartest investment. Get expert guidance from Jeday Media.",
  keywords: "mobile app development egypt, build app egypt, app development cost egypt, ios android development cairo, mobile application egypt 2026, app developers egypt, flutter react native egypt",
  openGraph: {
    title: "How to Build a Mobile App in Egypt 2026 | Complete Development Guide",
    description: "Your ultimate guide to mobile app development in Egypt. From ideation to launch, learn everything about building successful apps with Egyptian developers.",
    type: "article",
    publishedTime: "2026-04-15T00:00:00.000Z",
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
            Egypt&apos;s leading digital marketing and development agency. We build brands that dominate.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-3">
            <li><Link href="/web-development" className="text-gray-400 hover:text-orange-500 transition-colors">Web Development</Link></li>
            <li><Link href="/blogs/mobile-app-development-egypt-2026" className="text-gray-400 hover:text-orange-500 transition-colors">Mobile App Development</Link></li>
            <li><Link href="/seo" className="text-gray-400 hover:text-orange-500 transition-colors">SEO Services</Link></li>
            <li><Link href="/social-media" className="text-gray-400 hover:text-orange-500 transition-colors">Social Media Marketing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/blogs" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</Link></li>
            <li><Link href="/case-studies" className="text-gray-400 hover:text-orange-500 transition-colors">Case Studies</Link></li>
            <li><Link href="/pricing" className="text-gray-400 hover:text-orange-500 transition-colors">Pricing</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-gray-600 text-lg">
              Get a free consultation and quote for your app project. Our experts will respond within 24 hours.
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your App Idea</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="Describe your mobile app project, target audience, and key features..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              Get Free App Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default function MobileAppDevelopmentEgyptBlog() {
  const tableOfContents = [
    { id: "why-egypt", title: "Why Build Your App in Egypt?" },
    { id: "costs", title: "Mobile App Development Costs" },
    { id: "process", title: "The Development Process" },
    { id: "technologies", title: "Technologies We Use" },
    { id: "timeline", title: "Timeline & Milestones" },
    { id: "success-factors", title: "Key Success Factors" },
  ];

  const appCosts = [
    { type: "Simple App", price: "$5,000 - $15,000", features: ["Basic UI/UX", "5-10 screens", "Standard features", "Single platform"], timeline: "6-8 weeks" },
    { type: "Medium App", price: "$15,000 - $40,000", features: ["Custom UI/UX", "15-25 screens", "API integrations", "Both platforms"], timeline: "3-4 months" },
    { type: "Complex App", price: "$40,000 - $100,000+", features: ["Advanced features", "30+ screens", "Custom backend", "Scalable architecture"], timeline: "4-8 months" },
  ];

  const technologies = [
    { name: "Flutter", description: "Cross-platform excellence with native performance", icon: Smartphone },
    { name: "React Native", description: "JavaScript-powered mobile development", icon: Code },
    { name: "Swift/Kotlin", description: "Native iOS and Android development", icon: Zap },
    { name: "Firebase", description: "Backend infrastructure and analytics", icon: Shield },
  ];

  const processSteps = [
    { step: 1, title: "Discovery & Planning", description: "We analyze your business goals, target audience, and competitors to create a solid app strategy.", duration: "1-2 weeks" },
    { step: 2, title: "UI/UX Design", description: "Our designers create intuitive interfaces and engaging user experiences that convert.", duration: "2-4 weeks" },
    { step: 3, title: "Development", description: "Expert developers build your app using cutting-edge technologies and best practices.", duration: "6-16 weeks" },
    { step: 4, title: "Testing & QA", description: "Rigorous testing ensures your app is bug-free and performs flawlessly.", duration: "2-3 weeks" },
    { step: 5, title: "Launch & Support", description: "We handle app store submissions and provide ongoing maintenance.", duration: "Ongoing" },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/blogs" className="text-orange-400 hover:text-orange-300 transition-colors">Blog</Link>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400">Mobile Development</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  How to Build a <span className="text-orange-500">Mobile App</span> in Egypt 2026
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Your complete guide to mobile app development in Egypt. Discover costs, timelines, technologies, and why Egyptian developers are your best choice for building world-class applications.
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-400">15 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">April 15, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-400">Expert Guide</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2">
                    Start Your App Project
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#costs" className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                    View Pricing
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/mobile-app-development-egypt.jpg"
                    alt="Mobile App Development Egypt 2026 - Jeday Media"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold">200+</div>
                    <div className="text-sm">Apps Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tableOfContents.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors group"
                  >
                    <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-semibold text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 group-hover:text-orange-600 transition-colors">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Egypt Section */}
        <section id="why-egypt" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Why Choose Egypt?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Build Your Mobile App in Egypt?
              </h2>
              <p className="text-lg text-gray-600">
                Egypt has emerged as a global hub for mobile app development, combining world-class talent with competitive pricing. Here&apos;s why smart businesses choose Egyptian developers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: DollarSign, title: "60-70% Cost Savings", description: "Get the same quality as US/EU developers at a fraction of the cost. Egyptian developers offer premium work without the premium price tag." },
                { icon: Users, title: "500,000+ Tech Graduates", description: "Egypt produces more engineering graduates than any other MENA country. Access a deep pool of skilled, English-fluent developers." },
                { icon: Clock, title: "Optimal Time Zone", description: "GMT+2 means significant overlap with both European and US business hours, enabling real-time collaboration and faster turnaround." },
                { icon: Award, title: "Rising Tech Ecosystem", description: "Cairo is home to Africa's largest tech hub. Egyptian startups have raised over $1 billion, proving world-class capabilities." },
                { icon: Globe, title: "Cultural Alignment", description: "Egyptian developers understand both Middle Eastern and Western markets, making them ideal for apps targeting diverse audiences." },
                { icon: Rocket, title: "Proven Track Record", description: "Egyptian teams have built apps for Fortune 500 companies, successful startups, and everything in between." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all group">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                    <item.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-orange-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Related: <Link href="/web-development" className="text-orange-600 hover:underline">Web Development Services in Egypt</Link>
                  </h3>
                  <p className="text-gray-600">
                    Looking for web development alongside your mobile app? Our full-stack teams can build your entire digital ecosystem. From responsive websites to complex web applications, we deliver end-to-end solutions.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <Link href="/web-development" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors">
                    Explore Web Dev
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Costs Section */}
        <section id="costs" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Transparent Pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mobile App Development Costs in Egypt 2026
              </h2>
              <p className="text-lg text-gray-600">
                Understanding app development costs is crucial for planning your budget. Here&apos;s what to expect when building your app in Egypt.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {appCosts.map((tier, index) => (
                <div key={index} className={`bg-white rounded-3xl p-8 ${index === 1 ? 'ring-2 ring-orange-500 shadow-xl' : 'border border-gray-200'}`}>
                  {index === 1 && (
                    <div className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.type}</h3>
                  <div className="text-3xl font-bold text-orange-500 mb-4">{tier.price}</div>
                  <div className="text-sm text-gray-500 mb-6">Timeline: {tier.timeline}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${index === 1 ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border border-orange-500 text-orange-500 hover:bg-orange-50'}`}>
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Want detailed pricing for your specific project? Check out our{" "}
                <Link href="/digital-marketing-pricing-egypt" className="text-orange-600 hover:underline font-medium">
                  complete pricing guide
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Mobile App Development Process
              </h2>
              <p className="text-lg text-gray-600">
                From idea to App Store, here&apos;s how we build successful mobile applications that users love.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200" />
              
              {processSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="lg:hidden w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <span className="text-sm text-orange-500 font-medium">{step.duration}</span>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Tech Stack</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-400">
                We use the latest technologies to build fast, scalable, and maintainable mobile applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors group">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                    <tech.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                  <p className="text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-6">
                Not sure which technology is right for your project? Our{" "}
                <Link href="/web-development" className="text-orange-500 hover:underline">
                  web development experts
                </Link>{" "}
                can help you decide.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-orange-500 font-semibold mb-4 block">Timeline</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How Long Does It Take to Build an App?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  App development timelines vary based on complexity. Here&apos;s what affects your project duration and how to optimize it.
                </p>

                <div className="space-y-6">
                  {[
                    { label: "MVP Launch", value: "6-12 weeks", description: "Get to market fast with core features" },
                    { label: "Full Product", value: "3-6 months", description: "Complete feature set with polish" },
                    { label: "Enterprise App", value: "6-12 months", description: "Complex integrations and scale" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-xl flex items-center justify-center">
                        <Clock className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.label}</h4>
                        <div className="text-orange-500 font-semibold">{item.value}</div>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-12 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Speed Up Your Development</h3>
                <ul className="space-y-4">
                  {[
                    "Have clear requirements before starting",
                    "Prioritize features for MVP launch",
                    "Use cross-platform frameworks",
                    "Work with experienced developers",
                    "Maintain open communication",
                  ].map((tip, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/80 mb-4">Need a faster timeline?</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
                    Talk to Our Team
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section id="success-factors" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-orange-500 font-semibold mb-4 block">Success Factors</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes a Mobile App Successful?
              </h2>
              <p className="text-lg text-gray-600">
                Building the app is just the beginning. Here&apos;s what separates successful apps from the ones that fail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  icon: Target, 
                  title: "Solve a Real Problem", 
                  description: "Successful apps address genuine user pain points. Before building, validate your idea with real potential users.",
                  link: { text: "Learn market research", href: "/blogs/best-marketing-agency-egypt" }
                },
                { 
                  icon: Users, 
                  title: "Focus on UX", 
                  description: "Users abandon apps with poor experiences. Invest in intuitive design and smooth performance.",
                  link: { text: "UX design services", href: "/web-development" }
                },
                { 
                  icon: TrendingUp, 
                  title: "Plan for Growth", 
                  description: "Build with scalability in mind. Your architecture should handle 10x your initial user base.",
                  link: null
                },
                { 
                  icon: Layers, 
                  title: "Iterate Based on Data", 
                  description: "Use analytics to understand user behavior. Continuously improve based on real usage patterns.",
                  link: { text: "Performance marketing", href: "/blogs/performance-marketing-egypt" }
                },
              ].map((factor, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <factor.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h3>
                  <p className="text-gray-600 mb-4">{factor.description}</p>
                  {factor.link && (
                    <Link href={factor.link.href} className="text-orange-600 font-medium hover:underline flex items-center gap-1">
                      {factor.link.text}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Web Development Agency Egypt", href: "/blogs/web-development-agency-egypt", description: "Complete your digital presence with a professional website" },
                { title: "SEO Agency Egypt", href: "/blogs/seo-agency-egypt", description: "Get your app discovered in search results" },
                { title: "Social Media Agency Egypt", href: "/blogs/social-media-agency-egypt", description: "Promote your app to millions of users" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors group">
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
