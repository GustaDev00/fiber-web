import * as S from "./styles";
import C from "@/constants";

export const Footer = () => {
  const {
    services,
    contact,
    footer: { description, titles },
  } = C.data;

  return (
    <S.Footer>
      <S.Wrapper>
        <S.Container>
          <S.Content>
            <S.Column>
              <S.Logo />
              <S.Description>{description}</S.Description>
            </S.Column>

            <S.Column>
              <S.Title>{titles.services}</S.Title>
              <S.List>
                {services.map(({ title, link }) => (
                  <S.Item key={title}>
                    <S.Link href={link} data-fs-link="hover">
                      {title}
                    </S.Link>
                  </S.Item>
                ))}
                <S.Item>
                  <S.Link href="/dienstleistungen/" data-fs-link="hover">
                    alle Dienstleistungen
                  </S.Link>
                </S.Item>
              </S.List>
            </S.Column>

            <S.Column>
              <S.Title>{titles.contacts}</S.Title>

              <S.List>
                {contact.map(({ text, content, link }) => (
                  <S.Item key={text}>
                    <S.Link href={link} data-fs-link="hover">
                      {content}
                    </S.Link>
                  </S.Item>
                ))}
              </S.List>
            </S.Column>
          </S.Content>
          <S.Line />
          <S.Copy>Copyright © FiberWeb</S.Copy>
        </S.Container>
      </S.Wrapper>
      <S.Circle1 />
      <S.Circle2 />
    </S.Footer>
  );
};
