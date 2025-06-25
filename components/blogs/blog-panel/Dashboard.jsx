"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Eye,
  Calendar,
  FileText,
  RefreshCw,
  Clock,
} from "lucide-react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetchDashboardData();
    // More frequent auto-refresh for real-time updates (every 10 seconds)
    const interval = setInterval(() => fetchDashboardData(false, true), 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async (showRefreshing = false, silent = false) => {
    if (showRefreshing) setRefreshing(true);

    try {
      // Force fresh data from Supabase
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/dashboard?t=${timestamp}&fresh=true`, {
        method: "GET",
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch dashboard data: ${response.status}`);
      }

      const dashboardData = await response.json();

      // Only update if data has actually changed
      if (!data || JSON.stringify(dashboardData) !== JSON.stringify(data)) {
        setData(dashboardData);
        setLastUpdated(new Date(dashboardData.lastUpdated));

        if (!silent) {
          console.log("Dashboard data updated:", dashboardData);
        }
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
      if (showRefreshing) setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    console.log("Manual dashboard refresh triggered");
    fetchDashboardData(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
        <p className="ml-4 text-gray-600">Loading live data from Supabase...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-red-500">
        <p>Error loading dashboard data</p>
        <button
          onClick={() => fetchDashboardData(true)}
          className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
        >
          Retry
        </button>
      </div>
    );
  }

  const statsCards = [
    {
      title: "Total Blogs",
      value: data.totalBlogs,
      icon: FileText,
      color: "bg-blue-500",
      change: "+12%",
    },
    {
      title: "Total Views (Live)",
      value: data.totalViews.toLocaleString(),
      icon: Eye,
      color: "bg-green-500",
      change: "+23%",
    },
    {
      title: "This Week",
      value: data.blogsThisWeek,
      icon: Calendar,
      color: "bg-purple-500",
      change: "+5%",
    },
    {
      title: "This Month",
      value: data.blogsThisMonth,
      icon: TrendingUp,
      color: "bg-yellow-500",
      change: "+18%",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome back, Admin! 👋
            </h1>
            <p className="text-gray-600">
              Heres whats happening with your blog today (Live Data).
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              {lastUpdated && (
                <div>
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Last updated: {lastUpdated.toLocaleTimeString()}
                  </p>
                  <p className="text-xs text-green-600 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                    Live from Supabase
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 border border-gray-300 rounded-lg hover:bg-gray-50"
              title="Refresh dashboard from Supabase"
            >
              <RefreshCw
                className={`w-5 h-5 ${refreshing ? "animate-spin" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards with Live Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <motion.div
            key={`${stat.title}-${stat.value}`} // Include value in key for re-render
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden"
          >
            {/* Live indicator for views */}
            {stat.title.includes("Views") && (
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            )}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </p>
                <p className="text-green-500 text-sm mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Blogs & Views Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Monthly Performance (Live Data)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="blogs"
                stroke="#FFE400"
                strokeWidth={3}
                name="Blogs Published"
              />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#4ECDC4"
                strokeWidth={3}
                name="Total Views"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Performing Blogs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Top Performing Blogs (Live Views)
          </h3>
          <div className="space-y-4">
            {data.topBlogs.map((blog, index) => (
              <div
                key={`${blog.id}-${blog.views}`}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 truncate max-w-48">
                      {blog.title}
                    </p>
                    <p className="text-sm text-green-600 flex items-center font-semibold">
                      <Eye className="w-4 h-4 mr-1" />
                      {(blog.views || 0).toLocaleString()} views
                      <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse ml-2"></div>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity (Live Data)
        </h3>
        <div className="space-y-3">
          {data.recentActivity.map((activity, index) => (
            <div
              key={`${activity.blog}-${activity.views}-${index}`}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-800">
                  <span className="font-medium">{activity.action}</span>{" "}
                  {activity.blog}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {activity.date}
                  </span>
                  <span className="flex items-center text-green-600 font-semibold">
                    <Eye className="w-4 h-4 mr-1" />
                    {(activity.views || 0).toLocaleString()} views
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl shadow-lg p-6 text-black"
      >
        <h3 className="text-xl font-semibold mb-4">Quick Summary (Live)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{data.blogsThisYear}</p>
            <p className="text-sm opacity-80">Blogs This Year</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              {data.totalBlogs > 0
                ? Math.round(data.totalViews / data.totalBlogs)
                : 0}
            </p>
            <p className="text-sm opacity-80">Avg Views per Blog</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              {data.blogsThisMonth > 0
                ? Math.round((data.blogsThisMonth / 30) * 7)
                : 0}
            </p>
            <p className="text-sm opacity-80">Weekly Average</p>
          </div>
        </div>
      </motion.div>

      {/* Live Update Indicator */}
      <div className="text-center text-sm text-gray-500 bg-green-50 p-3 rounded-lg">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p>Live dashboard - Updates every 10 seconds from Supabase</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
