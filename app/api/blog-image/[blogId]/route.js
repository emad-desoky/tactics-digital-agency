import { NextResponse } from "next/server";
import { getBlogById } from "@/model/blogs";

export async function GET(request, { params }) {
  try {
    const { blogId } = params;
    const blog = await getBlogById(blogId);

    if (!blog || !blog.image || !blog.image.startsWith("data:image/")) {
      // Return default image if no base64 image found
      return NextResponse.redirect(
        new URL("/og-tactics-image.jpg", request.url)
      );
    }

    // Extract base64 data and mime type
    const matches = blog.image.match(/^data:([^;]+);base64,(.+)$/);
    if (!matches) {
      return NextResponse.redirect(
        new URL("/og-tactics-image.jpg", request.url)
      );
    }

    const mimeType = matches[1];
    const base64Data = matches[2];

    // Convert base64 to buffer
    const buffer = Buffer.from(base64Data, "base64");

    // Return the image with proper headers for social media crawlers
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable", // Cache for 1 year
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
    });
  } catch (error) {
    console.error("Error serving blog image:", error);
    // Return default image on error
    return NextResponse.redirect(new URL("/og-tactics-image.jpg", request.url));
  }
}

// Handle HEAD requests (used by social media crawlers)
export async function HEAD(request, { params }) {
  try {
    const { blogId } = params;
    const blog = await getBlogById(blogId);

    if (!blog || !blog.image || !blog.image.startsWith("data:image/")) {
      return new NextResponse(null, { status: 404 });
    }

    const matches = blog.image.match(/^data:([^;]+);base64,(.+)$/);
    if (!matches) {
      return new NextResponse(null, { status: 404 });
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, "base64");

    return new NextResponse(null, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new NextResponse(null, { status: 404 });
  }
}
