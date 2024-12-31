import * as S from "./styles";
import C from "@/constants";

export default () => {
  const { title, people } = C.team;

  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.List>
          {people.map(({ name, text, img, role }, index) => (
            <S.Item key={index}>
              <S.Img {...img} />
              <S.Container>
                <S.Text>{text}</S.Text>
              </S.Container>
              <S.Content>
                <S.Name>{name}</S.Name>
                <S.Role>{role}</S.Role>
              </S.Content>
            </S.Item>
          ))}
        </S.List>
      </S.Wrapper>
      <S.Circle1 />
      <S.Circle2 />
      <S.Circle3 />
      <S.Bg>
        <S.Line1 />
        <S.Line2 />
      </S.Bg>
    </S.Section>
  );
};
