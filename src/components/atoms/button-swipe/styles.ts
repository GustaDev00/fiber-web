import { mediaMaxWidth } from "@/utils/media-query";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Span = styled.span`
  position: relative;
  left: -3rem;
  transition: left 0.4s ease;
`;

export const Icon = styled.div`
  position: absolute;
  right: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background: #000000;
  transition: right 0.4s ease, transform 0.4s ease;

  svg {
    width: 2rem;
    height: 2rem;
    transform: rotate(-90deg);
  }
`;

const swipeStyles = css`
  cursor: pointer;
  padding: 1.75rem 7rem;
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  border-radius: 3.6rem;
  background: #fff;
  transition: box-shadow 0.3s ease;

  color: #000000;
  font-size: 2.4rem;
  font-weight: 400;

  &:hover {
    ${Icon} {
      transform: rotate(45deg);
      right: calc(90% - 3rem);
    }

    ${Span} {
      left: calc(80% - 14rem);
    }
  }

  ${mediaMaxWidth("mobile")`
    padding: 1.7rem 7rem;
  `}
`;

export const ButtonSwipe = styled.button`
  ${swipeStyles}
`;

export const LinkSwipe = styled(Link)`
  ${swipeStyles}
`;
