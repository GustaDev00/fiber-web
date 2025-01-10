import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const Together = () => {
  const { sectionRef } = useAnimation();
  const { title, logos, mensages } = C.together;

  return (
    <S.Together ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <S.Title data-timeline="title">{title}</S.Title>
        </S.Content>
      </S.Wrapper>
      <S.Container>
        <S.SliderCard content={mensages} />
        <S.SliderLogo data-timeline="slilder-logo">
          <S.BgList data-timeline="bgList">
            {logos.map((bg, index) => (
              <S.Logo notLazy={true} key={index} {...bg} data-timeline={`logo`} />
            ))}
          </S.BgList>
          <S.BgList data-timeline="bgList">
            {logos.map((bg, index) => (
              <S.Logo key={index} {...bg} data-timeline={`logo`} />
            ))}
          </S.BgList>
        </S.SliderLogo>
      </S.Container>
    </S.Together>
  );
};
