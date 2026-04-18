import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Landing Page Design Egypt 2026 | High-Converting Landing Pages Cairo",
  description: "Professional landing page design in Egypt 2026. Conversion-optimized pages that turn visitors into customers. From EGP 8,000. Free consultation & A/B testing.",
  keywords: "landing page design egypt, landing page cairo, conversion optimization egypt, lead generation page egypt, sales page design",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Get a High-Converting Landing Page</h2>
          <p className="text-gray-600 text-center mb-8">Tell us about your campaign and get a custom quote within 24 hours</p>
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
              placeholder="Tell us about your landing page needs..."
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

export default function LandingPageDesignEgypt() {
  const landingPageTypes = [
    { title: "Lead Generation Pages", desc: "Capture leads with optimized forms and compelling offers", price: "From EGP 8,000", conversion: "15-25% avg conversion" },
    { title: "Sales Pages", desc: "Long-form pages designed to sell products or services", price: "From EGP 12,000", conversion: "5-12% avg conversion" },
    { title: "Click-Through Pages", desc: "Warm up visitors before sending to checkout", price: "From EGP 6,000", conversion: "30-50% click-through" },
    { title: "Event Registration", desc: "Webinar, conference, and event signup pages", price: "From EGP 7,000", conversion: "20-35% registration" },
    { title: "App Download Pages", desc: "Drive mobile app installs with compelling pages", price: "From EGP 10,000", conversion: "10-20% install rate" },
    { title: "Coming Soon Pages", desc: "Build anticipation and collect early signups", price: "From EGP 5,000", conversion: "25-40% signup rate" },
  ]

  const conversionElements = [
    "Compelling Headlines", "Trust Badges & Social Proof", "Clear Call-to-Actions",
    "Benefit-Focused Copy", "Mobile Optimization", "Fast Load Times",
    "A/B Testing Setup", "Analytics Integration", "Form Optimization"
  ]

  const results = [
    { metric: "300%", label: "Average conversion increase" },
    { metric: "50+", label: "Landing pages delivered" },
    { metric: "2.5M", label: "Leads generated for clients" },
    { metric: "4.8s", label: "Average page load time" },
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
                  Conversion-Focused Design
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Landing Page Design <span className="text-orange-500">Egypt 2026</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  High-converting landing pages that turn visitors into leads and customers. Data-driven design with A/B testing. Starting at EGP 8,000.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-center">
                    Get Free Quote
                  </a>
                  <a href="#types" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-center">
                    View Examples
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/landing-page-design-egypt.jpg"
                  alt="Landing Page Design Egypt - High-converting landing pages in Cairo"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Landing Page Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {results.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{item.metric}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Landing Page Types */}
        <section id="types" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Landing Page Types We Create</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every landing page is custom-designed for your specific campaign goals and target audience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landingPageTypes.map((type, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-orange-500 font-semibold">{type.price}</span>
                    <span className="text-sm text-gray-500">{type.conversion}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Elements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Every Page Includes These Conversion Elements</h2>
                <p className="text-xl text-gray-600 mb-8">
                  We don&apos;t just make pretty pages. Every element is strategically placed to maximize conversions and ROI.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {conversionElements.map((element, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{element}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Landing Page Process</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Strategy Call", desc: "Understand your goals, audience, and offer" },
                    { step: "2", title: "Wireframe & Copy", desc: "Structure and persuasive messaging" },
                    { step: "3", title: "Design & Build", desc: "Pixel-perfect responsive design" },
                    { step: "4", title: "Test & Optimize", desc: "A/B testing and continuous improvement" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Maximize Your Landing Page Results</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/blogs/best-marketing-agency-in-egypt/performance-marketing" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Performance Marketing</h3>
                <p className="text-gray-400 text-sm">Drive traffic to your landing pages with paid ads</p>
              </Link>
              <Link href="/blogs/best-marketing-agency-in-egypt/seo-agency-egypt" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">SEO Services</h3>
                <p className="text-gray-400 text-sm">Get organic traffic to your landing pages</p>
              </Link>
              <Link href="/blogs/wordpress-website-development-egypt-2026" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">WordPress Development</h3>
                <p className="text-gray-400 text-sm">Full website to complement your landing pages</p>
              </Link>
              <Link href="/blogs/digital-marketing-pricing-egypt" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Pricing Guide</h3>
                <p className="text-gray-400 text-sm">Complete marketing pricing in Egypt</p>
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
