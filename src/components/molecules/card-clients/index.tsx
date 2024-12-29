import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const CardClients = () => {
  const items = C.clients;
  const { servicesRef } = useAnimation();

  return (
    <S.CardClients>
      <S.Container>
        {items.map(({ img, link, tags, id }, index) => (
          <S.Card
            {...link}
            key={id}
            ref={(el) => {
              servicesRef.current[index] = el;
            }}
          >
            <S.Content>
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
  );
};
