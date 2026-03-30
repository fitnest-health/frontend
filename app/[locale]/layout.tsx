import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/lib/i18n/provider";
import { locales, type Locale } from "@/lib/i18n/config";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <I18nProvider initialLocale={locale as Locale}>{children}</I18nProvider>;
}
