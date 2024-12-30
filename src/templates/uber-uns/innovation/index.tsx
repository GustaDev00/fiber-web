import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { Stars } from "@/components/atoms/stars";
import { World } from "@/components/atoms/world";

export default () => {
  const { sectionRef } = useAnimation();
  const { title, description } = C.innovation;

  return (
    <S.Section ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <Stars data-timeline="stars" />
          <S.Title>{title}</S.Title>
          <S.Text>{description}</S.Text>
        </S.Content>
        <World data-timeline="world" />
      </S.Wrapper>
    </S.Section>
  );
};
