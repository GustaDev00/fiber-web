import React, { useEffect, useRef } from "react";
import * as S from "./styles";

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export const BackgroundMove = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = 0;
    let smoothX = 0;

    const numLines = 5;
    const lineSpacing = canvas.width / (numLines + 1);
    const waveHeight = 80;
    const smoothingFactor = 0.15;

    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.00)");
    gradient.addColorStop(0.515, "rgba(255, 255, 255, 0.20)");
    gradient.addColorStop(1, "rgba(153, 153, 153, 0.00)");

    const drawLines = () => {
      smoothX = lerp(smoothX, mouseX, smoothingFactor);

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = gradient;
      context.lineWidth = 2;

      for (let i = 0; i < numLines; i++) {
        const x = lineSpacing * (i + 1);
        const dist = Math.abs(smoothX - x);
        // const direction = smoothX > lastSmoothX ? 1 : -1;

        const offset = Math.max(0, waveHeight - dist / 5);

        context.beginPath();
        context.moveTo(x, 0);
        context.quadraticCurveTo(x + offset, canvas.height / 2, x, canvas.height);
        context.stroke();
      }

      requestAnimationFrame(drawLines);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);
    drawLines();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <S.CanvasBackground ref={canvasRef} />;
};
