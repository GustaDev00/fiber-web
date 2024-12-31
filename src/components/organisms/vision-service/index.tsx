import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { useState } from "react";

export const VisionService = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | boolean>(false);
  const { sectionRef } = useAnimation();
  const {
    title,
    items,
    buttons: { contact },
  } = { ...C.services, ...C.data };

  const handleItemClick = (index: number) => {
    setOpenModalIndex(index);
  };

  return (
    <>
      <S.Vision ref={sectionRef}>
        <S.Wrapper>
          <S.Title>{title}</S.Title>
          <S.List data-timline="list">
            {items.map(({ title, description }, index) => (
              <S.Item key={index} data-timline="item">
                <S.Container>
                  <S.Text>{title}</S.Text>
                  <S.Link href={contact.href} target="_blank">
                    {contact.title}
                    <S.Arrow />
                  </S.Link>
                </S.Container>
                <S.Content>
                  <S.Description>{description}</S.Description>
                </S.Content>
              </S.Item>
            ))}
          </S.List>
        </S.Wrapper>
        <S.Circle />
      </S.Vision>
    </>
  );
};
