import * as S from "./styles";
import useAnimation from "./animation";
import { ReactNode } from "react";
import SimpleVideoBackground from "@/components/atoms/simple-video-background";

export const Header = ({
  title,
  description,
  ...props
}: {
  title: ReactNode;
  description: ReactNode;
}) => {
  const { ref } = useAnimation();

  return (
    <S.Header ref={ref} {...props}>
      <S.Wrapper>
        <S.Content>
          <S.Article>
            <S.Title>{title}</S.Title>
            <S.Text>{description}</S.Text>
          </S.Article>
          <S.Scroll />
        </S.Content>
      </S.Wrapper>
      <S.Circle />
      <SimpleVideoBackground
        src="/videos/background.mp4"
        type="video/mp4"
        fallbackImage="/videos/thumb.png"
      />
    </S.Header>
  );
};
