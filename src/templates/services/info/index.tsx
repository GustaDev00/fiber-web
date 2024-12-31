import * as S from "./styles";
import useAnimation from "./animation";
import { InfoProps } from "./props";

export default ({ title, link, item }: InfoProps) => {
  const { sectionRef } = useAnimation();

  return (
    <>
      <S.Info ref={sectionRef}>
        <S.Circle1 />
        <S.Circle2 />
        <S.Wrapper>
          <S.Title data-timeline="title">{title}</S.Title>
          <S.Container>
            <S.AbstractWrapper>
              <S.AbstractItem data-timeline="abstract" />
              <S.Button {...link} data-timeline="link">
                {link.title}
              </S.Button>
            </S.AbstractWrapper>
            <S.List>
              {item.map(({ title, text }, index) => (
                <S.Item key={index} data-timeline="item">
                  <S.AnimatedIcon $delay={index} />
                  <S.Subtitle data-timeline>{title}</S.Subtitle>
                  <S.Text data-timeline>{text}</S.Text>
                </S.Item>
              ))}
            </S.List>
          </S.Container>
        </S.Wrapper>
      </S.Info>
    </>
  );
};
