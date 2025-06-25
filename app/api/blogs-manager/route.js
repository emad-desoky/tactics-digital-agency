import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const fresh = searchParams.get("fresh");

    console.log(
      "Fetching blogs from Supabase - Fresh request:",
      fresh === "true"
    );

    // Force fresh data from Supabase by using a direct query
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

    console.log(`Fetched ${blogs.length} blogs from Supabase`);
    console.log(
      "Sample blog views:",
      blogs.slice(0, 3).map((b) => ({ title: b.title, views: b.views }))
    );

    return NextResponse.json(blogs, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "X-Timestamp": new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error fetching blogs from Supabase:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs", details: error.message },
      { status: 500 }
    );
  }
}
