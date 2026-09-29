import { NextResponse, type NextRequest } from "next/server";

// EN lives unprefixed in URLs but under /en in the app tree.
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // studio.enkd.uz (and studio.localhost in dev) is its own site under /studio/[lang]. UZ is unprefixed.
  if ((req.headers.get("host") ?? "").startsWith("studio.")) {
    if (pathname.startsWith("/api/")) return;
    const m = pathname.match(/^\/(ru|en)(\/.*)?$/);
    const url = req.nextUrl.clone();
    url.pathname = m ? `/studio/${m[1]}${m[2] ?? ""}` : `/studio/uz${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

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
