import Link from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[72px]", className)}>{children}</div>;
}

type GlowProps = {
  color: "accent" | "mint";
  strength?: number;
  className?: string;
  style?: CSSProperties;
  /** Seconds for one slow drift cycle; glows with different periods never sync up. */
  period?: number;
};

/** Soft radial light behind a section. Purely decorative. */
export function Glow({ color, strength = 0.2, className, style, period = 26 }: GlowProps) {
  const rgb = color === "accent" ? "192,132,252" : "74,222,128";
  return (
    <div
      aria-hidden="true"
      className={cx("pointer-events-none absolute -z-10 motion-safe:animate-drift", className)}
      style={{
        background: `radial-gradient(ellipse at center, rgba(${rgb},${strength}), rgba(${rgb},0) 66%)`,
        animationDuration: `${period}s`,
        ...style,
      }}
    />
  );
}

const tagTones = {
  accent: "text-accent-soft bg-accent/12 border-accent/26",
  mint: "text-mint-pale bg-mint/12 border-mint/26",
  neutral: "text-muted bg-white/5 border-white/11",
} as const;

export function Tag({ tone = "neutral", children }: { tone?: keyof typeof tagTones; children: ReactNode }) {
  return (
    <span className={cx("rounded-[5px] border px-2 py-[3px] text-[11px] font-medium", tagTones[tone])}>
      {children}
    </span>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="self-start rounded-[5px] border border-mint/35 bg-mint/8 px-2 py-[3px] text-[10.5px] font-semibold tracking-[0.1em] text-mint-soft uppercase">
      {children}
    </span>
  );
}

const buttonStyles = {
  primary:
    "bg-linear-to-r from-accent to-accent-deep text-[#12021f] font-bold hover:brightness-110",
  outline: "border border-white/16 text-[#d3d8e2] font-semibold hover:border-white/30 hover:text-fg",
  accent: "border border-accent/45 bg-accent/10 text-accent-pale font-semibold hover:bg-accent/18",
  mint: "border border-mint/45 bg-mint/8 text-mint-pale font-semibold hover:bg-mint/15",
} as const;

const buttonSizes = {
  md: "h-12 px-6 text-sm",
  lg: "h-[50px] px-7 text-[14.5px]",
} as const;

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: keyof typeof buttonStyles;
  size?: keyof typeof buttonSizes;
  className?: string;
};

export function ButtonLink({ variant = "primary", size = "md", className, ...props }: ButtonLinkProps) {
  const external = typeof props.href === "string" && /^https?:/.test(props.href);
  return (
    <Link
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cx(
        "inline-flex items-center justify-center gap-2.5 rounded-[9px] transition",
        buttonSizes[size],
        buttonStyles[variant],
        className,
      )}
    />
  );
}

export function PageHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={cx("font-serif text-[46px] leading-[1.05] font-normal text-fg sm:text-[60px] lg:text-[68px]", className)}>
      {children}
    </h1>
  );
}
