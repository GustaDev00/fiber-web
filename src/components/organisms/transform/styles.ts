import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import styled from "styled-components";

export const Transform = styled.div`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 3.6rem;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 6.7rem;
  font-weight: 700;

  span {
    color: #5eca83;
  }
`;

export const Description = styled.p`
  color: #fff;
  text-align: center;
  font-size: 3.8rem;
  font-weight: 400;
  line-height: 4.2rem;
`;

export const Link = styled.a`
  margin: 0 auto;
  width: fit-content;
  padding: 2.7rem 4.1rem;
  border-radius: 12.2rem;
  border: 0.1rem solid #fff;
  background: #fff;
  color: #000;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 400;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const Line = styled.div`
  margin: 0 auto;
  width: 0.1rem;
  height: 10rem;
  background: rgba(255, 255, 255, 0.5);
`;

export const Circle1 = styled(CircleGreenBlur)`
  top: -10rem;
  left: -10rem;
  width: 30rem;
  height: 30rem;
`;

export const Circle2 = styled(CircleGreenBlur)`
  top: -10rem;
  right: -10rem;
  width: 30rem;
  height: 30rem;
`;
