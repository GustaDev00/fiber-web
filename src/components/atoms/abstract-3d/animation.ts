import gsap from "gsap";
import { useEffect, useRef } from "react";

export default () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || !imgRef.current) return;

      const { clientX, clientY } = event;
      const { width, height, left, top } =
        containerRef.current.getBoundingClientRect();

      const offsetX = ((clientX - left) / width - 0.5) * 5;
      const offsetY = ((clientY - top) / height - 0.5) * 5;

      gsap.to(imgRef.current, {
        x: offsetX,
        y: offsetY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return {
    containerRef,
    imgRef,
  };
};
