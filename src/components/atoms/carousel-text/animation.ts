import gsap from "gsap";
import { useEffect, useRef } from "react";

const useAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (wrapperRef.current) {
        const texts = Array.from(wrapperRef.current.children) as HTMLElement[];

        if (texts.length === 2) {
          const [text1, text2] = texts;

          const totalWidth = text1.offsetWidth;
          const duration = 10;

          gsap.set(text2, { x: totalWidth });

          gsap.to([text1, text2], {
            x: `-=${totalWidth}`,
            duration,
            repeat: -1,
            ease: "linear",
            modifiers: {
              x: gsap.utils.unitize(
                (x) => ((parseFloat(x) + totalWidth) % totalWidth) - totalWidth,
              ),
            },
          });
        }
      }

      return () => {
        ctx.kill();
      };
    });
  }, []);

  return { wrapperRef };
};

export default useAnimation;
