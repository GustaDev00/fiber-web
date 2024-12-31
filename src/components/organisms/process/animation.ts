import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = process.env.NEXT_PUBLIC_MARKERS_ENABLED === "true";

  // Configurações dos markers
  const markerSettings =
    isDev && markersEnabled
      ? { startColor: "yelllow", endColor: "yelllow", fontSize: "12px", indent: 20 }
      : false; // Em produção, desativa os markers

  useEffect(() => {
    const element = sectionRef.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top center+=280px",
      end: "bottom top+=60px",
      onEnter: () => setIsInView(true),
      onLeave: () => setIsInView(false),
      onEnterBack: () => setIsInView(true),
      onLeaveBack: () => setIsInView(false),
      markers: markerSettings,
      id: "Process",
      onUpdate: (self) => {
        if (isDev) {
          console.log("Trigger updated:", self);
        }
      },
    });
  }, []);

  return { sectionRef, isInView };
};
