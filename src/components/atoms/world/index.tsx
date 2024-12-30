import { useRef } from "react";
import * as S from "./styles";

export const World = () => {
  const splineRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const canvas = splineRef.current;
    if (canvas) {
      console.log("Mouse position:", event.clientX, event.clientY);
    }
  };

  return (
    <S.World onMouseMove={handleMouseMove}>
      <S.Wrapper>
        <S.SplineWrapper>
          <S.Spline
            ref={splineRef}
            scene="https://prod.spline.design/nDb6OwlS1RuRhCXW/scene.splinecode"
          />
        </S.SplineWrapper>
      </S.Wrapper>
    </S.World>
  );
};
