import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        description: body.description,
        content: body.content,
        adminName: body.adminName,
        image: body.image || "https://placehold.co/600x400",
        tags: body.tags || [],
        views: 0,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
