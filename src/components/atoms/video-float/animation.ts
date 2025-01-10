import gsap from "gsap";
import { useEffect, useRef } from "react";

interface AnimationProps {
  setIsClosed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default ({ setIsClosed }: AnimationProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const videoElement = sectionRef.current;
      if (!videoElement) return;

      const video = videoElement.querySelector("video") as HTMLVideoElement;

      gsap.to(videoElement, {
        scrollTrigger: {
          trigger: video,
          start: "top bottom",
          end: "bottom top",
          markers: false,
          scrub: 1,
          onEnter: () => {
            gsap.set(videoElement, { position: "fixed" });
            setIsClosed(false);
            if (video) video.play();
          },
        },
      });
    });

    return () => {
      ctx.kill();
    };
  }, [setIsClosed]);

  return { sectionRef };
};
