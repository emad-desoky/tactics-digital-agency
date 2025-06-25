import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if the request is for the blog-panel or any of its sub-routes
  if (request.nextUrl.pathname.startsWith("/blog-panel")) {
    // Skip authentication check for the main admin page
    if (request.nextUrl.pathname === "/admin") {
      return NextResponse.next();
    }

    // Check for authentication
    const authCookie = request.cookies.get("adminAuthenticated");
    const authTimeCookie = request.cookies.get("adminAuthTime");

    if (!authCookie || authCookie.value !== "true" || !authTimeCookie) {
      // Redirect to admin login page
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    // Check if authentication is still valid (24 hours)
    const authTime = Number.parseInt(authTimeCookie.value);
    const currentTime = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (currentTime - authTime > twentyFourHours) {
      // Authentication expired, redirect to admin login
      const response = NextResponse.redirect(new URL("/admin", request.url));
      response.cookies.delete("adminAuthenticated");
      response.cookies.delete("adminAuthTime");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog-panel/:path*"],
};
