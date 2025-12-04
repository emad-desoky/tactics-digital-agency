import { DataBlogServer } from "@/components/blogs/blogs-data/DataBlogServer";
import { DataBlogClient } from "@/components/blogs/blogs-data/DataBlogClient";
import Navbar from "@/components/navbar/Navbar";
import { Slider } from "@/components/about-us/Slider";
import Footer from "@/components/home-page/footer/Footer";
import { manualBlogs } from "./manual-blogs";

export const metadata = {
  title: "Blog - Digital Marketing Insights & Industry Trends",
  description:
    "Stay updated with the latest digital marketing trends, SEO tips, web development insights, and industry best practices from Tactics Digital Agency experts.",
};

export default async function BlogsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const pageNo = resolvedSearchParams?.pageNo
    ? Number(resolvedSearchParams.pageNo)
    : 1;

  // 1. Fetch dynamic blogs from your database/server
  const {
    blogs: serverBlogs,
    totalPages,
    allTags,
  } = await DataBlogServer({ pageNo });

  // 2. Merge Manual Blogs
  // We only want to show manual blogs on the first page of results to avoid duplication on pagination.
  let combinedBlogs = serverBlogs;

  if (pageNo === 1) {
    // Combine manual blogs with server blogs
    combinedBlogs = [...manualBlogs, ...serverBlogs];
  }

  // Optional: Merge manual tags into allTags if you want them filterable
  // const manualTags = manualBlogs.flatMap(b => b.tags);
  // const combinedTags = [...new Set([...allTags, ...manualTags])];

  return (
    <>
      <Slider image="/Blogs.png" />
      <Navbar />
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-bold text-center text-[rgb(255,228,0)] mb-12 tracking-tight">
            Latest Blogs
          </h1>
          <DataBlogClient
            initialBlogs={combinedBlogs}
            totalPages={totalPages}
            pageNo={pageNo}
            allTags={allTags}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
