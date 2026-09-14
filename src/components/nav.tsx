"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { Close, LogoMark, Menu } from "./icons";
import { Container, cx } from "./ui";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-20">
      <Container className="flex items-center justify-between py-[18px] lg:py-[26px]">
        <Link href="/" className="flex items-center gap-[11px]" aria-label={`${site.name} — home`}>
          <LogoMark />
          <span className="text-sm font-bold tracking-[0.06em] text-fg">{site.handle}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-[30px] text-[13.5px] font-medium md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cx("transition-colors hover:text-fg", isActive(item.href) ? "text-fg" : "text-muted")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/about#contact"
            className="inline-flex h-9 items-center rounded-[7px] border border-accent/45 bg-accent/10 px-[17px] font-semibold text-accent-pale transition hover:bg-accent/18"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-[9px] border border-white/13 text-[#cbd2dc] md:hidden"
        >
          {open ? <Close size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Primary" className="border-y border-white/10 bg-ink/95 backdrop-blur md:hidden">
          <Container className="flex flex-col py-3">
            {[...nav, { label: "Contact", href: "/about#contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cx(
                  "flex h-12 items-center font-serif text-[26px]",
                  isActive(item.href) ? "text-fg" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
