import * as S from "./styles";
import { ProgressBarProps } from "./props";
import useAnimation from "./animation";

export const ProgressBar = ({
  color = "black",
  colorContainer,
  duration = 5,
  isActive = false,
  className,
}: ProgressBarProps) => {
  const { progressRef } = useAnimation({ isActive, duration });

  if (!isActive) {
    return <></>;
  }

  return (
    <S.ProgressBarContainer className={className} $color={colorContainer}>
      <S.ProgressFill ref={progressRef} $color={color} />
    </S.ProgressBarContainer>
  );
};
