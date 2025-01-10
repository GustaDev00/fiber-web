import * as S from "./styles";
import useAnimation from "./animation";
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export const MagicSphere = () => {
  const Canvas = useRef<HTMLCanvasElement>(null);
  const { wrapperRef } = useAnimation();

  useEffect(() => {
    if (Canvas.current) {
      const spline = new Application(Canvas.current);
      spline.load("https://prod.spline.design/ejJaRlQiCHqjXKtH/scene.splinecode").then(() => {
        spline.play();
      });
    }
  }, [Canvas]);

  return (
    <S.Magic>
      <S.Wrapper ref={wrapperRef}>
        <S.SplineWrapper>
          <canvas ref={Canvas}></canvas>
        </S.SplineWrapper>
      </S.Wrapper>
    </S.Magic>
  );
};
