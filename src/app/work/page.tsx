import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { Container, Glow, PageHeading } from "@/components/ui";
import { appsInStores, projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Apps and open-source projects built by Muhammad Asim Jawad — OTTAA Project, B4U Wallet, HoPPlace, GoalSquare and more.",
};

export default function WorkPage() {
  return (
    <>
      <Glow color="accent" strength={0.18} className="-top-[260px] left-1/2 h-[700px] w-[1100px] -translate-x-1/2" />
      <Glow color="mint" strength={0.1} period={37} className="-right-[240px] bottom-10 h-[620px] w-[900px]" />

      <Container className="pt-12 lg:pt-[72px]">
        <div className="flex flex-col items-center gap-[18px] text-center">
          <PageHeading className="bg-linear-to-r from-accent via-fg to-mint bg-clip-text text-transparent">
            Selected work
          </PageHeading>
          <p className="max-w-[560px] text-[15px] leading-[1.7] text-muted lg:text-base">
            {projects.length} things I&rsquo;ve built since 2020 — {appsInStores} of them live in the app stores.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </Container>
    </>
  );
}
