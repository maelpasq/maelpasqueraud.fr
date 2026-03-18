import { portfolioContent } from "@/content/portfolio";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProjectPosterProps = {
  variant: Project["coverVariant"];
  title: string;
  category: string;
  year: string;
  className?: string;
};

function LatticePoster() {
  return (
    <div className="absolute inset-6 grid grid-cols-6 gap-3">
      <div className="col-span-2 border border-line/80 bg-white/[0.03]" />
      <div className="border border-line/80 bg-accent/12" />
      <div className="col-span-2 border border-line/80 bg-white/[0.04]" />
      <div className="border border-line/80 bg-white/[0.03]" />
      <div className="col-span-2 border border-line/80 bg-white/[0.03]" />
      <div className="border border-line/80 bg-white/[0.02]" />
      <div className="col-span-3 border border-line/80 bg-white/[0.04]" />
      <div className="col-span-2 border border-line/80 bg-white/[0.03]" />
      <div className="col-span-2 border border-line/80 bg-white/[0.02]" />
      <div className="border border-line/80 bg-accent/10" />
      <div className="col-span-3 border border-line/80 bg-white/[0.04]" />
      <div className="border border-line/80 bg-white/[0.02]" />
    </div>
  );
}

function SignalPoster() {
  return (
    <>
      <div className="absolute inset-x-8 top-16 h-px bg-line/80" />
      <div className="absolute inset-x-8 bottom-28 h-px bg-line/80" />
      <div className="absolute bottom-14 left-14 h-20 w-20 border border-line/80 bg-white/[0.03]" />
      <div className="absolute right-12 top-14 h-36 w-px bg-line/80" />
      <div className="absolute left-10 top-1/2 h-[2px] w-[70%] bg-accent/80" />
      <div className="absolute -right-8 top-20 h-px w-72 rotate-[26deg] bg-accent/65" />
      <div className="absolute left-1/2 top-1/4 h-28 w-28 -translate-x-1/2 border border-line/80 bg-white/[0.02]" />
    </>
  );
}

function FramePoster() {
  return (
    <>
      <div className="absolute inset-6 border border-line/90" />
      <div className="absolute inset-12 border border-line/70" />
      <div className="absolute inset-20 border border-accent/55" />
      <div className="absolute bottom-14 left-14 h-24 w-24 bg-accent/12" />
      <div className="absolute right-16 top-20 h-20 w-20 border border-line/80 bg-white/[0.03]" />
      <div className="absolute inset-x-16 top-1/2 h-px bg-line/80" />
    </>
  );
}

export function ProjectPoster({
  variant,
  title,
  category,
  year,
  className,
}: ProjectPosterProps) {
  const imprint = title.split(" ")[0]?.toUpperCase() ?? title.toUpperCase();

  return (
    <div
      className={cn(
        "relative isolate aspect-[4/5] overflow-hidden border border-line bg-panel",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.16),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.35em] text-muted">
          {category}
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.35em] text-muted">
          {year}
        </span>
      </div>

      <span className="pointer-events-none absolute left-5 top-16 select-none font-sans text-[clamp(4rem,10vw,7rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.06]">
        {imprint}
      </span>

      {variant === "lattice" ? <LatticePoster /> : null}
      {variant === "signal" ? <SignalPoster /> : null}
      {variant === "frame" ? <FramePoster /> : null}

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 border-t border-line pt-4">
        <div className="space-y-2">
          <p className="text-2xl font-medium uppercase tracking-[-0.06em] text-foreground sm:text-3xl">
            {title}
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.35em] text-muted">
            {portfolioContent.projects.posterLabel}
          </p>
        </div>
        <div className="hidden h-12 w-12 border border-accent/45 bg-accent/12 lg:block" />
      </div>
    </div>
  );
}
