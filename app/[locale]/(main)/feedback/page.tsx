import type { Metadata } from "next";
import FeedbackPage from "@/features/feedback";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("feedback", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/feedback",
    locale,
    keywords: seo.keywords,
  });
}

export default function LocaleFeedbackPage() {
  return <FeedbackPage />;
}
