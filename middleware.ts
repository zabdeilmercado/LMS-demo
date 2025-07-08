import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /login, /dashboard)
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const publicPaths = ["/login", "/register", "/forgot-password"]

  // Check if the current path is public
  const isPublicPath = publicPaths.includes(path)

  // Get the token from the request headers or cookies
  const token = request.cookies.get("authToken")?.value || ""

  // If the path is public and user has token, redirect to dashboard
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl))
  }

  // If the path is not public and no token, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login?redirected=true", request.nextUrl))
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
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)",
  ],
}
