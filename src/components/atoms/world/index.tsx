import * as S from "./styles";

export const World = ({ ...props }) => {
  return (
    <S.World {...props}>
      <S.Wrapper>
        <S.SplineWrapper>
          <S.Spline scene="https://prod.spline.design/nDb6OwlS1RuRhCXW/scene.splinecode" />
        </S.SplineWrapper>
      </S.Wrapper>
    </S.World>
  );
};
