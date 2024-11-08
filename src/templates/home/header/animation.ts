import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const Title = ref.current.querySelector("h1");
    const Img = ref.current.querySelector("article img");
    const Scroll = ref.current.querySelector(
      `[data-fs-animation-scroll="true"]`,
    );
    const Text = ref.current.querySelector("p");
    const Link = ref.current.querySelector("a");

    if (Title) {
      const splitTitle = new SplitType(Title, { types: "lines" });
      gsap.from(splitTitle.lines, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        rotate: 10,
      });
    }

    console.log(Title, Img, Scroll, Text, Link);
    const tl = gsap.timeline();

    tl.from(Title, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      rotate: 10,
    })
      .from(
        Img,
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.5",
      )
      .from(
        Scroll,
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.9",
      )
      .from(
        Text,
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.9",
      )
      .from(
        Link,
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.9",
      );
  }, []);

  return { ref };
};
