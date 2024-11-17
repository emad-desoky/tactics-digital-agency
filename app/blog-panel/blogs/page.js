import Link from 'next/link';
import { getSortedBlogs, initDB } from '@/model/blogs'; // Import your function to get blogs

export default async function BlogsPage() {
  // Fetch all blogs (without pagination limit)
  const blogs = await getSortedBlogs(1, Number.MAX_SAFE_INTEGER); // Fetch all blogs by passing a very large limit

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>
      <p className="text-center mb-8">Here is a list of all blogs.</p>

      {/* Displaying the blogs in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              {blog.title}
            </h3>
            <p className="text-gray-300 mb-4">{blog.description}</p>
            <Link
              href={`/blogs/${blog.id}`}
              className="inline-block px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 transition-colors"
            >
              View Blog
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
