import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        adminName: true,
        date: true,
        views: true,
        image: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
