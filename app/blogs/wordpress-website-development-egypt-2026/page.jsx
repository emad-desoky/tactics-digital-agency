import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "WordPress Website Development Egypt 2026 | Best WordPress Developers Cairo",
  description: "Expert WordPress website development in Egypt 2026. Custom themes, WooCommerce, plugins & maintenance. Get a professional WordPress site from EGP 15,000. Free consultation.",
  keywords: "wordpress development egypt, wordpress website cairo, wordpress developer egypt, woocommerce egypt, wordpress agency egypt",
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
  return (
    <section className="py-20 bg-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Get Your Free WordPress Consultation</h2>
          <p className="text-gray-600 text-center mb-8">Tell us about your project and get a custom quote within 24 hours</p>
          <form action="/api/contact" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <textarea
              name="message"
              placeholder="Tell us about your WordPress project..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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

export default function WordPressWebsiteDevelopmentEgypt() {
  const wordpressServices = [
    { title: "Custom Theme Development", desc: "Unique designs built from scratch matching your brand", price: "From EGP 25,000" },
    { title: "WooCommerce Stores", desc: "Full e-commerce functionality with payment integration", price: "From EGP 35,000" },
    { title: "Theme Customization", desc: "Modify existing themes to fit your needs", price: "From EGP 15,000" },
    { title: "Plugin Development", desc: "Custom plugins for specific functionality", price: "From EGP 10,000" },
    { title: "WordPress Migration", desc: "Move from any platform to WordPress", price: "From EGP 8,000" },
    { title: "Maintenance & Support", desc: "Updates, security, backups, and support", price: "From EGP 2,500/mo" },
  ]

  const whyWordpress = [
    { stat: "43%", label: "of all websites use WordPress" },
    { stat: "60%", label: "of CMS market share" },
    { stat: "500+", label: "new sites built daily" },
    { stat: "59,000+", label: "free plugins available" },
  ]

  const faqs = [
    { q: "How long does it take to build a WordPress website?", a: "A basic WordPress site takes 2-3 weeks. Custom themes and WooCommerce stores take 4-8 weeks depending on complexity." },
    { q: "Is WordPress good for SEO?", a: "Yes! WordPress is SEO-friendly out of the box. With plugins like Yoast SEO and proper optimization, WordPress sites rank excellently on Google." },
    { q: "Can I update the website myself?", a: "Absolutely. WordPress has an intuitive admin panel. We provide training so you can easily update content, add blog posts, and manage products." },
    { q: "Do you provide hosting?", a: "We recommend and can set up premium WordPress hosting on providers like Cloudways, SiteGround, or WP Engine for optimal performance." },
    { q: "Is WordPress secure?", a: "With proper security plugins, regular updates, and SSL certificates, WordPress is highly secure. We implement enterprise-grade security on all sites." },
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
                  #1 WordPress Agency in Egypt
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  WordPress Website Development <span className="text-orange-500">Egypt 2026</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Professional WordPress development from Egypt&apos;s leading agency. Custom themes, WooCommerce stores, and enterprise solutions starting at EGP 15,000.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition text-center">
                    Get Free Quote
                  </a>
                  <a href="#services" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-center">
                    View Services
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/wordpress-development-egypt.jpg"
                  alt="WordPress Website Development Egypt - Professional WordPress developers in Cairo"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why WordPress Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why WordPress Powers the Web</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {whyWordpress.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{item.stat}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WordPress Development Services in Egypt</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From simple blogs to complex WooCommerce stores, we build WordPress solutions that drive results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wordpressServices.map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <div className="text-orange-500 font-semibold">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our WordPress Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Discovery", desc: "We analyze your requirements, goals, and target audience" },
                { step: "2", title: "Design", desc: "Custom mockups and wireframes for your approval" },
                { step: "3", title: "Development", desc: "Building your site with clean code and best practices" },
                { step: "4", title: "Launch", desc: "Testing, optimization, and go-live support" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Web Development Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/blogs/ecommerce-website-development-egypt-2026" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">E-Commerce Development</h3>
                <p className="text-gray-400 text-sm">Build your online store with WooCommerce or Shopify</p>
              </Link>
              <Link href="/blogs/best-marketing-agency-in-egypt/web-development-agency" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Web Development Agency</h3>
                <p className="text-gray-400 text-sm">Compare top web development agencies in Egypt</p>
              </Link>
              <Link href="/blogs/website-redesign-egypt-2026" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Website Redesign</h3>
                <p className="text-gray-400 text-sm">Modernize your outdated website</p>
              </Link>
              <Link href="/blogs/digital-marketing-pricing-egypt" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
                <h3 className="font-semibold text-orange-400 mb-2">Pricing Guide</h3>
                <p className="text-gray-400 text-sm">Complete digital marketing costs in Egypt</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">WordPress Development FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
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
  )
}
