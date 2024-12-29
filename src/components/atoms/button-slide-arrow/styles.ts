import styled from "styled-components";

export const Icon = styled.div`
  position: absolute;
  right: 0.6rem;
  width: 4.9rem;
  height: 4.9rem;
  background: #5eca83;
  border-radius: 12.2rem;
  display: flex;
  align-items: center;
  transition: width 0.8s ease, background 0.8s ease;
  z-index: 2;
  overflow: hidden;

  svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1.5rem;
    transition: transform 0.8s ease;
  }
`;

export const Span = styled.span`
  position: relative;
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Text = styled.span`
  position: absolute;
  left: 4.9rem;
  color: #fff;
  text-align: left;
  font-size: 1.8rem;
  font-weight: 400;
  width: 30rem;
  transition: opacity 0.8s ease, visibility 0.8s ease;
`;

export const ButtonSlideArrow = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;
  border-radius: 12.2rem;
  border: 0.1rem solid #fff;
  width: fit-content;
  height: calc(4.9rem + 1.2rem);
  padding: 0.6rem calc(4.9rem + 1.6rem) 0.6rem 3.2rem;

  &:hover {
    ${Icon} {
      width: calc(100% - 1.2rem);
      background: #2c613e;

      svg {
        transform: rotate(-360deg);
      }
    }

    ${Text} {
      width: 30rem;
      opacity: 1;
      visibility: visible;
  }
`;
