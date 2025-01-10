"use client";

import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import * as S from "./styles";
import C from "@/constants";

interface CursorProps {
  children: ReactNode;
}

export const Cursor: FC<CursorProps> = ({ children }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerDotRef = useRef<HTMLDivElement>(null);
  const [linkType, setLinkType] = useState<string | null>(null);
  const { items } = C.services;

  const handleMouseEnter = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target) {
      setLinkType(target.getAttribute("data-fs-link"));
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setLinkType(null);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let posX = 0,
        posY = 0;

      let mouseX = 0,
        mouseY = 0;

      gsap.to(cursorRef.current, {
        duration: 0.018,
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 400;
          posY += (mouseY - posY) / 400;

          gsap.set(cursorRef.current, {
            css: {
              left: posX - 1,
              top: posY - 2,
            },
          });
        },
      });

      gsap.to(innerDotRef.current, {
        duration: 0.01,
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 2;
          posY += (mouseY - posY) / 2;

          gsap.set(innerDotRef.current, {
            css: {
              left: posX - 1,
              top: posY - 2,
            },
          });
        },
      });

      // interactiveElements.forEach((element: Element) => {
      //   element.addEventListener("mouseenter", handleMouseEnter as EventListener);
      //   element.addEventListener("mouseleave", handleMouseLeave);
      // });

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    });

    const interactiveElements = document.querySelectorAll<HTMLElement>("a, button");
    console.log(interactiveElements, "teste");

    return () => {
      ctx.kill();
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <>
      {children}
      <S.Dot ref={innerDotRef} $type={linkType} />
      <S.Cursor ref={cursorRef} $type={linkType} $images={items.map(({ img }) => img.alt)}>
        {items.map(({ img }) => (
          <S.Image data-fs-image={img.alt} key={img.alt} $src={img.src} />
        ))}

        <S.Site>
          Webseite
          <br />
          ansehen
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
        </S.Site>

        <S.Services>
          Dienst
          <br />
          ansehen
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
          Projekt
          <br />
          ansehen
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
