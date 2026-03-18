import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { portfolioContent } from "@/content/portfolio";

const [featuredPost, ...otherPosts] = portfolioContent.blog.posts;

export const metadata: Metadata = {
  title: portfolioContent.blog.pageTitle,
  description: portfolioContent.blog.description,
  openGraph: {
    title: portfolioContent.blog.pageTitle,
    description: portfolioContent.blog.description,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioContent.blog.pageTitle,
    description: portfolioContent.blog.description,
  },
};

export default function BlogPage() {
  return (
    <main id="blog-top" className="min-h-screen px-5 pb-16 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="border-b border-line py-12 sm:py-16">
          <Reveal>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-accent">
              {portfolioContent.blog.eyebrow}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div className="space-y-6">
              <Reveal delay={0.05}>
                <h1 className="max-w-5xl text-[clamp(2.8rem,7vw,5.8rem)] font-medium uppercase leading-[0.92] tracking-[-0.08em] text-foreground">
                  <span className="block">{portfolioContent.blog.title}</span>
                  <span className="block text-accent">
                    {portfolioContent.blog.accent}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  {portfolioContent.blog.description}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <div className="border border-line bg-panel/60 p-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                  {portfolioContent.blog.featuredLabel}
                </p>
                <p className="mt-4 text-sm leading-7 text-foreground">
                  {featuredPost.title}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
              {portfolioContent.blog.featuredLabel}
            </p>
          </Reveal>

          <Reveal delay={0.06} className="mt-5">
            <article className="group border border-line bg-panel/55 p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                    <span>{featuredPost.category}</span>
                    <span className="text-accent">{featuredPost.date}</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>

                  <h2 className="max-w-4xl text-[clamp(2rem,5vw,4rem)] font-medium uppercase leading-[0.94] tracking-[-0.07em] text-foreground">
                    {featuredPost.title}
                  </h2>

                  <p className="max-w-3xl text-lg leading-8 text-muted">
                    {featuredPost.summary}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm leading-7 text-foreground">
                    {featuredPost.intro}
                  </p>
                  <ButtonLink href={`/blog/${featuredPost.slug}`} variant="text">
                    {portfolioContent.blog.viewPostLabel}
                  </ButtonLink>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        <section className="border-t border-line py-10 sm:py-14">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
              {portfolioContent.blog.allPostsLabel}
            </p>
          </Reveal>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {otherPosts.map((post, index) => (
              <Reveal key={post.slug} delay={0.05 + index * 0.04}>
                <Link
                  href={`/blog/${post.slug}`}
                  scroll={false}
                  className="group block border border-line bg-panel/50 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent"
                >
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                    <span>{post.category}</span>
                    <span className="text-accent">{post.date}</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h2 className="mt-5 max-w-xl text-3xl font-medium uppercase tracking-[-0.06em] text-foreground">
                    {post.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-8 text-muted">
                    {post.summary}
                  </p>

                  <span className="interactive-text-link mt-6 inline-flex w-fit font-mono text-[0.68rem] uppercase tracking-[0.32em] text-foreground transition group-hover:text-accent">
                    {portfolioContent.blog.viewPostLabel}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
