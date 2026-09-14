// Everything a visitor reads about you, in one place.
// Items marked VERIFY were inferred or carried over from the old Flutter configs.dart.

export const site = {
  name: "Muhammad Asim Jawad",
  shortName: "Asim",
  handle: "asimjawad",
  role: "Flutter Developer",
  location: "Lahore, Pakistan", // VERIFY: inferred from university, never stated in the old site
  availability: "Available for work", // VERIFY
  openTo: "Full-time & contract", // VERIFY
  currentRole: "Flutter Developer at OTTAA", // VERIFY: old data says Dec 2021 – present
  email: "asimjawad2723@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1zE5mrmm6PAmLmDjXeoTRzvQfrTtLipq0/view?usp=sharing",
  whatsappUrl: "https://wa.me/923036308035",
  description:
    "Flutter developer building cross-platform apps — assistive communication, crypto wallets, field maintenance and sports training — shipped to the App Store and Google Play.",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/asimjawad", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asimjawad/", icon: "linkedin" },
  { label: "X", href: "https://twitter.com/asimjawad01", icon: "x" },
] as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
] as const;
