import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { CircleGreenBlurProps } from "./props";
import * as S from "./styles";

export const CircleGreenBlur: FC<CircleGreenBlurProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      gsap.to(ref.current, {
        x: clientX * 0.05,
        y: clientY * 0.05,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <S.CircleGreenBlur ref={ref} className={className} />;
};
