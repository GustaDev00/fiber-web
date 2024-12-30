import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Abstract3d = styled.div`
  margin-top: 9rem;
`;

export const Img = styled.img`
  width: 28.4rem;
  height: 30.5rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 15.8rem;
    height: 17.8rem;
    object-fit: contain;
  `}
`;
