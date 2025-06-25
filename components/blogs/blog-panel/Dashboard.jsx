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
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Eye,
  Calendar,
  FileText,
  Users,
  Clock,
} from "lucide-react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/dashboard");
      const dashboardData = await response.json();
      setData(dashboardData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-red-500">
        Error loading dashboard data
      </div>
    );
  }

  const COLORS = ["#FFE400", "#FFA500", "#FF6B6B", "#4ECDC4", "#45B7D1"];

  const statsCards = [
    {
      title: "Total Blogs",
      value: data.totalBlogs,
      icon: FileText,
      color: "bg-blue-500",
      change: "+12%",
    },
    {
      title: "Total Views",
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
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome back, Admin! 👋
        </h1>
        <p className="text-gray-600">
          Here&apos;s what&apos;s happening with your blog today.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
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
            Monthly Performance
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
            Top Performing Blogs
          </h3>
          <div className="space-y-4">
            {data.topBlogs.map((blog, index) => (
              <div
                key={blog.id}
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
                    <p className="text-sm text-gray-500 flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {blog.views.toLocaleString()} views
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
          Recent Activity
        </h3>
        <div className="space-y-3">
          {data.recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-800">
                  <span className="font-medium">{activity.action}</span>{" "}
                  {activity.blog}
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {activity.date}
                </p>
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
        <h3 className="text-xl font-semibold mb-4">Quick Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{data.blogsThisYear}</p>
            <p className="text-sm opacity-80">Blogs This Year</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              {Math.round(data.totalViews / data.totalBlogs)}
            </p>
            <p className="text-sm opacity-80">Avg Views per Blog</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">
              {Math.round((data.blogsThisMonth / 30) * 7)}
            </p>
            <p className="text-sm opacity-80">Weekly Average</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
