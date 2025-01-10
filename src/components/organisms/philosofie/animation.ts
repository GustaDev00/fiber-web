import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Verifica o ambiente
  const isDev = process.env.NODE_ENV === "development";
  const markersEnabled = process.env.NEXT_PUBLIC_MARKERS_ENABLED === "true";

  useEffect(() => {
    // Configurações dos markers
    const markerSettings =
      isDev && markersEnabled
        ? { startColor: "blue", endColor: "blue", fontSize: "12px", indent: 20 }
        : false; // Em produção, desativa os markers

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const Title = section.querySelector("h2");
      const Content = section.querySelectorAll("article p");
      const Button = section.querySelector("a");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: markerSettings,
          id: "philosofie-animation",
        },
      });

      // Animação do título
      if (Title) {
        const splitTitle = new SplitType(Title, { types: "chars" }); // Divide por letras
        if (splitTitle.chars) {
          tl.from(splitTitle.chars, {
            y: 100,
            opacity: 0,
            duration: 1,
            rotate: 15,
            stagger: 0.05, // Cria um efeito sequencial entre as letras
            ease: "power3.out", // Suaviza a entrada das letras
          });
        }
      }

      // Animação dos textos (parágrafos)
      if (Content.length > 0) {
        Content.forEach((paragraph) => {
          const splitContent = new SplitType(paragraph as HTMLElement, { types: "lines" }); // Divide o parágrafo em linhas
          if (splitContent.lines) {
            tl.from(
              splitContent.lines,
              {
                y: 100,
                opacity: 0,
                duration: 1,
                rotate: -15,
                stagger: 0.1, // Efeito de cascata entre as linhas
                ease: "power3.out", // Entrada suave das linhas
              },
              "-=0.5",
            );
          }
        });
      }

      // Animação do botão
      if (Button) {
        tl.from(Button, {
          y: 100,
          opacity: 0,
          duration: 1,
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isDev, markersEnabled]);

  return { sectionRef };
};

export default useAnimation;
