import type { MetadataRoute } from "next";
import { SITE_ORIGIN, createAbsoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/payment/", "/az/payment/", "/en/payment/", "/ru/payment/"],
      },
    ],
    sitemap: createAbsoluteUrl("/sitemap.xml"),
    host: SITE_ORIGIN,
  };
}
