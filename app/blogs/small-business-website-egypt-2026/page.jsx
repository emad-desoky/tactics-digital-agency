import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Small Business Website Egypt 2026 | Affordable Websites for SMEs Cairo",
  description: "Affordable small business websites in Egypt 2026. Professional websites from EGP 10,000. Perfect for startups, restaurants, clinics & local businesses. Free consultation.",
  keywords: "small business website egypt, affordable website cairo, cheap website egypt, sme website design, business website cost egypt",
}

function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Jeday Media
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-orange-500 transition">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-orange-500 transition">Services</Link>
            <Link href="/blogs" className="text-gray-600 hover:text-orange-500 transition">Blog</Link>
            <Link href="/about-us" className="text-gray-600 hover:text-orange-500 transition">About</Link>
            <Link href="/contact" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
              Get Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Jeday Media</h3>
            <p className="text-gray-400">Egypt&apos;s leading digital marketing and web development agency delivering results since 2018.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/web-development" className="hover:text-orange-500 transition">Web Development</Link></li>
              <li><Link href="/services/seo" className="hover:text-orange-500 transition">SEO Services</Link></li>
              <li><Link href="/services/social-media" className="hover:text-orange-500 transition">Social Media</Link></li>
              <li><Link href="/services/ppc" className="hover:text-orange-500 transition">Google Ads</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blogs" className="hover:text-orange-500 transition">Blog</Link></li>
              <li><Link href="/blogs/best-marketing-agency-in-egypt" className="hover:text-orange-500 transition">Agency Reviews</Link></li>
              <li><Link href="/blogs/digital-marketing-pricing-egypt" className="hover:text-orange-500 transition">Pricing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cairo, Egypt</li>
              <li>contact@jedaymedia.com</li>
              <li>+20 123 456 7890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Jeday Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you! We'll contact you within 24 hours.")
  }
  
  return (
    <section className="py-20 bg-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Get Your Small Business Website</h2>
          <p className="text-gray-600 text-center mb-8">Tell us about your business and get a free quote within 24 hours</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <textarea
              placeholder="Tell us about your business..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-lg">
              Get Free Quote Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function SmallBusinessWebsiteEgypt() {
  const packages = [
    { 
      name: "Starter", 
      price: "EGP 10,000", 
      features: ["5 Pages", "Mobile Responsive", "Contact Form", "Google Maps", "Social Media Links", "1 Month Support"],
      best: false
    },
    { 
      name: "Professional", 
      price: "EGP 20,000", 
      features: ["10 Pages", "Blog Section", "SEO Optimization", "WhatsApp Integration", "Analytics Setup", "3 Months Support"],
      best: true
    },
    { 
      name: "Premium", 
      price: "EGP 35,000", 
      features: ["Unlimited Pages", "Booking System", "Multi-language", "Live Chat", "Email Marketing Setup", "6 Months Support"],
      best: false
    },
  ]

  const industries = [
    { name: "Restaurants & Cafes", icon: "🍽️" },
    { name: "Medical Clinics", icon: "🏥" },
    { name: "Law Firms", icon: "⚖️" },
    { name: "Real Estate", icon: "🏠" },
    { name: "Fitness & Gyms", icon: "💪" },
    { name: "Beauty Salons", icon: "💇" },
    { name: "Retail Shops", icon: "🛍️" },
    { name: "Consulting", icon: "📊" },
  ]

  const whyWebsite = [
    { stat: "97%", label: "of consumers search online for local businesses" },
    { stat: "75%", label: "judge credibility based on website design" },
    { stat: "88%", label: "won't return after a bad website experience" },
    { stat: "70%", label: "of small businesses have a website in Egypt" },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Affordable Pricing for SMEs
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Small Business Website <span className="text-orange-500">Egypt 2026</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Professional websites for small businesses starting at just EGP 10,000. Get online in 2 weeks with a website that attracts customers and builds credibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-center">
                    Get Free Quote
                  </a>
                  <a href="#packages" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-center">
                    View Packages
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/small-business-website-egypt.jpg"
                  alt="Small Business Website Egypt - Affordable websites for SMEs in Cairo"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why You Need a Website */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Your Business Needs a Website</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {whyWebsite.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{item.stat}</div>
                  <div className="text-gray-600 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section id="packages" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">No hidden fees. Everything you need to get online.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, i) => (
                <div key={i} className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${pkg.best ? 'border-orange-500 relative' : 'border-gray-100'}`}>
                  {pkg.best && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`block text-center py-3 rounded-lg font-semibold transition ${pkg.best ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <div className="font-medium text-gray-900">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Every Website Includes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Mobile-First Design", desc: "Looks perfect on phones, tablets, and desktops" },
                { title: "Fast Loading Speed", desc: "Optimized for quick loading and better SEO" },
                { title: "Secure Hosting", desc: "SSL certificate and reliable hosting included" },
                { title: "Easy to Update", desc: "Simple admin panel to update content yourself" },
                { title: "Google My Business", desc: "Setup to appear in local search results" },
                { title: "Training Session", desc: "We teach you how to manage your website" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Grow Your Business Online</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/blogs/best-marketing-agency-in-egypt/seo-agency-egypt" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">SEO Services</h3>
                <p className="text-gray-400 text-sm">Get found on Google by local customers</p>
              </Link>
              <Link href="/blogs/best-marketing-agency-in-egypt/social-media-agency" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Social Media Marketing</h3>
                <p className="text-gray-400 text-sm">Build your brand on Facebook & Instagram</p>
              </Link>
              <Link href="/blogs/ecommerce-website-development-egypt-2026" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">E-Commerce Websites</h3>
                <p className="text-gray-400 text-sm">Start selling products online</p>
              </Link>
              <Link href="/blogs/digital-marketing-pricing-egypt" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Pricing Guide</h3>
                <p className="text-gray-400 text-sm">Complete marketing costs in Egypt</p>
              </Link>
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
  )
}
