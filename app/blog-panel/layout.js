"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BlogPanelLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      // Check cookies for authentication
      const cookies = document.cookie.split(";");
      const authCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("adminAuthenticated=")
      );
      const authTimeCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("adminAuthTime=")
      );

      if (authCookie?.includes("true") && authTimeCookie) {
        const authTime = Number.parseInt(authTimeCookie.split("=")[1]);
        const currentTime = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (currentTime - authTime < twentyFourHours) {
          setIsAuthenticated(true);
        } else {
          // Clear expired cookies
          document.cookie =
            "adminAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "adminAuthTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          router.push("/admin");
        }
      } else {
        router.push("/admin");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    // Clear cookies
    document.cookie =
      "adminAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "adminAuthTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to admin page
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 shadow-lg">
        <div className="text-white p-6 h-full flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">
              Admin Panel
            </h2>
            <p className="text-gray-300 text-sm">Tactics Digital Agency</p>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog-panel"
                  className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                  <span>📊 Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-panel/blogs"
                  className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                  <span>📝 Manage Blogs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-panel/add-blog"
                  className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                  <span>➕ Add Blog</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="border-t border-gray-700 pt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
            >
              <span>🚪 Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
