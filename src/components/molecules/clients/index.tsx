import * as S from "./styles";

export const Clients = ({ type, ...props }: { type?: boolean }) => {
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
