import { DataBlog } from "@/components/blogs/blogs-data/DataBlog";
import Navbar from "@/components/navbar/Navbar";
import { Slider } from "@/components/about-us/Slider";

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
