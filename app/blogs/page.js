import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home-page/footer/Footer";
import { manualBlogs } from "./manual-blogs";
import { FaArrowRight, FaCalendar } from "react-icons/fa";

export const metadata = {
  title: "Digital Marketing Blog Egypt | SEO, Social & Growth",
  description:
    "Practical Egypt marketing guides covering SEO, social media, branding, content, performance marketing, pricing, and lead generation.",
  alternates: {
    canonical: "https://www.tacticsdigitalagency.net/blogs",
  },
  openGraph: {
    title: "Digital Marketing Blog Egypt | Tactics",
    description:
      "Decision-focused guides for Egyptian businesses comparing SEO, social media, branding, content, and paid growth.",
    url: "https://www.tacticsdigitalagency.net/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  const pillarBlogs = manualBlogs
    .filter((blog) => blog.isPillar)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const clusterBlogs = manualBlogs
    .filter((blog) => !blog.isPillar)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-neutral-950 min-h-screen text-gray-200 font-sans selection:bg-[rgb(255,228,0)] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[rgb(255,228,0)]/10 border border-[rgb(255,228,0)]/30 rounded-full px-4 py-1 text-[rgb(255,228,0)] text-sm font-medium mb-6">
              SEO & Growth Guides
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Marketing <span className="text-[rgb(255,228,0)]">Decision Guides</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Practical, updated guides for Egyptian businesses comparing SEO,
              social media, branding, content, performance marketing, pricing,
              and agency selection - with clear decision frameworks and next steps.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-16">
        {/* Featured Pillar Guides */}
        {pillarBlogs.length > 0 && (
          <section className="mb-16">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div><p className="text-[rgb(255,228,0)] text-sm font-semibold mb-2">High-intent 2026 guides</p><h2 className="text-2xl font-bold text-white">Featured Pillar Guides</h2></div>
              <span className="hidden sm:block text-sm text-gray-500">Built from search demand, buyer intent and query ownership</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {pillarBlogs.map((pillarBlog) => (
                <Link key={pillarBlog.id} href={`/blogs/${pillarBlog.id}`} className="group block bg-neutral-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[rgb(255,228,0)]/50 transition-all duration-300">
                  <div className="relative h-60">
                    <Image src={pillarBlog.image} alt={pillarBlog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" priority={pillarBlog.id === pillarBlogs[0]?.id} />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                    <span className="absolute left-5 top-5 bg-[rgb(255,228,0)] text-black text-xs font-bold px-3 py-1.5 rounded-full">PILLAR GUIDE</span>
                  </div>
                  <div className="p-7">
                    <div className="flex flex-wrap gap-2 mb-4">{pillarBlog.tags.slice(0, 3).map((tag) => <span key={tag} className="bg-[rgb(255,228,0)]/10 text-[rgb(255,228,0)] text-xs font-medium px-3 py-1 rounded-full">{tag}</span>)}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[rgb(255,228,0)] transition-colors">{pillarBlog.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{pillarBlog.description}</p>
                    <div className="flex items-center justify-between"><span className="text-gray-500 text-sm">{new Date(pillarBlog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span><span className="text-[rgb(255,228,0)] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">Read Guide <FaArrowRight /></span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Cluster Articles */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">
            Latest & Updated Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clusterBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}
                className="group bg-neutral-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[rgb(255,228,0)]/50 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-neutral-800 text-gray-400 text-xs font-medium px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[rgb(255,228,0)] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-[rgb(255,228,0)] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read
                      <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
