import styled from "styled-components";
import { CircleGreenBlur } from "../circle-green-blur";
import { LazyImage } from "../lazy-image";
import { ButtonSwipe } from "../button-swipe";
import { mediaMaxWidth } from "@/utils/media-query";

export const Modal = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: ${({ $open }) => ($open ? "100vw" : "0")};
  height: 100vh;
  background: linear-gradient(180deg, #151515 13.5%, #1a1a1a 62%, #000 99.5%);
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: visibility 0.5s ease, opacity 0.5s ease, width 0.5s ease;
  overflow: hidden;
  z-index: 10;

  @supports (-webkit-touch-callout: none) {
    height: 95svh;
  }

  ${mediaMaxWidth("mobile")`
    z-index: 100;
    overflow-y: auto;
  `}
`;

export const Wrapper = styled.div`
  width: 95vw;
  position: relative;
  padding: 8rem 10rem;
  gap: 19rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 2;

  ${mediaMaxWidth("mobile")`
    padding: 3rem 2rem;
    gap: 4rem;
    overflow-y: auto;
    flex-direction: column;
  `}
`;

export const Content = styled.article``;

export const Subtitle = styled.h3`
  color: #fff;
  font-size: 8.4rem;
  font-weight: 700;

  ${mediaMaxWidth("mobile")`
    font-size: 3rem;
  `}
`;

export const Text = styled.p`
  margin-top: 10rem;
  color: #fff;
  font-size: 2.6rem;
  font-weight: 500;
  line-height: 4.2rem;
  opacity: 0.8;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
    margin-top: 3rem;
    line-height: 3rem;
  `}
`;

export const Line = styled.div`
  margin: 4.6rem 0;
  width: 100%;
  height: 0.1rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0.45%,
    rgba(230, 230, 230, 0.6) 0.46%,
    rgba(230, 230, 230, 0) 99.49%
  );
`;

export const List = styled.ul<{ $list?: boolean }>`
  display: flex;
  flex-direction: ${({ $list }) => ($list ? "row" : "column")};
  gap: ${({ $list }) => ($list ? "2.5rem" : "1.1rem")};

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Item = styled.li`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.2rem;
  opacity: 0.8;
`;

export const Container = styled.div``;

export const Close = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8rem;
  right: 10rem;
  font-size: 4rem;
  color: #fff;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 4.8rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    opacity: 0.7;
  }

  ${mediaMaxWidth("mobile")`
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    top: 3rem;
    right: 2rem;
  `}
`;

export const Link = styled.a``;

export const Button = styled(ButtonSwipe)`
  margin-top: 3.7rem;
  margin-bottom: 1rem;
`;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: scale 0.5s ease;
`;

export const Zoom = styled.div`
  width: 67rem;
  height: 41.2rem;
  border-radius: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.4);
  overflow: hidden;

  &:hover {
    ${Img} {
      scale: 1.1;
    }
  }

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 30rem;
  `}
`;

export const Circle = styled(CircleGreenBlur)`
  filter: blur(10rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10rem;
  height: 18.6rem;
`;
