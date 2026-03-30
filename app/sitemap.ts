import type { MetadataRoute } from "next";
import { getStoresServerCached } from "@/features/fit-market/api/stores";
import { fitnessCenters } from "@/features/fitness-centers/lib/fitness-centers-data";
import { locales } from "@/lib/i18n/config";
import { createAbsoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/offers",
  "/bmi",
  "/fit-market",
  "/fitness-centers",
  "/faq",
  "/contact",
  "/feedback",
  "/privacy",
  "/terms",
];

const toLocalizedPath = (path: string, locale: (typeof locales)[number]) =>
  path === "/" ? `/${locale}` : `/${locale}${path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const routeSet = new Set<string>(staticRoutes);

  for (const center of fitnessCenters) {
    routeSet.add(center.href);
  }

  try {
    const stores = await getStoresServerCached({ page_size: 500 });
    for (const store of stores.items) {
      routeSet.add(`/fit-market/${store.storeId}`);
    }
  } catch {
    // Ignore upstream errors and return static sitemap routes.
  }

  const entries: MetadataRoute.Sitemap = [];
  for (const path of routeSet) {
    for (const locale of locales) {
      entries.push({
        url: createAbsoluteUrl(toLocalizedPath(path, locale)),
        lastModified,
        changeFrequency: path === "/" ? "weekly" : "daily",
        priority: path === "/" ? 1 : 0.7,
      });
    }
  }

  return entries;
}
