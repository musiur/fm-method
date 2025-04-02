import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the user is authenticated
  const privateRoutes = ["/dashboard"];
  const publicRoutes = [
    "/login",
    "/register",
    "/forget-password",
    "/reset-password",
    "/verify-email",
  ];

  const accessToken = (await cookies()).get("access_token")?.value;
  const refreshToken = (await cookies()).get("refresh_token")?.value;

  if (privateRoutes.includes(pathname)) {
    if (!accessToken || !refreshToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (publicRoutes.includes(pathname)) {
    if (accessToken && refreshToken) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.next();
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
