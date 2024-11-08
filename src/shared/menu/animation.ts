import { useRef } from "react";
import { useRouterLoadingHandler } from "@/hooks/use-router-progress-handler";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useRouterLoadingHandler();

  useGSAP(() => {
    if (!ref.current) return;

    const tl = gsap.timeline({ paused: true });
    tl.from(ref.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });

    if (progress) {
      gsap.delayedCall(2, () => tl.play());
    }
  }, [progress]);

  return { ref };
};
