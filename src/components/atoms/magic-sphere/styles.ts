import styled from "styled-components";
import { Suspense as _Suspense } from "react";
import { mediaMaxWidth } from "@/utils/media-query";

export const Magic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54rem;
  height: 46rem;
  position: relative;
  overflow: hidden;

  ${mediaMaxWidth(1600)`
    height: 50rem;
  `}

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 40rem;
    height: 40rem;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 64rem;
  height: 46rem;
  mask-image: radial-gradient(circle, black 70%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle, black 70%, transparent 100%);
  mask-size: cover;
  -webkit-mask-size: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    left: 6rem;
    width: 50rem;
    height: 50rem;
  `}

  ${mediaMaxWidth("mobile")`
    left: -4rem;
  `}
`;

export const SplineWrapper = styled.div`
  width: 100%;
  height: 100%;

  canvas {
    width: 54rem !important;
    height: 54rem !important;
  }
`;

export const Suspense = _Suspense;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  color: #999;
`;
