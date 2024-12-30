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

export const VideoFloat = styled.div<{
  $isClosed?: boolean;
  $open?: boolean;
  $forceClose?: boolean;
}>`
  opacity: ${({ $isClosed, $forceClose }) => ($forceClose ? 0 : $isClosed ? 0 : 1)};
  visibility: ${({ $isClosed, $forceClose }) => ($forceClose ? 0 : $isClosed ? 0 : 1)};
  position: absolute;
  width: 22.5rem;
  height: 25.9rem;
  right: 10rem;
  bottom: 6rem;
  border: 0.4rem solid transparent;
  border-radius: 2rem;
  scale: ${({ $open }) => ($open ? 1.3 : 1)};
  z-index: 10;
  transition: border-color 0.4s ease, opacity 1.6s ease, visibility 1.6s ease, scale 0.4s ease,
    position 0.4s ease;

  ${Open} {
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    transition: transform 0.4s ease;
  }

  &:hover {
    scale: ${({ $open }) => ($open ? 1.3 : 1.1)};
    border-color: #fff;

    ${Controls} {
      opacity: 1;
      visibility: visible;
    }
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    bottom: 16rem;
    right: 4rem;
  `}

  ${mediaMaxWidth("mobile")`
    width: 18rem;
    height: 20.7rem;
    right: 3.2rem;
    bottom: 4rem;
  `}
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
