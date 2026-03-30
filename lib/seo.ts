import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/config";

const FALLBACK_SITE_URL = "https://fitnest.az";
const normalizedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? FALLBACK_SITE_URL;

export const SITE_URL = new URL(normalizedSiteUrl);
export const SITE_ORIGIN = SITE_URL.origin;
export const SITE_NAME = "FitNest";
export const DEFAULT_OG_IMAGE = "/images/main-page.webp";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  locale: Locale;
  keywords?: string[];
  noIndex?: boolean;
  image?: string;
};

const normalizePathname = (pathname: string): string => {
  if (!pathname) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
};

const getLocalizedPath = (pathname: string, locale: Locale): string => {
  const safePath = normalizePathname(pathname);
  return safePath === "/" ? `/${locale}` : `/${locale}${safePath}`;
};

const getLocalizedUrl = (pathname: string, locale: Locale): string =>
  new URL(getLocalizedPath(pathname, locale), SITE_URL).toString();

export const createPageMetadata = ({
  title,
  description,
  pathname,
  locale,
  keywords = [],
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
}: CreatePageMetadataInput): Metadata => {
  const canonical = getLocalizedUrl(pathname, locale);
  const languageAlternates = Object.fromEntries(
    locales.map((lang) => [lang, getLocalizedUrl(pathname, lang)]),
  );

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} cover image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };
};

export const createAbsoluteUrl = (pathname: string) =>
  new URL(pathname, SITE_URL).toString();
