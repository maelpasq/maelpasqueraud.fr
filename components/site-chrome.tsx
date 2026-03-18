"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { PageTransition } from "@/components/motion/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { portfolioContent } from "@/content/portfolio";

type SiteChromeProps = {
  children: ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname() ?? "/";
  const isHomeRoute = pathname === "/";
  const isBlogRoute = pathname === "/blog" || pathname.startsWith("/blog/");
  const isProjectRoute = pathname.startsWith("/projets/");
  const showChrome = isHomeRoute || isBlogRoute || isProjectRoute;
  const siteDomain = portfolioContent.identity.siteUrl.replace(/^https?:\/\//, "");

  const usesRouteAnchors = isBlogRoute || isProjectRoute;
  const homeHref = usesRouteAnchors ? "/" : "#hero";
  const anchorPrefix = usesRouteAnchors ? "/" : "";
  const secondaryCta = isBlogRoute
    ? {
        label: portfolioContent.blog.backHomeLabel,
        href: "/",
      }
    : portfolioContent.footer.blogLink;
  const topHref = isBlogRoute ? "#blog-top" : isProjectRoute ? "#project-top" : "#hero";

  return (
    <>
      {showChrome ? (
        <SiteHeader
          name={portfolioContent.identity.name}
          role={portfolioContent.identity.role}
          navigation={portfolioContent.navigation}
          navigationAriaLabel={portfolioContent.ui.header.navigationAriaLabel}
          homeHref={homeHref}
          anchorPrefix={anchorPrefix}
        />
      ) : null}

      <PageTransition>{children}</PageTransition>

      {showChrome ? (
        <SiteFooter
          siteDomain={siteDomain}
          navigation={portfolioContent.navigation}
          identity={portfolioContent.identity}
          contact={portfolioContent.contact}
          footer={portfolioContent.footer}
          secondaryCta={secondaryCta}
          anchorPrefix={anchorPrefix}
          topHref={topHref}
        />
      ) : null}
    </>
  );
}
