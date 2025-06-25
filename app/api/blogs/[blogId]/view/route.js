import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function POST(request, { params }) {
  try {
    const { blogId } = params;

    console.log("Incrementing view count for blog:", blogId);

    // Increment view count in Supabase
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    console.log("View count updated:", updatedBlog.views);

    return NextResponse.json(
      {
        success: true,
        views: updatedBlog.views,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return NextResponse.json(
      { error: "Failed to count view", details: error.message },
      { status: 500 }
    );
  }
}
