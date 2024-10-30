import C from "@/constants";
import * as S from "./styles";

export default () => {
  return (
    <S.AboutUsContainer>
      <S.Wrapper>
        <S.Content>
          <S.Title>{C.aboutUsContent.title}</S.Title>
          <S.Subtitle>{C.aboutUsContent.description}</S.Subtitle>
          <S.List>
            {C.aboutUsContent.list.map(({ title, text, icon }, index) => (
              <S.Item key={index}>
                <S.Icon>
                  <S.Svg {...icon} />
                </S.Icon>
                <S.Article>
                  <S.TitleArticle>{title}</S.TitleArticle>
                  <S.Text>{text}</S.Text>
                </S.Article>
              </S.Item>
            ))}
          </S.List>
        </S.Content>
        <S.Container>
          <S.ImgSmall {...C.aboutUsContent.imgs.small} />
          <S.ImgBig {...C.aboutUsContent.imgs.big} />
        </S.Container>
      </S.Wrapper>
    </S.AboutUsContainer>
  );
};
