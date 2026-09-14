import { ButtonLink, Container, Glow } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Glow color="accent" strength={0.18} className="top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2" />
      <Container className="flex flex-col items-center gap-6 py-32 text-center">
        <span className="eyebrow text-mint-soft">404</span>
        <h1 className="font-serif text-[52px] leading-tight text-fg">This page didn&rsquo;t ship.</h1>
        <ButtonLink href="/">Back home</ButtonLink>
      </Container>
    </>
  );
}
