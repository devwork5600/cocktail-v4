"use client";

import { useLayoutEffect } from "react";
import { animate, type MotionValue, type ValueAnimationTransition } from "framer-motion";

type AnimateOnceTarget = {
  value: MotionValue<number>;
  to: number;
  transition?: ValueAnimationTransition<number>;
};

/**
 * Drives one or more motion values to their target: instantly if this
 * session already played the entrance animation (or the element isn't in
 * view yet), otherwise via a tween. Shared by every "animate in once, on
 * first view" entrance in this app (Counter, SlidePanel, ...).
 */
export function useAnimateOnce(
  targets: AnimateOnceTarget[],
  shouldAnimate: boolean,
  isInView: boolean = true,
) {
  useLayoutEffect(() => {
    if (!shouldAnimate) {
      targets.forEach(({ value, to }) => value.set(to));
      return;
    }
    if (!isInView) return;
    const controls = targets.map(({ value, to, transition }) => animate(value, to, transition));
    return () => controls.forEach((c) => c.stop());
    // targets is a fresh array each render by design (its values/options
    // are static per call site) — only shouldAnimate/isInView should retrigger this.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAnimate, isInView]);
}
