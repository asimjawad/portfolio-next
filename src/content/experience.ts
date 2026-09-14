export type Role = {
  company: string;
  position: string;
  start: string;
  end: string; // "Present" for current roles
  current?: boolean;
  highlights: string[];
  tools: string[];
};

// VERIFY: dates carried over from the old configs.dart, which hasn't been updated since 2021.
export const experience: Role[] = [
  {
    company: "OTTAA Project",
    position: "Flutter Developer",
    start: "Dec 2021",
    end: "Present",
    current: true,
    highlights: [
      "Ported the existing native Android app to Flutter, then worked with the CTO and AI engineer on the next generation of the product.",
      "Set up clean architecture, CI/CD, and unit and widget test coverage across the Flutter codebase.",
      "Built side products — the Keyboard web app and the PictoWidget package — from the same foundations.",
    ],
    tools: ["Flutter", "Dart", "Kotlin", "Swift", "Firebase"],
  },
  {
    company: "Superior Soft",
    position: "Flutter Developer",
    start: "Jun 2021",
    end: "Dec 2021",
    highlights: [
      "Built the UI for a crypto application, plus an admin panel for notifications, notes and tests.",
      "Added socket-based live data, extra hashing and security layers, and designed the project's CI/CD.",
    ],
    tools: ["Flutter", "Firebase", "Freshchat"],
  },
  {
    company: "Sigi Technologies",
    position: "Mobile App Developer",
    start: "Jan 2021",
    end: "Jun 2021",
    highlights: [
      "Worked alongside designers to take mobile apps from comp to store, including an education app and e-commerce work.",
      "Built the front end for user profiles and quizzes.",
    ],
    tools: ["Flutter", "Kotlin", "Java"],
  },
  {
    company: "Freelance",
    position: "Mobile developer",
    start: "May 2020",
    end: "Present",
    highlights: [
      "Client work since graduating — GoalSquare, HoPPlace and B4U Wallet among them, across a wide range of stacks.",
    ],
    tools: ["Flutter", "Node.js", "MongoDB", "GCP", "Agora"],
  },
];

export const education = [
  { school: "Lahore Leads University", detail: "BS Computer Science", years: "2016 — 2020" },
  { school: "Govt. Islamia College Kasur", detail: "Intermediate, pre-engineering", years: "2014 — 2016" },
  { school: "District Public School Kasur", detail: "Matriculation", years: "2012 — 2014" },
];

export const toolkit: { name: string; tone?: "accent" | "mint" }[] = [
  { name: "Flutter", tone: "accent" },
  { name: "Dart", tone: "accent" },
  { name: "Kotlin" },
  { name: "Swift" },
  { name: "Android" },
  { name: "iOS" },
  { name: "Firebase", tone: "mint" },
  { name: "Node.js" },
  { name: "GraphQL" },
  { name: "Python" },
  { name: "Django" },
  { name: "Git" },
];
