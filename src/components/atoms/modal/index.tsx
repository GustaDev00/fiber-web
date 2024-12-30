import * as S from "./styles";
import useAnimation from "./animation";
import { FC } from "react";
import { ModalProps } from "./props";

export const Modal: FC<ModalProps> = ({
  open = false,
  setOpen,
  subtitle,
  description,
  list,
  listLine,
  img,
  link,
  client,
  ...props
}) => {
  const { sectionRef } = useAnimation();

  return (
    <>
      <S.Modal $open={open} ref={sectionRef} {...props}>
        <S.Wrapper>
          <S.Content>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <S.Text>{description}</S.Text>
            <S.Line />
            {list && (
              <S.List $list={listLine}>
                {list.map((item, index) => (
                  <S.Item key={index}>{item}</S.Item>
                ))}
              </S.List>
            )}
          </S.Content>
          <S.Container>
            {client ? (
              <S.Link {...link} target="_blank">
                <S.Img {...img} />
              </S.Link>
            ) : (
              <>
                <S.Img
                  {...img}
                  onClick={() => {
                    setOpen(false);
                  }}
                />
                <S.Button {...link}>{link.title}</S.Button>
              </>
            )}
          </S.Container>
        </S.Wrapper>
        <S.Circle />
      </S.Modal>
    </>
  );
};
