import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = process.env.NEXT_PUBLIC_MARKERS_ENABLED === "true";

  useEffect(() => {
    // Configurações dos markers
    const markerSettings =
      isDev && markersEnabled
        ? { startColor: "red", endColor: "red", fontSize: "12px", indent: 20 }
        : false;

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const Title = section.querySelector("h1");
      const Text = section.querySelector("p");
      const Stars = section.querySelector("[data-timeline='stars']");
      const World = section.querySelector("[data-timeline='world']");

      const isMobile = window.innerWidth <= 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? "top 90%" : "top 70%",
          end: isMobile ? "30% center" : "23% top+=200px",
          scrub: 1,
          markers: markerSettings,
          id: "innovation-animation",
        },
      });

      if (Stars) {
        tl.from(Stars, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (Title) {
        const splitTitle = new SplitType(Title, { types: "lines" });
        if (splitTitle.lines) {
          tl.from(splitTitle.lines, {
            y: 100,
            opacity: 0,
            duration: 1,
            rotate: 15,
            stagger: 0.05,
            ease: "power3.out",
          });
        }
      }

      if (Text) {
        const splitText = new SplitType(Text, { types: "lines" });
        if (splitText.lines) {
          tl.from(splitText.lines, {
            y: 100,
            opacity: 0,
            duration: 1,
            rotate: 15,
            stagger: 0.05,
            ease: "power3.out",
          });
        }
      }

      if (World) {
        tl.from(World, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        });
      }
    });

    return () => {
      ctx.kill();
    };
  }, [isDev, markersEnabled]);

  return { sectionRef };
};
