import { NextResponse } from "next/server";
import { addBlog } from "@/model/blogs"; // Importing the addBlog function from your model

export async function POST(req) {
  try {
    // Parse the incoming JSON request body
    const newBlog = await req.json();

    // Use the addBlog function to create a new blog in the database
    const createdBlog = await addBlog(newBlog);

    // Return the newly created blog with a success response
    return NextResponse.json(createdBlog, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
