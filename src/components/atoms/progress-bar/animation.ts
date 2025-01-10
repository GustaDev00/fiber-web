import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export default ({ duration, isActive }: { duration: number; isActive: boolean }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  const resetAnimation = useCallback(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: "100%",
        duration,
        ease: "linear",
        onComplete: resetAnimation,
      });
    }
  }, [duration]);

  useEffect(() => {
    const progressNode = progressRef.current;
    if (!isActive) {
      if (progressNode) {
        gsap.killTweensOf(progressNode);
        gsap.set(progressNode, { width: "0%" });
      }
      return;
    }

    resetAnimation();

    return () => {
      if (progressNode) {
        gsap.killTweensOf(progressNode);
      }
    };
  }, [isActive, duration, resetAnimation]);

  return { progressRef };
};
