import { ProjectCard } from "@/components/home/project-card";
import { Reveal } from "@/components/motion/reveal";
import { HeroBadge } from "@/components/ui/hero-badge";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";
import { portfolioContent } from "@/content/portfolio";

export default function Home() {
  const tickerItems = [
    ...portfolioContent.stack.ticker,
    ...portfolioContent.stack.ticker,
  ];
  const [primaryContactLink, ...secondaryContactLinks] = portfolioContent.contact.links;

  return (
    <main className="pb-10">
      <section
        id="hero"
        className="scroll-mt-28 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-accent">
              {portfolioContent.hero.eyebrow}
            </p>
          </Reveal>

          <div className="relative mt-6 border-y border-line py-12 sm:py-16">
            <div className="pointer-events-none absolute left-0 top-8 hidden overflow-hidden xl:block">
              <p className="text-outline select-none text-[8.5vw] font-semibold uppercase leading-none tracking-[0.12em] opacity-80">
                {portfolioContent.hero.backgroundWord}
              </p>
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
              <div className="space-y-7 lg:max-w-4xl lg:pr-8 xl:pt-16">
                <Reveal delay={0.1}>
                  <h1 className="max-w-4xl text-[clamp(2.75rem,7.8vw,6.2rem)] font-medium uppercase leading-[0.92] tracking-[-0.075em] text-foreground">
                    <span className="block">{portfolioContent.hero.title}</span>
                    <span className="block text-accent">
                      {portfolioContent.hero.accent}
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="max-w-xl text-lg leading-8 text-muted sm:text-xl">
                    {portfolioContent.hero.description}
                  </p>
                </Reveal>

                <Reveal delay={0.22}>
                  <div className="flex flex-wrap gap-3">
                    <ButtonLink href={portfolioContent.hero.primaryCta.href}>
                      {portfolioContent.hero.primaryCta.label}
                    </ButtonLink>
                    <ButtonLink
                      href={portfolioContent.hero.secondaryCta.href}
                      variant="secondary"
                    >
                      {portfolioContent.hero.secondaryCta.label}
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.28}>
                <div className="lg:max-w-[18rem] lg:justify-self-end lg:pt-6">
                  <HeroBadge text={portfolioContent.hero.badgeText} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

        <SectionShell
          id="a-propos"
          index={portfolioContent.about.index}
          title={portfolioContent.about.title}
          description={portfolioContent.about.description}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-6">
              <Reveal>
                <h3 className="max-w-4xl text-3xl font-medium uppercase leading-[1.02] tracking-[-0.06em] text-foreground sm:text-5xl">
                  {portfolioContent.about.headline}
                </h3>
              </Reveal>

              <Reveal delay={0.06}>
                <blockquote className="max-w-2xl border-l-2 border-accent pl-6 text-xl leading-[1.2] text-foreground sm:text-2xl">
                  {portfolioContent.about.quote}
                </blockquote>
              </Reveal>

              {portfolioContent.about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 18)} delay={0.12 + index * 0.05}>
                  <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <aside className="border border-line bg-panel/70 p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-accent">
                  {portfolioContent.about.card.label}
                </p>

                <div className="mt-6 space-y-5">
                  {portfolioContent.about.card.items.map((item) => (
                    <div key={item.key} className="border-t border-line pt-5">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                        {item.key}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-foreground">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </SectionShell>

        <SectionShell
          id="expertise"
          index={portfolioContent.expertise.index}
          title={portfolioContent.expertise.title}
          description={portfolioContent.expertise.description}
        >
          <div className="grid gap-6 xl:grid-cols-3">
            {portfolioContent.expertise.groups.map((group, index) => (
              <Reveal key={group.name} delay={index * 0.05}>
                <article className="h-full border border-line bg-panel/55 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="text-2xl font-medium uppercase tracking-[-0.05em] text-foreground">
                      {group.name}
                    </h3>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                    {group.intro}
                  </p>

                  <div className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <div key={item} className="border-t border-line pt-4">
                        <p className="text-sm leading-7 text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="stack"
          index={portfolioContent.stack.index}
          title={portfolioContent.stack.title}
          description={portfolioContent.stack.description}
        >
          <div className="space-y-6">
            <Reveal>
              <div className="ticker border-y border-line py-4">
                <div className="ticker-track">
                  {tickerItems.map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="border border-line px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 xl:grid-cols-2">
              {portfolioContent.stack.groups.map((group, index) => (
                <Reveal key={group.title} delay={index * 0.05}>
                  <article className="border border-line bg-panel/55 p-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-medium uppercase tracking-[-0.05em] text-foreground">
                        {group.title}
                      </h3>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                        {group.note}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="border border-line px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="projets"
          index={portfolioContent.projects.index}
          title={portfolioContent.projects.title}
          description={portfolioContent.projects.description}
        >
          <div className="space-y-6">
            {portfolioContent.projects.items.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="parcours"
          index={portfolioContent.experience.index}
          title={portfolioContent.experience.title}
          description={portfolioContent.experience.description}
        >
          <div className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
            {portfolioContent.experience.items.map((item, index) => (
              <Reveal key={item.period} delay={index * 0.05}>
                <article className="relative border border-line bg-panel/55 p-6">
                  <span className="absolute -left-[2.15rem] top-7 h-3 w-3 border border-accent bg-background sm:-left-[2.65rem]" />

                  <div className="grid gap-6 lg:grid-cols-[10rem_minmax(0,1fr)]">
                    <div className="space-y-2">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                        {item.period}
                      </p>
                      <p className="text-sm leading-7 text-muted">{item.subtitle}</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-medium uppercase tracking-[-0.05em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="max-w-2xl text-base leading-8 text-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="methode"
          index={portfolioContent.method.index}
          title={portfolioContent.method.title}
          description={portfolioContent.method.description}
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {portfolioContent.method.steps.map((step, index) => (
              <Reveal key={step.index} delay={index * 0.05}>
                <article className="flex h-full flex-col justify-between border border-line bg-panel/55 p-6">
                  <div className="space-y-6">
                    <p className="text-outline text-5xl font-semibold uppercase leading-none tracking-[-0.08em]">
                      {step.index}
                    </p>
                    <h3 className="text-2xl font-medium uppercase tracking-[-0.05em] text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-8 text-sm leading-7 text-muted">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="manifeste"
          index={portfolioContent.manifesto.index}
          title={portfolioContent.ui.home.manifestoSectionTitle}
          description={portfolioContent.manifesto.description}
        >
          <Reveal>
            <div className="border border-line bg-panel/65 p-6 sm:p-8 lg:p-12">
              <h3 className="max-w-5xl text-[clamp(2.4rem,6vw,5.8rem)] font-medium uppercase leading-[0.94] tracking-[-0.08em] text-foreground">
                <span className="block">{portfolioContent.manifesto.title}</span>
                <span className="block text-accent">
                  {portfolioContent.manifesto.accent}
                </span>
              </h3>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
                {portfolioContent.manifesto.body}
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {portfolioContent.manifesto.highlights.map((item) => (
                  <div key={item} className="border border-line bg-background/35 p-4">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </SectionShell>

        <SectionShell
          id="contact"
          index={portfolioContent.contact.index}
          title={portfolioContent.contact.title}
          description={portfolioContent.contact.description}
        >
          <div className="space-y-6">
            <Reveal>
              <div className="overflow-hidden border border-line bg-panel/65">
                <div className="grid gap-8 p-6 sm:p-8 xl:grid-cols-[minmax(0,1fr)_minmax(24rem,28rem)] xl:p-10 2xl:grid-cols-[minmax(0,1fr)_30rem]">
                  <div className="space-y-6">
                    <h3 className="max-w-4xl text-3xl font-medium uppercase leading-[1.02] tracking-[-0.06em] text-foreground sm:text-5xl">
                      {portfolioContent.ui.home.contactHeading}
                    </h3>

                    <p className="max-w-2xl text-lg leading-8 text-muted">
                      {portfolioContent.contact.body}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <ButtonLink href={portfolioContent.contact.cta.href}>
                        {portfolioContent.contact.cta.label}
                      </ButtonLink>
                    </div>
                  </div>

                  {primaryContactLink ? (
                    <div className="min-w-0 border-t border-line pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
                      <div className="space-y-4">
                        <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                          {primaryContactLink.label}
                        </p>
                        <a
                          href={primaryContactLink.href}
                          className="interactive-text-link block max-w-full break-all text-[clamp(1.45rem,2.4vw,2.35rem)] font-medium leading-[0.98] tracking-[-0.05em] text-foreground normal-case transition hover:text-accent"
                        >
                          {primaryContactLink.note}
                        </a>
                      </div>

                      <div className="mt-8 space-y-0 border-t border-line pt-5">
                        <div className="grid gap-2 py-4">
                          <p className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted">
                            {portfolioContent.footer.locationLabel}
                          </p>
                          <p className="text-sm leading-7 text-foreground">
                            {portfolioContent.identity.location}
                          </p>
                        </div>

                        <div className="grid gap-2 border-t border-line py-4">
                          <p className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted">
                            {portfolioContent.footer.availabilityLabel}
                          </p>
                          <p className="max-w-[18rem] text-sm leading-7 text-foreground">
                            {portfolioContent.identity.availability}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>

            {secondaryContactLinks.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {secondaryContactLinks.map((link, index) => (
                  <Reveal key={link.label} delay={0.06 + index * 0.04}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="group block border border-line bg-panel/55 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent"
                    >
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                        {link.label}
                      </p>
                      <p className="mt-5 text-2xl font-medium uppercase tracking-[-0.05em] text-foreground transition group-hover:text-accent sm:text-3xl">
                        {link.note}
                      </p>
                    </a>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        </SectionShell>

    </main>
  );
}
