import C from "@/constants";
import * as S from "./styles";

export default () => {
  return (
    <S.Gallery>
      <S.Brush {...C.gallery.icon} />
      <S.Wrapper>
        <S.Title>{C.gallery.title}</S.Title>
        <S.Subtitle>{C.gallery.subtitle}</S.Subtitle>
        <S.Slide items={C.hero.slider} />
      </S.Wrapper>
    </S.Gallery>
  );
};
