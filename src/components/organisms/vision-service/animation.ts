import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Verifica o ambiente
  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = process.env.NEXT_PUBLIC_MARKERS_ENABLED === "true";

  useEffect(() => {
    // Configurações dos markers
    const markerSettings =
      isDev && markersEnabled
        ? { startColor: "gray", endColor: "gray", fontSize: "14px", indent: 20 }
        : false; // Em produção, desativa os markers

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const Title = section.querySelector("h2");
      const Items = section.querySelectorAll("[data-timline='item']");

      const isMobile = window.innerWidth <= 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? "top 90%" : "top 70%",
          end: isMobile ? "top top" : "23% top",
          scrub: 1,
          markers: markerSettings,
          id: "vision-service-animation",
        },
      });

      if (Title) {
        const splitTitle = new SplitType(Title, { types: "chars" });
        if (splitTitle.chars) {
          tl.from(splitTitle.chars, {
            y: 100,
            opacity: 0,
            duration: 1,
            rotate: 15,
            stagger: 0.05,
            ease: "power3.out",
          });
        }
      }

      if (Items.length > 0) {
        tl.from(
          Items,
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }
    });

    return () => {
      ctx.kill();
    };
  }, [isDev, markersEnabled]);

  return { sectionRef };
};
