import styled from "styled-components";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { ArrowInclineIcon } from "@/components/svgs/arrow-incline";

export const Vision = styled.div`
  position: relative;
  padding: 10rem 0 18rem;

  ${mediaMaxWidth("mobile")`
  padding: 10rem 0;
  `}
`;

export const Circle = styled(CircleGreenBlur)`
  top: 21.8rem;
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

export const List = styled.div``;

export const Item = styled.div`
  padding: 3.9rem 4.4rem;
  transition: padding-left 0.4s ease;
  position: relative;

  &::before {
    opacity: 0;
    visibility: hidden;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 938px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(43, 179, 42, 0.4) 0%,
      rgba(94, 202, 131, 0.06) 100%
    );
    filter: blur(3.9rem);
    transition: opacity 0.6s ease, visibility 0.6s ease;
    z-index: 0;
  }

  &:hover {
    padding-left: 8rem;

    &::before {
      opacity: 1;
      visibility: visible;
    }
  }

  ${mediaMaxWidth("mobile")`
    text-align: center;
    padding: 3.9rem 3.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  position: relative;
  color: #fff;
  font-size: 7.6rem;
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

export const Icon = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #fff;

  ${mediaMaxWidth("mobile")`
    display: flex;
  `}
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
