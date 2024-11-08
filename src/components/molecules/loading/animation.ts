import gsap from "gsap";
import { useRouterLoadingHandler } from "@/hooks/use-router-progress-handler";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progress = useRouterLoadingHandler();
  // const progress = 0;

  useGSAP(() => {
    if (!wrapperRef.current || !containerRef.current) return;

    const stepsTimeline = gsap.timeline({ paused: true });
    const containerTimeline = gsap.timeline({ paused: true });

    const steps = wrapperRef.current!.querySelectorAll("div");
    steps.forEach((step) => {
      const stepText = step.querySelector("p");
      const stepImg = step.querySelector("img");

      stepsTimeline
        .to(stepText, { scale: 1.2, duration: 0.5, ease: "power2.out" })
        .to(stepText, { opacity: 0, ease: "power2.out" }, "+=0.3")
        .to(stepImg, { top: "-100%", duration: 0.7, ease: "power2.in" }, "-=1");
    });

    const img = containerRef.current!.querySelector("img");
    const bg = containerRef.current!.querySelector("[data-fs-bg]");

    if (img && bg) {
      containerTimeline
        .to(img, { scale: 1.2, duration: 0.5, ease: "power2.out" })
        .to(img, { opacity: 0, ease: "power2.out" }, "+=0.3")
        .to(bg, { top: "-100%", duration: 0.7, ease: "power2.in" }, "-=1")
        .to(containerRef.current, { opacity: 0, visibility: "hidden" });
    }

    if (progress === 1) {
      stepsTimeline.kill();
      containerTimeline.play();

      console.log(containerTimeline.totalDuration());
    } else {
      stepsTimeline.play();
    }
  }, [progress]);

  return { progress, wrapperRef, containerRef };
};
