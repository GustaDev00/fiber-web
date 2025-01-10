import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useRouterLoadingHandler } from "@/hooks/use-router-progress-handler";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useRouterLoadingHandler();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return;

      const tl = gsap.timeline({ paused: true });
      const Title = ref.current.querySelector("h1");
      const Img = ref.current.querySelector("[data-fs-object='true']");
      const Scroll = ref.current.querySelector(`[data-fs-animation-scroll="true"]`);
      const Text = ref.current.querySelector("p");
      const Link = ref.current.querySelector("a");

      if (Title) {
        const splitTitle = new SplitType(Title, { types: "lines" });
        if (splitTitle.lines) {
          tl.from(splitTitle.lines, {
            y: 100,
            opacity: 0,
            duration: 1,
            rotate: 15,
          });
        }
      }

      tl.from(Img, { x: 50, opacity: 0, duration: 1 }, "-=0.5")
        .from(Scroll, { y: 100, opacity: 0, duration: 1 }, "-=0.9")
        .from(Text, { y: 100, opacity: 0, duration: 1 }, "-=0.9")
        .from(Link, { y: 100, opacity: 0, duration: 1 }, "-=0.9");

      if (progress) {
        gsap.delayedCall(1.3, () => tl.play());
      }
    });

    return () => ctx.revert();
  }, [progress]);

  return { ref };
};
