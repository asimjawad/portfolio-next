import Image from "next/image";
import type { ReactNode } from "react";
import { Speaker } from "./icons";
import { Tilt } from "./tilt";
import { cx } from "./ui";

type PhoneProps = {
  className?: string;
  glow?: boolean;
  /** Path under /public to a real screenshot. Without one, `children` renders a drawn placeholder. */
  screenshot?: string;
  alt?: string;
  children?: ReactNode;
};

export function Phone({ className, glow, screenshot, alt = "", children }: PhoneProps) {
  return (
    <div
      className={cx(
        "overflow-hidden border bg-device",
        glow
          ? "border-accent/45 shadow-[0_0_90px_rgba(192,132,252,0.30),0_40px_80px_rgba(0,0,0,0.75)]"
          : "border-white/14 shadow-[0_30px_70px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      {screenshot ? (
        <div className="relative h-full w-full">
          <Image src={screenshot} alt={alt} fill sizes="240px" className="object-cover" />
        </div>
      ) : (
        <div className="h-full px-[13px] py-4" aria-hidden="true">
          {children}
        </div>
      )}
    </div>
  );
}

const bar = "rounded-[3px]";

/* Placeholder screens — drawn stand-ins until real app screenshots are added. */

export function OttaaScreen() {
  const cells = ["a", "m", "n", "n", "a", "n", "m", "n", "n"] as const;
  const cellTone = {
    a: "bg-accent/18 border-accent/30",
    m: "bg-mint/16 border-mint/28",
    n: "bg-white/7 border-white/12",
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.14em] text-accent">OTTAA</span>
        <span className="rounded-[4px] border border-mint/35 px-1.5 py-0.5 text-[9px] font-semibold text-mint">DPG</span>
      </div>
      <div className="mt-3.5 flex flex-col gap-1.5 rounded-[11px] border border-white/10 bg-white/4 px-3 py-[11px]">
        <div className={cx(bar, "h-[7px] w-4/5 bg-white/42")} />
        <div className={cx(bar, "h-[7px] w-[52%] bg-white/20")} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-[9px]">
        {cells.map((tone, i) => (
          <div key={i} className={cx("aspect-square rounded-[10px] border", cellTone[tone])} />
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-linear-135 from-accent to-mint text-panel">
          <Speaker size={22} strokeWidth={2.2} />
        </div>
      </div>
    </>
  );
}

export function WalletScreen() {
  return (
    <>
      <div className="text-[9.5px] font-bold tracking-[0.14em] text-accent">B4U WALLET</div>
      <div className="mt-3 text-[10px] text-faint">Total balance</div>
      <div className="mt-0.5 font-serif text-[27px] text-fg">$12,480.00</div>
      <svg viewBox="0 0 182 76" fill="none" className="mt-3.5 w-full">
        <path
          d="M2 58 L24 46 L46 52 L68 30 L90 38 L112 18 L134 26 L156 8 L180 14"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M2 58 L24 46 L46 52 L68 30 L90 38 L112 18 L134 26 L156 8 L180 14 L180 76 L2 76 Z" fill="rgba(192,132,252,0.13)" />
      </svg>
      <div className="mt-3.5 flex flex-col gap-2">
        {["bg-accent/22", "bg-mint/22", "bg-white/12"].map((dot) => (
          <div key={dot} className="flex items-center gap-[9px]">
            <div className={cx("h-[22px] w-[22px] rounded-full", dot)} />
            <div className={cx(bar, "h-1.5 grow bg-white/20")} />
          </div>
        ))}
      </div>
    </>
  );
}

export function ScheduleScreen() {
  const rows = [
    ["w-[62%]", "w-[40%]"],
    ["w-[54%]", "w-[33%]"],
    ["w-[70%]", "w-[45%]"],
    ["w-[48%]", "w-[38%]"],
  ];
  return (
    <>
      <div className="text-[9.5px] font-bold tracking-[0.14em] text-mint">GOALSQUARE</div>
      <div className="mt-2 font-serif text-[21px] text-fg">This week</div>
      <div className="mt-3.5 flex flex-col gap-2">
        {rows.map(([a, b], i) => (
          <div
            key={i}
            className={cx(
              "flex flex-col gap-[5px] rounded-[9px] border px-[11px] py-2.5",
              i === 0 ? "border-mint/28 bg-mint/12" : "border-white/9 bg-white/4",
            )}
          >
            <div className={cx(bar, "h-1.5", a, i === 0 ? "bg-mint-pale/75" : "bg-white/38")} />
            <div className={cx(bar, "h-[5px]", b, i === 0 ? "bg-white/20" : "bg-white/16")} />
          </div>
        ))}
      </div>
    </>
  );
}

/** Positions a phone in the cluster and shifts it with the pointer; `depth` scales the shift. */
function Layer({ className, depth, children }: { className: string; depth: number; children: ReactNode }) {
  return (
    <div
      className={cx("absolute", className)}
      style={{
        transform: `translate3d(calc(var(--tilt-x) * ${depth}px), calc(var(--tilt-y) * ${depth}px), 0)`,
        transition: "transform 0.6s var(--ease-out-soft)",
      }}
    >
      {children}
    </div>
  );
}

/** The three-phone hero composition. */
export function DeviceCluster({ className }: { className?: string }) {
  return (
    <Tilt className={cx("relative mx-auto h-[600px] w-full max-w-[640px]", className)}>
      <Layer className="top-[96px] left-[2%] -rotate-7" depth={-14}>
        <Phone className="h-[428px] w-[208px] rounded-[30px] motion-safe:animate-rise motion-safe:[animation-delay:260ms]">
          <ScheduleScreen />
        </Phone>
      </Layer>
      <Layer className="top-[78px] right-[1%] rotate-7" depth={-14}>
        <Phone className="h-[428px] w-[208px] rounded-[30px] motion-safe:animate-rise motion-safe:[animation-delay:380ms]">
          <WalletScreen />
        </Phone>
      </Layer>
      <Layer className="top-[34px] left-1/2 -translate-x-1/2" depth={18}>
        <Phone glow className="h-[500px] w-[240px] rounded-[36px] motion-safe:animate-rise motion-safe:[animation-delay:120ms]">
          <div className="px-0.5 pt-1">
            <OttaaScreen />
          </div>
        </Phone>
      </Layer>
    </Tilt>
  );
}

/** Single phone for narrow screens, where the three-phone cluster won't fit. */
export function HeroPhone({ className }: { className?: string }) {
  return (
    <Phone glow className={cx("mx-auto h-[448px] w-[216px] rounded-[32px] motion-safe:animate-rise motion-safe:[animation-delay:200ms]", className)}>
      <OttaaScreen />
    </Phone>
  );
}
