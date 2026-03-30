import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  addLocaleToPathname,
  defaultLocale,
  getLocaleFromPathname,
  localeCookieName,
  normalizeLocale,
} from "@/lib/i18n/config";

export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  const localeFromPath = getLocaleFromPathname(pathname);
  const localeFromCookie = normalizeLocale(
    request.cookies.get(localeCookieName)?.value ?? defaultLocale,
  );

  if (!localeFromPath) {
    const redirectUrl = nextUrl.clone();
    redirectUrl.pathname = addLocaleToPathname(pathname, localeFromCookie);

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(localeCookieName, localeFromCookie, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const response = NextResponse.next();

  response.cookies.set(localeCookieName, localeFromPath, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
