import { Fragment } from "react";
import * as S from "./styles";
import C from "@/constants";

export default () => {
  return (
    <S.Service>
      <S.Wrapper>
        {C.content.map(({ title, texts, video, img, icon }, index) => (
          <S.Container key={index}>
            <S.Content>
              <S.Video autoPlay loop muted playsInline controls={false} preload="auto">
                <source {...video} />
                Seu navegador não suporta vídeos.
              </S.Video>
              <S.Image {...img} $css={img.css} />
              <S.Icon>{icon}</S.Icon>
            </S.Content>
            <S.Article>
              <S.Title>{title}</S.Title>
              <S.Texts>
                {texts.map(({ title, content }, index) => (
                  <Fragment key={index}>
                    <S.Subtitle>{title}</S.Subtitle>
                    <S.Text>{content}</S.Text>
                  </Fragment>
                ))}
              </S.Texts>
            </S.Article>
          </S.Container>
        ))}
      </S.Wrapper>
    </S.Service>
  );
};
