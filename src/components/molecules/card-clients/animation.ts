import gsap from "gsap";
import { useEffect, useRef } from "react";

export default () => {
  const servicesRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Verifica o ambiente
  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = process.env.NEXT_PUBLIC_MARKERS_ENABLED === "true";

  useEffect(() => {
    const markerSettings =
      isDev && markersEnabled
        ? { startColor: "orange", endColor: "orange", fontSize: "12px", indent: 20 }
        : false; // Em produção, desativa os markers

    const ctx = gsap.context(() => {
      if (!servicesRef.current) return;

      servicesRef.current.forEach((service, index) => {
        if (service) {
          gsap.fromTo(
            service,
            { clipPath: "inset(100% 0 0 0)" },
            {
              clipPath: "inset(0% 0 0 0)",
              duration: 6,
              delay: index * 1,
              scrollTrigger: {
                trigger: service,
                start: index === 1 ? "center bottom" : "top bottom",
                end: index === 1 ? "top center-=200" : "top center+=200",
                scrub: 1,
                markers: markerSettings,
                id: "card-clients-animation",
              },
            },
          );
        }
      });
    });

    return () => {
      ctx.kill();
    };
  }, [isDev, markersEnabled]);

  return {
    servicesRef,
  };
};
