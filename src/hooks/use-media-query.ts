"use client";

import { useEffect, useState } from "react";

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query: string,
  { defaultValue = false }: { defaultValue?: boolean } = {}
): boolean {
  const [matches, setMatches] = useState(defaultValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (IS_SERVER) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    updateMatches();
    mediaQuery.addEventListener("change", updateMatches);

    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  // Return defaultValue during SSR to avoid hydration mismatch
  if (!mounted) {
    return defaultValue;
  }

  return matches;
}
