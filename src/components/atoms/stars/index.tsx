import { useRef } from "react";
import * as S from "./styles";

export const Stars = ({ ...props }) => {
  return (
    <S.Star {...props}>
      <S.Wrapper>
        <S.SplineWrapper>
          <S.Spline scene="https://prod.spline.design/7hMPFV6nPyGFRWSD/scene.splinecode" />
        </S.SplineWrapper>
      </S.Wrapper>
    </S.Star>
  );
};
