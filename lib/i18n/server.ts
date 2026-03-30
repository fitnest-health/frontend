import { cookies } from "next/headers";
import { cache } from "react";
import {
  defaultLocale,
  localeCookieName,
  normalizeLocale,
  type Locale,
} from "./config";
import { messages } from "./messages";

const resolveLocale = (locale?: string | Locale) =>
  normalizeLocale(locale ?? defaultLocale);

const getRequestI18n = cache(async () => {
  const cookieStore = await cookies();
  const locale = resolveLocale(
    cookieStore.get(localeCookieName)?.value ?? defaultLocale,
  );

  return {
    locale,
    messages: messages[locale],
  };
});

export const getLocale = async (forcedLocale?: Locale): Promise<Locale> => {
  if (forcedLocale) return resolveLocale(forcedLocale);
  const { locale } = await getRequestI18n();
  return locale;
};

export const getMessages = async (forcedLocale?: Locale) => {
  if (forcedLocale) {
    const locale = resolveLocale(forcedLocale);
    return {
      locale,
      messages: messages[locale],
    };
  }

  return getRequestI18n();
};
