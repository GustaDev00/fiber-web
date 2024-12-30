import { ProgressBar } from "@/components/atoms/progress-bar";
import { ProgressFill } from "@/components/atoms/progress-bar/styles";
import { DoubleMarksIcon } from "@/components/svgs/double-marks";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const SliderCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 58.4rem;
  height: 48.2rem;
  margin: 0 auto;
  z-index: 2;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    border-radius: 3.1rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    background: var(
      --Gradient_green,
      linear-gradient(180deg, #2bb32a 0%, #4d9d4d 49.5%, #086207 100%)
    );
    transition: background 0.4s ease;
  }

  .swiper-slide-active,
  .swiper-slide-next,
  .swiper-slide-prev {
    background: #1c1c1c;
    transition: background 0.4s ease;
  }

  .swiper-slide-prev {
    transform: rotate(-5.356deg);
  }

  .swiper-slide-next {
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 48.4rem;
    height: 38.2rem;
  `}

  ${mediaMaxWidth("mobile")`
    width: 80%;
    height: 28.8rem;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  `}
`;

export const Container = styled.div`
  padding: 3.8rem 4.9rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 2.8rem 2.9rem;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 1rem 2rem 2rem;
  `}
`;

export const Wrapper = styled.div``;

export const Text = styled.p`
  margin-top: 3.4rem;
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 4.2rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")``}

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    line-height: 3.4rem;
    margin-top: 2.5rem;
  `}
`;

export const Icon = styled(DoubleMarksIcon)`
  width: 4.3rem;
  height: 4.3rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")``}

  ${mediaMaxWidth("mobile")`
    width: 2.4rem;
    height: 1.7rem;
  `}
`;

export const Progress = styled(ProgressBar)`
  background: #434343;

  ${ProgressFill} {
    border-radius: 0.8rem;
    background: linear-gradient(270deg, #2bb32a 0%, #4d9d4d 49.5%, #086207 100%);
  }
`;
