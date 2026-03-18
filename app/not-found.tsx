import { ButtonLink } from "@/components/ui/button-link";
import { portfolioContent } from "@/content/portfolio";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 py-20 sm:px-8 lg:px-12">
      <div className="w-full max-w-3xl border border-line bg-panel/70 p-8 sm:p-10">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-accent">
          {portfolioContent.ui.notFound.eyebrow}
        </p>
        <h1 className="mt-6 text-[clamp(2.8rem,8vw,5.2rem)] font-medium uppercase leading-[0.92] tracking-[-0.08em] text-foreground">
          {portfolioContent.ui.notFound.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {portfolioContent.ui.notFound.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">{portfolioContent.ui.notFound.homeCtaLabel}</ButtonLink>
          <ButtonLink
            href={`mailto:${portfolioContent.identity.email}`}
            variant="secondary"
          >
            {portfolioContent.ui.notFound.contactCtaLabel} {portfolioContent.identity.name}
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
