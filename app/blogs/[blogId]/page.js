import { getBlogById } from "@/model/blogs";
import styles from "./page.module.css";

export async function generateMetadata({ params } = {}) {
  const { blogId } = await params;
  const blog = await getBlogById(blogId);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  // Extract first image from content for OG image
  const imageMatch = blog.content?.match(/<img[^>]+src="([^">]+)"/);
  const contentImage = imageMatch ? imageMatch[1] : null;

  // Create a clean excerpt from content (remove HTML tags)
  const cleanContent = blog.content?.replace(/<[^>]*>/g, "") || "";
  const excerpt =
    cleanContent.length > 160
      ? cleanContent.substring(0, 157) + "..."
      : cleanContent;

  const ogImage = contentImage || "/og-blog-default.jpg";

  return {
    title: blog.title,
    description: blog.description || excerpt,
    keywords: [
      blog.title.split(" ").slice(0, 5), // Use first 5 words from title as keywords
      "digital marketing",
      "SEO",
      "web development",
      "tactics digital agency",
    ].flat(),
    authors: [{ name: blog.adminName || "Tactics Digital Agency" }],
    publishedTime: blog.date,
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description || excerpt,
      publishedTime: blog.date,
      authors: [blog.adminName || "Tactics Digital Agency"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description || excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: `/blogs/${blogId}`,
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

  // Structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    author: {
      "@type": "Person",
      name: blog.adminName || "Tactics Digital Agency",
    },
    publisher: {
      "@type": "Organization",
      name: "Tactics Digital Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://tacticsdigitalagency.com/logo.png",
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tacticsdigitalagency.com/blogs/${blogId}`,
    },
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
                    `https://tacticsdigitalagency.com/blogs/${blogId}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Share on Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://tacticsdigitalagency.com/blogs/${blogId}`
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
