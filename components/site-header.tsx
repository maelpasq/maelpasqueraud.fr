"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll } from "framer-motion";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    function onResize() {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isMobileMenuOpen]);

  const resolvedNavigation = useMemo(
    () =>
      navigation.map((item) => {
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
        const isActive = Boolean((sectionId && activeId === sectionId) || isRouteActive);

        return {
          ...item,
          resolvedHref,
          isSectionLink,
          isActive,
        };
      }),
    [activeId, anchorPrefix, navigation, pathname],
  );

  const brandContent = (
    <>
      <div className="min-w-0">
        <span className="block text-sm font-medium uppercase tracking-[0.18em] text-foreground sm:text-base">
          {name}
        </span>
        <span className="mt-1 block font-mono text-[0.56rem] uppercase tracking-[0.34em] text-muted sm:hidden">
          {role}
        </span>
      </div>

      <span className="hidden h-1.5 w-1.5 rounded-full bg-accent sm:block" aria-hidden="true" />

      <span className="hidden pb-[0.08rem] font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted sm:block">
        {role}
      </span>
    </>
  );

  const renderNavigationLink = (
    item: (typeof resolvedNavigation)[number],
    className: string,
    onClick?: () => void,
  ) => {
    if (item.isSectionLink) {
      return (
        <a href={item.resolvedHref} className={className} onClick={onClick}>
          {item.label}
        </a>
      );
    }

    return (
      <Link
        href={item.resolvedHref}
        scroll={!item.resolvedHref.includes("#") ? false : undefined}
        className={className}
        onClick={onClick}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-line bg-background/80 backdrop-blur-xl">
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px origin-left bg-accent"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="flex items-start justify-between gap-4 px-4 py-3 lg:items-center lg:px-5">
          {homeHref.startsWith("#") ? (
            <a href={homeHref} className="flex min-w-0 items-start gap-3 sm:items-center">
              {brandContent}
            </a>
          ) : (
            <Link
              href={homeHref}
              scroll={false}
              className="flex min-w-0 items-start gap-3 sm:items-center"
            >
              {brandContent}
            </Link>
          )}

          <nav
            className="hidden min-w-0 overflow-hidden lg:block"
            aria-label={navigation.length ? navigationAriaLabel : undefined}
          >
            <div className="-mx-1 overflow-x-auto overflow-y-hidden px-1 scrollbar-none lg:overflow-visible">
              <ul className="flex min-w-max items-center gap-1 lg:min-w-0 lg:justify-end">
                {resolvedNavigation.map((item) => {
                  const linkClassName = cn(
                    "interactive-text-link relative block px-2.5 py-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] transition",
                    item.isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  );

                  return (
                    <li key={item.href} className="relative">
                      {renderNavigationLink(item, linkClassName)}
                      {item.isActive ? (
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

          {navigation.length ? (
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-line bg-panel/70 text-foreground transition hover:border-accent hover:text-accent lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className="relative h-4 w-5">
                <motion.span
                  className="absolute left-0 top-0 h-px w-5 bg-current"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute left-0 top-[7px] h-px w-5 bg-current"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute left-0 top-[14px] h-px w-5 bg-current"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </button>
          ) : null}
        </div>

        <AnimatePresence initial={false}>
          {navigation.length && isMobileMenuOpen ? (
            <motion.div
              key="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-line lg:hidden"
            >
              <nav
                id="mobile-navigation"
                aria-label={navigationAriaLabel}
                className="grid gap-4 p-4"
              >
                <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-accent">
                      Menu
                    </p>
                    <p className="mt-3 max-w-[16rem] text-sm leading-6 text-muted">
                      {role}
                    </p>
                  </div>

                  <span className="border border-line px-3 py-2 font-mono text-[0.56rem] uppercase tracking-[0.3em] text-foreground">
                    Navigation
                  </span>
                </div>

                <ul className="grid gap-2">
                  {resolvedNavigation.map((item, index) => {
                    const mobileLinkClassName = cn(
                      "flex items-center justify-between gap-4 border px-4 py-4 font-mono text-[0.68rem] uppercase tracking-[0.3em] transition",
                      item.isActive
                        ? "border-accent bg-accent-soft text-foreground"
                        : "border-line bg-panel/55 text-foreground hover:border-accent hover:text-accent",
                    );

                    return (
                      <li key={`mobile-${item.href}`}>
                        {item.isSectionLink ? (
                          <a
                            href={item.resolvedHref}
                            className={mobileLinkClassName}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                            <span className="text-accent">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </a>
                        ) : (
                          <Link
                            href={item.resolvedHref}
                            scroll={!item.resolvedHref.includes("#") ? false : undefined}
                            className={mobileLinkClassName}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                            <span className="text-accent">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
