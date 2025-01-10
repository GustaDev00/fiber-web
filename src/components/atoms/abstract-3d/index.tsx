import { useEffect, useRef } from "react";
import * as S from "./styles";
import { Application } from "@splinetool/runtime";

export const Abstract = ({ ...props }) => {
  const Canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (Canvas.current) {
      const spline = new Application(Canvas.current);
      spline.load("https://prod.spline.design/yn3dRBxZaX2TEVje/scene.splinecode").then(() => {
        spline.play();
      });
    }
  }, [Canvas]);

  return (
    <S.Abstract {...props}>
      <S.Wrapper>
        <S.SplineWrapper>
          <canvas ref={Canvas}></canvas>
        </S.SplineWrapper>
      </S.Wrapper>
    </S.Abstract>
  );
};
