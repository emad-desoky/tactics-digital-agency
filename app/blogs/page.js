import { DataBlog } from "@/components/blogs/blogs-data/DataBlog";
import Navbar from "@/components/navbar/Navbar";
import { Slider } from "@/components/about-us/Slider";

export const metadata = {
  title: "Blog - Digital Marketing Insights & Industry Trends",
  description:
    "Stay updated with the latest digital marketing trends, SEO tips, web development insights, and industry best practices from Tactics Digital Agency experts.",
  keywords: [
    "digital marketing blog",
    "SEO tips",
    "web development insights",
    "marketing trends",
    "industry news",
    "digital strategy",
  ],
  openGraph: {
    title: "Digital Marketing Blog - Tactics Digital Agency",
    description:
      "Stay updated with the latest digital marketing trends, SEO tips, and web development insights from our experts.",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Tactics Digital Agency Blog",
      },
    ],
  },
  twitter: {
    title: "Digital Marketing Blog - Tactics Digital Agency",
    description:
      "Stay updated with the latest digital marketing trends, SEO tips, and web development insights from our experts.",
    images: ["/twitter-blog.jpg"],
  },
  alternates: {
    canonical: "/blogs",
  },
};

export default async function BlogsPage({ searchParams }) {
  const { pageNo } = await searchParams;

  return (
    <>
      <Slider image="/Blogs.png" />
      <Navbar />
      <DataBlog pageNo={pageNo} />
    </>
  );
}
