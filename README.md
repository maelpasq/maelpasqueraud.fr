# Mael Pasqueraud Portfolio

Portfolio personnel premium construit avec Next.js, React, TypeScript, Tailwind CSS v4 et Framer Motion.

Le projet suit une logique simple :
- une home éditoriale
- une section blog sur pages dédiées
- des pages projet détaillées
- un contenu centralisé
- une DA brutaliste premium noir/blanc/orange

Le site est statique, sans CMS, sans base de données, et pensé pour rester très facile à maintenir.

## Stack

- `Next.js 16` avec App Router
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Framer Motion`
- `ESLint`

## Commandes

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Structure

```text
app/
  page.tsx                  Home portfolio
  blog/page.tsx             Listing blog
  blog/[slug]/page.tsx      Détail d’un article
  projets/[slug]/page.tsx   Détail d’un projet
  layout.tsx                Layout racine + metadata globales
  globals.css               Tokens visuels globaux + styles utilitaires
  not-found.tsx             Page 404
  opengraph-image.tsx       Image OG générée côté code
  robots.ts                 Robots
  sitemap.ts                Sitemap

components/
  site-chrome.tsx           Shell partagé navbar/footer
  site-header.tsx           Header sticky + état actif
  site-footer.tsx           Footer partagé
  home/project-card.tsx     Carte projet sur la home
  motion/reveal.tsx         Reveal au scroll
  motion/page-transition.tsx Transition entre pages + gestion du scroll
  ui/button-link.tsx        CTA interne/externe
  ui/project-poster.tsx     Poster projet généré en CSS
  ui/section-shell.tsx      Wrapper de section home

content/
  portfolio.ts              Source unique du contenu affiché

lib/
  types.ts                  Contrats TypeScript du contenu
  utils.ts                  Helpers simples
```

## Principe de fonctionnement

### 1. Tout le contenu visible doit vivre dans `content/portfolio.ts`

Ce fichier est la source de vérité du site.

On y stocke :
- les textes de la home
- les textes du blog
- les textes des pages projet
- les labels UI
- les CTA
- les index de sections
- certaines valeurs de footer

Si un texte affiché doit être ajouté ou modifié, il faut d’abord passer par `content/portfolio.ts`, puis brancher le composant concerné.

Les types associés sont définis dans [lib/types.ts](./lib/types.ts).

### 2. `app/page.tsx` assemble la home

Ce fichier ne doit pas devenir une source de contenu.

Il sert à :
- orchestrer les sections
- brancher `portfolioContent`
- composer la mise en page

Il ne doit pas contenir de copy UI en dur sauf cas très justifié.

### 3. `site-chrome.tsx` garde la structure persistante

Le header et le footer sont partagés entre :
- `/`
- `/blog`
- `/blog/[slug]`
- `/projets/[slug]`

Cela permet d’éviter un effet de rechargement complet de structure entre les pages publiques.

### 4. `page-transition.tsx` gère les transitions et le scroll

Ce composant gère :
- la transition visuelle entre pages
- le retour instantané en haut sur changement de route standard
- le scroll vers une section quand l’URL cible contient un hash comme `/#contact`

Ne pas dupliquer cette logique ailleurs sans raison.

### 5. `button-link.tsx` choisit automatiquement le bon type de lien

Le composant :
- utilise `next/link` pour les routes internes
- utilise `<a>` pour les liens externes ou `mailto`
- conserve les variantes visuelles des CTA

## Routes publiques

- `/` : portfolio principal
- `/blog` : page blog
- `/blog/[slug]` : article
- `/projets/[slug]` : case study projet

## Fichiers importants

### [app/layout.tsx](./app/layout.tsx)

Contient :
- les metadata globales
- les fonts
- le branchement du shell partagé

### [content/portfolio.ts](./content/portfolio.ts)

Fichier le plus important du projet.

À modifier pour :
- changer un texte
- ajouter un article
- ajouter un projet
- modifier la navigation
- ajuster des labels UI

### [components/site-header.tsx](./components/site-header.tsx)

Gère :
- la navbar sticky
- l’état actif des sections sur la home
- l’état actif du blog
- l’indicateur orange animé

### [components/site-footer.tsx](./components/site-footer.tsx)

Footer partagé entre les pages publiques.

### [components/ui/section-shell.tsx](./components/ui/section-shell.tsx)

Wrapper commun des sections de la home :
- grille
- espacement
- colonne latérale
- titre de section

### [components/ui/project-poster.tsx](./components/ui/project-poster.tsx)

Visuels projets générés uniquement en CSS/layout.

Pas d’assets image obligatoires dans la V1.

## Ajouter du contenu

### Ajouter un projet

1. Ajouter une entrée dans `portfolioContent.projects.items`
2. Vérifier que le `slug` est unique
3. Vérifier que la `coverVariant` existe
4. La page projet sera générée automatiquement par `app/projets/[slug]/page.tsx`

### Ajouter un article de blog

1. Ajouter une entrée dans `portfolioContent.blog.posts`
2. Vérifier que le `slug` est unique
3. La page article sera générée automatiquement par `app/blog/[slug]/page.tsx`

### Modifier un texte

1. Chercher d’abord dans `content/portfolio.ts`
2. Si le texte n’existe pas encore, ajouter la clé dans `lib/types.ts`
3. Puis consommer cette clé dans le composant concerné

## Règles de cohérence

- Garder la direction artistique noir/blanc/orange.
- Ne pas transformer le site en template startup générique.
- Ne pas disperser le contenu dans les composants.
- Préserver la logique de shell partagé pour les pages publiques.
- Respecter `prefers-reduced-motion`.
- Éviter d’ajouter des dépendances si le besoin peut être couvert avec l’existant.
- Préférer des composants sobres et typés.

## Règles pour une IA qui modifie ce projet

Si tu es une IA ou un agent qui travaille sur ce repo :

- Lis d’abord `content/portfolio.ts`, `lib/types.ts`, `app/page.tsx`, `components/site-chrome.tsx` et `components/site-header.tsx`.
- Considère `content/portfolio.ts` comme source de vérité du texte affiché.
- N’ajoute pas de texte visible en dur dans les composants si ce texte peut vivre dans `portfolio.ts`.
- Si tu ajoutes un nouveau champ de contenu, mets à jour `lib/types.ts`.
- Si tu ajoutes une nouvelle page publique qui doit garder la même structure, vérifie si elle doit passer par `site-chrome.tsx`.
- Si tu modifies le comportement de navigation, vérifie `page-transition.tsx`, `site-header.tsx` et `button-link.tsx` ensemble.
- Si tu modifies les routes publiques, vérifie aussi `sitemap.ts`, `robots.ts` et les metadata.
- Ne change pas la DA sans demande explicite.
- Ne casse pas le comportement actuel du scroll :
  - route standard : retour en haut
  - route avec hash : scroll vers la section

## Vérifications recommandées

Avant de livrer une modification :

```bash
pnpm lint
pnpm build
```

Puis vérifier visuellement :
- desktop
- mobile
- navbar
- transitions de pages
- section contact
- pages blog
- pages projet

## État actuel

- contenu statique centralisé
- blog et projets générés statiquement
- structure publique persistante
- animations sobres
- SEO de base en place

