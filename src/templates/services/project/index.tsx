import * as S from "./styles";
import useAnimation from "./animation";
import { ProjectProps } from "./props";

export default ({ link, title, imgs }: ProjectProps) => {
  const { sectionRef } = useAnimation();

  return (
    <>
      <S.Intro ref={sectionRef}>
        <S.Wrapper>
          <S.Title>{title}</S.Title>
          <S.Container>
            {imgs.map(({ title, tags, link, img }, index) => (
              <S.Card {...link} key={index}>
                <S.Content>
                  <S.Image {...img} />
                  <S.Tag>
                    <S.Subtitle>{title}</S.Subtitle>
                    <S.List>
                      {tags.map((tag) => (
                        <S.Item key={`${index}-${tag}`}>
                          <S.Text>{tag}</S.Text>
                        </S.Item>
                      ))}
                      <S.Icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4.58887 4.58887L18.7914 18.7914M19.4109 4.87446L19.4111 19.4112H4.90373"
                            stroke="black"
                            strokeWidth="2"
                          />
                        </svg>
                      </S.Icon>
                    </S.List>
                  </S.Tag>
                </S.Content>
              </S.Card>
            ))}
          </S.Container>
          <S.Link data-timeline="link" {...link}>
            {link.title}
          </S.Link>
        </S.Wrapper>
      </S.Intro>
    </>
  );
};
