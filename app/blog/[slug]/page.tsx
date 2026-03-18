import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { portfolioContent } from "@/content/portfolio";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const posts = portfolioContent.blog.posts;

function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: portfolioContent.blog.postFallbackTitle,
    };
  }

  return {
    title: `${post.title} | ${portfolioContent.blog.pageTitle}`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = posts.filter((entry) => entry.slug !== post.slug).slice(0, 2);

  return (
    <main id="blog-top" className="min-h-screen px-5 pb-16 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-line pb-6">
          <ButtonLink href="/blog" variant="text" showArrow={false}>
            {portfolioContent.blog.backToBlogLabel}
          </ButtonLink>
        </div>

        <article className="py-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <div className="space-y-6">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                  <span>{post.category}</span>
                  <span className="text-accent">{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="max-w-5xl text-[clamp(2.6rem,6.5vw,5.2rem)] font-medium uppercase leading-[0.94] tracking-[-0.08em] text-foreground">
                  {post.title}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                  {post.summary}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <aside className="border border-line bg-panel/60 p-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                  {portfolioContent.blog.takeawaysLabel}
                </p>

                <div className="mt-5 space-y-4">
                  {post.takeaways.map((item) => (
                    <div key={item} className="border-t border-line pt-4">
                      <p className="text-sm leading-7 text-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <ButtonLink href={portfolioContent.contact.cta.href} variant="secondary">
                    {portfolioContent.blog.contactCtaLabel}
                  </ButtonLink>
                </div>
              </aside>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="space-y-10">
              <Reveal>
                <p className="max-w-3xl text-lg leading-8 text-foreground">
                  {post.intro}
                </p>
              </Reveal>

              {post.sections.map((section, index) => (
                <Reveal key={section.title} delay={0.06 + index * 0.04}>
                  <section className="border-t border-line pt-6">
                    <h2 className="text-3xl font-medium uppercase tracking-[-0.06em] text-foreground">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 24)}
                          className="max-w-3xl text-base leading-8 text-muted sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="space-y-5 border-t border-line pt-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                  {portfolioContent.blog.otherPostsLabel}
                </p>

                {otherPosts.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/blog/${entry.slug}`}
                    scroll={false}
                    className="group block border border-line bg-panel/50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent"
                  >
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                      {entry.category} / {entry.date}
                    </p>
                    <p className="mt-3 text-2xl font-medium uppercase tracking-[-0.05em] text-foreground">
                      {entry.title}
                    </p>
                    <span className="interactive-text-link mt-5 inline-flex w-fit font-mono text-[0.68rem] uppercase tracking-[0.32em] text-foreground transition group-hover:text-accent">
                      {portfolioContent.blog.viewPostLabel}
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </article>
      </div>
    </main>
  );
}
