import gsap from "gsap";
import { useRef } from "react";

export default () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  return { backgroundRef };
};
