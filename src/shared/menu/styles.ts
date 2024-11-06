import styled, { css } from "styled-components";

export const Menu = styled.div`
  position: fixed;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  padding: 1.6rem 5.6rem;
  border-radius: 29rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(0.5rem);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const Item = styled.li``;

export const Link = styled.a<{ $icon?: boolean }>`
  color: #fff;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 100;
  display: flex;
  align-items: center;

  ${({ $icon }) =>
    $icon &&
    css`
      padding: 1rem 4.2rem;
      border-radius: 4rem;
      background: #3e3e3e;
    `}

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
