import type { PortfolioContent } from "@/lib/types";

export const portfolioContent = {
  identity: {
    name: "Maël Pasqueraud",
    role: "Développeur & designer web",
    location: "Charente, France",
    availability:
      "Freelance disponible partout en France, avec un ancrage local en Charente",
    email: "hello@maelpasqueraud.fr",
    siteUrl: "https://maelpasqueraud.fr",
  },
  seo: {
    category: "business",
    keywords: [
      "developpeur web charente",
      "creation site vitrine",
      "freelance web charente",
      "site internet auto entrepreneur",
      "designer web freelance",
      "site vitrine artisan",
      "site vitrine coach sportif",
      "site internet boulangerie",
    ],
    applicationName: "Maël Pasqueraud",
    ogLabel: "Site vitrine",
    openGraphAlt: "Site de Maël Pasqueraud",
    projectTitleSuffix: "Projet",
    projectFallbackTitle: "Projet introuvable",
  },
  ui: {
    header: {
      navigationAriaLabel: "Navigation principale",
    },
    home: {
      manifestoSectionTitle: "Approche",
      contactHeading: "Parlons d'un site qui inspire confiance.",
    },
    projectPage: {
      backToProjects: "Retour aux projets",
      challengeLabel: "Contexte",
      solutionLabel: "Approche",
      outcomeLabel: "Résultat visé",
      stackLabel: "Outils",
      deliverablesLabel: "Contenu de la maquette",
      nextProjectLabel: "Projet suivant",
      viewProjectLabel: "Voir le projet",
      contactCtaLabel: "Parler de mon site",
    },
    notFound: {
      eyebrow: "404 / page introuvable",
      title: "Cette page n'existe pas.",
      description:
        "Le lien a peut-être changé ou la page n'est pas encore prête. Le site reste accessible depuis l'accueil.",
      homeCtaLabel: "Retour à l'accueil",
      contactCtaLabel: "Contacter",
    },
  },
  navigation: [
    { label: "Intro", href: "#hero" },
    { label: "À propos", href: "#a-propos" },
    { label: "Offres", href: "#expertise" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "#contact" },
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
      "Un profil technique, un regard design et une approche simple.",
    headline:
      "Je conçois des sites clairs, soignés et pensés pour donner confiance dès les premières secondes.",
    quote: "J'aime voir une idée prendre vie sur un écran.",
    paragraphs: [
      "Je suis passionné d'informatique depuis l'âge de 11 ans. Très tôt, j'ai voulu comprendre comment étaient construits les sites que je consultais tous les jours.",
      "En créant mes premières pages, j'ai eu un vrai déclic : une idée pouvait devenir quelque chose de concret, utile et visible par tout le monde. C'est ce qui m'a naturellement amené vers le développement web et le design.",
      "Aujourd'hui, j'accompagne surtout les auto-entrepreneurs et petites activités qui veulent une image plus professionnelle sur internet, avec un site clair, propre et facile à prendre en main.",
    ],
    card: {
      label: "En bref",
      items: [
        { key: "Base", value: "Charente, France" },
        {
          key: "Format",
          value: "Freelance disponible partout en France",
        },
        {
          key: "Clients",
          value: "Auto-entrepreneurs, indépendants et petites structures",
        },
        {
          key: "Plus",
          value: "Sites vitrines en priorité, e-commerce sur demande",
        },
      ],
    },
  },
  expertise: {
    index: "03",
    title: "Offres",
    description:
      "Trois formats simples pour lancer une présence web claire et crédible.",
    groups: [
      {
        name: "Essentiel",
        intro: "À partir de 890 €",
        items: [
          "Une page claire pour présenter l'activité et inspirer confiance.",
          "Design responsive, moderne et facile à lire sur mobile comme sur ordinateur.",
          "Formulaire de contact et structure simple pour être présent rapidement en ligne.",
        ],
      },
      {
        name: "Visibilité",
        intro: "À partir de 1 490 €",
        items: [
          "Site vitrine multi-pages pour mieux présenter les services et l'entreprise.",
          "Travail sur la hiérarchie des contenus, les appels à l'action et la crédibilité globale.",
          "Base SEO locale, contact optimisé et accompagnement pour organiser les contenus.",
        ],
      },
      {
        name: "Signature",
        intro: "Sur mesure",
        items: [
          "Projet plus complet avec direction visuelle plus poussée et structure personnalisée.",
          "Fonctionnalités ou sections spécifiques selon l'activité et les objectifs.",
          "Idéal pour une présence web plus ambitieuse ou une boutique e-commerce sur demande.",
        ],
      },
    ],
  },
  stack: {
    index: "04",
    title: "Outils & stack",
    description:
      "Des bases modernes pour créer des sites rapides, propres et faciles à faire évoluer.",
    groups: [
      {
        title: "Front-end",
        note: "Une base solide pour l'interface.",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Design",
        note: "Pour cadrer et soigner l'image.",
        items: [
          "Figma",
          "Responsive design",
          "Hiérarchie visuelle",
          "Intégration soignée",
        ],
      },
      {
        title: "Fonctionnel",
        note: "L'essentiel pour un site utile.",
        items: [
          "Formulaire de contact",
          "SEO de base",
          "Déploiement Vercel",
          "Performance web",
        ],
      },
      {
        title: "Évolutions",
        note: "Quand le projet va plus loin.",
        items: ["Node.js", "Supabase", "PostgreSQL", "E-commerce sur demande"],
      },
    ],
    ticker: [
      "Site vitrine",
      "Responsive",
      "Performance",
      "SEO local",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Formulaire",
      "Déploiement",
      "UI design",
      "Charente",
      "Freelance",
    ],
  },
  projects: {
    index: "05",
    title: "Projets",
    description:
      "Trois maquettes conçues pour montrer le type de sites que je peux créer pour des activités réelles.",
    cardCtaLabel: "Voir le projet",
    posterLabel: "Maquette",
    items: [
      {
        slug: "atelier-verdure",
        title: "Atelier Verdure",
        category: "Projet conceptuel / paysagiste",
        year: "2026",
        role: "Direction web / design / développement",
        summary:
          "Une maquette de site vitrine pour un paysagiste en Charente, pensée pour rassurer rapidement et mettre en valeur le savoir-faire.",
        statement:
          "Présenter les services, les réalisations et le contact avec une image nette et locale.",
        challenge:
          "Un paysagiste doit montrer son sérieux dès les premières secondes. Le site devait présenter l'activité, valoriser quelques réalisations et simplifier la prise de contact, sans tomber dans un design trop chargé ni trop impersonnel.",
        solution:
          "J'ai conçu une page d'accueil structurée autour des prestations, d'une galerie de réalisations, d'une zone d'intervention claire et d'un contact visible à chaque étape. L'ensemble reste naturel, lisible et pensé pour un public local.",
        outcome:
          "La maquette donne une image plus professionnelle de l'activité et facilite la prise de contact pour un prospect qui cherche un artisan fiable en Charente.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive"],
        deliverables: [
          "Page d'accueil",
          "Présentation des services",
          "Bloc réalisations",
          "Contact rapide",
        ],
        links: [
          {
            label: "Voir le projet",
            href: "/projets/atelier-verdure",
          },
          {
            label: "Demander un site similaire",
            href: "/#contact",
          },
        ],
        metrics: [
          { label: "Type", value: "Site vitrine" },
          { label: "Secteur", value: "Paysagiste" },
          { label: "Zone", value: "Charente" },
        ],
        coverVariant: "lattice",
      },
      {
        slug: "elan-coaching",
        title: "Élan Coaching",
        category: "Projet conceptuel / coach sportif",
        year: "2026",
        role: "Direction web / design / développement",
        summary:
          "Une maquette de site pour un coach sportif local et en ligne, avec une image dynamique mais claire.",
        statement:
          "Montrer l'énergie du coaching sans perdre en lisibilité ni en crédibilité.",
        challenge:
          "Le site devait parler à la fois à des clients locaux et à des personnes prêtes à se faire accompagner à distance. Il fallait créer une présence plus professionnelle, mettre en avant l'offre et garder un parcours simple vers la prise de rendez-vous.",
        solution:
          "J'ai imaginé une structure qui met d'abord en avant la promesse, puis les formules de coaching, les bénéfices, quelques témoignages types et un appel à l'action très visible. Le design reste rythmé, mais maîtrisé pour ne pas noyer le message.",
        outcome:
          "La maquette donne au coach une présence plus solide, plus actuelle et mieux adaptée à une activité qui mélange rendez-vous locaux et accompagnement en ligne.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion légère"],
        deliverables: [
          "Page d'accueil",
          "Présentation des offres",
          "Section coaching local et en ligne",
          "Prise de contact",
        ],
        links: [
          {
            label: "Voir le projet",
            href: "/projets/elan-coaching",
          },
          {
            label: "Parler de mon projet",
            href: "/#contact",
          },
        ],
        metrics: [
          { label: "Type", value: "Site vitrine" },
          { label: "Secteur", value: "Coaching sportif" },
          { label: "Mode", value: "Local + en ligne" },
        ],
        coverVariant: "signal",
      },
      {
        slug: "fournil-charentais",
        title: "Le Fournil Charentais",
        category: "Projet conceptuel / boulangerie",
        year: "2026",
        role: "Direction web / design / développement",
        summary:
          "Une maquette pour une boulangerie locale traditionnelle, pensée pour transmettre une image artisanale et chaleureuse.",
        statement:
          "Créer une présence locale rassurante et donner envie de pousser la porte.",
        challenge:
          "Pour une boulangerie de quartier, le site doit rester simple tout en donnant une vraie personnalité à l'enseigne. L'objectif était de valoriser le côté artisanal, les produits phares et les informations pratiques sans complexifier l'expérience.",
        solution:
          "J'ai travaillé une ambiance plus chaleureuse, structurée autour des produits, des horaires, de l'histoire de la maison et des informations utiles. Le design reste lisible, avec une mise en page pensée pour le mobile et les recherches locales rapides.",
        outcome:
          "La maquette donne à la boulangerie une image plus soignée et plus crédible en ligne, tout en gardant la proximité et la simplicité attendues pour une activité locale.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO local"],
        deliverables: [
          "Page d'accueil",
          "Mise en avant des produits",
          "Informations pratiques",
          "Contact et localisation",
        ],
        links: [
          {
            label: "Voir le projet",
            href: "/projets/fournil-charentais",
          },
          {
            label: "Demander une maquette",
            href: "/#contact",
          },
        ],
        metrics: [
          { label: "Type", value: "Site vitrine" },
          { label: "Secteur", value: "Boulangerie" },
          { label: "Style", value: "Tradition locale" },
        ],
        coverVariant: "frame",
      },
    ],
  },
  experience: {
    index: "06",
    title: "Parcours",
    description:
      "Du premier site observé par curiosité aux projets web d'aujourd'hui.",
    items: [
      {
        period: "Depuis mes 11 ans",
        title: "Découverte du web",
        subtitle: "Curiosité / premiers tests",
        body:
          "Tout est parti d'une question simple : comment sont faits les sites internet que l'on consulte tous les jours ?",
      },
      {
        period: "Premiers projets",
        title: "Design et développement ensemble",
        subtitle: "Maquettes / intégration / logique web",
        body:
          "Très vite, je n'ai pas voulu seulement coder des pages. J'ai aussi voulu comprendre comment leur donner une vraie cohérence visuelle et une lecture simple.",
      },
      {
        period: "Aujourd'hui",
        title: "Freelance pour indépendants et petites activités",
        subtitle: "Sites vitrines / image plus pro / visibilité",
        body:
          "Je crée des sites pensés pour rassurer, clarifier une activité et donner une présence web plus professionnelle à ceux qui veulent être visibles en ligne.",
      },
    ],
  },
  method: {
    index: "07",
    title: "Méthode",
    description:
      "Un cadre simple pour avancer sans jargon et sans perdre de temps.",
    steps: [
      {
        index: "01",
        title: "Échanger",
        body:
          "Comprendre l'activité, les objectifs et l'image que le site doit transmettre.",
      },
      {
        index: "02",
        title: "Cadrer",
        body:
          "Définir l'arborescence, les contenus et la direction visuelle du projet.",
      },
      {
        index: "03",
        title: "Maquetter",
        body:
          "Créer une base claire pour valider le style et la structure avant le développement.",
      },
      {
        index: "04",
        title: "Développer",
        body:
          "Construire le site proprement avec des retours simples pendant l'avancement.",
      },
      {
        index: "05",
        title: "Mettre en ligne",
        body:
          "Livrer un site responsive, propre et facile à prendre en main au quotidien.",
      },
    ],
  },
  manifesto: {
    index: "08",
    title: "Un bon site doit rassurer,",
    description:
      "Clair, pro, utile.",
    accent: "pas seulement exister.",
    body:
      "Pour une petite activité, le site doit expliquer clairement ce que vous faites, montrer votre sérieux et donner envie de vous contacter. C'est ce que je cherche à construire à chaque projet.",
    highlights: [
      "Image plus pro",
      "Lecture immédiate",
      "Contact plus simple",
    ],
  },
  contact: {
    index: "09",
    title: "Contact",
    description:
      "Simple et direct.",
    body:
      "Si vous êtes indépendant, auto-entrepreneur ou petite structure et que vous voulez un site plus professionnel, on peut en parler. Je travaille partout en France, avec un ancrage local en Charente.",
    cta: {
      label: "M'écrire",
      href: "mailto:hello@maelpasqueraud.fr?subject=Projet%20de%20site%20web",
    },
    links: [
      {
        label: "Email",
        href: "mailto:hello@maelpasqueraud.fr",
        note: "hello@maelpasqueraud.fr",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mael-pasqueraud/",
        note: "Maël Pasqueraud",
      },
      {
        label: "GitHub",
        href: "https://github.com/maelpasq",
        note: "@maelpasq",
      },
    ],
  },
  blog: {
    pageTitle: "Conseils web",
    eyebrow: "Blog / notes / site vitrine",
    title: "Des conseils simples pour un site",
    accent: "plus clair et plus crédible.",
    description:
      "Quelques articles pour aider les indépendants à mieux préparer leur présence en ligne : structure, contenus, priorités et bonnes décisions pour un premier site vitrine.",
    backHomeLabel: "Retour à l'accueil",
    featuredLabel: "Article mis en avant",
    allPostsLabel: "Autres articles",
    viewPostLabel: "Lire l'article",
    backToBlogLabel: "Retour au blog",
    postFallbackTitle: "Article introuvable",
    takeawaysLabel: "À retenir",
    otherPostsLabel: "Autres sujets",
    contactCtaLabel: "Parler de mon site",
    posts: [
      {
        slug: "ce-quun-site-vitrine-doit-vraiment-contenir",
        title: "Ce qu'un site vitrine doit vraiment contenir",
        category: "Site vitrine",
        date: "Mars 2026",
        readingTime: "4 min",
        summary:
          "Les éléments essentiels pour qu'un site vitrine paraisse professionnel et donne envie de contacter.",
        intro:
          "Un site vitrine efficace n'a pas besoin d'en faire trop. Il doit surtout aider un visiteur à comprendre rapidement ce que vous faites, pourquoi il peut vous faire confiance et comment vous contacter.",
        sections: [
          {
            title: "Dire clairement ce que vous faites",
            paragraphs: [
              "La première zone visible doit permettre de comprendre l'activité en quelques secondes. Si le visiteur doit chercher, le message est déjà trop flou.",
              "Un bon titre, une phrase d'explication simple et un appel à l'action clair suffisent souvent à poser une base beaucoup plus solide qu'un long texte générique.",
            ],
          },
          {
            title: "Rassurer avec des preuves simples",
            paragraphs: [
              "Même sans grands chiffres ni gros clients, on peut rassurer avec une présentation claire des services, une zone géographique précise, des réalisations ou une méthode de travail bien expliquée.",
              "Le but n'est pas d'impressionner artificiellement, mais de montrer que l'activité est sérieuse et structurée.",
            ],
          },
          {
            title: "Rendre le contact évident",
            paragraphs: [
              "Un site vitrine doit faciliter le passage à l'action. Un bouton bien visible, un formulaire simple et des informations de contact accessibles changent souvent plus de choses qu'un design trop sophistiqué.",
            ],
          },
        ],
        takeaways: [
          "Le visiteur doit comprendre l'activité immédiatement.",
          "La crédibilité vient d'une structure claire avant de venir d'un grand discours.",
          "Le contact doit être visible et simple à utiliser.",
        ],
      },
      {
        slug: "pourquoi-etre-visible-en-ligne-meme-en-local",
        title: "Pourquoi être visible en ligne même en local",
        category: "Visibilité",
        date: "Février 2026",
        readingTime: "4 min",
        summary:
          "Même pour une activité locale, un site reste un outil important pour paraître plus crédible et être trouvé plus facilement.",
        intro:
          "Beaucoup d'indépendants travaillent surtout grâce au bouche-à-oreille. Pourtant, au moment de vérifier un nom, un service ou un numéro, la plupart des prospects passent quand même par internet.",
        sections: [
          {
            title: "Le site confirme que l'activité est sérieuse",
            paragraphs: [
              "Quand un prospect entend parler de vous, il va souvent chercher votre nom avant d'appeler. Un site propre et clair peut immédiatement renforcer la confiance.",
              "À l'inverse, l'absence totale de présence web peut donner une impression d'activité floue ou peu installée.",
            ],
          },
          {
            title: "Être local n'empêche pas d'être bien présenté",
            paragraphs: [
              "Un artisan, un coach ou un commerce de proximité n'a pas besoin d'un site complexe. Il a besoin d'une présence simple qui explique l'offre, la zone d'intervention et la façon de prendre contact.",
              "C'est souvent ce niveau de clarté qui fait la différence entre une visite oubliée et une demande réelle.",
            ],
          },
          {
            title: "Le site complète les réseaux et Google",
            paragraphs: [
              "Les réseaux sociaux et la fiche Google sont utiles, mais ils ne remplacent pas un espace maîtrisé où vous présentez votre activité comme vous le souhaitez. Le site devient votre base claire, stable et durable.",
            ],
          },
        ],
        takeaways: [
          "Un site rassure un prospect avant le premier échange.",
          "Une présence locale peut rester simple tout en étant très professionnelle.",
          "Le site complète les autres canaux au lieu de les remplacer.",
        ],
      },
      {
        slug: "comment-preparer-les-contenus-de-son-site",
        title: "Comment préparer les contenus de son site",
        category: "Contenu",
        date: "Janvier 2026",
        readingTime: "5 min",
        summary:
          "Les bons contenus ne sont pas forcément longs. Ils doivent surtout être clairs, utiles et réalistes pour le visiteur.",
        intro:
          "Beaucoup de projets web prennent du retard parce que les contenus semblent compliqués à préparer. En pratique, quelques blocs bien pensés suffisent souvent à construire un site vitrine efficace.",
        sections: [
          {
            title: "Commencer par l'essentiel",
            paragraphs: [
              "Avant d'écrire beaucoup, il faut clarifier les bases : que faites-vous, pour qui, dans quelle zone et comment vous contacter. Ces informations structurent déjà la majorité de la page d'accueil.",
              "Quand ces réponses sont simples, le reste du contenu devient beaucoup plus facile à rédiger.",
            ],
          },
          {
            title: "Parler comme on parle à un client",
            paragraphs: [
              "Les textes les plus crédibles sont souvent les plus directs. Il vaut mieux expliquer un service avec des mots simples que chercher un ton trop marketing.",
              "Un visiteur doit comprendre votre activité rapidement, sans jargon ni promesses trop vagues.",
            ],
          },
          {
            title: "Prévoir quelques visuels utiles",
            paragraphs: [
              "Des photos de qualité, même simples, peuvent suffire si elles montrent bien l'activité, l'ambiance ou le résultat. L'important est qu'elles soient cohérentes avec l'image que vous voulez donner.",
            ],
          },
        ],
        takeaways: [
          "Les bons contenus commencent par quatre informations très concrètes.",
          "Un ton simple et direct inspire souvent plus confiance qu'un jargon marketing.",
          "Quelques bons visuels valent mieux qu'une grande quantité d'images mal choisies.",
        ],
      },
    ],
  },
  footer: {
    eyebrow: "Footer / contact",
    imprint: "PASQUERAUD",
    signature: "Maël",
    caption:
      "Développeur & designer web pour indépendants et petites activités.",
    backToTopLabel: "Retour en haut",
    blogLink: {
      label: "Voir les projets",
      href: "/#projets",
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
