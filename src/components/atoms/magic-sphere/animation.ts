import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Verifica o ambiente
  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = process.env.NEXT_PUBLIC_MARKERS_ENABLED === "true";

  useEffect(() => {
    const markerSettings =
      isDev && markersEnabled
        ? { startColor: "yellow", endColor: "yellow", fontSize: "12px", indent: 20 }
        : false; // Em produção, desativa os markers

    if (wrapperRef.current) {
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
            markers: markerSettings,
            id: "magic-sphere",
          },
        },
      );

      return () => {
        animation.kill();
      };
    }
  }, [isDev, markersEnabled]);

  return { wrapperRef };
};

export default useAnimation;
