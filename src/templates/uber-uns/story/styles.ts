import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  align-items: flex-start;

  ${mediaMaxWidth("mobile")`
    gap: 3rem;
  `}
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    right: 9rem;
    width: 0.15rem;
    height: 90%;
    top: 5%;
    background: rgba(255, 255, 255, 0.5);
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;

    &::after {
      display: none;
    }
  `}
`;

export const Container = styled.div`
  position: relative;
`;

export const Button = styled(ButtonSwipe)`
  position: absolute;
  bottom: 4rem;
  left: 4rem;

  ${mediaMaxWidth("mobile")`
    bottom: 2rem;
    left: 2rem;
  `}
`;

const Video = styled.video`
  border-radius: 1.8rem;
  width: 58.2rem;
  height: 42.9rem;
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;
    height: 34.8rem;
    object-fit: cover;
  `}
`;

export const Video1 = styled(Video)`
  margin-top: 6.9rem;
  margin-bottom: 2rem;
`;

export const Video2 = styled(Video)`
  width: 58.2rem;
  height: 26.6rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
      width: 100%;
      height: 20rem;
  `}
`;

export const Title = styled.h1`
  flex-direction: column;
  color: #fff;
  font-size: 6.7rem;
  font-weight: 700;
  margin: 9rem 0 4.6rem;

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

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  p {
    color: #c2c2c2;
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 4.2rem;
  }

  ${mediaMaxWidth("mobile")`
    gap: 2rem;

    p {
      font-size: 1.8rem;
      line-height: 3.6rem;
    }
  `}
`;

export const Circle = styled(CircleGreenBlur)`
  width: 38.6rem;
  height: 38.6rem;
  top: -5rem;
  left: -10rem;
`;
