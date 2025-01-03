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
      ? { startColor: "green", endColor: "green", fontSize: "12px", indent: 20 }
      : false; // Em produção, desativa os markers

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const Title = section.querySelector("h2");
      const SliderLogo = section.querySelector("[data-timeline='slilder-logo']");
      const Logos = section.querySelectorAll("[data-timeline='bgList']");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 10%",
          scrub: 1,
          markers: markerSettings,
          id: "together-animation",
          onUpdate: (self) => {
            if (isDev) {
              console.log("Trigger updated:", self);
            }
          },
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

      if (Logos.length > 0 && SliderLogo) {
        tl.from(
          SliderLogo,
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=1",
        );

        Logos.forEach((logo) => {
          const LogoWidth = logo.scrollWidth;

          gsap.to(logo, {
            x: -LogoWidth,
            repeat: -1,
            duration: 10,
            ease: "linear",
          });
        });
      }
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
