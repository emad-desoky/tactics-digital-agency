import Image from "next/image";
import { BackgroundGradient } from "../../ui/background-gradient";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";
import { getBlogsLength, getSortedBlogs } from "@/model/blogs";

export async function DataBlog({ pageNo = 1 }) {
  const pageSize = 4; // Number of blogs per page
  const blogs = await getSortedBlogs(pageNo, pageSize);
  const totalBlogs = await getBlogsLength();
  const totalPages = Math.ceil(totalBlogs / pageSize); // Calculate total number of pages

  return (
    <section className="py-32 bg-[rgb(43,43,43)]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        {/* Left Section (Blog Cards with Pagination) */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-4xl text-center text-[rgb(255,228,0)] mb-10 font-bold">
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="transition-transform transform hover:scale-105"
              >
                <BackgroundGradient className="rounded-2xl p-6 bg-gray-800 dark:bg-gray-700 shadow-lg hover:shadow-xl">
                  {blog.image ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      height="300"
                      width="500"
                      className="rounded-t-2xl"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold text-white mt-4 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-md text-gray-300 mb-4">
                      {blog.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {blog.date.toUTCString()}
                    </p>
                    <Link
                      className="rounded-full px-4 py-2 text-white flex items-center space-x-2 bg-[rgb(255,228,0)] hover:bg-yellow-600 transition duration-200 ease-in-out mt-4 text-sm font-bold"
                      href={`/blogs/${blog.id}`}
                    >
                      <span>Show Blog</span>
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <Link
                key={index}
                href={`?pageNo=${index + 1}`} // Generate page number links
                className={`px-4 py-2 mx-2 rounded-md ${
                  pageNo == index + 1 ? "bg-[rgb(255,228,0)]" : "bg-gray-700"
                } text-white hover:bg-yellow-600`}
              >
                {index + 1}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="w-full lg:w-1/4 lg:sticky lg:top-24">
          {/* Search Box */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by title..."
              className="w-full p-3 rounded-md text-gray-900"
            />
          </div>

          {/* Recent Posts */}
          <div className="bg-gray-800 p-6 rounded-xl mb-6">
            <h3 className="text-[rgb(255,228,0)] text-2xl mb-4 font-bold">
              Recent Posts
            </h3>
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog.id} className="mb-4">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="text-md text-gray-300 hover:text-white"
                >
                  {blog.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-[rgb(255,228,0)] text-2xl mb-4 font-bold">
              Categories
            </h3>
            <div className="text-gray-300">
              <p className="cursor-pointer hover:text-white mb-2">
                Translation
              </p>
              <p className="cursor-pointer hover:text-white mb-2">Technology</p>
              <p className="cursor-pointer hover:text-white">Business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 mt-16 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-4">
            © {new Date().getFullYear()} Alpha Beto Translations. All rights
            reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="text-gray-400 hover:text-white"
            >
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
