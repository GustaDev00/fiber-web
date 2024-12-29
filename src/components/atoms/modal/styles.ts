import styled from "styled-components";
import { CircleGreenBlur } from "../circle-green-blur";
import { LazyImage } from "../lazy-image";
import { ButtonSwipe } from "../button-swipe";

export const Modal = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: ${({ $open }) => ($open ? "95vw" : "0")};
  height: 95vh;
  background: linear-gradient(180deg, #151515 13.5%, #1a1a1a 52%, #000 90.5%);
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
`;

export const Content = styled.article``;

export const Subtitle = styled.h3`
  color: #fff;
  font-size: 8.4rem;
  font-weight: 700;
`;

export const Text = styled.p`
  margin-top: 10rem;
  color: #fff;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 4.2rem;
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
`;

export const Item = styled.li`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.2rem;
`;

export const Container = styled.div``;

export const Link = styled.a``;

export const Button = styled(ButtonSwipe)`
  margin-top: 3.7rem;
  margin-bottom: 1rem;
`;

export const Img = styled(LazyImage)`
  width: 67rem;
  height: 41.2rem;
  object-fit: cover;
  border-radius: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.4);
`;

export const Circle = styled(CircleGreenBlur)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38.6rem;
  height: 48.6rem;
`;
