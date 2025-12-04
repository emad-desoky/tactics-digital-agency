import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import { FaCode, FaMobileAlt, FaRocket, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Web Development Company Egypt | Next.js & SEO Experts",
  description:
    "Custom web development services in Egypt using Next.js. Fast, secure, and SEO-optimized websites that convert.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-[rgb(255,228,0)] font-bold uppercase tracking-widest text-sm mb-4">
              Modern Tech Stack
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Websites That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,228,0)] to-yellow-600">
                Load Instantly.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              We build next-generation websites using Next.js and React. No slow
              WordPress themes. Just pure performance and SEO dominance.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[rgb(255,228,0)] text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Start Your Project <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-neutral-900 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800">
              <FaRocket className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Blazing Fast Speed</h3>
              <p className="text-gray-400">
                We optimize Core Web Vitals to ensure your site loads in under 1
                second, boosting Google rankings.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800">
              <FaMobileAlt className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Mobile First</h3>
              <p className="text-gray-400">
                Over 80% of Egyptian traffic is mobile. We design experiences
                that feel native on phones.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800">
              <FaCode className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">SEO Built-In</h3>
              <p className="text-gray-400">
                Clean code, semantic HTML, and dynamic metadata handling (SSR)
                to keep Google happy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
