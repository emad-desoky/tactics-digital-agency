import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Corporate Website Development Egypt 2026 | Enterprise Web Design Cairo",
  description: "Premium corporate website development in Egypt 2026. Enterprise-grade design for large companies, banks & multinationals. Multilingual, secure & scalable. Free consultation.",
  keywords: "corporate website egypt, enterprise web design cairo, company website development, business website egypt, professional web design egypt",
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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you! Our enterprise team will contact you within 24 hours.")
  }
  
  return (
    <section className="py-20 bg-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Request a Corporate Website Consultation</h2>
          <p className="text-gray-600 text-center mb-8">Our enterprise team will contact you within 24 hours</p>
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
                type="text"
                placeholder="Company Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Work Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <textarea
              placeholder="Tell us about your corporate website requirements..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-lg">
              Schedule Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function CorporateWebsiteDevelopmentEgypt() {
  const features = [
    { title: "Multilingual Support", desc: "Arabic, English, French and more with RTL support" },
    { title: "Enterprise Security", desc: "SSL, DDoS protection, regular security audits" },
    { title: "CMS Integration", desc: "Easy content management for your marketing team" },
    { title: "Brand Guidelines", desc: "Pixel-perfect implementation of your brand" },
    { title: "Accessibility", desc: "WCAG compliant for all users" },
    { title: "Performance", desc: "Optimized for speed and SEO rankings" },
  ]

  const industries = [
    "Banking & Finance", "Telecommunications", "Healthcare", "Manufacturing",
    "Oil & Gas", "Real Estate Development", "Government", "Education"
  ]

  const process = [
    { phase: "Discovery", duration: "1-2 weeks", tasks: ["Stakeholder interviews", "Competitor analysis", "Requirements documentation"] },
    { phase: "Strategy", duration: "1 week", tasks: ["Information architecture", "Content strategy", "Technical planning"] },
    { phase: "Design", duration: "2-4 weeks", tasks: ["Wireframes", "Visual design", "Prototype & testing"] },
    { phase: "Development", duration: "4-8 weeks", tasks: ["Frontend build", "CMS integration", "Third-party integrations"] },
    { phase: "Launch", duration: "1-2 weeks", tasks: ["QA testing", "Content migration", "Training & handover"] },
  ]

  const stats = [
    { metric: "30+", label: "Enterprise clients" },
    { metric: "100%", label: "On-time delivery" },
    { metric: "5+", label: "Languages supported" },
    { metric: "99.9%", label: "Uptime guarantee" },
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
                  Enterprise-Grade Solutions
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Corporate Website Development <span className="text-orange-500">Egypt 2026</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Premium corporate websites for Egypt&apos;s leading companies. Multilingual, secure, and built to represent your brand at the highest level.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-center">
                    Request Consultation
                  </a>
                  <a href="#process" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-center">
                    Our Process
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/corporate-website-egypt.jpg"
                  alt="Corporate Website Development Egypt - Enterprise web design for large companies"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{item.metric}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enterprise Features Included</h2>
              <p className="text-xl text-gray-600">Everything large organizations need from their corporate website</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, i) => (
                <span key={i} className="bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Enterprise Development Process</h2>
            <div className="space-y-8">
              {process.map((phase, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6">
                  <div className="md:w-48 shrink-0">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-2">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                    <p className="text-orange-500 font-medium">{phase.duration}</p>
                  </div>
                  <div className="flex-1">
                    <ul className="grid md:grid-cols-3 gap-4">
                      {phase.tasks.map((task, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Enterprise Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/blogs/custom-web-application-development-egypt-2026" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Custom Web Applications</h3>
                <p className="text-gray-400 text-sm">SaaS and enterprise software development</p>
              </Link>
              <Link href="/blogs/best-marketing-agency-in-egypt/web-development-agency" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Web Development Agency</h3>
                <p className="text-gray-400 text-sm">Compare top agencies in Egypt</p>
              </Link>
              <Link href="/blogs/website-redesign-egypt-2026" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Website Redesign</h3>
                <p className="text-gray-400 text-sm">Modernize your existing corporate site</p>
              </Link>
              <Link href="/blogs/best-marketing-agency-in-egypt/branding-agency-egypt" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Branding Services</h3>
                <p className="text-gray-400 text-sm">Complete corporate brand identity</p>
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
