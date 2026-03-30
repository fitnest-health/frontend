import type { Metadata } from "next";
import FaqPage from "@/features/faq";
import { getMessages } from "@/lib/i18n/server";
import { parseRouteLocale } from "@/lib/i18n/route-locale";
import { createPageMetadata } from "@/lib/seo";
import { getSeoContent } from "@/lib/seo-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const seo = getSeoContent("faq", locale);

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    pathname: "/faq",
    locale,
    keywords: seo.keywords,
  });
}

export default async function LocaleFaqPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = parseRouteLocale(localeParam);
  const { messages } = await getMessages(locale);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: messages.faq.items.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.content,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPage />
    </>
  );
}
