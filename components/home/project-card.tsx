import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { ProjectPoster } from "@/components/ui/project-poster";
import { portfolioContent } from "@/content/portfolio";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;
  const secondaryLink = project.links[1];
  const featuredStack = project.stack.slice(0, 4);

  return (
    <Reveal delay={index * 0.06}>
      <article className="group border border-line bg-panel/50 p-4 sm:p-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(18rem,0.98fr)] lg:items-center">
          <div className={cn(isReversed && "lg:order-2")}>
            <ProjectPoster
              variant={project.coverVariant}
              title={project.title}
              category={project.category}
              year={project.year}
              className="min-h-[24rem] transition duration-500 ease-out group-hover:-translate-y-1 sm:min-h-[28rem]"
            />
          </div>

          <div className={cn("flex flex-col gap-6", isReversed && "lg:order-1")}>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                <span>{project.category}</span>
                <span className="text-accent">{project.year}</span>
              </div>

              <h3 className="text-3xl font-medium uppercase tracking-[-0.06em] text-foreground sm:text-4xl">
                {project.title}
              </h3>

              <p className="max-w-xl text-lg leading-8 text-muted">
                {project.summary}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {featuredStack.map((item) => (
                  <span
                    key={item}
                    className="border border-line px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href={`/projets/${project.slug}`}>
                  {portfolioContent.projects.cardCtaLabel}
                </ButtonLink>
                {secondaryLink ? (
                  <ButtonLink href={secondaryLink.href} variant="text">
                    {secondaryLink.label}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
