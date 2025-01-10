import { Abstract } from "@/components/atoms/abstract-3d";
import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { BackgroundMove } from "@/components/atoms/background-move";

export default () => {
  const { ref } = useAnimation();

  const {
    title,
    description,
    buttons: { contact },
  } = { ...C.header.home, ...C.data };

  return (
    <S.Header ref={ref}>
      <S.Wrapper>
        <S.Content>
          <S.Article>
            <S.Title>{title}</S.Title>
            <Abstract data-fs-object />
          </S.Article>
          <S.Scroll />
          <S.Description>
            <S.Text>{description}</S.Text>
            <S.Button {...contact} />
          </S.Description>
        </S.Content>
      </S.Wrapper>
      <S.Circle3 />
      <S.Circle2 />
      <S.Circle />
      <BackgroundMove />
    </S.Header>
  );
};
