import * as S from "./styles";
import C from "@/constants";

export default () => {
  return (
    <S.TeamContainer>
      <S.Wrapper>
        <S.Container>
          <S.BigImage {...C.team.images[0]} />
          <S.SmallImage {...C.team.images[1]} />
        </S.Container>
        <S.Content>
          {C.team.content.map(({ title, content, list }, index) => {
            if (list) {
              return (
                <S.Article key={index}>
                  <S.Title>{title}</S.Title>
                  <S.List>
                    {list.map(({ text, title }, index) => (
                      <S.ListItem key={index}>
                        <S.Icon>
                          <S.Check />
                        </S.Icon>
                        <S.ArticleContent>
                          <S.ListTitle>{title}</S.ListTitle>
                          <S.ListText>{text}</S.ListText>
                        </S.ArticleContent>
                      </S.ListItem>
                    ))}
                  </S.List>
                </S.Article>
              );
            }

            if (content) {
              return (
                <S.Article key={index}>
                  <S.Title>{title}</S.Title>
                  <S.Text>{content}</S.Text>
                </S.Article>
              );
            }
          })}
        </S.Content>
      </S.Wrapper>
      <S.Wrapper>
        <S.TeamMembers>
          {C.team.members.map(({ photo, name, text }, index) => (
            <S.TeamMember key={index}>
              <S.MemberImage {...photo} />
              <S.MemberData>
                <S.MemberTitle>{name}</S.MemberTitle>
                <S.MemberText>{text}</S.MemberText>
              </S.MemberData>
            </S.TeamMember>
          ))}
        </S.TeamMembers>
      </S.Wrapper>
    </S.TeamContainer>
  );
};
