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
      ? { startColor: "blue", endColor: "blue", fontSize: "12px", indent: 20 }
      : false;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const Title = section.querySelector("h2");
      const Description = section.querySelector("p");
      const Link = section.querySelector("a");
      const Circles = section.querySelectorAll(".circle");

      const isMobile = window.innerWidth <= 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? "top 85%" : "top 70%",
          end: isMobile ? "30% center" : "25% top",
          scrub: 1,
          markers: markerSettings,
          id: "transform-animation",
        },
      });

      // Animação do título com SplitType
      if (Title) {
        const splitTitle = new SplitType(Title, { types: "chars" });
        if (splitTitle.chars) {
          tl.from(splitTitle.chars, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
          });
        }
      }

      // Animação da descrição
      if (Description) {
        tl.from(Description, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Animação do link
      if (Link) {
        tl.from(Link, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }

      // Animação dos círculos
      if (Circles.length > 0) {
        tl.from(Circles, {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.3)",
        });
      }
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
