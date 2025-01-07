import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Verifica o ambiente
  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = true;

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
      const Description = section.querySelector("[data-timeline='description']");
      const Img = section.querySelector("[data-timeline='img']");
      const Link = section.querySelector("[data-timeline='link']") as HTMLElement;
      const Items = section.querySelectorAll("[data-timeline='item']");

      const isMobile = window.innerWidth <= 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? "top 90%" : "top 70%",
          end: isMobile ? "center-=200px top+=100px" : "23% center",
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

      if (Description) {
        tl.from(
          Description,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }

      if (Img) {
        tl.from(
          Img,
          {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }

      if (Link) {
        tl.fromTo(
          Link,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
      }

      if (Items.length) {
        tl.from(
          Items,
          {
            y: 50,
            opacity: 0,
            duration: 1,
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
  }, []);

  return { sectionRef };
};
