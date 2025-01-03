import { useRef } from "react";
import { useRouterLoadingHandler } from "@/hooks/use-router-progress-handler";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useRouterLoadingHandler();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(ref.current, {
        y: 0,
        opacity: 1,
        duration: 1,
      });

      if (progress) {
        gsap.delayedCall(2, () => tl.play());
      }
    });

    return () => ctx.revert();
  }, [progress]);

  return { ref };
};
