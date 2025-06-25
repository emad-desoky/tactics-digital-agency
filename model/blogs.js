import prisma from "@/prisma/prisma";

// Initialize database with sample data
export async function initDB() {
  const numberOfBlogs = 10;

  for (let i = 0; i < numberOfBlogs; i++) {
    const title = `Sample Blog Post ${i + 1}`;
    const description = `This is a sample description for blog post ${i + 1}`;
    const adminName = "Admin User";
    const content = `<p>This is sample content for blog post ${
      i + 1
    }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
    const date = new Date(
      Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
    );
    const views = Math.floor(Math.random() * 1000);

    await prisma.blog.create({
      data: {
        title,
        description,
        content,
        adminName,
        date,
        views,
        tags: [`tag${i + 1}`, "sample"],
      },
    });

    console.log(`Blog ${i + 1} created: ${title}`);
  }

  console.log(`${numberOfBlogs} blogs have been added to the database.`);
}

// Get sorted blogs with pagination
export async function getSortedBlogs(pageNo, pageSize) {
  const skip = (pageNo - 1) * pageSize;
  return await prisma.blog.findMany({
    skip: skip,
    take: pageSize,
    orderBy: {
      date: "desc",
    },
  });
}

// Get total blog count
export async function getBlogsLength() {
  return await prisma.blog.count();
}

// Search blogs by title
export async function getSearchedBlogs(searchQuery) {
  return await prisma.blog.findMany({
    where: {
      title: {
        contains: searchQuery,
        mode: "insensitive",
      },
    },
  });
}

// Get blog by ID
export async function getBlogById(id) {
  return await prisma.blog.findUnique({
    where: { id },
  });
}

// Add new blog
export async function addBlog(blog) {
  return await prisma.blog.create({
    data: {
      ...blog,
      views: 0,
      date: new Date(),
    },
  });
}

// Delete blog
export async function deleteBlog(id) {
  return await prisma.blog.delete({
    where: { id },
  });
}

// Update blog
export async function updateBlog(id, blog) {
  return await prisma.blog.update({
    where: { id },
    data: blog,
  });
}

// Increment blog views
export async function incrementBlogViews(id) {
  return await prisma.blog.update({
    where: { id },
    data: {
      views: {
        increment: 1,
      },
    },
  });
}
