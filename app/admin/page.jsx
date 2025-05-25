"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminAuth from "@/components/admin/AdminAuth";

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = () => {
      const authStatus = localStorage.getItem("adminAuthenticated");
      const authTime = localStorage.getItem("adminAuthTime");

      if (authStatus === "true" && authTime) {
        // Check if authentication is still valid (24 hours)
        const authTimeMs = Number.parseInt(authTime);
        const currentTime = Date.now();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (currentTime - authTimeMs < twentyFourHours) {
          // Already authenticated, redirect to blog-panel
          router.push("/blog-panel");
          return;
        } else {
          // Authentication expired
          localStorage.removeItem("adminAuthenticated");
          localStorage.removeItem("adminAuthTime");
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
