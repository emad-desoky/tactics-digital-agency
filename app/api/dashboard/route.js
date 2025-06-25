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

    // Total views
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

    // Monthly data for charts (last 12 months)
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

    // Top performing blogs
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
    };

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
