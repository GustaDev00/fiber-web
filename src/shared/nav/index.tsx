import { useCallback, useState } from "react";
import useAnimation from "./animation";
import * as S from "./styles";
import C from "@/constants";

export default () => {
  const [open, setOpen] = useState(false);
  const { ref } = useAnimation();
  const {
    pages,
    data: { social_share, navigation },
  } = C;

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <S.Header ref={ref}>
      <S.Wrapper>
        <S.Logo />
        <S.Menu onClick={handleClick}>
          <S.Line />
          <S.Line />
        </S.Menu>

        <S.Overlay $open={open}>
          <S.Modal>
            <S.WrapperModal>
              <S.HeaderModal>
                <S.TextMenu>Menu</S.TextMenu>
                <S.ButtonClose onClick={handleClick} />
              </S.HeaderModal>
              <S.MainModal>
                <S.List>
                  {navigation.slice(0, 1).map(({ title, href }) => (
                    <S.Item key={title} href={href}>
                      {title} <S.Arrow />
                    </S.Item>
                  ))}

                  {pages.map(({ title, link }) => (
                    <S.Item key={title} href={`/dienstleistungen/${link}`}>
                      {title} <S.Arrow />
                    </S.Item>
                  ))}

                  {navigation.slice(2, 3).map(({ title, href }) => (
                    <S.Item key={title} href={href}>
                      {title} <S.Arrow />
                    </S.Item>
                  ))}
                </S.List>
              </S.MainModal>
              <S.FooterModal>
                {social_share.map(({ title, link, icon: Icon }) => (
                  <S.Social key={title} href={link} target="_blank">
                    <Icon />
                  </S.Social>
                ))}
              </S.FooterModal>
            </S.WrapperModal>
          </S.Modal>
          <S.Black onClick={handleClick} />
        </S.Overlay>
      </S.Wrapper>
    </S.Header>
  );
};
