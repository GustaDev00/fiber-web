"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};
