import styled from "styled-components";
import { ButtonSlideArrow } from "@/components/atoms/button-slide-arrow";
import { MagicSphere } from "@/components/atoms/magic-sphere";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";

export const Philosofie = styled.div``;

export const Wrapper = styled(_Wrapper)`
  justify-content: center;
  align-items: flex-start;
  gap: 20rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: row;
    justify-content: space-between;
    gap: 9rem;
  `}

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 2rem;
  `}
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

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      right: -4rem;
    `}

    ${mediaMaxWidth("mobile")`
      display: none;
    `}
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 6.8rem;
  font-weight: 700;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 4rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3.2rem;
  `}
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

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;
    opacity: 0.8;
    gap: 2.2rem;

    p {
      font-size: 1.8rem;
    }
  `}
`;

export const Button = styled(ButtonSlideArrow)``;
