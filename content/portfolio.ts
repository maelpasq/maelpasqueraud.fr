import type { PortfolioContent } from "@/lib/types";

export const portfolioContent = {
  identity: {
    name: "Maël Pasqueraud",
    role: "Développeur web",
    location: "France",
    availability: "Ouvert aux missions choisies",
    email: "hello@maelpasqueraud.fr",
    siteUrl: "https://maelpasqueraud.fr",
  },
  seo: {
    category: "technology",
    keywords: [
      "développeur web",
      "portfolio",
      "Next.js",
      "React",
      "TypeScript",
      "front-end",
      "design system",
      "UX UI",
    ],
    applicationName: "Maël Pasqueraud Portfolio",
    ogLabel: "Portfolio",
    openGraphAlt: "Maël Pasqueraud portfolio",
    projectTitleSuffix: "Projet",
    projectFallbackTitle: "Projet introuvable",
  },
  ui: {
    header: {
      navigationAriaLabel: "Navigation principale du portfolio",
    },
    home: {
      manifestoSectionTitle: "Manifeste",
      contactHeading: "Construisons une présence web plus forte.",
    },
    projectPage: {
      backToProjects: "Retour aux projets",
      challengeLabel: "Problème",
      solutionLabel: "Solution",
      outcomeLabel: "Résultat",
      stackLabel: "Stack",
      deliverablesLabel: "Livrables",
      nextProjectLabel: "Projet suivant",
      viewProjectLabel: "Voir le projet",
      contactCtaLabel: "Prendre contact",
    },
    notFound: {
      eyebrow: "404 / page introuvable",
      title: "Cette page n'existe pas.",
      description:
        "Le lien a peut-être bougé, ou la page n'a pas encore été branchée. Le portfolio reste accessible depuis l'accueil.",
      homeCtaLabel: "Retour à l'accueil",
      contactCtaLabel: "Contacter",
    },
  },
  navigation: [
    { label: "Intro", href: "#hero" },
    { label: "Profil", href: "#a-propos" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "/blog" },
  ],
  admin: {
    metaTitle: "Admin",
    eyebrow: "Admin / accès direct",
    backgroundWord: "ADMIN",
    statusLabel: "Statut",
    statusValue: "Route active",
    title: "Espace d'administration en cours de construction.",
    description:
      "La page fonctionne correctement. Le back-office est branché, mais son interface est encore en développement.",
    note: "Aucun lien public ne mène ici pour l'instant.",
    metaLabel: "01 / Route privée",
    panels: [
      { label: "État", value: "Fonctionne" },
      { label: "Phase", value: "En développement" },
      { label: "Accès", value: "Direct uniquement" },
    ],
  },
  hero: {
    eyebrow: "Full-stack / design / motion",
    title: "Construire des expériences web",
    accent: "qui retiennent l'attention.",
    backgroundWord: "OBJECTIF",
    badgeText: "MAEL PASQUERAUD • DEVELOPPEUR WEB •",
    description:
      "Développeur web orienté design, je conçois des interfaces premium, sobres et techniquement nettes.",
    primaryCta: {
      label: "Voir nos projets",
      href: "#projets",
    },
    secondaryCta: {
      label: "Parlons de votre projet",
      href: "#contact",
    },
  },
  about: {
    index: "02",
    title: "À propos",
    description:
      "Technique, direction visuelle et souci du détail.",
    headline: "Un profil technique avec un vrai regard sur l'interface.",
    quote:
      "Moins d'effets. Plus de tenue.",
    paragraphs: [
      "Je développe des interfaces où la hiérarchie, le contraste et le rythme servent une lecture immédiate.",
      "Mon terrain se situe entre design system, craftsmanship front-end et logique produit.",
    ],
    card: {
      label: "En bref",
      items: [
        { key: "Base", value: "France / remote-friendly" },
        {
          key: "Format",
          value: "Freelance / renfort front-end",
        },
        {
          key: "Recherche",
          value: "Produits exigeants et expériences sur mesure",
        },
      ],
    },
  },
  expertise: {
    index: "03",
    title: "Expertise",
    description:
      "Ce que je tiens vraiment, ce que j'utilise souvent, ce que je pousse plus loin.",
    groups: [
      {
        name: "Maîtrise",
        intro: "Impact immédiat.",
        items: [
          "Architecture front-end claire pour produits et vitrines.",
          "UI engineering fidèle à une DA exigeante.",
          "Responsive, performance et états d'interface propres.",
        ],
      },
      {
        name: "Usage régulier",
        intro: "Production quotidienne.",
        items: [
          "Next.js full-stack et contenus dynamiques.",
          "Design systems pragmatiques et variantes maintenables.",
          "API, auth et flows back-end modernes.",
        ],
      },
      {
        name: "Exploration",
        intro: "Recherche active.",
        items: [
          "Narration interactive plus immersive.",
          "Transitions de page sophistiquées mais lisibles.",
          "Systèmes visuels plus radicaux, tenus par une grille nette.",
        ],
      },
    ],
  },
  stack: {
    index: "04",
    title: "Stack",
    description:
      "Un stack moderne, choisi pour livrer proprement.",
    groups: [
      {
        title: "Front-end core",
        note: "Base de production.",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Interface & motion",
        note: "Rythme et perception.",
        items: ["Framer Motion", "GSAP (si pertinent)", "shadcn/ui", "Figma"],
      },
      {
        title: "Data & back-end",
        note: "Quand le produit s'épaissit.",
        items: ["Node.js", "Supabase", "PostgreSQL", "Prisma"],
      },
      {
        title: "Delivery & qualité",
        note: "Exécution et livraison.",
        items: ["GitHub", "Docker", "Vercel", "Lighthouse"],
      },
    ],
    ticker: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Vercel",
      "Figma",
      "Design systems",
      "Responsive",
      "Performance",
    ],
  },
  projects: {
    index: "05",
    title: "Projets",
    description:
      "Trois pièces choisies. Peu, mais tenues.",
    cardCtaLabel: "Voir l'étude de cas",
    posterLabel: "Étude de cas",
    items: [
      {
        slug: "atelier-index",
        title: "Atelier Index",
        category: "Plateforme éditoriale",
        year: "2025",
        role: "Lead front-end / motion",
        summary:
          "Un site de studio pensé comme un objet éditorial, net et tendu.",
        statement:
          "Éditorial premium, sans surcharge.",
        challenge:
          "Le studio avait besoin d'un site capable de projeter un positionnement haut de gamme tout en laissant une vraie place au rythme éditorial. Le piège était double : tomber dans le template créatif attendu, ou surcharger l'interface avec trop d'effets.",
        solution:
          "J'ai conçu une structure à forte hiérarchie typographique, avec un système de modules réutilisables, des transitions sobres et un poster visuel propre à chaque page. Le front a été pensé pour garder la même tenue visuelle sur desktop et mobile, avec un accent mis sur le confort de lecture.",
        outcome:
          "Résultat : une expérience plus calme, plus statutaire et plus mémorable, capable de soutenir une publication fréquente sans dégrader la cohérence du site.",
        stack: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Sanity",
          "Vercel",
        ],
        deliverables: [
          "Direction UI",
          "Système éditorial",
          "Animations d'entrée",
          "Optimisation responsive",
        ],
        links: [
          {
            label: "Étude de cas",
            href: "/projets/atelier-index",
          },
          {
            label: "Code sur demande",
            href: "mailto:hello@maelpasqueraud.fr?subject=Atelier%20Index",
          },
        ],
        metrics: [
          { label: "Cap", value: "Éditorial premium" },
          { label: "Focus", value: "Narration + structure" },
          { label: "Livrable", value: "Vitrine modulaire" },
        ],
        coverVariant: "lattice",
      },
      {
        slug: "orbit-finance",
        title: "Orbit Finance",
        category: "Dashboard data",
        year: "2024",
        role: "Front-end product",
        summary:
          "Un produit dense rendu plus calme, plus lisible et plus décisionnel.",
        statement:
          "Data dense, lecture immédiate.",
        challenge:
          "L'enjeu principal était de hiérarchiser une grande quantité d'informations et de construire une interface suffisamment robuste pour évoluer vite. Le système devait rester lisible malgré une densité élevée et plusieurs niveaux d'état.",
        solution:
          "J'ai structuré l'interface autour de blocs clairs, de patterns réutilisables et d'une densité maîtrisée. Le design system réduit le bruit, améliore la comparaison des données et garde une cohérence visuelle sur toutes les vues.",
        outcome:
          "L'expérience devient plus fiable pour les équipes produit et business : moins de friction, plus de repères, et une base front-end capable d'absorber de nouveaux cas d'usage.",
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "Tailwind CSS",
        ],
        deliverables: [
          "Dashboard principal",
          "Système de filtres",
          "Composants data",
          "États vides et chargement",
        ],
        links: [
          {
            label: "Étude de cas",
            href: "/projets/orbit-finance",
          },
          {
            label: "GitHub",
            href: "https://github.com/maelpasq",
          },
        ],
        metrics: [
          { label: "Cap", value: "Data dense" },
          { label: "Focus", value: "Lecture immédiate" },
          { label: "Livrable", value: "Interface extensible" },
        ],
        coverVariant: "signal",
      },
      {
        slug: "monograph-commerce",
        title: "Monograph Commerce",
        category: "Expérience e-commerce",
        year: "2026",
        role: "Full-stack / UX engineering",
        summary:
          "Un concept store premium où storytelling, conversion et performance avancent ensemble.",
        statement:
          "Commerce premium, sans bruit.",
        challenge:
          "Le projet devait concilier désir visuel, rapidité de consultation et fluidité du parcours d'achat, avec une identité plus forte que les templates e-commerce habituels.",
        solution:
          "J'ai combiné une structure de contenu éditoriale, des composants commerce sobres et des micro-interactions très contrôlées pour faire exister la marque sans ralentir le parcours.",
        outcome:
          "Le site gagne en présence, en cohérence et en crédibilité produit, tout en gardant un tunnel clair et une base technique facile à enrichir.",
        stack: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "Prisma",
          "PostgreSQL",
          "Vercel",
        ],
        deliverables: [
          "Landing éditoriale",
          "Fiches produit",
          "Tunnel simplifié",
          "Optimisation perçue",
        ],
        links: [
          {
            label: "Étude de cas",
            href: "/projets/monograph-commerce",
          },
          {
            label: "Demander la démo",
            href: "mailto:hello@maelpasqueraud.fr?subject=Monograph%20Commerce",
          },
        ],
        metrics: [
          { label: "Cap", value: "Commerce premium" },
          { label: "Focus", value: "Conversion sans bruit" },
          { label: "Livrable", value: "Parcours éditorial" },
        ],
        coverVariant: "frame",
      },
    ],
  },
  experience: {
    index: "06",
    title: "Parcours",
    description:
      "Interface, produit, finition.",
    items: [
      {
        period: "Aujourd'hui",
        title: "Portfolio & missions sélectionnées",
        subtitle: "Front-end premium / produit",
        body:
          "Focus sur des expériences web où le niveau de détail compte vraiment.",
      },
      {
        period: "2024 - 2025",
        title: "Interfaces client ambitieuses",
        subtitle: "Landing, SaaS, e-commerce",
        body:
          "Montée en exigence sur les systèmes UI, le responsive et les animations utiles.",
      },
      {
        period: "2023 - 2024",
        title: "Structuration des bases front-end",
        subtitle: "Composants, design systems, performance",
        body:
          "Architecture de composants, qualité de code et collaboration plus fluide avec le design.",
      },
    ],
  },
  method: {
    index: "07",
    title: "Méthode",
    description:
      "Comprendre, structurer, designer, construire, finir.",
    steps: [
      {
        index: "01",
        title: "Cadrer",
        body:
          "Comprendre l'ambition, le public et le vrai signal.",
      },
      {
        index: "02",
        title: "Structurer",
        body:
          "Définir l'information, la hiérarchie et la grille.",
      },
      {
        index: "03",
        title: "Designer",
        body:
          "Composer une interface nette et réaliste.",
      },
      {
        index: "04",
        title: "Construire",
        body:
          "Développer une base propre et performante.",
      },
      {
        index: "05",
        title: "Finir",
        body:
          "Ajuster le rythme, les états et la finition.",
      },
    ],
  },
  manifesto: {
    index: "08",
    title: "Je construis des expériences,",
    description:
      "Lisible, tendu, propre.",
    accent: "pas des pages de plus.",
    body:
      "Le design sans structure s'épuise vite. Le code sans regard manque de présence.",
    highlights: [
      "Rigueur visuelle",
      "Motion utile",
      "Front-end maintenable",
    ],
  },
  contact: {
    index: "09",
    title: "Contact",
    description:
      "Direct et simple.",
    body:
      "Si le projet demande du goût, de la rigueur et une vraie qualité d'exécution, on peut parler.",
    cta: {
      label: "Écrire",
      href: "mailto:hello@maelpasqueraud.fr?subject=Projet%20web",
    },
    links: [
      {
        label: "Email",
        href: "mailto:hello@maelpasqueraud.fr",
        note: "hello@maelpasqueraud.fr",
      },
      {
        label: "GitHub",
        href: "https://github.com/maelpasq",
        note: "@maelpasq",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mael-pasqueraud/",
        note: "mael-pasqueraud",
      },
    ],
  },
  blog: {
    pageTitle: "Blog",
    eyebrow: "Blog / notes / front-end",
    title: "Des notes sur l'interface,",
    accent: "le produit et l'exécution.",
    description:
      "Une page séparée pour publier des idées plus calmes sur la clarté, le motion, les systèmes UI et la façon de construire des interfaces qui tiennent.",
    backHomeLabel: "Retour au portfolio",
    featuredLabel: "À la une",
    allPostsLabel: "Toutes les notes",
    viewPostLabel: "Lire la note",
    backToBlogLabel: "Retour au blog",
    postFallbackTitle: "Article introuvable",
    takeawaysLabel: "Points clés",
    otherPostsLabel: "Autres notes",
    contactCtaLabel: "Parlons-en",
    posts: [
      {
        slug: "eviter-les-interfaces-qui-crient",
        title: "Éviter les interfaces qui crient",
        category: "Interface",
        date: "Mars 2026",
        readingTime: "4 min",
        summary:
          "Pourquoi une interface gagne souvent en impact quand elle retire du bruit au lieu d'ajouter des effets.",
        intro:
          "Une interface peut être marquante sans hausser la voix. Le vrai travail consiste souvent à retirer ce qui brouille la lecture, pour laisser apparaître une structure plus nette et une présence plus forte.",
        sections: [
          {
            title: "Réduire le bruit avant de chercher l'effet",
            paragraphs: [
              "Beaucoup d'interfaces deviennent fragiles parce qu'elles empilent des signes de présence : trop de blocs, trop d'accents, trop de variations. L'ensemble semble vivant pendant quelques secondes, puis perd sa hiérarchie.",
              "Le bon réflexe consiste à réduire les couches concurrentes. Quand une seule information dominante émerge clairement, le reste du système peut enfin respirer.",
            ],
          },
          {
            title: "Faire exister la hiérarchie",
            paragraphs: [
              "La hiérarchie ne vient pas seulement de la taille des titres. Elle vient aussi de l'espace, du contraste, de la répétition et du rythme entre les éléments.",
              "Une interface calme paraît souvent plus premium parce qu'elle montre qu'une décision a déjà été prise pour l'utilisateur : où regarder, quoi lire, et dans quel ordre avancer.",
            ],
          },
          {
            title: "Soigner les états",
            paragraphs: [
              "Même les interfaces minimales perdent en tenue si les hover, focus et transitions semblent accessoires. Ces détails doivent prolonger le langage visuel au lieu de le contredire.",
            ],
          },
        ],
        takeaways: [
          "L'impact vient souvent de la suppression, pas de l'ajout.",
          "Une hiérarchie claire rend l'interface plus statutaire.",
          "Les micro-états doivent suivre la même discipline visuelle.",
        ],
      },
      {
        slug: "le-motion-qui-aide-vraiment",
        title: "Le motion qui aide vraiment",
        category: "Motion",
        date: "Février 2026",
        readingTime: "5 min",
        summary:
          "Quand l'animation améliore la perception du produit, la lecture et le confort, au lieu de devenir un simple effet.",
        intro:
          "Le motion utile n'est pas là pour impressionner seul. Il sert surtout à relier des états, clarifier une transition et donner une sensation de continuité sans ralentir l'interface.",
        sections: [
          {
            title: "Montrer une relation, pas juste un mouvement",
            paragraphs: [
              "Une bonne animation répond à une question implicite : d'où vient cet élément, où va-t-il, et qu'est-ce qui change pour l'utilisateur ?",
              "Quand cette relation n'est pas claire, le mouvement devient décoratif. Il attire l'attention sans ajouter de compréhension.",
            ],
          },
          {
            title: "Travailler la perception avant la complexité",
            paragraphs: [
              "Un reveal simple, bien cadencé, peut faire plus pour la qualité perçue qu'une animation sophistiquée. Le rythme, le délai et la retenue comptent davantage que la quantité de propriétés animées.",
            ],
          },
          {
            title: "Respecter le contexte d'usage",
            paragraphs: [
              "Sur desktop, on peut se permettre un peu plus de respiration. Sur mobile, chaque mouvement doit rester court, lisible et non bloquant. La meilleure animation est souvent celle qu'on ressent sans la remarquer.",
            ],
          },
        ],
        takeaways: [
          "Le motion doit clarifier une relation entre deux états.",
          "Le rythme compte plus que la complexité.",
          "Le contexte mobile impose plus de retenue.",
        ],
      },
      {
        slug: "penser-un-design-system-sans-perdre-le-style",
        title: "Penser un design system sans perdre le style",
        category: "Systèmes",
        date: "Janvier 2026",
        readingTime: "6 min",
        summary:
          "Construire une base réutilisable sans lisser l'identité visuelle ni tomber dans l'interface générique.",
        intro:
          "Un design system n'a pas pour but de normaliser une interface jusqu'à la rendre anonyme. Son rôle est de stabiliser les fondations pour que le style puisse exister de manière cohérente et durable.",
        sections: [
          {
            title: "Séparer structure et expression",
            paragraphs: [
              "Les composants doivent d'abord porter une logique de structure : alignement, spacing, responsive, états, accessibilité. L'expression visuelle vient ensuite, sans casser cette base.",
              "C'est cette séparation qui permet de garder une identité forte tout en évitant les régressions à chaque nouveau besoin produit.",
            ],
          },
          {
            title: "Limiter le nombre de décisions locales",
            paragraphs: [
              "Plus une équipe doit réinventer ses choix à l'échelle d'un composant, plus la cohérence s'effrite. Un bon système réduit le nombre de décisions répétées sans figer tout le reste.",
            ],
          },
          {
            title: "Laisser une place à la tension visuelle",
            paragraphs: [
              "Le style vient souvent de variations très contrôlées : une typo plus franche, un contraste plus tendu, un usage précis de l'accent. Un système mature protège ces décisions au lieu de les effacer.",
            ],
          },
        ],
        takeaways: [
          "Un système solide protège le style au lieu de l'éteindre.",
          "La structure doit être stable avant l'expression visuelle.",
          "Moins de décisions locales, plus de cohérence.",
        ],
      },
    ],
  },
  footer: {
    eyebrow: "Footer / closing frame",
    imprint: "PASQUERAUD",
    signature: "Maël",
    caption: "Next.js / TypeScript / Tailwind / Framer Motion",
    backToTopLabel: "Retour en haut",
    blogLink: {
      label: "Voir le blog",
      href: "/blog",
    },
    navigationTitle: "Navigation",
    contactTitle: "Contact",
    infoTitle: "Infos",
    domainLabel: "Domaine",
    locationLabel: "Base",
    availabilityLabel: "Disponibilité",
    creditName: "maël pasqueraud",
  },
} satisfies PortfolioContent;
