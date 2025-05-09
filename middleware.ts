import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simple middleware to handle authentication
// In a real application, you would check for a valid session/token
export function middleware(request: NextRequest) {
  // For demonstration purposes, we'll just check if the path is not login
  // and redirect to login if needed

  // In a real app, you would check for a valid session cookie or token
  const isAuthenticated = true // This would be your actual auth check

  // Public paths that don't require authentication
  const publicPaths = ["/login", "/forgot-password", "/register"]

  const isPublicPath = publicPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  // If the user is not authenticated and trying to access a protected route
  if (!isAuthenticated && !isPublicPath) {
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  // If the user is authenticated and trying to access login page
  if (isAuthenticated && isPublicPath) {
    const dashboardUrl = new URL("/", request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
