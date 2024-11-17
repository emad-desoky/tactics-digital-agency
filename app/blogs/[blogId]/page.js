import { getBlogById } from "@/model/blogs";
import styles from './page.module.css'; // Import the CSS module

export default async function Blog({ params }) {
  const { blogId } = await params;
  const blog = await getBlogById(blogId);

  return (
    <div className="bg-zinc-950 min-h-screen">
      {blog ? (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-8 md:px-16 lg:px-20 max-w-4xl mx-auto shadow-lg">
          {/* Admin name and date */}
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
            <p>{blog.adminName}</p>
            <p>{blog.date.toUTCString()}</p>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-yellow-400 border-b-4 border-yellow-500 pb-4 mb-8">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="font-medium mb-4 text-gray-300">
            <strong>Description:</strong> {blog.description}
          </p>

          {/* Content */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className={`${styles.content} text-lg leading-relaxed space-y-6`}  // Apply CSS module
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}
