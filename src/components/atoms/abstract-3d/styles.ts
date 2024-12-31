import styled from "styled-components";
import { lazy, Suspense as _Suspense } from "react";
import { mediaMaxWidth } from "@/utils/media-query";

export const Abstract = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 51rem;
  position: relative;
  overflow: hidden;

  ${mediaMaxWidth(1600)`
    height: 48rem;
  `}

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 30rem;
    height: 27rem;
  `}
`;

export const Wrapper = styled.div`
  position: relative;
  mask-image: radial-gradient(circle, black 70%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle, black 70%, transparent 100%);
  mask-size: cover;
  -webkit-mask-size: cover;

  ${mediaMaxWidth("mobile")`
    left: -6rem;  
  `}
`;

export const SplineWrapper = styled.div`
  width: 100%;
  height: 100%;

  canvas {
    width: 48rem !important;
    height: 64rem !important;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      width: 30rem !important;
      height: 40rem !important;
    `}
  }
`;

export const Spline = lazy(() => import("@splinetool/react-spline"));

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
