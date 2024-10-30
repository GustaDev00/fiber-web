import { LazyImage } from "@/components/atoms/lazy-image";
import { Slider } from "@/components/molecules/slider";
import { SubtitleLight } from "@/styles/components/subtitle";
import { TitleWhite } from "@/styles/components/titles";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled, { keyframes } from "styled-components";

export const Gallery = styled.section`
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    background: url("/imgs/home/services/bg.png") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    padding-top: 10rem;
    padding-bottom: 10rem;
  `}
`;

export const Title = styled.h2`
  text-align: center;

  ${TitleWhite}
`;

export const Subtitle = styled.p`
  text-align: center;

  ${SubtitleLight}

  margin: 2rem 0 5.1rem;
`;

export const Slide = styled(Slider)`
  width: 70rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 90%;
  `}
`;

const moveDiagonal = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Brush = styled(LazyImage)`
  width: 58rem;
  height: 58rem;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 20rem;
  z-index: 2;
  animation: ${moveDiagonal} 5s ease-in-out infinite;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    display: none;
  `}
`;
