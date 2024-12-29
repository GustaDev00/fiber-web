import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useAnimation = (isLoaded: boolean) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded && wrapperRef.current) {
      const animation = gsap.fromTo(
        wrapperRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
            end: "top 30%",
            scrub: 2,
            markers: false,
          },
        },
      );

      return () => {
        animation.kill();
      };
    }
  }, [isLoaded]);

  return { wrapperRef };
};

export default useAnimation;
