import { NextResponse } from "next/server";

// This middleware proxies requests from /blog/daily/* to /
export function proxy(request) {
  return NextResponse.redirect(
    new URL("/", request.url)
  );
}

export const config = {
  matcher: "/blog/daily/:path*",
};
