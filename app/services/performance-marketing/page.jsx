import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import {
  FaChartLine,
  FaSearchDollar,
  FaTarget,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "Performance Marketing Agency in Egypt | ROI Focused Ads",
  description:
    "Maximize your ROI with Tactics. We specialize in Meta Ads, Google Ads, and Performance Marketing strategies tailored for the Egyptian market.",
};

export default function PerformanceMarketingPage() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-[rgb(255,228,0)] font-bold uppercase tracking-widest text-sm mb-4">
              Performance First
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stop Paying for Clicks. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,228,0)] to-yellow-600">
                Pay for Results.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              We manage high-performance ad campaigns on Facebook, Instagram,
              Google, and TikTok. Our only KPI is your ROAS (Return on Ad
              Spend).
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[rgb(255,228,0)] text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Get Your Free Audit <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(255,228,0)]/10 via-neutral-950 to-neutral-950 blur-3xl -z-10"></div>
      </section>

      {/* Features */}
      <section className="py-20 bg-neutral-900 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800">
              <FaTarget className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Precision Targeting</h3>
              <p className="text-gray-400">
                We use advanced audience segmentation to reach the exact people
                who are ready to buy your product in Egypt.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800">
              <FaSearchDollar className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Google Ads & SEO</h3>
              <p className="text-gray-400">
                Capture high-intent traffic. When customers search for your
                service, we ensure you appear at the top.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800">
              <FaChartLine className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Real-Time Reporting</h3>
              <p className="text-gray-400">
                No vague reports. You get a live dashboard showing spend, leads,
                cost-per-acquisition, and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 container mx-auto px-4 lg:px-8">
        <div className="bg-[rgb(255,228,0)] rounded-3xl p-12 text-center text-black">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the fastest growing companies in Cairo. Let&apos;s build a
            strategy that actually works.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-colors"
          >
            Start Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
