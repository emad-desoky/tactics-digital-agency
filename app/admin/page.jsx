"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminAuth from "@/components/admin/AdminAuth";

export default function AdminPage() {
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
          router.push("/blog-panel");
          return;
        } else {
          // Clear expired cookies
          document.cookie =
            "adminAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "adminAuthTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return <AdminAuth />;
}
