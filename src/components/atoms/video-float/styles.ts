import styled from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";
import { GoArrowUpLeft } from "react-icons/go";
import { MdClose } from "react-icons/md";

export const Controls = styled.div`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  top: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  z-index: 12;

  svg {
    color: white;
    font-size: 2.8rem;
  }
`;

export const Close = styled.button``;

export const CloseIcon = styled(MdClose)``;

export const Open = styled.button``;

export const Arrow = styled(GoArrowUpLeft)``;

export const VideoFloat = styled.div<{ $isClosed?: boolean; $open?: boolean }>`
  opacity: ${({ $isClosed }) => ($isClosed ? 0 : 1)};
  visibility: ${({ $isClosed }) => ($isClosed ? "hidden" : "visible")};
  position: absolute;
  width: 22.5rem;
  height: 25.9rem;
  right: 10rem;
  bottom: 6rem;
  border: 0.4rem solid transparent;
  border-radius: 2rem;
  scale: ${({ $open }) => ($open ? 1.3 : 1)};
  z-index: 10;
  transition: border-color 0.4s ease, scale 0.4s ease, opacity 0.4s ease, visibility 0.4s ease,
    scale 0.4s ease;

  &:hover {
    scale: ${({ $open }) => ($open ? 1.3 : 1.1)};
    border-color: #fff;

    ${Controls} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Video = styled.video`
  object-fit: cover;
  border-radius: 1.8rem;
  width: 100%;
  height: 100%;

  ${mediaMaxWidth("mobile")`
    object-position: 30%;
  `}
`;
