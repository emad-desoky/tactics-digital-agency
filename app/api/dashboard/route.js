import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const fresh = searchParams.get("fresh");

    console.log(
      "Fetching dashboard data from Supabase - Fresh request:",
      fresh === "true"
    );

    // Get current date info
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Force fresh data from Supabase
    const [
      totalBlogs,
      totalViewsResult,
      blogsThisWeek,
      blogsThisMonth,
      blogsThisYear,
      topBlogs,
      recentBlogs,
    ] = await Promise.all([
      // Total blogs
      prisma.blog.count(),

      // Total views - force fresh aggregation
      prisma.blog.aggregate({
        _sum: {
          views: true,
        },
      }),

      // Blogs this week
      prisma.blog.count({
        where: {
          date: {
            gte: startOfWeek,
          },
        },
      }),

      // Blogs this month
      prisma.blog.count({
        where: {
          date: {
            gte: startOfMonth,
          },
        },
      }),

      // Blogs this year
      prisma.blog.count({
        where: {
          date: {
            gte: startOfYear,
          },
        },
      }),

      // Top performing blogs - fresh view counts
      prisma.blog.findMany({
        select: {
          id: true,
          title: true,
          views: true,
        },
        orderBy: {
          views: "desc",
        },
        take: 5,
      }),

      // Recent activity
      prisma.blog.findMany({
        select: {
          title: true,
          date: true,
          views: true,
        },
        orderBy: {
          date: "desc",
        },
        take: 10,
      }),
    ]);

    const totalViews = totalViewsResult._sum.views || 0;

    console.log("Dashboard data from Supabase:");
    console.log("- Total blogs:", totalBlogs);
    console.log("- Total views:", totalViews);
    console.log(
      "- Top blog views:",
      topBlogs.map((b) => ({ title: b.title, views: b.views }))
    );

    // Monthly data for charts (last 12 months) - include real view data
    const monthlyData = [];
    for (let i = 11; i >= 0; i--) {
      const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);

      const [monthBlogs, monthViewsResult] = await Promise.all([
        prisma.blog.count({
          where: {
            date: {
              gte: monthStart,
              lte: monthEnd,
            },
          },
        }),
        prisma.blog.aggregate({
          where: {
            date: {
              gte: monthStart,
              lte: monthEnd,
            },
          },
          _sum: {
            views: true,
          },
        }),
      ]);

      monthlyData.push({
        month: monthStart.toLocaleDateString("en-US", { month: "short" }),
        blogs: monthBlogs,
        views: monthViewsResult._sum.views || 0,
      });
    }

    const recentActivity = recentBlogs.map((blog) => ({
      action: "Published",
      blog: blog.title,
      date: new Date(blog.date).toLocaleDateString(),
      views: blog.views || 0,
    }));

    const dashboardData = {
      totalBlogs,
      totalViews,
      blogsThisWeek,
      blogsThisMonth,
      blogsThisYear,
      monthlyData,
      topBlogs,
      recentActivity,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(dashboardData, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "X-Timestamp": new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data", details: error.message },
      { status: 500 }
    );
  }
}
