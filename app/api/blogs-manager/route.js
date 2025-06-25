import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET() {
  try {
    // Add cache control headers to prevent caching
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        adminName: true,
        date: true,
        views: true,
        image: true,
        tags: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    return NextResponse.json(blogs, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
