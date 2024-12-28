import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const Philosofie = () => {
  const { sectionRef } = useAnimation();
  const {
    title,
    content,
    buttons: { contact },
  } = { ...C.philosofie, ...C.data };

  return (
    <S.Philosofie ref={sectionRef}>
      <S.Wrapper>
        <S.Container>
          <S.Title>{title}</S.Title>
          <S.Sphere />
        </S.Container>
        <S.Content>
          {content}
          <S.Button {...contact} />
        </S.Content>
      </S.Wrapper>
    </S.Philosofie>
  );
};
