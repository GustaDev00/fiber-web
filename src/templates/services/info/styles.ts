import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { Abstract } from "@/components/atoms/abstract-3d";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { StarIcon } from "@/components/svgs/star";
import { keyframes } from "styled-components";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";

export const Info = styled.section`
  position: relative;
  padding: 10rem 0;

  ${mediaMaxWidth("mobile")`
    padding: 10rem 0;
  `}
`;

const Circle = styled(CircleGreenBlur)`
  width: 38.6rem;
  height: 38.6rem;
`;

export const Circle1 = styled(Circle)`
  top: 3.7rem;
  left: -10rem;
`;

export const Circle2 = styled(Circle)`
  top: 2.2rem;
  right: -10rem;
`;

export const Wrapper = styled(_Wrapper)`
  align-items: flex-start;
  padding-bottom: 18rem;
  padding-top: 18rem;
  flex-direction: column;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -4rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 30.6rem);
    height: 0.15rem;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.35) 0%, rgba(153, 153, 153, 0) 100%);

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      width: calc(100% - 8rem);
    `}

    ${mediaMaxWidth("mobile")`
      display: none;
    `}
  }

  &::before {
    top: unset;
    bottom: -4rem;
  }

  ${mediaMaxWidth("mobile")`
    padding-bottom: 0rem;
    padding-top: 0rem;
  `}
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 5.4rem;
  font-weight: 700;
  margin-bottom: 12rem;

  span {
    color: #5eca83;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2.6rem;
    margin-bottom: 12rem;
  `}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 18rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column-reverse;
  `}

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 0rem;
  `}
`;

export const AbstractWrapper = styled.div`
  position: relative;
  bottom: 10rem;
`;

export const AbstractItem = styled(Abstract)`
  left: -10rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    left: 0;

    canvas {
      width: 40rem !important;
    }
  `}
`;

export const Button = styled(ButtonSwipe)``;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7.6rem 9.2rem;

  ${mediaMaxWidth("mobile")`
    grid-template-columns: 1fr;
    gap: 4rem;
  `}
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const moveSideToSide = keyframes`
  0% {
    transform: translateX(0) rotate(10deg);
  }
  50% {
    transform: translateX(0) rotate(-10deg);
  }
  100% {
    transform: translateX(0) rotate(10deg);
  }
`;

export const AnimatedIcon = styled(StarIcon)<{ $delay: number }>`
  width: 11.2rem;
  height: 11.1rem;
  object-fit: contain;
  animation: ${moveSideToSide} 4s infinite ease;
  animation-delay: ${({ $delay }) => $delay}s;
`;

export const Subtitle = styled.h3`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: normal;
  margin: 4rem 0 2rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column-reverse;
  `}
`;

export const Text = styled.p`
  color: #949494;
  font-size: 1.8rem;
  font-weight: 400;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 2.4rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    line-height: 2.1rem;
  `}
`;
