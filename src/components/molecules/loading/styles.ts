import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import styled, { css } from "styled-components";

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: none;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #39b965;
`;

export const Logo = styled(LazyImage)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 5.7rem;
  object-fit: contain;
  z-index: 2;

  ${mediaMaxWidth("mobile")`
    height: 4rem;
  `}
`;

export const Wrapper = styled.div<{ $progress: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s ease, visibility 0.4s ease;

  ${({ $progress }) => css`
    opacity: ${$progress === 1 ? 0 : 1};
    visibility: ${$progress === 1 ? "hidden" : "visible"};
  `}
`;

export const Step = styled.div<{ $index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ $index }) => 10 - $index};
`;

export const Text = styled.p`
  position: absolute;
  color: #fff;
  font-size: 8.2rem;
  font-weight: 700;
  z-index: 10;

  ${mediaMaxWidth("mobile")`
    font-size: 5.4rem;
  `}
`;

export const Img = styled(LazyImage)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
`;
