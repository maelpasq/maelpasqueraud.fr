import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "text";
  showArrow?: boolean;
};

const baseClasses =
  "group inline-flex items-center justify-center gap-3 border px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.32em] whitespace-nowrap transition duration-300 ease-out";

const variantClasses = {
  primary:
    "border-[rgba(245,241,232,0.96)] bg-[rgba(245,241,232,0.96)] text-[#0A0A0A] hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-[#0A0A0A]",
  secondary:
    "border-line bg-panel/60 text-foreground hover:-translate-y-0.5 hover:border-accent hover:text-accent",
  text: "interactive-text-link border-transparent px-0 py-0 text-[0.72rem] text-muted hover:text-accent",
};

function renderLabel(children: ReactNode, showArrow: boolean) {
  return (
    <>
      <span>{children}</span>
      {showArrow ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          -&gt;
        </span>
      ) : null}
    </>
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  showArrow = true,
}: ButtonLinkProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);
  const isInternal = href.startsWith("/");
  const isHashRoute = href.includes("#");
  const isExternal = href.startsWith("http");
  const primaryStyle =
    variant === "primary"
      ? { color: "#0A0A0A", WebkitTextFillColor: "#0A0A0A" }
      : undefined;

  if (isInternal) {
    return (
      <Link
        href={href}
        scroll={isHashRoute ? undefined : false}
        className={classes}
        style={primaryStyle}
      >
        {renderLabel(children, showArrow)}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      style={primaryStyle}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
    >
      {renderLabel(children, showArrow)}
    </a>
  );
}
