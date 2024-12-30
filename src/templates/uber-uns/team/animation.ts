import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return { sectionRef };
};
