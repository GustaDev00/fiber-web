import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { Fragment, useState } from "react";
import { Modal } from "@/components/atoms/modal";

export const Vision = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | boolean>(false);
  const { sectionRef } = useAnimation();
  const {
    title,
    items,
    buttons: { whatsapp },
  } = { ...C.services, ...C.data };

  const handleItemClick = (index: number) => {
    setOpenModalIndex(index);
  };

  return (
    <>
      <S.Vision ref={sectionRef}>
        <S.Wrapper>
          <S.Title>{title}</S.Title>
          <S.Line data-timline="line" />
          <S.List data-timline="list">
            {items.map(({ title }, index) => (
              <S.Item key={title} data-timline="item">
                <S.Button onClick={() => handleItemClick(index)}>{title}</S.Button>
              </S.Item>
            ))}
          </S.List>
        </S.Wrapper>
        <S.Circle />
      </S.Vision>
      {items.map((item, index) => (
        <Modal
          {...item}
          link={whatsapp}
          open={openModalIndex === index}
          setOpen={setOpenModalIndex}
          key={index}
        />
      ))}
      <S.BlackBackground
        onClick={() => {
          setOpenModalIndex(false);
        }}
        $open={openModalIndex !== false}
      />
    </>
  );
};