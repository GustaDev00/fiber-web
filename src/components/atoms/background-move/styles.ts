import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const CanvasBackground = styled.canvas`
  position: absolute;
  top: 5vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  pointer-events: none;
  z-index: -1;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: 60vh;
  `}
`;
