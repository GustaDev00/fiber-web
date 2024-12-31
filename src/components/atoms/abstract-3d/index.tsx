import * as S from "./styles";

export const Abstract = ({ ...props }) => {
  return (
    <S.Abstract {...props}>
      <S.Wrapper>
        <S.SplineWrapper>
          <S.Spline scene="https://prod.spline.design/yn3dRBxZaX2TEVje/scene.splinecode" />
        </S.SplineWrapper>
      </S.Wrapper>
    </S.Abstract>
  );
};
