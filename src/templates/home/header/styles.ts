import { ButtonSlideArrow } from "@/components/atoms/button-slide-arrow";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { ScrollDown } from "@/components/atoms/scroll-down";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import styled from "styled-components";

export const Header = styled.section`
  position: relative;
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    height: 100svh;
  }
`;

export const Wrapper = styled(_Wrapper)`
  padding-top: 20.3rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Article = styled.article``;

export const Title = styled.h1`
  color: #fff;
  font-size: 6.7rem;
  font-weight: 700;

  span {
    color: #5eca83;
  }
`;

export const Description = styled.div``;

export const Text = styled.p`
  margin-top: 2rem;
  opacity: 0.8;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.2rem;
  margin-bottom: 3.8rem;

  span {
    font-weight: 700;
  }
`;

export const Button = styled(ButtonSlideArrow)``;

export const Scroll = styled(ScrollDown)`
  margin: 3rem 16.6rem 0 7.8rem;
`;

export const Circle2 = styled(CircleGreenBlur)`
  top: 50rem;
  right: 45rem;
  width: 38.6rem;
  height: 30.6rem;
`;

export const Circle3 = styled(CircleGreenBlur)`
  top: 10rem;
  right: -2rem;
  width: 38.6rem;
  height: 38.6rem;
`;

export const Circle = styled(CircleGreenBlur)`
  top: 10rem;
  left: -22rem;
  width: 38.6rem;
  height: 38.6rem;
`;
