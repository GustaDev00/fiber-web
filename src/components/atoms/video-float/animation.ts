import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const videoElement = sectionRef.current;
      if (!videoElement) return;

      const video = videoElement.querySelector("video") as HTMLVideoElement;

      gsap.to(videoElement, {
        scrollTrigger: {
          trigger: video,
          start: "top center+=257",
          end: "bottom top",
          scrub: 1,
          onEnter: () => {
            gsap.set(videoElement, { position: "fixed" });
            if (video) video.play();
          },
          onLeaveBack: () => {
            gsap.set(videoElement, { position: "absolute" });
            if (video) video.pause();
          },
        },
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
