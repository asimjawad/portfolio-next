"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import { ProjectCard, ProjectRow } from "./project-card";
import { cx } from "./ui";

const filters = [
  { id: "all", label: "All", match: () => true },
  { id: "application", label: "Applications", match: (p: Project) => p.kinds.includes("application") },
  { id: "website", label: "Websites", match: (p: Project) => p.kinds.includes("website") },
  { id: "open-source", label: "Open source", match: (p: Project) => Boolean(p.openSource) },
] as const;

type FilterId = (typeof filters)[number]["id"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterId>("all");
  const match = filters.find((f) => f.id === active)!.match;
  const visible = projects.filter(match);
  const cards = visible.filter((p) => !p.compact);
  const rows = visible.filter((p) => p.compact);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mt-3 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
            className={cx(
              "h-9 rounded-full border px-[18px] text-[12.5px] transition",
              active === f.id
                ? "border-accent/50 bg-accent/16 font-semibold text-accent-pale"
                : "border-white/13 font-medium text-muted hover:border-white/25 hover:text-body",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-[22px] sm:grid-cols-2 lg:mt-[62px] lg:grid-cols-3">
        {cards.map((p) => (
          <ProjectCard key={p.slug} project={p} highlight={p.badge === "Digital Public Good"} />
        ))}
      </div>

      {rows.length > 0 && (
        <div className="mt-[22px] grid gap-[22px] md:grid-cols-2">
          {rows.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      )}
    </>
  );
}
