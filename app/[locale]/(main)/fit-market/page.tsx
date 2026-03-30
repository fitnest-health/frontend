import type { Metadata } from "next";
import FitMarketPage from "@/features/fit-market";
import { getStoresServerCached } from "@/features/fit-market/api/stores";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("fitMarket", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/fit-market",
    locale,
    keywords: seo.keywords,
  });
}

export default async function LocaleFitMarketPage() {
  try {
    const data = await getStoresServerCached();
    return <FitMarketPage stores={data.items} />;
  } catch {
    return <FitMarketPage stores={[]} />;
  }
}
