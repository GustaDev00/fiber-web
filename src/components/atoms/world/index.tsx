import { useEffect, useRef } from "react";
import * as S from "./styles";
import { Application } from "@splinetool/runtime";

export const World = ({ ...props }) => {
  const Canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (Canvas.current) {
      const spline = new Application(Canvas.current);
      spline.load("https://prod.spline.design/nDb6OwlS1RuRhCXW/scene.splinecode").then(() => {
        spline.play();
      });
    }
  }, [Canvas]);

  return (
    <S.World {...props}>
      <S.Wrapper>
        <S.SplineWrapper>
          <canvas ref={Canvas}></canvas>
        </S.SplineWrapper>
      </S.Wrapper>
    </S.World>
  );
};
