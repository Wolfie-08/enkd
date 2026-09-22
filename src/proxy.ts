import { NextResponse, type NextRequest } from "next/server";

// EN lives unprefixed in URLs but under /en in the app tree.
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    if (pathname.includes("opengraph-image")) return;
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/uz" || pathname.startsWith("/uz/") || pathname.startsWith("/api/")) return;

  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and anything with a file extension (images, audio, sitemap.xml, robots.txt, llms.txt).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
