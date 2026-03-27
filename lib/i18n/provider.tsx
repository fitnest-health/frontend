"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  addLocaleToPathname,
  localeCookieName,
  type Locale,
} from "./config";
import { messages, type Messages } from "./messages";

type I18nContextValue = {
  locale: Locale;
  t: Messages;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  initialLocale: Locale;
  children: ReactNode;
}

export const I18nProvider = ({ initialLocale, children }: I18nProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      setLocaleState(nextLocale);
      document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;

      const localizedPath = addLocaleToPathname(pathname || "/", nextLocale);
      const queryString = searchParams.toString();
      const nextUrl = queryString ? `${localizedPath}?${queryString}` : localizedPath;

      router.push(nextUrl);
    },
    [pathname, router, searchParams],
  );

  const value = useMemo(
    () => ({
      locale,
      t: messages[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
};
