import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (blogId) {
      axios
        .get("/api/blogsData") // Ensure your API endpoint is correct
        .then((response) => {
          const blogData = response.data.find((b) => b.id === blogId);
          setBlog(blogData || null);
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }
  }, [blogId]);

  return (
    <div className="bg-zinc-950">
      {blog ? (
        <div className="bg-gray-900 text-gray-100  py-8 md:px-16 lg:px-20 max-w-4xl mx-auto shadow-lg">
          {/* Admin name and date */}
          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
            <p>{blog.adminName}</p>
            <p>{blog.date}</p>
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
            className="text-lg leading-relaxed space-y-6"
          />

          {/* Additional styling for readability */}
          <style jsx>{`
            .content p {
              margin-bottom: 1.5em;
              line-height: 1.8;
            }
            .content h2 {
              font-size: 1.5em;
              margin-top: 2em;
              margin-bottom: 1em;
              font-weight: bold;
              color: #f8e112;
            }
            .content a {
              color: #f8e112;
              text-decoration: underline;
            }
          `}</style>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default Blog;
