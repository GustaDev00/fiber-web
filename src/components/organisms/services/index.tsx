import * as S from "./styles";
import useAnimation from "./animation";

export const Services = ({ type, ...props }: { type?: boolean }) => {
  useAnimation();
  return (
    <S.Services {...props}>
      <S.CarouselText />
      <S.CardServices />
      {type && <S.Video />}
    </S.Services>
  );
};
