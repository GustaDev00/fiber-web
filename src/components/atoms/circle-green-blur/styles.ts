import styled from "styled-components";

export const CircleGreenBlur = styled.div`
  position: absolute;
  border-radius: 50%;
  background: #2bb32a;
  filter: blur(25rem);
  will-change: filter;
  opacity: 0.6;
  z-index: 0;
`;
