import { cookies, headers } from "next/headers";
import {
  defaultLocale,
  localeCookieName,
  normalizeLocale,
  type Locale,
} from "./config";
import { messages } from "./messages";

export const getLocale = async (): Promise<Locale> => {
  const headerStore = await headers();
  const localeFromHeader = headerStore.get("x-locale");
  if (localeFromHeader) {
    return normalizeLocale(localeFromHeader);
  }

  const cookieStore = await cookies();
  return normalizeLocale(cookieStore.get(localeCookieName)?.value ?? defaultLocale);
};

export const getMessages = async () => {
  const locale = await getLocale();
  return {
    locale,
    messages: messages[locale],
  };
};
