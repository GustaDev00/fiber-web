import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Verifica o ambiente
  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = process.env.NEXT_PUBLIC_MARKERS_ENABLED === "true";

  // Configurações dos markers
  const markerSettings =
    isDev && markersEnabled
      ? { startColor: "gray", endColor: "gray", fontSize: "14px", indent: 20 }
      : false; // Em produção, desativa os markers

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const Title = section.querySelector("h2");
      const AbstractItem = section.querySelector("[data-timeline='abstract']");
      const Button = section.querySelector("[data-timeline='link']");
      const Items = section.querySelectorAll("[data-timeline='item']");

      const isMobile = window.innerWidth <= 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? "top 90%" : "top 70%",
          end: isMobile ? "center-=200px top" : "40% center",
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

      if (AbstractItem) {
        tl.from(
          AbstractItem,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }

      if (Button) {
        tl.from(
          Button,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }

      Items.forEach((item) => {
        tl.from(
          item,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
