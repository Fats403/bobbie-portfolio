"use client";

import { useEffect } from "react";

export function ScrollRestoration() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return null;
} 