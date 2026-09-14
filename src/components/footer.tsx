import { site, socials } from "@/content/site";
import { socialIcons } from "./icons";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="mt-24">
      <Container>
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[12.5px] text-faint">Built with Next.js · deployed on Vercel</span>
          <div className="flex items-center gap-5">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted transition-colors hover:text-fg"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </a>
              );
            })}
            <span className="text-[12.5px] text-faint">
              © {new Date().getFullYear()} {site.name}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
