import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const Transform = () => {
  const { sectionRef } = useAnimation();
  const {
    title,
    description,
    buttons: { whatsapp },
  } = { ...C.transform, ...C.data };

  return (
    <S.Transform ref={sectionRef}>
      <S.Circle1 />
      <S.Circle2 />
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Link {...whatsapp} target="_blank" rel="noreferrer" data-fs-link="hover">
          {whatsapp.title}
        </S.Link>
        <S.Line />
      </S.Wrapper>
    </S.Transform>
  );
};
