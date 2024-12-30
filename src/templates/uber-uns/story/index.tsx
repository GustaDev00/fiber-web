import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export default () => {
  const { sectionRef } = useAnimation();
  const { title, content, video1, video2, whatsapp } = { ...C.story, ...C.data.buttons };

  return (
    <S.Section ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Video1 id="video1" autoPlay loop muted playsInline controls={false} preload="auto">
            <source {...video1} />
            Seu navegador não suporta vídeos.
          </S.Video1>
          <S.Container>
            <S.Video2 id="video2" autoPlay loop muted playsInline controls={false} preload="auto">
              <source {...video2} />
              Seu navegador não suporta vídeos.
            </S.Video2>
            <S.Button {...whatsapp}>{whatsapp.title}</S.Button>
          </S.Container>
        </S.Content>
        <S.Article>{content}</S.Article>
      </S.Wrapper>
      <S.Circle />
    </S.Section>
  );
};
