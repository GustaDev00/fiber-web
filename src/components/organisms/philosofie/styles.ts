import styled from "styled-components";
import { ButtonSlideArrow } from "@/components/atoms/button-slide-arrow";
import { MagicSphere } from "@/components/atoms/magic-sphere";

export const Philosofie = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20rem;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    right: -11.9rem;
    width: 0.2rem;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 6.8rem;
  font-weight: 700;
`;

export const Sphere = styled(MagicSphere)``;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 6.8rem;

  p {
    color: #fff;
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 4.2rem;

    span {
      font-weight: 700;
    }
  }
`;

export const Button = styled(ButtonSlideArrow)``;
