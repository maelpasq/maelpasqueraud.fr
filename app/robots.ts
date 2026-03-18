import type { MetadataRoute } from "next";

import { portfolioContent } from "@/content/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
    sitemap: `${portfolioContent.identity.siteUrl}/sitemap.xml`,
    host: portfolioContent.identity.siteUrl,
  };
}
