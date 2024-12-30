import { ColorFamily } from "@/styles/theme";

export interface ProgressBarProps {
  duration?: number;
  color?: ColorFamily;
  colorContainer?: ColorFamily;
  isActive?: boolean;
  className?: string;
}
