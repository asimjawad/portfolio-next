import type { Project } from "@/content/projects";
import { ArrowUpRight, GitHub } from "./icons";
import { Badge, Tag, cx } from "./ui";

const glowRgb = { accent: "192,132,252", mint: "74,222,128" } as const;

export function ProjectStage({ project, size = "md" }: { project: Project; size?: "md" | "lg" }) {
  const rgb = glowRgb[project.accent];
  const edge = project.accent === "accent" ? "border-accent/45" : "border-mint/40";
  const lg = size === "lg";
  // The "lg" stage only grows at the lg breakpoint; on phones it matches the card size.
  const side = lg
    ? "h-[116px] w-[68px] rounded-[13px] lg:h-[206px] lg:w-[104px] lg:rounded-[18px]"
    : "h-[116px] w-[68px] rounded-[13px]";
  const center = lg
    ? "h-[130px] w-[76px] rounded-[14px] lg:h-[232px] lg:w-[116px] lg:rounded-[20px]"
    : "h-[130px] w-[76px] rounded-[14px]";

  return (
    <div
      aria-hidden="true"
      className={cx("flex items-center justify-center gap-3 bg-panel", lg ? "h-[150px] lg:h-[300px]" : "h-[150px]")}
      style={{ backgroundImage: `radial-gradient(ellipse at 50% 58%, rgba(${rgb},0.26), rgba(10,10,16,0) 64%)` }}
    >
      {project.stage === "phones" && (
        <>
          <div className={cx("border border-white/13 bg-[#0e1016] -rotate-6 transition-all duration-500 ease-(--ease-out-soft) group-hover:-translate-x-2 group-hover:-rotate-10", side)} />
          <div
            className={cx("border bg-[#0e1016] transition-all duration-500 ease-(--ease-out-soft) group-hover:-translate-y-2", edge, center)}
            style={{ boxShadow: `0 0 40px rgba(${rgb},0.26)` }}
          />
          <div className={cx("border border-white/13 bg-[#0e1016] rotate-6 transition-all duration-500 ease-(--ease-out-soft) group-hover:translate-x-2 group-hover:rotate-10", side)} />
        </>
      )}

      {project.stage === "keyboard" && (
        <div className="grid w-[190px] grid-cols-6 gap-[5px] rounded-[11px] border border-white/12 bg-[#0e1016] p-3">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className={cx("h-[15px] rounded-[3px]", i === 2 ? "bg-accent/34" : i === 7 ? "bg-mint/30" : "bg-white/10")} />
          ))}
        </div>
      )}

      {project.stage === "pictos" && (
        <div className="grid grid-cols-3 gap-2">
          {["a", "m", "n", "n", "a", "n", "m", "n", "n"].map((t, i) => (
            <div
              key={i}
              className={cx(
                "h-8 w-8 rounded-lg border",
                t === "a" ? "border-accent/32 bg-accent/22" : t === "m" ? "border-mint/30 bg-mint/20" : "border-white/12 bg-white/7",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function LinkIcons({ project }: { project: Project }) {
  const { github, website, playStore, appStore } = project.links;
  const primary = website ?? playStore ?? appStore;
  const arrow = project.accent === "accent" ? "text-accent" : "text-mint";
  return (
    <div className="flex items-center gap-2.5">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="text-faint transition-colors hover:text-fg">
          <GitHub size={15} strokeWidth={1.7} />
        </a>
      )}
      {primary && (
        <a href={primary} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className={cx(arrow, "transition-opacity hover:opacity-75")}>
          <ArrowUpRight size={15} strokeWidth={1.7} />
        </a>
      )}
    </div>
  );
}

export function ProjectCard({ project, highlight }: { project: Project; highlight?: boolean }) {
  return (
    <article className={cx("surface group reveal flex flex-col overflow-hidden transition-[border-color,translate] duration-300 hover:-translate-y-1", highlight ? "border-accent/30 hover:border-accent/55" : "hover:border-white/22")}>
      <ProjectStage project={project} />
      <div className="flex grow flex-col gap-2.5 border-t border-white/8 px-[22px] pt-5 pb-[22px]">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-serif text-[25px] leading-tight text-fg">{project.title}</h3>
          <LinkIcons project={project} />
        </div>
        {project.badge && <Badge>{project.badge}</Badge>}
        <p className="grow text-[13px] leading-[1.6] text-subtle">{project.summary}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tools.slice(0, 3).map((t) => (
            <Tag key={t} tone={project.accent}>
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="reveal flex items-center justify-between gap-5 rounded-[14px] border border-white/9 bg-[rgb(24_26_33/0.32)] px-6 py-[22px] transition-colors duration-300 hover:border-white/20">
      <div className="flex flex-col gap-1.5">
        <h3 className="font-serif text-2xl text-fg">{project.title}</h3>
        <p className="text-[13px] leading-[1.55] text-subtle">{project.summary}</p>
      </div>
      {project.stage === "swatches" ? (
        <div aria-hidden="true" className="flex shrink-0 gap-[7px]">
          <div className="h-[26px] w-[26px] rounded-[7px] bg-accent" />
          <div className="h-[26px] w-[26px] rounded-[7px] bg-mint" />
          <div className="h-[26px] w-[26px] rounded-[7px] bg-white/16" />
        </div>
      ) : (
        <LinkIcons project={project} />
      )}
    </article>
  );
}

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="surface group reveal grid overflow-hidden border-accent/30 transition-colors duration-300 hover:border-accent/55 lg:grid-cols-[1.15fr_1fr]">
      <ProjectStage project={project} size="lg" />
      <div className="flex flex-col justify-center gap-[15px] p-7 lg:p-[34px]">
        <div className="flex items-center gap-3">
          <h3 className="font-serif text-[33px] leading-tight text-fg">{project.title}</h3>
          <LinkIcons project={project} />
        </div>
        {project.badge && <Badge>{project.badge}</Badge>}
        <p className="text-[14.5px] leading-[1.65] text-muted">{project.summary}</p>
        <div className="mt-0.5 flex flex-wrap gap-[7px]">
          {project.tools.map((t) => (
            <Tag key={t} tone={project.accent}>
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
