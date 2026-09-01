"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.start();
    // Keep GSAP ScrollTrigger (pin/scrub) in sync with Lenis's virtual scroll position.
    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  useEffect(() => {
    function raf(time: number) {
      lenis?.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(raf);
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.2,
        duration: 0.9,
        // html has a fixed h-full height, so its box never resizes when
        // page content grows — ResizeObserver on it never fires, leaving
        // Lenis's scroll limit stale. body grows with content, so use it.
        content: typeof document !== "undefined" ? document.body : undefined,
      }}
    >
      {children}
    </ReactLenis>
  );
}
