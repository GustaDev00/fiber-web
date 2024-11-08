import { Abstract3d } from "@/components/atoms/abstract-3d";
import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export default () => {
  const { ref } = useAnimation();

  const {
    title,
    description,
    buttons: { contact },
  } = { ...C.header, ...C.data };

  return (
    <S.Header ref={ref}>
      <S.Wrapper>
        <S.Content>
          <S.Article>
            <S.Title>{title}</S.Title>
            <Abstract3d />
          </S.Article>
          <S.Scroll />
          <S.Description>
            <S.Text>{description}</S.Text>
            <S.Button {...contact} />
          </S.Description>
        </S.Content>
      </S.Wrapper>
      <S.Circle2 />
      <S.Circle />
    </S.Header>
  );
};
