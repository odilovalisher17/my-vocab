import { NextResponse } from "next/server";

export function middleware(request) {
  const username = request.cookies.get("username")?.value;
  const { pathname } = request.nextUrl;

  const publicRoutes = ["/login", "/reg", "/api/login", "/api/reg"];

  if (username || publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
