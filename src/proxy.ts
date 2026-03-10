// src/proxy.ts
import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  // Example: Redirect old Lecomake paths to new high-end structure
  if (request.nextUrl.pathname.startsWith("/old-services")) {
    return NextResponse.redirect(new URL("/solutions", request.url));
  }

  return NextResponse.next();
}
