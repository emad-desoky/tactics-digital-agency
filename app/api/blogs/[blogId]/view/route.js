import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function POST(request, { params }) {
  try {
    const { blogId } = params;

    // Increment view count in the database
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      success: true,
      views: updatedBlog.views,
    });
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return NextResponse.json(
      { error: "Failed to count view" },
      { status: 500 }
    );
  }
}
