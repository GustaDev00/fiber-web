import { Abstract3d } from "@/components/atoms/abstract-3d";
import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { BackgroundMove } from "@/components/atoms/background-move";

export default () => {
  const { ref } = useAnimation();

  const { title, description } = { ...C.header.uber_uns, ...C.data };

  return (
    <S.Header ref={ref}>
      <S.Wrapper>
        <S.Content>
          <S.Article>
            <S.Title>{title}</S.Title>
            <S.Text>{description}</S.Text>
          </S.Article>
          <S.Scroll />
        </S.Content>
      </S.Wrapper>
      <S.Circle3 />
      <S.Circle2 />
      <S.Circle />
      <BackgroundMove />
    </S.Header>
  );
};
