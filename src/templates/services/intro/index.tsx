import * as S from "./styles";
import useAnimation from "./animation";
import { IntroProps } from "./props";

export default ({ title, description, img, link, items }: IntroProps) => {
  const { sectionRef } = useAnimation();

  return (
    <>
      <S.Intro ref={sectionRef}>
        <S.Wrapper>
          <S.Article>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Img {...img} />
            <S.Link {...link}>{link.title}</S.Link>
          </S.Article>
          <S.Content>
            <S.List>
              {items.map(({ title, text }, index) => (
                <S.Item key={index}>
                  <S.Subtitle>
                    {title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.0005 3.01364L16.7396 16.7392L3.01413 19L16.7396 21.2608L19.0005 34.9863L21.2613 21.2608L34.9868 19L21.2613 16.7392L19.0005 3.01364ZM16.1701 16.1696L18.6775 0.946777H19.3234L21.8308 16.1696L37.0536 18.677V19.3229L21.8308 21.8303L19.3234 37.0532H18.6775L16.1701 21.8303L0.947266 19.3229V18.677L16.1701 16.1696Z"
                        fill="white"
                      />
                    </svg>
                  </S.Subtitle>
                  <S.Text>{text}</S.Text>
                </S.Item>
              ))}
            </S.List>
          </S.Content>
        </S.Wrapper>
      </S.Intro>
    </>
  );
};
