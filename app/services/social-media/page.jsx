import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import { FaBullhorn, FaUsers, FaPenFancy, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Social Media Agency in Egypt | Content & Community",
  description:
    "Build a loyal community with Tactics. Expert social media management, creative content creation, and influencer marketing in Cairo.",
};

export default function SocialMediaPage() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-[rgb(255,228,0)] font-bold uppercase tracking-widest text-sm mb-4">
              Social First
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Turn Followers into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,228,0)] to-yellow-600">
                Loyal Customers.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              We don&apos;t just post. We build brands. From viral TikToks to
              professional LinkedIn thought leadership, we own your voice
              online.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[rgb(255,228,0)] text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Get a Proposal <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-neutral-900 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors">
              <FaPenFancy className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Creative Content</h3>
              <p className="text-gray-400">
                High-quality reels, designs, and copy that stop the scroll and
                engage the Egyptian audience.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors">
              <FaUsers className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Community Management</h3>
              <p className="text-gray-400">
                We reply to comments and messages fast, turning inquiries into
                sales and complaints into loyalty.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-950 border border-gray-800 hover:border-[rgb(255,228,0)] transition-colors">
              <FaBullhorn className="text-4xl text-[rgb(255,228,0)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Influencer Campaigns</h3>
              <p className="text-gray-400">
                Partner with the right voices in Egypt to amplify your message
                authentically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
