import type { Metadata } from "next";
import FitnessCenterDetails from "@/features/fitness-centers/components/FitnessCenterDetails";
import { fitnessCenters } from "@/features/fitness-centers/lib/fitness-centers-data";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = parseRouteLocale(localeParam);

  const matchedCenter = fitnessCenters.find(
    (center) => center.href === `/fitness-centers/${slug}`,
  );
  const readableName =
    matchedCenter?.name ??
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return createPageMetadata({
    title: `${readableName} - Fitness Mərkəzi`,
    description: `${readableName} üçün ünvan, iş saatları və xidmət detalları.`,
    pathname: `/fitness-centers/${slug}`,
    locale,
    keywords: ["fitness center", "gym", readableName, "idman zalı"],
  });
}

export default async function LocaleFitnessCenterDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;
  return <FitnessCenterDetails slug={slug} />;
}
