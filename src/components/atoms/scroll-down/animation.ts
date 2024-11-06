import gsap from "gsap";
import { useEffect, useRef } from "react";

export default () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    const rotationAnimation = gsap.to(circleRef.current, {
      rotation: 360,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      rotationAnimation.timeScale(10);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        rotationAnimation.timeScale(1);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return { circleRef };
};
