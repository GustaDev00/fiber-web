import styled from "styled-components";
import { ColorFamily } from "@/styles/theme";

export const ProgressBarContainer = styled.div<{ $color?: ColorFamily }>`
  width: 100%;
  background-color: ${({ theme, $color }) => ($color ? theme[$color] : "transparent")};
  height: 5px;
  border-radius: 3px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{
  $color: ColorFamily;
}>`
  width: 0%;
  background-color: ${({ theme, $color }) => theme[$color]};
  height: 100%;
`;
