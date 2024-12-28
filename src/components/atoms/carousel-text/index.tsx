import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const CarouselText = () => {
  const { wrapperRef } = useAnimation();

  return (
    <S.CarouselText>
      <S.Wrapper ref={wrapperRef}>
        <S.Text>{C.text}</S.Text>
        <S.Text>{C.text}</S.Text>
      </S.Wrapper>
    </S.CarouselText>
  );
};
