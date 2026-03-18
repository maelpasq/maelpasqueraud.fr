import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import type { CallToAction, NavigationItem, PortfolioContent } from "@/lib/types";

type SiteFooterProps = {
  siteDomain: string;
  navigation: NavigationItem[];
  identity: PortfolioContent["identity"];
  contact: PortfolioContent["contact"];
  footer: PortfolioContent["footer"];
  secondaryCta?: CallToAction;
  anchorPrefix?: string;
  topHref?: string;
};

function resolveHref(href: string, anchorPrefix: string) {
  if (!href.startsWith("#")) {
    return href;
  }

  return `${anchorPrefix}${href}`;
}

export function SiteFooter({
  siteDomain,
  navigation,
  identity,
  contact,
  footer,
  secondaryCta,
  anchorPrefix = "",
  topHref = "#hero",
}: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
      <div className="mx-auto max-w-7xl border border-line bg-panel/55">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:p-10">
          <Reveal>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-accent">
                  {footer.eyebrow}
                </p>
                <p className="text-outline text-[clamp(2.8rem,8vw,5.8rem)] font-semibold uppercase leading-none tracking-[-0.08em]">
                  {footer.imprint}
                </p>
                <h2 className="max-w-3xl text-[clamp(2rem,5vw,4rem)] font-medium uppercase leading-[0.94] tracking-[-0.08em] text-foreground">
                  {footer.signature}
                </h2>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  {footer.caption}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href={contact.cta.href}>{contact.cta.label}</ButtonLink>
                {secondaryCta ? (
                  <ButtonLink href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </ButtonLink>
                ) : null}
                <ButtonLink href={topHref} variant="secondary">
                  {footer.backToTopLabel}
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4 border-t border-line pt-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                  {footer.navigationTitle}
                </p>
                <div className="space-y-3">
                  {navigation.map((item) => {
                    const href = resolveHref(item.href, anchorPrefix);
                    const isInternalRoute = href.startsWith("/");

                    if (isInternalRoute) {
                      return (
                        <Link
                          key={`${item.label}-${href}`}
                          href={href}
                          scroll={!href.includes("#") ? false : undefined}
                          className="interactive-text-link block w-fit text-sm uppercase tracking-[0.12em] text-foreground transition hover:text-accent"
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    return (
                      <a
                        key={`${item.label}-${href}`}
                        href={href}
                        className="interactive-text-link block w-fit text-sm uppercase tracking-[0.12em] text-foreground transition hover:text-accent"
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 border-t border-line pt-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                  {footer.contactTitle}
                </p>
                <div className="space-y-3">
                  {contact.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="interactive-text-link block w-fit text-sm uppercase tracking-[0.12em] text-foreground transition hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-t border-line pt-5 sm:col-span-2">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-muted">
                  {footer.infoTitle}
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted">
                      {footer.domainLabel}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">
                      {siteDomain}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted">
                      {footer.locationLabel}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">
                      {identity.location}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted">
                      {footer.availabilityLabel}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">
                      {identity.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3 border-t border-line px-6 py-4 font-mono text-[0.58rem] uppercase tracking-[0.34em] text-muted sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <span>{currentYear} / {footer.creditName}</span>
          <span>{identity.role}</span>
          <span>{siteDomain}</span>
        </div>
      </div>
    </footer>
  );
}
