import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import * as S from "./styles";
import C from "@/constants";

interface CursorProps {
  children: ReactNode;
}

export const Cursor: FC<CursorProps> = ({ children }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerDotRef = useRef<HTMLDivElement>(null);
  const [, setIsLink] = useState(false);
  const [linkType, setLinkType] = useState<string | null>(null);
  const { items } = C.services;

  const lastX = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll<HTMLElement>("a, button");

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        console.log("caiu aqui dentro", target.getAttribute("data-fs-link"));
        setIsLink(true);
        setLinkType(target.getAttribute("data-fs-link"));
      }
    };

    const handleMouseLeave = () => {
      setIsLink(false);
      setLinkType(null);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        const { clientX, clientY } = event;
        gsap.to(cursorRef.current, {
          opacity: 1,
          duration: 0,
          left: clientX,
          top: clientY,
        });

        const deltaX = clientX - lastX.current;
        const deltaY = clientY - lastY.current;

        const translateX = Math.max(-20, Math.min(20, deltaX / 1));
        const translateY = Math.max(-20, Math.min(20, deltaY / 1));

        gsap.to(innerDotRef.current, {
          x: translateX,
          y: translateY,
          duration: 0.1,
          ease: "power2.out",
        });

        lastX.current = clientX;
        lastY.current = clientY;

        gsap.to(innerDotRef.current, {
          x: 0,
          y: 0,
          delay: 0.3,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    const handleMouseLeaveWindow = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.1 });
      }
    };

    const handleMouseEnterWindow = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 1 });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    interactiveElements.forEach((element: Element) => {
      element.addEventListener("mouseenter", handleMouseEnter as EventListener);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);

      interactiveElements.forEach((element: Element) => {
        element.removeEventListener("mouseenter", handleMouseEnter as EventListener);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      // Cleanup gsap animations
      gsap.killTweensOf(cursorRef.current);
      gsap.killTweensOf(innerDotRef.current);
    };
  }, []);

  return (
    <>
      {children}
      <S.Cursor ref={cursorRef} $type={linkType} $images={items.map(({ img }) => img.alt)}>
        <S.Dot ref={innerDotRef} />

        {items.map(({ img }) => (
          <S.Image data-fs-image={img.alt} key={img.alt} $src={img.src} />
        ))}

        <S.Services>
          Ver
          <br />
          Serviço
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Services>

        <S.Project>
          Ver
          <br />
          Projeto
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Project>
      </S.Cursor>
    </>
  );
};
