export const locales = ["az", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "az";
export const localeCookieName = "fitnest_locale";

export const normalizeLocale = (value?: string | null): Locale => {
  if (!value) return defaultLocale;
  const lower = value.toLowerCase();
  return locales.includes(lower as Locale) ? (lower as Locale) : defaultLocale;
};

export const getLocaleFromPathname = (pathname: string): Locale | null => {
  const [, maybeLocale] = pathname.split("/");
  return locales.includes(maybeLocale as Locale) ? (maybeLocale as Locale) : null;
};

export const stripLocaleFromPathname = (pathname: string): string => {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname || "/";

  const nextPathname = pathname.slice(locale.length + 1);
  return nextPathname.startsWith("/") ? nextPathname : `/${nextPathname || ""}`;
};

export const addLocaleToPathname = (pathname: string, locale: Locale): string => {
  const stripped = stripLocaleFromPathname(pathname || "/");
  return stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
};
