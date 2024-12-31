import { ButtonSlideArrow } from "@/components/atoms/button-slide-arrow";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { ScrollDown } from "@/components/atoms/scroll-down";
import { ArrowInclineDownIcon } from "@/components/svgs/arrow-incline-down";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled, { css } from "styled-components";

export const Header = styled.section<{ $active?: boolean }>`
  position: relative;
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    height: 100svh;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: 70vh;
  `}

  ${({ $active }) => mediaMaxWidth("mobile")`
    height: auto;

    ${
      $active &&
      css`
        height: 100vh;

        @supports (-webkit-touch-callout: none) {
          height: 100svh;
        }
      `
    }
  `}
`;

export const Wrapper = styled(_Wrapper)`
  padding-top: 30.3rem;

  ${mediaMaxWidth("mobile")`
    padding-top: 14rem; 
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Article = styled.article<{ $active?: boolean }>`
  ${({ $active }) => mediaMaxWidth("mobile")`
    display: flex;
    flex-direction: column;
    gap: ${$active ? "2rem" : "20rem"};
    align-items: flex-start;
    
  `}
`;

export const Title = styled.h1`
  margin-top: 5rem;
  color: #fff;
  font-size: 6.7rem;
  font-weight: 700;

  span {
    color: #5eca83;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 4.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
  `}
`;

export const Breadcrumb = styled.a`
  padding: 1.2rem 2.4rem;
  border-radius: 12.2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Icon = styled(ArrowInclineDownIcon)`
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 1rem;
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

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 1.8rem;
    line-height: 3.2rem;
    margin-top: 5rem;
  `}
`;

export const Button = styled(ButtonSlideArrow)``;

export const Scroll = styled(ScrollDown)<{ $active?: boolean }>`
  margin: 3rem 16.6rem 0 7.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 3.8rem;
    margin: 3rem 7rem 0 7rem;
  `}

  ${({ $active }) => mediaMaxWidth("mobile")`
    display: ${$active ? "none" : "block"};
    position: absolute;
    top: 30rem;
    left: -4rem;
  `}
`;

export const Circle2 = styled(CircleGreenBlur)`
  top: 50rem;
  right: 45rem;
  width: 38.6rem;
  height: 30.6rem;

  ${mediaMaxWidth("mobile")`
    width: 26rem;
    height: 26rem;
  `}
`;

export const Circle3 = styled(CircleGreenBlur)`
  top: 10rem;
  right: -2rem;
  width: 38.6rem;
  height: 38.6rem;

  ${mediaMaxWidth("mobile")`
    width: 26rem;
    height: 26rem;
  `}
`;

export const Circle = styled(CircleGreenBlur)`
  top: 60%;
  left: -8rem;
  width: 28.6rem;
  height: 28.6rem;
  filter: blur(20rem);
  z-index: 1;

  ${mediaMaxWidth("mobile")`
    width: 26rem;
    height: 26rem;
  `}
`;
