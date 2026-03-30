import type { Metadata } from "next";
import BmiPage from "@/features/bmi";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("bmi", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/bmi",
    locale,
    keywords: seo.keywords,
  });
}

export default function LocaleBmiPage() {
  return <BmiPage />;
}
