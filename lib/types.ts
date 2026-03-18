export type NavigationItem = {
  label: string;
  href: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type ExpertiseGroup = {
  name: string;
  intro: string;
  items: string[];
};

export type StackGroup = {
  title: string;
  note: string;
  items: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  statement: string;
  challenge: string;
  solution: string;
  outcome: string;
  stack: string[];
  deliverables: string[];
  links: ProjectLink[];
  metrics: ProjectMetric[];
  coverVariant: "lattice" | "signal" | "frame";
};

export type ExperienceItem = {
  period: string;
  title: string;
  subtitle: string;
  body: string;
};

export type MethodStep = {
  index: string;
  title: string;
  body: string;
};

export type ContactLink = {
  label: string;
  href: string;
  note: string;
};

export type BlogSection = {
  title: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  summary: string;
  intro: string;
  sections: BlogSection[];
  takeaways: string[];
};

export type PortfolioContent = {
  identity: {
    name: string;
    role: string;
    location: string;
    availability: string;
    email: string;
    siteUrl: string;
  };
  seo: {
    category: string;
    keywords: string[];
    applicationName: string;
    ogLabel: string;
    openGraphAlt: string;
    projectTitleSuffix: string;
    projectFallbackTitle: string;
  };
  ui: {
    header: {
      navigationAriaLabel: string;
    };
    home: {
      manifestoSectionTitle: string;
      contactHeading: string;
    };
    projectPage: {
      backToProjects: string;
      challengeLabel: string;
      solutionLabel: string;
      outcomeLabel: string;
      stackLabel: string;
      deliverablesLabel: string;
      nextProjectLabel: string;
      viewProjectLabel: string;
      contactCtaLabel: string;
    };
    notFound: {
      eyebrow: string;
      title: string;
      description: string;
      homeCtaLabel: string;
      contactCtaLabel: string;
    };
  };
  navigation: NavigationItem[];
  admin: {
    metaTitle: string;
    eyebrow: string;
    backgroundWord: string;
    statusLabel: string;
    statusValue: string;
    title: string;
    description: string;
    note: string;
    metaLabel: string;
    panels: Array<{
      label: string;
      value: string;
    }>;
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    backgroundWord: string;
    badgeText: string;
    description: string;
    primaryCta: CallToAction;
    secondaryCta: CallToAction;
  };
  about: {
    index: string;
    title: string;
    description: string;
    headline: string;
    quote: string;
    paragraphs: string[];
    card: {
      label: string;
      items: Array<{ key: string; value: string }>;
    };
  };
  expertise: {
    index: string;
    title: string;
    description: string;
    groups: ExpertiseGroup[];
  };
  stack: {
    index: string;
    title: string;
    description: string;
    groups: StackGroup[];
    ticker: string[];
  };
  projects: {
    index: string;
    title: string;
    description: string;
    cardCtaLabel: string;
    posterLabel: string;
    items: Project[];
  };
  experience: {
    index: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  method: {
    index: string;
    title: string;
    description: string;
    steps: MethodStep[];
  };
  manifesto: {
    index: string;
    title: string;
    description: string;
    accent: string;
    body: string;
    highlights: string[];
  };
  contact: {
    index: string;
    title: string;
    description: string;
    body: string;
    cta: CallToAction;
    links: ContactLink[];
  };
  blog: {
    pageTitle: string;
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    backHomeLabel: string;
    featuredLabel: string;
    allPostsLabel: string;
    viewPostLabel: string;
    backToBlogLabel: string;
    postFallbackTitle: string;
    takeawaysLabel: string;
    otherPostsLabel: string;
    contactCtaLabel: string;
    posts: BlogPost[];
  };
  footer: {
    eyebrow: string;
    imprint: string;
    signature: string;
    caption: string;
    backToTopLabel: string;
    blogLink: CallToAction;
    navigationTitle: string;
    contactTitle: string;
    infoTitle: string;
    domainLabel: string;
    locationLabel: string;
    availabilityLabel: string;
    creditName: string;
  };
};
