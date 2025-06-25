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
    const startOfWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - now.getDay()
    );
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Simplified queries to avoid timeouts
    try {
      // Basic counts first
      const totalBlogs = await prisma.blog.count();
      console.log("Total blogs:", totalBlogs);

      // Get total views with a simpler query
      const allBlogs = await prisma.blog.findMany({
        select: {
          views: true,
          date: true,
        },
      });
      console.log("Fetched all blogs for calculations:", allBlogs.length);

      const totalViews = allBlogs.reduce(
        (sum, blog) => sum + (blog.views || 0),
        0
      );
      console.log("Total views calculated:", totalViews);

      // Calculate time-based counts from the fetched data
      const blogsThisWeek = allBlogs.filter(
        (blog) => new Date(blog.date) >= startOfWeek
      ).length;
      const blogsThisMonth = allBlogs.filter(
        (blog) => new Date(blog.date) >= startOfMonth
      ).length;
      const blogsThisYear = allBlogs.filter(
        (blog) => new Date(blog.date) >= startOfYear
      ).length;

      console.log("Time-based counts:", {
        blogsThisWeek,
        blogsThisMonth,
        blogsThisYear,
      });

      // Get top blogs with a simple query
      const topBlogs = await prisma.blog.findMany({
        select: {
          id: true,
          title: true,
          views: true,
        },
        orderBy: {
          views: "desc",
        },
        take: 5,
      });
      console.log("Top blogs:", topBlogs.length);

      // Get recent blogs
      const recentBlogs = await prisma.blog.findMany({
        select: {
          title: true,
          date: true,
          views: true,
        },
        orderBy: {
          date: "desc",
        },
        take: 10,
      });
      console.log("Recent blogs:", recentBlogs.length);

      // Generate monthly data (simplified)
      const monthlyData = [];
      for (let i = 11; i >= 0; i--) {
        const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);

        const monthBlogs = allBlogs.filter((blog) => {
          const blogDate = new Date(blog.date);
          return blogDate >= monthStart && blogDate <= monthEnd;
        });

        const monthViews = monthBlogs.reduce(
          (sum, blog) => sum + (blog.views || 0),
          0
        );

        monthlyData.push({
          month: monthStart.toLocaleDateString("en-US", { month: "short" }),
          blogs: monthBlogs.length,
          views: monthViews,
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

      console.log("Dashboard data prepared successfully");

      return NextResponse.json(dashboardData, {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "X-Timestamp": new Date().toISOString(),
        },
      });
    } catch (dbError) {
      console.error("Database query error:", dbError);

      // Return fallback data if database queries fail
      const fallbackData = {
        totalBlogs: 0,
        totalViews: 0,
        blogsThisWeek: 0,
        blogsThisMonth: 0,
        blogsThisYear: 0,
        monthlyData: Array.from({ length: 12 }, (_, i) => ({
          month: new Date(
            now.getFullYear(),
            now.getMonth() - (11 - i),
            1
          ).toLocaleDateString("en-US", {
            month: "short",
          }),
          blogs: 0,
          views: 0,
        })),
        topBlogs: [],
        recentActivity: [],
        lastUpdated: new Date().toISOString(),
        error: "Database connection issue",
      };

      return NextResponse.json(fallbackData, {
        status: 200, // Return 200 with fallback data instead of error
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "X-Timestamp": new Date().toISOString(),
        },
      });
    }
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch dashboard data",
        details: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
