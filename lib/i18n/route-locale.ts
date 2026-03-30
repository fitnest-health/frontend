import { notFound } from "next/navigation";
import { locales, type Locale } from "./config";

export const parseRouteLocale = (value: string): Locale => {
  if (!locales.includes(value as Locale)) {
    notFound();
  }

  return value as Locale;
};
