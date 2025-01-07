import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { useState } from "react";
import { Modal } from "@/components/atoms/modal";

export const CardClients = () => {
  const items = C.clients;
  const { servicesRef } = useAnimation();

  const dimensions = [
    { width: "87.1rem", height: "53.2rem" },
    { width: "64.1rem", height: "53.2rem" },
    { width: "153.4rem", height: "53.2rem" },
  ];
  const [openModalIndex, setOpenModalIndex] = useState<number | boolean>(false);

  const handleCardClick = (index: number) => {
    setOpenModalIndex(index);
  };

  return (
    <>
      <S.CardClients>
        <S.Container>
          {items.map(({ img, link, tags, id }, index) => (
            <S.Card
              {...link}
              key={id}
              $name={`card${index + 1}`}
              ref={(el) => {
                servicesRef.current[index] = el;
              }}
              data-fs-link="project"
              onClick={(e) => {
                e.preventDefault();
                handleCardClick(index);
              }}
            >
              <S.Content {...dimensions[index]}>
                <S.Image {...img} />
                <S.Tag>
                  <S.List>
                    {tags.map((tag) => (
                      <S.Item key={`${id}-${tag}`}>
                        <S.Text>{tag}</S.Text>
                      </S.Item>
                    ))}
                  </S.List>
                </S.Tag>
              </S.Content>
            </S.Card>
          ))}
        </S.Container>
      </S.CardClients>

      {items.map((item, index) => (
        <Modal
          {...item}
          open={openModalIndex === index}
          setOpen={setOpenModalIndex}
          key={`modal-${index}`}
          client={true}
          listLine={true}
        />
      ))}
    </>
  );
};
