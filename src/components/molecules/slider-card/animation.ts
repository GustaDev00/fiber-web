import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  // Verifica o ambiente
  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = process.env.NEXT_PUBLIC_MARKERS_ENABLED === "true";

  // Configurações dos markers
  const markerSettings =
    isDev && markersEnabled
      ? { startColor: "purple", endColor: "purple", fontSize: "12px", indent: 20 }
      : false; // Em produção, desativa os markers

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
      markers: markerSettings,
      id: "slider-card-animation",
      onUpdate: (self) => {
        if (isDev) {
          console.log("Trigger updated:", self);
        }
      },
    });
  }, []);

  return {
    ref,
    isInView,
  };
};
