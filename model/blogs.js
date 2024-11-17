import prisma from "@/prisma/prisma";
import { faker } from '@faker-js/faker';


export async function initDB() {
    // Number of blogs you want to insert
    const numberOfBlogs = 10;
  
    // Loop to insert the specified number of random blogs
    for (let i = 0; i < numberOfBlogs; i++) {
      const title = faker.lorem.words(4);  // Generate a random title with 4 words
      const description = faker.lorem.sentence();  // Generate a random description
      const adminName = faker.person.fullName();
      const content = faker.lorem.paragraphs(3);  // Generate random content with 3 paragraphs  
      const date = faker.date.past(1);  // Generate a random past date within the last year
  
      // Insert blog into the database
      await prisma.blog.create({
        data: {
          title,
          description,
          content,
          adminName,
          date,
        },
      });
  
      console.log(`Blog ${i + 1} created: ${title}`);
    }
  
    console.log(`${numberOfBlogs} blogs have been added to the database.`);
  }

// Latest blogs will show first
export async function getSortedBlogs(pageNo, pageSize) {
    const skip = (pageNo - 1) * pageSize;  // Skip blogs for previous pages
    return await prisma.blog.findMany({
      skip: skip,               // Skip the first (pageNo - 1) * pageSize blogs
      take: pageSize,           // Take the number of blogs based on pageSize
      orderBy: {
        date: 'desc',           // Sort by date in descending order
      },
    });
  }
  

export async function getBlogsLength() {
    return await prisma.blog.count();
}

export async function getSearchedBlogs(searchQuery) {
    return await prisma.blog.findMany({
      where: {
        title: {
          contains: searchQuery, // Filter by title using `contains`
          mode: 'insensitive', // Case-insensitive search
        },
      },
    });
  }
  
  

export async function getBlogById(id) {
    return await prisma.blog.findUnique({where: {id}});
}

export async function addBlog(blog) {
    return await prisma.blog.create({data: blog});
}

export async function deleteBlog(id) {
    return await prisma.blog.delete({where: {id}});
}

export async function updateBlog(blog) {
    return await prisma.blog.update({where: {id}, data: blog});
}
