"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.start();
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
