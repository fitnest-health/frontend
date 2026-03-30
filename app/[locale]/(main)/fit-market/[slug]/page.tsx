import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import FitMarketDetails from "@/features/fit-market/components/FitMarketDetails";
import { getStoreByIdServer } from "@/features/fit-market/api/stores";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const fitMarketDetailContent: Record<
  Locale,
  { suffix: string; fallbackTitle: string; descriptionPrefix: string }
> = {
  az: {
    suffix: "Fit Market",
    fallbackTitle: "Fit Market Detalları",
    descriptionPrefix: "üçün əlaqə məlumatları, ünvan və mövcud endirimlər.",
  },
  en: {
    suffix: "Fit Market",
    fallbackTitle: "Fit Market Details",
    descriptionPrefix: "contact details, address, and available discounts.",
  },
  ru: {
    suffix: "Fit Market",
    fallbackTitle: "Детали Fit Market",
    descriptionPrefix: "контакты, адрес и доступные скидки.",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = parseRouteLocale(localeParam);
  const content = fitMarketDetailContent[locale];

  try {
    const store = await getStoreByIdServer(slug);
    const storeTitle = store?.name ?? `${content.fallbackTitle} #${slug}`;

    return createPageMetadata({
      title: `${storeTitle} - ${content.suffix}`,
      description: `${storeTitle} ${content.descriptionPrefix}`,
      pathname: `/fit-market/${slug}`,
      locale,
      keywords: ["fit market", "mağaza", storeTitle, "endirim"],
    });
  } catch {
    return createPageMetadata({
      title: content.fallbackTitle,
      description: `${content.fallbackTitle} ${content.descriptionPrefix}`,
      pathname: `/fit-market/${slug}`,
      locale,
      keywords: ["fit market", "mağaza detalları"],
    });
  }
}

export default async function LocaleFitMarketDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  return <FitMarketDetails slug={slug} />;
}
