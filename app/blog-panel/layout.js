import Link from "next/link";

export default function BlogPanelLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800">
        <div className="text-white p-4 fixed h-full bg-gray-800 w-1/4">
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <ul>
            <li className="mb-4 cursor-pointer hover:text-gray-400">
              <Link href={"/blog-panel"}>Dashboard</Link>
            </li>
            <li className="mb-4 cursor-pointer hover:text-gray-400">
              <Link href={"/blog-panel/blogs"}>Blogs</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-400">
              <Link href={"/blog-panel/add-blog"}>Add Blog</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-gray-100">{children}</div>
    </div>
  );
}
