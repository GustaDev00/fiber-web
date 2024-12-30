import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top center+=280px",
      end: "bottom top+=60px",
      onEnter: () => setIsInView(true),
      onLeave: () => setIsInView(false),
      onEnterBack: () => setIsInView(true),
      onLeaveBack: () => setIsInView(false),
      markers: true,
    });
  }, []);

  return {
    ref,
    isInView,
  };
};
