import { getBlogById } from "@/model/blogs";
import styles from "./page.module.css";

export async function generateMetadata({ params } = {}) {
  const { blogId } = await params;
  const blog = await getBlogById(blogId);

  if (!blog) {
    return {
      title: "Blog Not Found - Tactics Digital Agency",
      description: "The requested blog post could not be found.",
      openGraph: {
        title: "Blog Not Found - Tactics Digital Agency",
        description: "The requested blog post could not be found.",
        images: [
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
            width: 1200,
            height: 630,
            alt: "Tactics Digital Agency",
          },
        ],
      },
    };
  }

  // Enhanced image extraction - try multiple patterns
  let contentImage = null;

  // Try different image patterns in the content
  const imagePatterns = [
    /<img[^>]+src="([^">]+)"/i,
    /<img[^>]+src='([^'>]+)'/i,
    /!\[.*?\]$$([^)]+)$$/i, // Markdown images
  ];

  for (const pattern of imagePatterns) {
    const match = blog.content?.match(pattern);
    if (match && match[1]) {
      contentImage = match[1];
      break;
    }
  }

  // If no image in content, check if blog has a featured image field
  const blogImage = blog.featuredImage || blog.image || contentImage;

  // Create a clean excerpt from content (remove HTML tags and limit length)
  const cleanContent =
    blog.content
      ?.replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim() || "";
  const excerpt =
    cleanContent.length > 155
      ? cleanContent.substring(0, 152) + "..."
      : cleanContent;

  // Use blog description or excerpt, prioritizing the description
  const metaDescription =
    blog.description ||
    excerpt ||
    `Read ${blog.title} on Tactics Digital Agency blog.`;

  // Ensure we have a fallback image - WhatsApp prefers HTTPS images
  const ogImage =
    blogImage ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s";

  // Make sure image URLs are absolute and HTTPS
  let absoluteImageUrl = ogImage;
  if (!ogImage.startsWith("http")) {
    absoluteImageUrl = `https://www.tacticsdigitalagency.net${ogImage}`;
  } else if (ogImage.startsWith("http://")) {
    absoluteImageUrl = ogImage.replace("http://", "https://");
  }

  const blogUrl = `https://www.tacticsdigitalagency.net/blogs/${blogId}`;

  return {
    title: `${blog.title} | Tactics Digital Agency Blog`,
    description: metaDescription,
    keywords: [
      ...blog.title.split(" ").slice(0, 5),
      "digital marketing",
      "SEO",
      "web development",
      "tactics digital agency",
      "blog",
    ].flat(),
    authors: [{ name: blog.adminName || "Tactics Digital Agency" }],
    publishedTime: blog.date,
    modifiedTime: blog.updatedAt || blog.date,
    category: blog.category || "Digital Marketing",
    openGraph: {
      type: "article",
      url: blogUrl,
      title: blog.title,
      description: metaDescription,
      publishedTime: blog.date,
      modifiedTime: blog.updatedAt || blog.date,
      authors: [blog.adminName || "Tactics Digital Agency"],
      section: blog.category || "Digital Marketing",
      tags: blog.tags || ["digital marketing", "SEO", "web development"],
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: absoluteImageUrl.includes(".png") ? "image/png" : "image/jpeg",
        },
        {
          url: absoluteImageUrl,
          width: 800,
          height: 600,
          alt: blog.title,
          type: absoluteImageUrl.includes(".png") ? "image/png" : "image/jpeg",
        },
        {
          url: absoluteImageUrl,
          width: 400,
          height: 400,
          alt: blog.title,
          type: absoluteImageUrl.includes(".png") ? "image/png" : "image/jpeg",
        },
      ],
      siteName: "Tactics Digital Agency",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: metaDescription,
      creator: "@tacticsdigital",
      site: "@tacticsdigital",
      images: [
        {
          url: absoluteImageUrl,
          alt: blog.title,
        },
      ],
    },
    alternates: {
      canonical: blogUrl,
    },
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
    other: {
      // Enhanced social media meta tags for WhatsApp
      "og:image": absoluteImageUrl,
      "og:image:secure_url": absoluteImageUrl,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": absoluteImageUrl.includes(".png")
        ? "image/png"
        : "image/jpeg",
      "og:image:alt": blog.title,
      "article:author": blog.adminName || "Tactics Digital Agency",
      "article:published_time": blog.date,
      "article:modified_time": blog.updatedAt || blog.date,
      "article:section": blog.category || "Digital Marketing",
      "twitter:image:alt": blog.title,

      // WhatsApp specific optimization
      "whatsapp:image": absoluteImageUrl,
      "whatsapp:title": blog.title,
      "whatsapp:description": metaDescription,

      // Additional image meta tags for better compatibility
      image: absoluteImageUrl,
      thumbnail: absoluteImageUrl,

      // LinkedIn optimization
      "linkedin:owner": "tactics-digital-agency",
    },
  };
}

