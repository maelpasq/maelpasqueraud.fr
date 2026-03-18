import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectPoster } from "@/components/ui/project-poster";
import { portfolioContent } from "@/content/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const projects = portfolioContent.projects.items;

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: portfolioContent.seo.projectFallbackTitle,
    };
  }

  return {
    title: `${project.title} | ${portfolioContent.seo.projectTitleSuffix}`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main
      id="project-top"
      className="min-h-screen px-5 pb-16 pt-8 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-line pb-6">
          <ButtonLink href="/#projets" variant="text" showArrow={false}>
            {portfolioContent.ui.projectPage.backToProjects}
          </ButtonLink>
        </div>

        <article className="pt-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_22rem] lg:items-end">
            <div className="space-y-8">
              <Reveal>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                  {project.year} / {project.category} / {project.role}
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="max-w-5xl text-[clamp(3rem,8vw,6rem)] font-medium uppercase leading-[0.9] tracking-[-0.08em] text-foreground">
                  {project.title}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                  {project.summary}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="max-w-3xl text-sm uppercase tracking-[0.12em] text-foreground/80">
                  {project.statement}
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, index) => (
                    <ButtonLink
                      key={link.label}
                      href={link.href}
                      variant={index === 0 ? "primary" : "secondary"}
                    >
                      {link.label}
                    </ButtonLink>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="grid gap-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="border border-line bg-panel/60 p-5">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.28} className="mt-10">
            <ProjectPoster
              variant={project.coverVariant}
              title={project.title}
              category={project.category}
              year={project.year}
              className="aspect-[16/9] min-h-[22rem] sm:min-h-[30rem]"
            />
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-10">
              <Reveal>
                <section className="border-t border-line pt-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                    {portfolioContent.ui.projectPage.challengeLabel}
                  </p>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                    {project.challenge}
                  </p>
                </section>
              </Reveal>

              <Reveal delay={0.06}>
                <section className="border-t border-line pt-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                    {portfolioContent.ui.projectPage.solutionLabel}
                  </p>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                    {project.solution}
                  </p>
                </section>
              </Reveal>

              <Reveal delay={0.12}>
                <section className="border-t border-line pt-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                    {portfolioContent.ui.projectPage.outcomeLabel}
                  </p>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                    {project.outcome}
                  </p>
                </section>
              </Reveal>
            </div>

            <aside className="space-y-6">
              <Reveal delay={0.08}>
                <div className="border border-line bg-panel/60 p-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                    {portfolioContent.ui.projectPage.stackLabel}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="border border-line px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="border border-line bg-panel/60 p-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                    {portfolioContent.ui.projectPage.deliverablesLabel}
                  </p>
                  <div className="mt-5 space-y-4">
                    {project.deliverables.map((item) => (
                      <div key={item} className="border-t border-line pt-4">
                        <p className="text-sm leading-7 text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          <Reveal delay={0.18} className="mt-16">
            <section className="border border-line bg-panel/55 p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
                <div className="space-y-4">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                    {portfolioContent.ui.projectPage.nextProjectLabel}
                  </p>
                  <h2 className="text-3xl font-medium uppercase tracking-[-0.06em] text-foreground sm:text-4xl">
                    {nextProject.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-muted">
                    {nextProject.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <ButtonLink href={`/projets/${nextProject.slug}`}>
                    {portfolioContent.ui.projectPage.viewProjectLabel}
                  </ButtonLink>
                  <ButtonLink href="/#contact" variant="secondary">
                    {portfolioContent.ui.projectPage.contactCtaLabel}
                  </ButtonLink>
                </div>
              </div>
            </section>
          </Reveal>
        </article>
      </div>
    </main>
  );
}
