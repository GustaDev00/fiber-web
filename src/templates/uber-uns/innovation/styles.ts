import { ButtonSlideArrow } from "@/components/atoms/button-slide-arrow";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { ScrollDown } from "@/components/atoms/scroll-down";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
`;

export const Wrapper = styled(_Wrapper)`
  padding-top: 0;
  align-items: flex-end;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Title = styled.h1`
  display: flex;
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

export const Text = styled.p`
  opacity: 0.8;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.2rem;
  margin-bottom: 3.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 1.8rem;
    line-height: 3.2rem;
  `}
`;
