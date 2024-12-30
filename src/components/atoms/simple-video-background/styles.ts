import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const LocalVideo = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const Video = styled.video`
  ${mediaMaxWidth("mobile")`
    object-position: 30%;
  `}
`;

export const FallbackImage = styled.div``;

export const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
