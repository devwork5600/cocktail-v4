"use client";

import { useState } from "react";

/**
 * Tracks whether an "enter" animation identified by `key` has already
 * played once during this browser session (sessionStorage-backed).
 * Returns true only the first time it's mounted per tab session, so
 * repeat mounts (client-side navigation, reload) skip straight to the
 * final state instead of replaying the animation.
 */
export function useEnterOnce(key: string) {
  const [shouldAnimate] = useState(() => {
    if (typeof window === "undefined") return true;
    const storageKey = `enter-once:${key}`;
    if (sessionStorage.getItem(storageKey)) return false;
    sessionStorage.setItem(storageKey, "1");
    return true;
  });

  return shouldAnimate;
}
