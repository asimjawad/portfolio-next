export type ProjectKind = "application" | "website";
export type Accent = "accent" | "mint";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  kinds: ProjectKind[];
  openSource?: boolean;
  badge?: string;
  accent: Accent;
  stage: "phones" | "keyboard" | "pictos" | "swatches" | "none";
  tools: string[];
  links: {
    website?: string;
    github?: string;
    playStore?: string;
    appStore?: string;
  };
  featured?: boolean;
  compact?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ottaa",
    title: "OTTAA Project",
    summary:
      "Augmentative and alternative communication for people with speech and language impairments — cerebral palsy, aphasia, autism, Down syndrome and mild ALS. In use across 11 countries.",
    kinds: ["application", "website"],
    badge: "Digital Public Good",
    accent: "accent",
    stage: "phones",
    tools: ["Flutter", "Firebase", "Kotlin", "Swift"],
    links: {
      website: "https://ottaaproject-flutter.web.app",
      github: "https://github.com/asimjawad/ottaa_project_flutter",
      playStore: "https://play.google.com/store/apps/details?id=com.stonefacesoft.ottaa",
    },
    featured: true,
  },
  {
    slug: "b4u-wallet",
    title: "B4U Wallet",
    summary:
      "Secure, manage and exchange crypto and fiat — Bitcoin, Rscoin, EUR, USD — from one mobile wallet, with holdings kept in offline storage.",
    kinds: ["application", "website"],
    accent: "accent",
    stage: "phones",
    tools: ["Flutter", "GraphQL", "Python", "Elasticsearch"],
    links: {
      website: "https://b4uwallet.com",
      playStore: "https://play.google.com/store/apps/details?id=com.b4uwallet.android",
      appStore: "https://apps.apple.com/us/app/b4u-wallet/id1491304459",
    },
    featured: true,
  },
  {
    slug: "hopplace",
    title: "HoPPlace",
    summary:
      "Maintenance management for companies running physical sites — and for the technicians working them on the ground.",
    kinds: ["application", "website"],
    accent: "mint",
    stage: "phones",
    tools: ["Flutter", "Node.js", "GraphQL"],
    links: {
      website: "https://www.hopplace.com",
      playStore: "https://play.google.com/store/apps/details?id=fr.hopplace.app",
      appStore: "https://apps.apple.com/us/app/hop-place/id1570788432",
    },
    featured: true,
  },
  {
    slug: "goalsquare",
    title: "GoalSquare",
    summary:
      "A training app for soccer players — their schedule, and the session they need to do right now.",
    kinds: ["application", "website"],
    accent: "mint",
    stage: "phones",
    tools: ["Flutter", "Node.js", "NoSQL"],
    links: {
      website: "http://goalsquarecdn.be",
      appStore: "https://apps.apple.com/us/app/goalsquare/id1463011943",
      github: "https://github.com/asimjawad/GoalSquare",
    },
  },
  {
    slug: "keyboard",
    title: "Keyboard",
    summary:
      "A predictive keyboard built to grow children's writing ability, rather than just finish their words.",
    kinds: ["website"],
    openSource: true,
    badge: "Open source",
    accent: "accent",
    stage: "keyboard",
    tools: ["Flutter", "Firebase"],
    links: { github: "https://github.com/asimjawad/Keyboard" },
  },
  {
    slug: "pictowidget",
    title: "PictoWidget",
    summary:
      "OTTAA's universal pictogram widget for Flutter, pulled out so other projects can use it too.",
    kinds: [],
    openSource: true,
    badge: "Open source",
    accent: "mint",
    stage: "pictos",
    tools: ["Flutter", "Dart"],
    links: { github: "https://github.com/asimjawad/PictoWidget" },
  },
  {
    slug: "color-quest",
    title: "Color Quest",
    summary: "A small game: match the generated colour as closely as you can.",
    kinds: ["application"],
    accent: "accent",
    stage: "swatches",
    tools: ["Flutter"],
    links: { github: "https://github.com/asimjawad/color-quest" },
    compact: true,
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    summary: "Built with Next.js and Tailwind, deployed on Vercel.",
    kinds: ["website"],
    accent: "mint",
    stage: "none",
    tools: ["Next.js", "TypeScript", "Tailwind"],
    links: { github: "https://github.com/asimjawad/portfolio-next" },
    compact: true,
  },
];

export const appsInStores = projects.filter(
  (p) => p.links.playStore || p.links.appStore,
).length;
