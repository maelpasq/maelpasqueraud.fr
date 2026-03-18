"use client";

import type { ReactNode } from "react";
import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    const hash = window.location.hash;
    const targetId = hash ? decodeURIComponent(hash.slice(1)) : "";
    const targetElement = targetId ? document.getElementById(targetId) : null;

    if (targetElement) {
      const frameId = window.requestAnimationFrame(() => {
        targetElement.scrollIntoView({
          block: "start",
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    const frameId = window.requestAnimationFrame(() => {
      html.style.scrollBehavior = previousScrollBehavior;
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, [pathname, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
        transition={{
          duration: 0.48,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="will-change-transform"
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-40 h-px origin-left bg-accent/70"
          initial={{ opacity: 0, scaleX: 0.12 }}
          animate={{ opacity: [0.08, 0.95, 0], scaleX: [0.12, 1, 1] }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.56,
            times: [0, 0.42, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
