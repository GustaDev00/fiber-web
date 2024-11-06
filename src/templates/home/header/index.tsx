import * as S from "./styles";
import C from "@/constants";

export default () => {
  const { title, description } = C.header;

  return (
    <S.Header>
      <S.Wrapper>
        <S.Article>
          <S.Title>{title}</S.Title>
          <S.Scroll />
          <S.Text>{description}</S.Text>
        </S.Article>
      </S.Wrapper>
      <S.Circle2 />
      <S.Circle />
    </S.Header>
  );
};
