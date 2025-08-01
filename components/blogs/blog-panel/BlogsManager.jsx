"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Edit,
  Trash2,
  Eye,
  Plus,
  Search,
  Calendar,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

const BlogsManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    fetchBlogs();

    // Set up more frequent polling for real-time updates (every 5 seconds)
    const interval = setInterval(() => {
      fetchBlogs(false, true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchBlogs = async (showRefreshing = false, silent = false) => {
    if (showRefreshing) setRefreshing(true);
    if (!silent) setLoading(true);

    try {
      // Add timestamp and force fresh data from Supabase
      const timestamp = new Date().getTime();
      const response = await fetch(
        `/api/blogs-manager?t=${timestamp}&fresh=true`,
        {
          method: "GET",
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.status}`);
      }

      const data = await response.json();

      // Only update if data has actually changed
      if (JSON.stringify(data) !== JSON.stringify(blogs)) {
        setBlogs(data);
        setLastUpdated(new Date());

        if (!silent) {
          console.log("Blogs data updated:", data.length, "blogs loaded");
        }
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      if (showRefreshing) setRefreshing(false);
      if (!silent) setLoading(false);
    }
  };

  const handleRefresh = () => {
    console.log("Manual refresh triggered");
    fetchBlogs(true);
  };

  const deleteBlog = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await fetch(`/api/blogs-manager/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete blog");
        }

        // Remove from local state immediately
        setBlogs(blogs.filter((blog) => blog.id !== id));

        // Refresh data to ensure consistency
        setTimeout(() => fetchBlogs(false, true), 1000);
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog. Please try again.");
      }
    }
  };

  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "views":
          return (b.views || 0) - (a.views || 0);
        case "title":
          return (a.title || "").localeCompare(b.title || "");
        default:
          return (
            new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
          );
      }
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
        <p className="ml-4 text-gray-600">
          Loading fresh data from Supabase...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="p-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 border border-gray-300 rounded-lg hover:bg-gray-50"
            title="Refresh data from Supabase"
          >
            <RefreshCw
              className={`w-5 h-5 ${refreshing ? "animate-spin" : ""}`}
            />
          </button>
          <div className="text-sm text-gray-500">
            <p>Last updated: {lastUpdated.toLocaleTimeString()}</p>
            <p className="text-xs">Auto-refresh: Every 5 seconds</p>
          </div>
        </div>
        <Link
          href="/blog-panel/add-blog"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Blog</span>
        </Link>
      </div>

      {/* Real-time Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Blogs</p>
              <p className="text-2xl font-bold text-gray-800">{blogs.length}</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Views (Live)</p>
              <p className="text-2xl font-bold text-green-600">
                {blogs
                  .reduce((sum, blog) => sum + (blog.views || 0), 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="p-2 bg-green-100 rounded-lg">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Views</p>
              <p className="text-2xl font-bold text-gray-800">
                {blogs.length > 0
                  ? Math.round(
                      blogs.reduce((sum, blog) => sum + (blog.views || 0), 0) /
                        blogs.length
                    )
                  : 0}
              </p>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Most Viewed</p>
              <p className="text-2xl font-bold text-gray-800">
                {blogs.length > 0
                  ? Math.max(
                      ...blogs.map((blog) => blog.views || 0)
                    ).toLocaleString()
                  : 0}
              </p>
            </div>
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Eye className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
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
            <option value="views">Sort by Views (Live)</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={`${blog.id}-${blog.views}`} // Include views in key to trigger re-render
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-yellow-400"
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
                <span className="flex items-center font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <Eye className="w-4 h-4 mr-1" />
                  {(blog.views || 0).toLocaleString()} views
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
          {searchTerm && (
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search term: {searchTerm}
            </p>
          )}
        </div>
      )}

      {/* Live Update Indicator */}
      <div className="text-center text-sm text-gray-500 bg-green-50 p-3 rounded-lg">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p>Live data from Supabase - Updates every 5 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsManager;
