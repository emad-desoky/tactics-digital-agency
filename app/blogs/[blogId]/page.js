import { getBlogById, incrementBlogViews } from "@/model/blogs";
import Link from "next/link";
import { Calendar, User, Eye, ArrowLeft, Tag } from "lucide-react";
import Image from "next/image";
import SocialShare from "@/components/blogs/SocialShare";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  const { blogId } = params;
  const blog = await getBlogById(blogId);

  if (!blog) {
    return {
      title: "Blog Not Found - Tactics Digital Agency",
      description: "The requested blog post could not be found.",
    };
  }

  const cleanContent =
    blog.content
      ?.replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim() || "";
  const excerpt =
    cleanContent.length > 155
      ? cleanContent.substring(0, 152) + "..."
      : cleanContent;
  const metaDescription =
    blog.description ||
    excerpt ||
    `Read ${blog.title} on Tactics Digital Agency blog.`;

  // Ensure absolute URL for images
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.tacticsdigitalagency.net";
  const blogImageUrl =
    blog.image && blog.image.startsWith("http")
      ? blog.image
      : blog.image
      ? `${baseUrl}${blog.image.startsWith("/") ? "" : "/"}${blog.image}`
      : `${baseUrl}/og-blog-default.jpg`;

  const blogUrl = `${baseUrl}/blogs/${blogId}`;

  return {
    title: `${blog.title} | Tactics Digital Agency Blog`,
    description: metaDescription,
    keywords: blog.tags?.join(", ") || "digital marketing, blog",

    // Open Graph tags - these will override the root layout ones
    openGraph: {
      title: blog.title,
      description: metaDescription,
      url: blogUrl,
      siteName: "Tactics Digital Agency",
      type: "article",
      publishedTime: blog.date,
      modifiedTime: blog.updatedAt || blog.date,
      authors: [blog.adminName],
      section: "Blog",
      tags: blog.tags || [],
      images: [
        {
          url: blogImageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: "image/jpeg",
        },
        // Fallback image
        {
          url: `${baseUrl}/og-tactics-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Tactics Digital Agency",
          type: "image/jpeg",
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      site: "@tacticsdigital",
      creator: "@tacticsdigital",
      title: blog.title,
      description: metaDescription,
      images: [
        {
          url: blogImageUrl,
          alt: blog.title,
        },
      ],
    },

    // Additional meta tags for better social media support
    other: {
      // WhatsApp specific
      "whatsapp:image": blogImageUrl,
      "whatsapp:title": blog.title,
      "whatsapp:description": metaDescription,

      // General image meta
      image: blogImageUrl,
      thumbnail: blogImageUrl,

      // Article specific
      "article:published_time": blog.date,
      "article:modified_time": blog.updatedAt || blog.date,
      "article:author": blog.adminName,
      "article:section": "Blog",
      "article:tag": blog.tags?.join(",") || "",
    },

    alternates: {
      canonical: `/blogs/${blogId}`,
    },

    // Robots meta
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPage({ params }) {
  const { blogId } = params;

  // Get fresh blog data
  const blog = await getBlogById(blogId);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <Eye className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The requested blog post could not be found or may have been removed.
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Check if this is a real user visit (not a bot or crawler)
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

  // Only increment view count for real users, not bots
  if (!isBot) {
    // Increment view count using your existing model function
    await incrementBlogViews(blogId);
  }

  return (
    <>
      {/* Additional meta tags in head for better social media crawling */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.description,
            image:
              blog.image && blog.image.startsWith("http")
                ? blog.image
                : `${
                    process.env.NEXT_PUBLIC_SITE_URL ||
                    "https://www.tacticsdigitalagency.net"
                  }${blog.image?.startsWith("/") ? "" : "/"}${
                    blog.image || "og-blog-default.jpg"
                  }`,
            author: {
              "@type": "Person",
              name: blog.adminName,
            },
            publisher: {
              "@type": "Organization",
              name: "Tactics Digital Agency",
              logo: {
                "@type": "ImageObject",
                url: `${
                  process.env.NEXT_PUBLIC_SITE_URL ||
                  "https://www.tacticsdigitalagency.net"
                }/og-tactics-image.jpg`,
              },
            },
            datePublished: blog.date,
            dateModified: blog.updatedAt || blog.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://www.tacticsdigitalagency.net"
              }/blogs/${blogId}`,
            },
            keywords: blog.tags?.join(", ") || "digital marketing, blog",
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/blogs"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blogs
              </Link>

              {/* Breadcrumb */}
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <Link
                  href="/"
                  className="hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/blogs"
                  className="hover:text-gray-900 transition-colors"
                >
                  Blog
                </Link>
                <span>/</span>
                <span className="text-gray-900 truncate max-w-48">
                  {blog.title}
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Image Section */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src={blog.image || "/placeholder.svg?height=500&width=1200"}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Header */}
          <header className="mb-12">
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {blog.description && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blog.description}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{blog.adminName}</p>
                  <p className="text-sm text-gray-500">Content Creator</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-yellow-500" />
                <time dateTime={blog.date} className="text-gray-700">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-yellow-500" />
                <span className="text-gray-700">
                  {blog.views.toLocaleString()} views
                </span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg prose-gray max-w-none mb-12">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          {/* Share Section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <SocialShare title={blog.title} blogId={blog.id} />
          </div>

          {/* Author Bio */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {blog.adminName}
                </h3>
                <p className="text-yellow-600 font-medium mb-3">
                  Content Creator at Tactics Digital Agency
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Passionate about digital marketing, SEO, and web development.
                  Creating valuable content to help businesses grow their online
                  presence and achieve their digital marketing goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
