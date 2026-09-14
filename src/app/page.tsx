import Link from "next/link";
import { DeviceCluster, HeroPhone } from "@/components/device";
import { ArrowRight } from "@/components/icons";
import { FeaturedProject, ProjectCard } from "@/components/project-card";
import { ButtonLink, Container, Glow } from "@/components/ui";
import { appsInStores, projects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  const [lead, ...rest] = projects.filter((p) => p.featured);

  const stats = [
    { value: "11", label: "Countries reached" },
    { value: String(appsInStores), label: "Apps in the stores" },
    { value: String(projects.length), label: "Shipped projects" },
    { value: "DPG", label: "Certified product", mint: true },
  ];

  return (
    <>
      <Glow color="accent" strength={0.22} className="-top-[260px] -right-[200px] h-[820px] w-[1000px]" />
      <Glow color="mint" strength={0.12} period={34} className="top-[240px] -left-[220px] h-[600px] w-[760px]" />
      <Glow color="accent" strength={0.13} period={41} className="-bottom-[140px] left-1/2 h-[560px] w-[1100px] -translate-x-1/2" />

      <Container className="grid items-center gap-6 pt-8 lg:grid-cols-12 lg:pt-[76px]">
        <div className="flex flex-col gap-5 lg:col-span-6 lg:gap-[26px]">
          <span className="inline-flex items-center gap-2 self-start motion-safe:animate-rise rounded-full border border-mint/35 bg-mint/8 px-3 py-1.5 text-[10.5px] font-semibold tracking-[0.1em] text-mint-soft uppercase lg:text-[11.5px]">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            {site.availability}
          </span>

          <h1 className="font-serif text-[46px] leading-[1.06] font-normal text-fg motion-safe:animate-rise motion-safe:[animation-delay:80ms] sm:text-[64px] lg:text-[78px] lg:leading-[1.05]">
            Apps that made it <br className="hidden sm:block" />
            to <span className="text-gradient">real phones</span>.
          </h1>

          <p className="max-w-[480px] text-[15px] leading-[1.7] text-muted motion-safe:animate-rise motion-safe:[animation-delay:160ms] lg:text-[16.5px]">
            I&rsquo;m {site.shortName} — a Flutter developer in {site.location.split(",")[0]}. Assistive
            communication, crypto wallets, field maintenance, sports training: {appsInStores} products live in
            the app stores.
          </p>

          <div className="flex flex-col gap-2.5 pt-1 motion-safe:animate-rise motion-safe:[animation-delay:240ms] sm:flex-row sm:gap-3.5">
            <ButtonLink href="/work">
              See the work
              <ArrowRight size={15} strokeWidth={2.1} />
            </ButtonLink>
            <ButtonLink href={site.resumeUrl} variant="outline">
              Résumé
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-6">
          <DeviceCluster className="hidden sm:block" />
          <HeroPhone className="mt-6 sm:hidden" />
        </div>
      </Container>

      <Container>
        <dl className="reveal mt-2 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4 lg:mt-[30px]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 py-5 lg:py-6">
              <dt className="eyebrow order-2 text-[10px] text-faint sm:text-[11px]">{s.label}</dt>
              <dd className={`order-1 font-serif text-[32px] lg:text-[38px] ${s.mint ? "text-mint" : "text-fg"}`}>
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container className="pt-16 lg:pt-[76px]">
        <div className="reveal flex items-baseline justify-between pb-[22px]">
          <h2 className="font-serif text-[32px] text-fg lg:text-[44px]">Featured work</h2>
          <Link href="/work" className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent hover:text-accent-soft">
            All {projects.length} projects
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>

        <FeaturedProject project={lead} />

        <div className="grid gap-[22px] pt-[22px] md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </>
  );
}
