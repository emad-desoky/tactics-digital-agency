import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Custom Web Application Development Egypt 2026 | SaaS & Web Apps Cairo",
  description: "Expert custom web application development in Egypt 2026. SaaS platforms, dashboards, CRM systems & enterprise apps. React, Node.js, Python. Get free consultation.",
  keywords: "web application development egypt, custom software egypt, saas development cairo, web app developers egypt, enterprise software egypt",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Start Your Web Application Project</h2>
          <p className="text-gray-600 text-center mb-8">Tell us about your idea and get a custom development quote</p>
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
              placeholder="Describe your web application idea..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-lg">
              Get Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function CustomWebApplicationDevelopmentEgypt() {
  const appTypes = [
    { title: "SaaS Platforms", desc: "Multi-tenant subscription software with billing and user management", price: "From EGP 150,000", timeline: "3-6 months" },
    { title: "Business Dashboards", desc: "Data visualization and analytics platforms", price: "From EGP 80,000", timeline: "2-3 months" },
    { title: "CRM Systems", desc: "Custom customer relationship management solutions", price: "From EGP 100,000", timeline: "2-4 months" },
    { title: "Booking & Scheduling", desc: "Appointment booking and resource management apps", price: "From EGP 60,000", timeline: "6-10 weeks" },
    { title: "Inventory Management", desc: "Stock tracking and warehouse management systems", price: "From EGP 70,000", timeline: "2-3 months" },
    { title: "HR & Payroll Systems", desc: "Employee management and payroll processing", price: "From EGP 90,000", timeline: "2-4 months" },
  ]

  const techStack = [
    { category: "Frontend", techs: ["React", "Next.js", "Vue.js", "TypeScript"] },
    { category: "Backend", techs: ["Node.js", "Python", "PHP", "Go"] },
    { category: "Database", techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { category: "Cloud", techs: ["AWS", "Google Cloud", "Vercel", "Docker"] },
  ]

  const stats = [
    { metric: "50+", label: "Web apps delivered" },
    { metric: "99.9%", label: "Uptime guarantee" },
    { metric: "10+", label: "Years experience" },
    { metric: "24/7", label: "Support available" },
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
                  Enterprise-Grade Development
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Custom Web Application Development <span className="text-orange-500">Egypt 2026</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Build powerful SaaS platforms, dashboards, and enterprise software with Egypt&apos;s leading web application developers. Scalable, secure, and built to last.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-center">
                    Get Free Consultation
                  </a>
                  <a href="#apps" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-center">
                    View Solutions
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/custom-web-application-egypt.jpg"
                  alt="Custom Web Application Development Egypt - SaaS and enterprise software"
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

        {/* App Types */}
        <section id="apps" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Web Applications We Build</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From startup MVPs to enterprise solutions, we build custom web applications that solve real business problems
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appTypes.map((app, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-orange-500 font-semibold">{app.price}</span>
                    <span className="text-sm text-gray-500">{app.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Technology Stack</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {techStack.map((stack, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.techs.map((tech, j) => (
                      <div key={j} className="bg-gray-100 py-2 px-4 rounded-lg text-gray-700">{tech}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Development Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Discovery", desc: "Requirements gathering and technical planning" },
                { step: "2", title: "Design", desc: "UI/UX design and system architecture" },
                { step: "3", title: "Development", desc: "Agile sprints with regular demos" },
                { step: "4", title: "Testing", desc: "QA, security audits, and performance testing" },
                { step: "5", title: "Launch", desc: "Deployment, training, and ongoing support" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Development Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/blogs/mobile-app-development-egypt-2026" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Mobile App Development</h3>
                <p className="text-gray-400 text-sm">Complement your web app with mobile apps</p>
              </Link>
              <Link href="/blogs/ecommerce-website-development-egypt-2026" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">E-Commerce Development</h3>
                <p className="text-gray-400 text-sm">Build online stores with payment integration</p>
              </Link>
              <Link href="/blogs/best-marketing-agency-in-egypt/web-development-agency" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Web Development Agency</h3>
                <p className="text-gray-400 text-sm">Compare top agencies in Egypt</p>
              </Link>
              <Link href="/blogs/digital-marketing-pricing-egypt" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Pricing Guide</h3>
                <p className="text-gray-400 text-sm">Complete development pricing</p>
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
