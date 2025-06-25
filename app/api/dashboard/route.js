import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET() {
  try {
    // Get current date info
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Total blogs
    const totalBlogs = await prisma.blog.count();

    // Total views - get fresh data
    const totalViewsResult = await prisma.blog.aggregate({
      _sum: {
        views: true,
      },
    });
    const totalViews = totalViewsResult._sum.views || 0;

    // Blogs this week
    const blogsThisWeek = await prisma.blog.count({
      where: {
        date: {
          gte: startOfWeek,
        },
      },
    });

    // Blogs this month
    const blogsThisMonth = await prisma.blog.count({
      where: {
        date: {
          gte: startOfMonth,
        },
      },
    });

    // Blogs this year
    const blogsThisYear = await prisma.blog.count({
      where: {
        date: {
          gte: startOfYear,
        },
      },
    });

    // Monthly data for charts (last 12 months) - include real view data
    const monthlyData = [];
    for (let i = 11; i >= 0; i--) {
      const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);

      const monthBlogs = await prisma.blog.count({
        where: {
          date: {
            gte: monthStart,
            lte: monthEnd,
          },
        },
      });

      // Get actual view counts for blogs published in this month
      const monthViewsResult = await prisma.blog.aggregate({
        where: {
          date: {
            gte: monthStart,
            lte: monthEnd,
          },
        },
        _sum: {
          views: true,
        },
      });

      monthlyData.push({
        month: monthStart.toLocaleDateString("en-US", { month: "short" }),
        blogs: monthBlogs,
        views: monthViewsResult._sum.views || 0,
      });
    }

    // Top performing blogs - get current view counts
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

    // Recent activity (last 10 blogs)
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
      },
    });
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
