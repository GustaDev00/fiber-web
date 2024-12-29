import * as S from "./styles";
import useAnimation from "./animation";

export const Clients = ({ type, ...props }: { type?: boolean }) => {
  useAnimation();
  return (
    <S.Services {...props}>
      <S.CarouselText />
      <S.CardClients />
      {type && <S.Video />}
      <S.Circle />
      <S.Circle2 />
    </S.Services>
  );
};
