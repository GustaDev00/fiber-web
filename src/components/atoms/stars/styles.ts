import styled from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";

export const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24rem;
  height: 24rem;
  position: relative;
  overflow: hidden;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 24rem;
    height: 24rem;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  mask-image: radial-gradient(circle, black 70%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle, black 70%, transparent 100%);
  mask-size: cover;
  -webkit-mask-size: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    left: 0rem;
  `}
`;

export const SplineWrapper = styled.div`
  width: 100%;
  height: 100%;

  canvas {
    width: 64rem !important;
    height: 64rem !important;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  color: #999;
`;
