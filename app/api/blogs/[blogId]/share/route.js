import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    const { blogId } = params;
    const { platform } = await request.json();

    // You can track shares in your database if needed
    // For now, we'll just return success
    // You could add a shares table or add share counts to the blog model

    return NextResponse.json({
      message: "Share tracked successfully",
      platform,
      blogId,
    });
  } catch (error) {
    console.error("Error tracking share:", error);
    return NextResponse.json(
      { error: "Failed to track share" },
      { status: 500 }
    );
  }
}
