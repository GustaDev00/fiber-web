import styled from "styled-components";
import { lazy, Suspense as _Suspense } from "react";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64rem;
  height: 64rem;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 74rem;
  height: 74rem;
  mask-image: radial-gradient(circle, black 70%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle, black 70%, transparent 100%);
  mask-size: cover;
  -webkit-mask-size: cover;
`;

export const SplineWrapper = styled.div`
  width: 100%;
  height: 100%;
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
