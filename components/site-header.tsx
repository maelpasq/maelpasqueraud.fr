"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { useEffect, useEffectEvent, useMemo, useState } from "react";

import type { NavigationItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  name: string;
  role: string;
  navigation: NavigationItem[];
  navigationAriaLabel: string;
  homeHref?: string;
  anchorPrefix?: string;
};

export function SiteHeader({
  name,
  role,
  navigation,
  navigationAriaLabel,
  homeHref = "#hero",
  anchorPrefix = "",
}: SiteHeaderProps) {
  const pathname = usePathname();
  const sectionNavigation = useMemo(
    () => navigation.filter((item) => item.href.startsWith("#") && anchorPrefix === ""),
    [anchorPrefix, navigation],
  );
  const defaultSectionId = sectionNavigation[0]?.href.replace("#", "") ?? "hero";
  const [activeId, setActiveId] = useState(defaultSectionId);
  const { scrollYProgress } = useScroll();

  const updateActiveId = useEffectEvent(() => {
    const marker = window.innerHeight * 0.28;
    let currentId = defaultSectionId;

    for (const item of sectionNavigation) {
      const sectionId = item.href.replace("#", "");
      const section = document.getElementById(sectionId);

      if (!section) {
        continue;
      }

      if (section.getBoundingClientRect().top <= marker) {
        currentId = sectionId;
      }
    }

    setActiveId(currentId);
  });

  useEffect(() => {
    setActiveId(defaultSectionId);
  }, [defaultSectionId]);

  useEffect(() => {
    updateActiveId();

    function onScroll() {
      updateActiveId();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionNavigation]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-line bg-background/80 backdrop-blur-xl">
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px origin-left bg-accent"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="flex flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-5">
          {homeHref.startsWith("#") ? (
            <a href={homeHref} className="flex items-center gap-3">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-foreground sm:text-base">
                {name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="hidden pb-[0.08rem] font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted sm:block">
                {role}
              </span>
            </a>
          ) : (
            <Link href={homeHref} scroll={false} className="flex items-center gap-3">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-foreground sm:text-base">
                {name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="hidden pb-[0.08rem] font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted sm:block">
                {role}
              </span>
            </Link>
          )}

          <nav
            className="min-w-0 overflow-hidden"
            aria-label={navigation.length ? navigationAriaLabel : undefined}
          >
            <div className="-mx-1 overflow-x-auto overflow-y-hidden px-1 scrollbar-none lg:overflow-visible">
              <ul className="flex min-w-max items-center gap-1 lg:min-w-0 lg:justify-end">
                {navigation.map((item) => {
                  const resolvedHref = item.href.startsWith("#")
                    ? `${anchorPrefix}${item.href}`
                    : item.href;
                  const isSectionLink = resolvedHref.startsWith("#");
                  const sectionId = isSectionLink ? resolvedHref.replace("#", "") : null;
                  const routePath = resolvedHref.split("#")[0];
                  const isBlogRoute = routePath === "/blog";
                  const isRouteActive = Boolean(
                    !isSectionLink &&
                      pathname &&
                      (isBlogRoute
                        ? pathname === "/blog" || pathname.startsWith("/blog/")
                        : pathname === routePath),
                  );
                  const isActive = Boolean(
                    (sectionId && activeId === sectionId) || isRouteActive,
                  );
                  const linkClassName = cn(
                    "interactive-text-link relative block px-2.5 py-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] transition",
                    isActive ? "text-foreground" : "text-muted hover:text-foreground",
                  );

                  return (
                    <li key={item.href} className="relative">
                      {isSectionLink ? (
                        <a href={resolvedHref} className={linkClassName}>
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={resolvedHref}
                          scroll={!resolvedHref.includes("#") ? false : undefined}
                          className={linkClassName}
                        >
                          {item.label}
                        </Link>
                      )}
                      {isActive ? (
                        <motion.span
                          layoutId="header-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 34,
                            mass: 0.8,
                          }}
                          className="pointer-events-none absolute inset-x-2 bottom-0 h-px bg-accent"
                        />
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
