import type { Metadata } from "next";
import HomePage from "@/features/home";
import { getSubscriptionPackagesServerCached } from "@/features/offers/api/subscription-packages";
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
  const seo = getSeoContent("home", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/",
    locale,
    keywords: seo.keywords,
  });
}

export default async function LocaleHomePage() {
  let items: Awaited<ReturnType<typeof getSubscriptionPackagesServerCached>>["items"] = [];
  try {
    const data = await getSubscriptionPackagesServerCached();
    items = data.items;
  } catch {
    // Keep page renderable even if upstream API times out during runtime.
  }

  return (
    <div className="text-gray-50">
      <HomePage packages={items} />
    </div>
  );
}
