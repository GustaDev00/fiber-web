import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { Stars } from "@/components/atoms/stars";
import { World } from "@/components/atoms/world";

export default () => {
  const { ref } = useAnimation();
  const { title, description } = C.innovation;

  return (
    <S.Header ref={ref}>
      <S.Wrapper>
        <S.Content>
          <Stars />
          <S.Title>{title}</S.Title>
          <S.Text>{description}</S.Text>
        </S.Content>
        <World />
      </S.Wrapper>
    </S.Header>
  );
};
