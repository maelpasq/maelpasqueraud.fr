import type { MetadataRoute } from "next";

import { portfolioContent } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: portfolioContent.identity.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${portfolioContent.identity.siteUrl}/blog`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...portfolioContent.projects.items.map((project) => ({
      url: `${portfolioContent.identity.siteUrl}/projets/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...portfolioContent.blog.posts.map((post) => ({
      url: `${portfolioContent.identity.siteUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
