import styled from "styled-components";

export const CarouselText = styled.div`
  padding: 10rem 0 9rem;
  max-width: 150rem;
  margin: auto;

  &::before,
  &::after {
    display: block;
    margin: 4rem 0;
    content: "";
    width: 100%;
    height: 0.1rem;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0.45%,
      rgba(230, 230, 230, 0.6) 69.56%,
      rgba(230, 230, 230, 0) 99.49%
    );
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  gap: 2rem;
  white-space: nowrap;

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    display: block;
    width: 20%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 1;
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

export const Text = styled.p`
  cursor: default;
  text-align: center;
  font-size: 9.3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap; /* Evitar quebra de linha no texto */
`;
