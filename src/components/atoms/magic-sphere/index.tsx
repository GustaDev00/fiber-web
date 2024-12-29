import * as S from "./styles";
import useAnimation from "./animation";
import { useState } from "react";

export const MagicSphere = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { wrapperRef } = useAnimation(isLoaded);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <S.Main>
      <S.Wrapper ref={wrapperRef}>
        <S.SplineWrapper>
          <S.Suspense>
            <S.Spline
              scene="https://prod.spline.design/ejJaRlQiCHqjXKtH/scene.splinecode"
              onLoad={handleLoad}
            />
          </S.Suspense>
        </S.SplineWrapper>
      </S.Wrapper>
    </S.Main>
  );
};
