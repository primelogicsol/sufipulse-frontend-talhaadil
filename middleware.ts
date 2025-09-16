import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;
  const userRole = request.cookies.get("user_role")?.value;
  const permissionsCookie = request.cookies.get("permissions")?.value;
  const isAuth = Boolean(accessToken);

  // Parse permissions if available
  let permissions: Record<string, string[]> = {};
  try {
    if (permissionsCookie) {
      permissions = JSON.parse(permissionsCookie);
    }
  } catch (error) {
    console.error("Failed to parse permissions cookie:", error);
  }

  // Define protected and public routes
  const isAdminRoute = pathname.startsWith("/admin");
  const isVocalistRoute =
    pathname.startsWith("/vocalist") &&
    pathname !== "/vocalist-how-it-works" &&
    pathname !== "/vocalists";
  const isWriterRoute =
    pathname.startsWith("/writer") && pathname !== "/writer-faqs";

  // Handle CORS preflight OPTIONS request
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  // Map admin subroutes to required permissions
  const permissionMap: Record<string, string> = {
    "/admin/vocalists": "vocalist",
    "/admin/writers": "writer",
    "/admin/kalams": "kalams",
    "/admin/studio-requests": "requests",
    "/admin/remote-requests": "requests",
    "/admin/partnership": "partnership_proposal",
    "/admin/notifications": "notification",
    "/admin/other-admins": "sub_admins",
    "/admin/blog": "blog",
  };

  // Handle admin routes: require authentication and admin/subadmin role
  if (isAdminRoute) {
    if (!isAuth) {
      // Redirect unauthenticated users to login
      const loginUrl = new URL("/aLogin", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (userRole !== "admin" && userRole !== "sub-admin") {
      // Redirect non-admin/subadmin users to root (/)
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (userRole === "sub-admin") {
      // Check permissions for subadmin
      const requiredPermission = Object.entries(permissionMap).find(([route]) =>
        pathname.startsWith(route)
      )?.[1];

      if (requiredPermission && (!permissions[requiredPermission] || !permissions[requiredPermission].includes("view"))) {
        // Redirect subadmin to /admin if they lack permission
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }
  }

 

  // Allow access to all other routes
  return NextResponse.next();
}

// Define which paths the middleware applies to
export const config = {
  matcher: ["/admin/:path*", "/vocalist/:path*", "/writer/:path*"],
};