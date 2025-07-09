import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { DataBlogServer } from "./DataBlogServer";
import { DataBlogClient } from "./DataBlogClient";
import Footer from "@/components/home-page/footer/Footer";

export async function DataBlog({ pageNo = 1 }) {
  const { blogs, totalPages, allTags } = await DataBlogServer({ pageNo });

  return (
    <>
      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl font-bold text-center text-[rgb(255,228,0)] mb-12 tracking-tight">
            Latest Blogs
          </h1>
          <DataBlogClient
            initialBlogs={blogs}
            totalPages={totalPages}
            pageNo={pageNo}
            allTags={allTags}
          />
        </div>

        {/* Footer Section */}
      </section>
      <Footer />
    </>
  );
}
