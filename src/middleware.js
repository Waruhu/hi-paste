import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("project-id", "fdaa315e-398b-49d1-83be-358501e4cfc1");

  request.nextUrl.href = `https://www.Hipaste.nonprod.hibank.co.id/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}