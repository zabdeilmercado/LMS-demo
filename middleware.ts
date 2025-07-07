import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Public paths that don't require authentication
  const publicPaths = ["/login", "/forgot-password", "/register"]

  // Check if the current path is public
  const isPublicPath = publicPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  // Get authentication token from cookies (in a real app, you'd check for actual session)
  const authToken = request.cookies.get("authToken")?.value

  // For demo purposes, we'll check localStorage on the client side
  // In a real app, you'd validate the session server-side

  // If trying to access a protected route without authentication
  if (!isPublicPath && !authToken) {
    // Redirect to login with a query parameter to show redirect message
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirected", "true")
    return NextResponse.redirect(loginUrl)
  }

  // If authenticated user tries to access login page, redirect to dashboard
  if (isPublicPath && authToken && request.nextUrl.pathname === "/login") {
    const dashboardUrl = new URL("/", request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
}
