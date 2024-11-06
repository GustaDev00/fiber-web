import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { ScrollDown } from "@/components/atoms/scroll-down";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import styled from "styled-components";

export const Header = styled.section`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  padding-top: 20.3rem;
`;

export const Article = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 6.7rem;
  font-weight: 700;

  span {
    color: #5eca83;
  }
`;

export const Text = styled.p`
  margin-top: 2rem;
  opacity: 0.8;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.2rem;

  span {
    font-weight: 700;
  }
`;

export const Scroll = styled(ScrollDown)`
  margin: 3rem 16.6rem 0 7.8rem;
`;

export const Circle2 = styled(CircleGreenBlur)`
  top: 80rem;
  right: 40rem;
  width: 38.6rem;
  height: 38.6rem;
`;

export const Circle = styled(CircleGreenBlur)`
  top: 43rem;
  left: -12rem;
  width: 28.6rem;
  height: 28.6rem;
`;
