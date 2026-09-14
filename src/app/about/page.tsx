import type { Metadata } from "next";
import Image from "next/image";
import { Chat, Mail } from "@/components/icons";
import { ButtonLink, Container, Glow } from "@/components/ui";
import { site } from "@/content/site";
import avatar from "@/assets/avatar.png";

export const metadata: Metadata = {
  title: "About",
  description: "About Muhammad Asim Jawad, a Flutter developer — and how to get in touch.",
};

export default function AboutPage() {
  const facts = [
    { label: "Based in", value: site.location },
    { label: "Currently", value: site.currentRole },
    { label: "Open to", value: site.openTo, mint: true },
  ];

  return (
    <>
      <Glow color="accent" strength={0.2} className="-top-[180px] -right-[200px] h-[700px] w-[900px]" />
      <Glow color="mint" strength={0.13} period={38} className="-bottom-[200px] left-1/2 h-[600px] w-[1200px] -translate-x-1/2" />

      <Container className="grid items-start gap-10 pt-10 lg:grid-cols-12 lg:gap-7 lg:pt-[76px]">
        <div className="flex justify-center lg:col-span-4">
          <div className="relative w-[240px] motion-safe:animate-rise sm:w-[330px]">
            <Glow color="accent" strength={0.26} className="-inset-7" />
            <Image
              src={avatar}
              alt={site.name}
              priority
              sizes="(min-width: 640px) 330px, 240px"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 motion-safe:animate-rise motion-safe:[animation-delay:120ms] lg:col-span-8 lg:pt-2">
          <h1 className="font-serif text-[44px] leading-[1.06] font-normal text-fg sm:text-[62px]">
            Muhammad <span className="text-gradient italic">Asim Jawad</span>
          </h1>
          <p className="text-base leading-[1.72] text-muted lg:text-[17px]">
            I started out writing native Android, moved to Flutter when it became clear I could build for both
            platforms without building everything twice, and have stayed there since. Most of my work is the
            unglamorous part of mobile: state that survives a dropped connection, layouts that hold up on a
            five-year-old phone, tests that catch the regression before the store does.
          </p>
          <p className="text-base leading-[1.72] text-muted lg:text-[17px]">
            The work I&rsquo;m proudest of is OTTAA — an app that gives a voice to people who don&rsquo;t have one.
            It&rsquo;s a Digital Public Good, it&rsquo;s used in 11 countries, and it taught me that accessibility
            isn&rsquo;t a checklist you run at the end.
          </p>
          <dl className="flex flex-col gap-5 pt-2.5 sm:flex-row sm:gap-[34px]">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1">
                <dt className="eyebrow text-faint">{f.label}</dt>
                <dd className={f.mint ? "text-[15px] text-mint-soft" : "text-[15px] text-body"}>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <Container className="pt-20 lg:pt-[110px]">
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="reveal flex scroll-mt-8 flex-col items-center gap-[22px] rounded-[18px] border border-accent/30 bg-[rgb(24_26_33/0.45)] px-6 py-12 text-center sm:px-[60px] sm:py-[58px]"
        >
          <span className="eyebrow text-[11.5px] tracking-[0.18em] text-mint-soft">Get in touch</span>
          <h2 id="contact-heading" className="font-serif text-[38px] leading-[1.08] font-normal text-fg sm:text-[58px]">
            Got something that needs <br className="hidden sm:block" />
            building for mobile?
          </h2>
          <p className="max-w-[520px] text-[15px] leading-[1.7] text-muted sm:text-base">
            Happy to talk through a product, a rewrite, or a piece of work you&rsquo;re stuck on. I reply to
            everything.
          </p>
          <div className="mt-2.5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-3.5">
            <ButtonLink href={`mailto:${site.email}`} size="lg">
              <Mail size={16} strokeWidth={1.9} />
              <span className="select-all">{site.email}</span>
            </ButtonLink>
            <ButtonLink href={site.whatsappUrl} variant="mint" size="lg">
              <Chat size={16} strokeWidth={1.9} />
              WhatsApp
            </ButtonLink>
          </div>
        </section>
      </Container>
    </>
  );
}
