"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Edit, Trash2, Eye, Plus, Search, Calendar } from "lucide-react";
import Link from "next/link";

const BlogsManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs-manager");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await fetch(`/api/blogs-manager/${id}`, {
          method: "DELETE",
        });
        setBlogs(blogs.filter((blog) => blog.id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "views":
          return b.views - a.views;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
        <Link
          href="/blog-panel/add-blog"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Blog</span>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          >
            <option value="date">Sort by Date</option>
            <option value="views">Sort by Views</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {blog.image && (
              <img
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(blog.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {blog.views} views
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  By {blog.adminName}
                </span>
                <div className="flex space-x-2">
                  <Link
                    href={`/blog-panel/edit-blog/${blog.id}`}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit Blog"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Blog"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <Link
                    href={`/blogs/${blog.id}`}
                    target="_blank"
                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="View Blog"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blogs found</p>
        </div>
      )}
    </div>
  );
};

export default BlogsManager;
