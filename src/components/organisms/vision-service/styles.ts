import styled from "styled-components";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { ArrowInclineIcon } from "@/components/svgs/arrow-incline";

export const Vision = styled.div`
  position: relative;
  padding: 10rem 0;

  ${mediaMaxWidth("mobile")`
  padding: 10rem 0;
  `}
`;

export const Circle = styled(CircleGreenBlur)`
  top: 40%;
  right: -10rem;
  width: 38.6rem;
  height: 38.6rem;

  ${mediaMaxWidth("mobile")`
    top: 40rem;
    right: -15rem;
    width: 58.6rem;
    height: 58.6rem;
    filter: blur(30rem);
  `}
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 7rem;
  font-weight: 700;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 5.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 2.8rem;
    text-align: center;
  `}
`;

export const Line = styled.div`
  margin-top: 7.6rem;
  margin-bottom: 9.2rem;
  height: 0.2rem;
  width: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(153, 153, 153, 0) 100%);

  ${mediaMaxWidth("mobile")`
    margin-top: 2.2rem;
    margin-bottom: 4.2rem;
  `}
`;

export const List = styled.div`
  margin-top: 6rem;

  ${mediaMaxWidth("mobile")`
    display: flex;
    flex-direction: column;
    gap: 6rem;
  `}
`;

export const Item = styled.div`
  display: flex;
  padding: 3.9rem 4.4rem;
  position: relative;
  gap: 5.8rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    padding: 0;
  `}
`;

export const Container = styled.div``;

export const Content = styled.div``;

export const Description = styled.p`
  color: #fff;
  font-family: Syne;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const Text = styled.h3`
  margin-bottom: 3rem;
  width: 40rem;
  position: relative;
  color: #fff;
  font-size: 5.8rem;
  font-weight: 700;
  z-index: 1;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 6.4rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
  `}
`;

export const Link = styled.a`
  border-radius: 122px;
  padding: 1.2rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  text-align: center;
  font-family: Syne;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: opacity 0.4s ease;

  svg {
    margin-left: 1rem;
    path {
      stroke: white;
      width: 2rem;
      height: 2rem;
    }
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const Arrow = styled(ArrowInclineIcon)`
  width: 1.4rem;
  height: 1.4rem;

  path {
    stroke: #000;
  }
`;

export const BlackBackground = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: ${({ $open }) => ($open ? 0.8 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 2;

  @supports (-webkit-touch-callout: none) {
    height: 100svh;
  }
`;