export default async function Blog({ params }) {
  const { blogId } = await params;
  const blog = await getBlogById(blogId);

  if (!blog) {
    return (
      <div className="bg-zinc-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-300">
            The requested blog post could not be found.
          </p>
        </div>
      </div>
    );
  }

  // Enhanced structured data for the blog post
  const imageMatch = blog.content?.match(/<img[^>]+src="([^">]+)"/);
  const contentImage = imageMatch ? imageMatch[1] : null;
  const blogImage =
    blog.featuredImage ||
    blog.image ||
    contentImage ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s";

  const absoluteImageUrl = blogImage.startsWith("http")
    ? blogImage
    : `https://www.tacticsdigitalagency.net${blogImage}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description:
      blog.description ||
      blog.content?.replace(/<[^>]*>/g, "").substring(0, 160),
    image: {
      "@type": "ImageObject",
      url: absoluteImageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: blog.adminName || "Tactics Digital Agency",
      url: "https://www.tacticsdigitalagency.net/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Tactics Digital Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_sP7b4z4nmHbyUyQ9kdQbcGtXljwPNCjNQ&s",
        width: 1200,
        height: 630,
      },
      url: "https://www.tacticsdigitalagency.net",
    },
    datePublished: blog.date,
    dateModified: blog.updatedAt || blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.tacticsdigitalagency.net/blogs/${blogId}`,
    },
    url: `https://www.tacticsdigitalagency.net/blogs/${blogId}`,
    keywords:
      blog.tags?.join(", ") || "digital marketing, SEO, web development",
    articleSection: blog.category || "Digital Marketing",
    wordCount: blog.content?.replace(/<[^>]*>/g, "").split(" ").length || 0,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="bg-zinc-950 min-h-screen">
        <div className="min-h-screen bg-gray-900 text-gray-100 py-8 md:px-16 lg:px-20 max-w-4xl mx-auto shadow-lg">
          {/* Breadcrumb navigation for SEO */}
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/blogs" className="hover:text-yellow-400">
                  Blog
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-300" aria-current="page">
                {blog.title}
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-8">
            {/* Admin name and date */}
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <p>
                By <span className="text-yellow-400">{blog.adminName}</span>
              </p>
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-extrabold text-yellow-400 border-b-4 border-yellow-500 pb-4 mb-8">
              {blog.title}
            </h1>

            {/* Description */}
            {blog.description && (
              <p className="font-medium mb-4 text-gray-300 text-lg leading-relaxed">
                {blog.description}
              </p>
            )}
          </header>

          {/* Article content */}
          <article
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className={`${styles.content} text-lg leading-relaxed space-y-6`}
          />

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">
                Published by{" "}
                <span className="text-yellow-400">{blog.adminName}</span>
              </p>
              <div className="flex space-x-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    blog.title
                  )}&url=${encodeURIComponent(
                    `https://www.tacticsdigitalagency.net/blogs/${blogId}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Share on Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://www.tacticsdigitalagency.net/blogs/${blogId}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Share on LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
