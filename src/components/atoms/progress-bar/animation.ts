import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export default ({ duration, isActive }: { duration: number; isActive: boolean }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  const resetAnimation = useCallback(() => {
    gsap.to(progressRef.current, {
      width: "100%",
      duration,
      ease: "linear",
      onComplete: resetAnimation,
    });
  }, [duration]);

  useEffect(() => {
    if (!isActive) {
      gsap.killTweensOf(progressRef.current);
      gsap.set(progressRef.current, { width: "0%" });
      return;
    }

    resetAnimation();

    return () => {
      gsap.killTweensOf(progressRef.current);
    };
  }, [isActive, duration, resetAnimation]);

  return { progressRef };
};
