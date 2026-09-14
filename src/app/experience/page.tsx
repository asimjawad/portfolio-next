import type { Metadata } from "next";
import { Download } from "@/components/icons";
import { ButtonLink, Container, Glow, PageHeading, Tag, cx } from "@/components/ui";
import { education, experience, toolkit } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, toolkit and education of Muhammad Asim Jawad, Flutter developer.",
};

const railDot = ["border-[#8b5cf6]", "border-[#5eaa7a]", "border-mint"];

export default function ExperiencePage() {
  return (
    <>
      <Glow color="accent" strength={0.18} className="-top-[200px] -left-[240px] h-[700px] w-[900px]" />
      <Glow color="mint" strength={0.11} period={35} className="top-[760px] -right-[220px] h-[640px] w-[820px]" />

      <Container className="pt-12 lg:pt-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3.5">
            <PageHeading>
              Where I&rsquo;ve <span className="text-gradient italic">worked</span>
            </PageHeading>
            <p className="max-w-[520px] text-[15px] leading-[1.7] text-muted lg:text-base">
              Four roles since 2020 — from freelancing straight out of university to leading the Flutter rewrite of
              a product used in 11 countries.
            </p>
          </div>
          <ButtonLink href={site.resumeUrl} variant="outline" className="self-start lg:self-auto">
            <Download size={15} />
            Download résumé
          </ButtonLink>
        </div>

        <div className="relative mt-12 pl-[34px] lg:mt-[58px]">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-[5px] w-[1.5px] bg-linear-to-b from-accent via-mint to-mint/15"
          />
          <ol className="flex flex-col gap-[18px]">
            {experience.map((role, i) => (
              <li
                key={role.company}
                className={cx(
                  "reveal relative flex flex-col gap-3.5 rounded-[14px] border px-5 py-6 sm:px-7",
                  role.current ? "border-accent/30 bg-[rgb(24_26_33/0.45)]" : "border-white/10 bg-[rgb(24_26_33/0.38)]",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cx(
                    "absolute top-[30px] -left-[34px] rounded-full",
                    role.current
                      ? "h-[13px] w-[13px] bg-accent shadow-[0_0_0_4px_rgba(192,132,252,0.18)]"
                      : cx("ml-px h-[11px] w-[11px] border-2 bg-panel", railDot[(i - 1) % railDot.length]),
                  )}
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
                  <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                    <h2 className="font-serif text-[26px] text-fg sm:text-[30px]">{role.company}</h2>
                    <span className={cx("text-[13.5px] font-semibold", role.current ? "text-accent" : "text-muted")}>
                      {role.position}
                    </span>
                  </div>
                  <span
                    className={cx(
                      "eyebrow shrink-0 self-start text-[11.5px] tracking-[0.08em]",
                      role.current
                        ? "rounded-[5px] border border-mint/35 bg-mint/8 px-2.5 py-1 text-mint-soft"
                        : "text-faint",
                    )}
                  >
                    {role.start} — {role.end}
                  </span>
                </div>
                <ul className="flex flex-col gap-[9px]">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-[11px]">
                      <span
                        aria-hidden="true"
                        className={cx("mt-2 h-[5px] w-[5px] shrink-0 rounded-full", role.current ? "bg-accent" : "bg-line")}
                      />
                      <span className="text-sm leading-[1.6] text-muted">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-0.5 flex flex-wrap gap-1.5">
                  {role.tools.map((t) => (
                    <Tag key={t} tone={role.current ? "accent" : "neutral"}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-12 pt-16 lg:grid-cols-[1.4fr_1fr] lg:gap-[26px] lg:pt-[68px]">
          <section className="reveal flex flex-col gap-5">
            <h2 className="font-serif text-[34px] text-fg">Toolkit</h2>
            <ul className="flex flex-wrap gap-[9px]">
              {toolkit.map((t) => (
                <li
                  key={t.name}
                  className={cx(
                    "rounded-[7px] border px-[15px] py-2 text-[13.5px]",
                    t.tone === "accent" && "border-accent/40 bg-accent/14 font-semibold text-accent-pale",
                    t.tone === "mint" && "border-mint/38 bg-mint/13 font-semibold text-mint-pale",
                    !t.tone && "border-white/12 bg-white/5 font-medium text-[#cbd2dc]",
                  )}
                >
                  {t.name}
                </li>
              ))}
            </ul>
          </section>

          <section className="reveal flex flex-col gap-5">
            <h2 className="font-serif text-[34px] text-fg">Education</h2>
            <ul className="flex flex-col border-b border-white/10">
              {education.map((e) => (
                <li key={e.school} className="flex flex-col gap-1 border-t border-white/10 py-3.5">
                  <div className="flex items-baseline justify-between gap-3.5">
                    <span className="text-[15px] font-semibold text-fg">{e.school}</span>
                    <span className="shrink-0 text-[11.5px] font-semibold text-faint">{e.years}</span>
                  </div>
                  <span className="text-[13px] text-subtle">{e.detail}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
}
