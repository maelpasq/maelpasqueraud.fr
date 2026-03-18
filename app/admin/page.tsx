import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { portfolioContent } from "@/content/portfolio";

const adminContent = portfolioContent.admin;

export const metadata: Metadata = {
  title: adminContent.metaTitle,
  description: adminContent.description,
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main className="min-h-[100svh] px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100svh-3rem)] max-w-7xl flex-col justify-center">
        <Reveal>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-accent">
            {adminContent.eyebrow}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_23rem]">
          <Reveal>
            <section className="relative overflow-hidden border border-line bg-panel/45 px-6 py-8 sm:px-10 sm:py-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_48%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-line" />
              <div className="pointer-events-none absolute left-6 top-6 text-outline text-[clamp(5rem,13vw,12rem)] font-medium uppercase leading-none tracking-[-0.08em] opacity-70 sm:left-10 sm:top-8">
                {adminContent.backgroundWord}
              </div>

              <div className="relative flex min-h-[28rem] flex-col justify-between gap-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 border border-line bg-background/70 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent admin-pulse" />
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-foreground">
                      {adminContent.statusLabel}
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                      {adminContent.statusValue}
                    </span>
                  </div>

                  <div className="max-w-4xl space-y-5 pt-16 sm:pt-20 lg:pt-24">
                    <h1 className="max-w-5xl text-[clamp(2.8rem,7vw,6.3rem)] font-medium uppercase leading-[0.92] tracking-[-0.075em] text-foreground">
                      {adminContent.title}
                    </h1>

                    <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                      {adminContent.description}
                    </p>
                  </div>
                </div>

                <div className="flex max-w-xl items-start justify-between gap-6 border-t border-line pt-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                    {adminContent.metaLabel}
                  </p>
                  <p className="max-w-sm text-sm leading-7 text-muted">
                    {adminContent.note}
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="relative overflow-hidden border border-line bg-background/55 p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_34%)]" />
              <div className="admin-scan absolute inset-x-8 top-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,106,0,0.16),transparent)]" />

              <div className="relative flex min-h-full flex-col justify-between gap-10">
                <div className="relative mx-auto mt-2 flex h-64 w-full max-w-[18rem] items-center justify-center overflow-hidden border border-line bg-panel/55">
                  <div className="admin-orbit absolute h-48 w-48 rounded-full border border-line" />
                  <div className="admin-orbit-reverse absolute h-[8.5rem] w-[8.5rem] rounded-full border border-[rgba(255,106,0,0.4)]" />
                  <div className="admin-orbit absolute h-56 w-56 border border-[rgba(245,241,232,0.08)] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]" />
                  <div className="absolute h-24 w-24 border border-accent bg-[rgba(255,106,0,0.12)]" />
                  <div className="absolute h-14 w-14 border border-line bg-background/70" />
                  <div className="absolute h-px w-16 bg-accent" />
                </div>

                <div className="space-y-3">
                  {adminContent.panels.map((panel) => (
                    <div
                      key={panel.label}
                      className="flex items-center justify-between gap-4 border-t border-line pt-4"
                    >
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                        {panel.label}
                      </p>
                      <p className="text-sm uppercase tracking-[0.14em] text-foreground">
                        {panel.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
