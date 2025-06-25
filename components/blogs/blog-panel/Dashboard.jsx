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
  AlertTriangle,
} from "lucide-react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    fetchDashboardData();
    // Reduced frequency to prevent overwhelming the server
    const interval = setInterval(() => fetchDashboardData(false, true), 30000); // 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async (showRefreshing = false, silent = false) => {
    if (showRefreshing) setRefreshing(true);
    setError(null);

    try {
      // Add timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const timestamp = new Date().getTime();
      const response = await fetch(`/api/dashboard?t=${timestamp}&fresh=true`, {
        method: "GET",
        signal: controller.signal,
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const dashboardData = await response.json();

      // Check if we got fallback data due to database issues
      if (dashboardData.error) {
        setError(`Database issue: ${dashboardData.error}`);
        console.warn("Received fallback data due to:", dashboardData.error);
      }

      // Only update if data has actually changed or if it's the first load
      if (!data || JSON.stringify(dashboardData) !== JSON.stringify(data)) {
        setData(dashboardData);
        setLastUpdated(new Date(dashboardData.lastUpdated));
        setRetryCount(0); // Reset retry count on success

        if (!silent) {
          console.log("Dashboard data updated:", dashboardData);
        }
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setError(error.message);
      setRetryCount((prev) => prev + 1);

      // If we have no data and this is the first load, show error
      if (!data) {
        setData({
          totalBlogs: 0,
          totalViews: 0,
          blogsThisWeek: 0,
          blogsThisMonth: 0,
          blogsThisYear: 0,
          monthlyData: [],
          topBlogs: [],
          recentActivity: [],
          lastUpdated: new Date().toISOString(),
        });
      }
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
      <div className="flex flex-col items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mb-4"></div>
        <p className="text-gray-600">Loading dashboard data...</p>
        <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
      </div>
    );
  }

  if (!data && error) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Dashboard Unavailable
          </h2>
          <p className="text-red-600 mb-4">Error: {error}</p>
          <p className="text-gray-600 mb-6">
            There seems to be an issue connecting to the database. Please try
            refreshing or contact support if the problem persists.
          </p>
          <div className="space-y-3">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 disabled:opacity-50 font-semibold"
            >
              {refreshing ? "Retrying..." : `Retry (${retryCount} attempts)`}
            </button>
            <p className="text-sm text-gray-500">
              Auto-retry in {30 - retryCount * 5} seconds or refresh manually
            </p>
          </div>
        </div>
      </div>
    );
  }

  const statsCards = [
    {
      title: "Total Blogs",
      value: data?.totalBlogs || 0,
      icon: FileText,
      color: "bg-blue-500",
      change: "+12%",
    },
    {
      title: "Total Views (Live)",
      value: (data?.totalViews || 0).toLocaleString(),
      icon: Eye,
      color: "bg-green-500",
      change: "+23%",
    },
    {
      title: "This Week",
      value: data?.blogsThisWeek || 0,
      icon: Calendar,
      color: "bg-purple-500",
      change: "+5%",
    },
    {
      title: "This Month",
      value: data?.blogsThisMonth || 0,
      icon: TrendingUp,
      color: "bg-yellow-500",
      change: "+18%",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Error Banner */}
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
            <p className="text-yellow-800">
              <strong>Warning:</strong> {error} - Showing available data
            </p>
          </div>
        </div>
      )}

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
              Heres whats happening with your blog today.
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
                    <div
                      className={`w-2 h-2 rounded-full ${
                        error ? "bg-yellow-500" : "bg-green-500"
                      } animate-pulse mr-1`}
                    ></div>
                    {error ? "Partial data" : "Live from Supabase"}
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 border border-gray-300 rounded-lg hover:bg-gray-50"
              title="Refresh dashboard"
            >
              <RefreshCw
                className={`w-5 h-5 ${refreshing ? "animate-spin" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <motion.div
            key={`${stat.title}-${stat.value}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden"
          >
            {/* Live indicator for views */}
            {stat.title.includes("Views") && !error && (
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
        {/* Monthly Performance Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Monthly Performance
          </h3>
          {data?.monthlyData?.length > 0 ? (
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
          ) : (
            <div className="h-[300px] flex items-center justify-center text-gray-500">
              <p>No chart data available</p>
            </div>
          )}
        </motion.div>

        {/* Top Performing Blogs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Top Performing Blogs
          </h3>
          <div className="space-y-4">
            {data?.topBlogs?.length > 0 ? (
              data.topBlogs.map((blog, index) => (
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
                        {!error && (
                          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse ml-2"></div>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>No blog data available</p>
              </div>
            )}
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
          Recent Activity
        </h3>
        <div className="space-y-3">
          {data?.recentActivity?.length > 0 ? (
            data.recentActivity.map((activity, index) => (
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
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>No recent activity data available</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Quick Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl shadow-lg p-6 text-black"
      >
        <h3 className="text-xl font-semibold mb-4">Quick Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{data?.blogsThisYear || 0}</p>
            <p className="text-sm opacity-80">Blogs This Year</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              {data?.totalBlogs > 0
                ? Math.round((data?.totalViews || 0) / data.totalBlogs)
                : 0}
            </p>
            <p className="text-sm opacity-80">Avg Views per Blog</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              {data?.blogsThisMonth > 0
                ? Math.round((data.blogsThisMonth / 30) * 7)
                : 0}
            </p>
            <p className="text-sm opacity-80">Weekly Average</p>
          </div>
        </div>
      </motion.div>

      {/* Status Indicator */}
      <div className="text-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
        <div className="flex items-center justify-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full ${
              error ? "bg-yellow-500" : "bg-green-500"
            } animate-pulse`}
          ></div>
          <p>
            {error
              ? "Partial data - Some features may be limited"
              : "Dashboard updates every 30 seconds from Supabase"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
