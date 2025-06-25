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

export async function getBlogById(id) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
    });
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
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

export async function incrementBlogViews(id) {
  try {
    // If we're on the server side, directly update the database
    if (typeof window === "undefined") {
      const updatedBlog = await prisma.blog.update({
        where: { id },
        data: {
          views: {
            increment: 1,
          },
        },
      });
      return { success: true, views: updatedBlog.views };
    } else {
      // If we're on the client side, make an API call
      const response = await fetch(`/api/blogs/${id}/view`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to increment view count");
      }

      return await response.json();
    }
  } catch (error) {
    console.error("Error incrementing views:", error);
    return { success: false, error: error.message };
  }
}

export async function getAllBlogs(page = 1, limit = 10) {
  try {
    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        skip,
        take: limit,
        orderBy: {
          date: "desc",
        },
        select: {
          id: true,
          title: true,
          description: true,
          image: true,
          adminName: true,
          date: true,
          views: true,
          tags: true,
        },
      }),
      prisma.blog.count(),
    ]);

    return {
      blogs,
      total,
      pages: Math.ceil(total / limit),
      currentPage: page,
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      blogs: [],
      total: 0,
      pages: 0,
      currentPage: 1,
    };
  }
}

// Get fresh blog data for dashboard
export async function getDashboardData() {
  try {
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    // Total blogs
    const totalBlogs = await prisma.blog.count();

    // Total views - get fresh data
    const totalViewsResult = await prisma.blog.aggregate({
      _sum: {
        views: true,
      },
    });
    const totalViews = totalViewsResult._sum.views || 0;

    // Blogs this week
    const blogsThisWeek = await prisma.blog.count({
      where: {
        date: {
          gte: startOfWeek,
        },
      },
    });

    // Blogs this month
    const blogsThisMonth = await prisma.blog.count({
      where: {
        date: {
          gte: startOfMonth,
        },
      },
    });

    // Blogs this year
    const blogsThisYear = await prisma.blog.count({
      where: {
        date: {
          gte: startOfYear,
        },
      },
    });

    // Top performing blogs
    const topBlogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        views: true,
      },
      orderBy: {
        views: "desc",
      },
      take: 5,
    });

    // Recent activity
    const recentBlogs = await prisma.blog.findMany({
      select: {
        title: true,
        date: true,
        views: true,
      },
      orderBy: {
        date: "desc",
      },
      take: 10,
    });

    return {
      totalBlogs,
      totalViews,
      blogsThisWeek,
      blogsThisMonth,
      blogsThisYear,
      topBlogs,
      recentActivity: recentBlogs.map((blog) => ({
        action: "Published",
        blog: blog.title,
        date: new Date(blog.date).toLocaleDateString(),
        views: blog.views || 0,
      })),
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}
