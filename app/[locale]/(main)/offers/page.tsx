import type { Metadata } from "next";
import OffersPage from "@/features/offers";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    type?: string | string[];
    month?: string | string[];
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("offers", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/offers",
    locale,
    keywords: seo.keywords,
  });
}

export default function LocaleOffersPage({ searchParams }: PageProps) {
  return <OffersPage searchParams={searchParams} />;
}
