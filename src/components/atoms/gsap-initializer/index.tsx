import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export const GSAPInitializer = (): null => {
  useEffect(() => {
    gsap.registerPlugin(
      ScrollTrigger,
      Observer,
      ScrollToPlugin,
      Draggable,
      TextPlugin,
      MotionPathPlugin,
    );

    ScrollTrigger.defaults({
      scroller: "main",
    });
  }, []);

  return null;
};
