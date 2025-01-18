"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardFooter, Button, Input } from "@nextui-org/react";

export function DataBlogClient({ initialBlogs, totalPages, pageNo, allTags }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const filteredBlogs = initialBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedTag || blog.tags.includes(selectedTag))
    );
    setBlogs(filteredBlogs);
  }, [searchTerm, selectedTag, initialBlogs]);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section (Blog Cards with Pagination) */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="bg-gray-800 border border-gray-700 hover:border-[rgb(255,228,0)] transition-all duration-300 overflow-hidden"
                shadow="lg"
              >
                {blog.image ? (
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                ) : (
                  <div className="h-48 flex items-center justify-center bg-gray-700">
                    <p className="text-gray-400">No image available</p>
                  </div>
                )}
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </CardBody>
                <CardFooter>
                  <Button
                    as={Link}
                    href={`/blogs/${blog.id}`}
                    className="w-full bg-[rgb(255,228,0)] text-gray-900 hover:bg-yellow-400 transition duration-200 font-semibold"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <Link
                  key={index}
                  href={`?pageNo=${index + 1}`}
                  className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                    pageNo == index + 1
                      ? "bg-[rgb(255,228,0)] text-gray-900 font-semibold"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="w-full lg:w-1/4 space-y-8">
          {/* Search Box */}
          <Card className="bg-gray-800 p-6 border border-gray-700">
            <CardBody>
              <h3 className="text-xl font-semibold text-[rgb(255,228,0)] mb-4">
                Search Blogs
              </h3>
              <Input
                type="text"
                placeholder="Search by title..."
                className="bg-gray-700 text-white placeholder-gray-400 border-gray-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CardBody>
          </Card>

          {/* Recent Posts */}
          <Card className="bg-gray-800 p-6 border border-gray-700">
            <CardBody>
              <h3 className="text-xl font-semibold text-[rgb(255,228,0)] mb-4">
                Recent Posts
              </h3>
              {initialBlogs.slice(0, 3).map((blog) => (
                <div key={blog.id} className="mb-3">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="text-gray-300 hover:text-[rgb(255,228,0)] transition duration-200"
                  >
                    {blog.title}
                  </Link>
                </div>
              ))}
            </CardBody>
          </Card>

          {/* Tags */}
          <Card className="bg-gray-800 p-6 border border-gray-700">
            <CardBody>
              <h3 className="text-xl font-semibold text-[rgb(255,228,0)] mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    size="sm"
                    className={`${
                      selectedTag === tag
                        ? "bg-[rgb(255,228,0)] text-gray-900"
                        : "bg-gray-700 text-white"
                    } hover:bg-[rgb(255,228,0)] hover:text-gray-900 transition duration-200`}
                    onClick={() =>
                      setSelectedTag(selectedTag === tag ? "" : tag)
                    }
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
