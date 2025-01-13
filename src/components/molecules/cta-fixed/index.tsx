import * as S from "./styles";
import C from "@/constants";

export const CtaFixed = () => {
  return (
    <S.CtaFixed>
      <S.Modal>
        <S.Text>{C.blog.cta.text}</S.Text>
        <S.Button {...C.blog.cta} />
      </S.Modal>
    </S.CtaFixed>
  );
};
