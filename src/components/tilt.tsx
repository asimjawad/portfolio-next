"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cx } from "./ui";

/**
 * Tilts its children toward the pointer. Writes --tilt-x / --tilt-y (each -1…1)
 * so children can add their own depth. Inert on touch devices and for reduced motion.
 */
export function Tilt({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || calm) return;

    let frame = 0;
    const set = (x: number, y: number) => {
      el.style.setProperty("--tilt-x", x.toFixed(3));
      el.style.setProperty("--tilt-y", y.toFixed(3));
    };

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)) || 0;
        const y = ((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)) || 0;
        set(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y)));
      });
    };
    const onLeave = () => set(0, 0);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cx("[--tilt-x:0] [--tilt-y:0]", className)}
      style={{
        transform:
          "perspective(1400px) rotateX(calc(var(--tilt-y) * -6deg)) rotateY(calc(var(--tilt-x) * 8deg))",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s var(--ease-out-soft)",
      }}
    >
      {children}
    </div>
  );
}
