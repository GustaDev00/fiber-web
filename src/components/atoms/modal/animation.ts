import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default ({ open }: { open: boolean }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
