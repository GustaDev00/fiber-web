import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const CardClients = () => {
  const items = C.clients;
  const { servicesRef } = useAnimation();

  const dimensions = [
    { width: "87.1rem", height: "53.2rem" },
    { width: "64.1rem", height: "53.2rem" },
    { width: "153.4rem", height: "53.2rem" },
  ];

  return (
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
          >
            <S.Content>
              <S.Image {...img} {...dimensions[index]} />
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
  );
};
