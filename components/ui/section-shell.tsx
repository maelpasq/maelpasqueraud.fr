import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  index: string;
  title: string;
  description: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  index,
  title,
  description,
  className,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 border-t border-line px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28",
        className,
      )}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
        <Reveal className="self-start lg:sticky lg:top-28">
          <div className="space-y-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-accent">
              [{index}]
            </p>
            <h2 className="text-3xl font-medium uppercase tracking-[-0.06em] text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-xs text-sm leading-7 text-muted">
              {description}
            </p>
          </div>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
