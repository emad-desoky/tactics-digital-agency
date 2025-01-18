import { getBlogsLength, getSortedBlogs } from "@/model/blogs";

export async function DataBlogServer({ pageNo = 1 }) {
  const pageSize = 4;
  const blogs = await getSortedBlogs(pageNo, pageSize);
  const totalBlogs = await getBlogsLength();
  const totalPages = Math.ceil(totalBlogs / pageSize);

  // Extract unique tags from all blogs
  const allTags = [...new Set(blogs.flatMap((blog) => blog.tags || []))];

  return { blogs, totalPages, pageNo, allTags };
}
