import * as S from "./styles";
import useAnimation from "./animation";

export const Loading = () => {
  const { progress, containerRef, wrapperRef } = useAnimation();

  return (
    <S.Loading ref={containerRef}>
      <S.Logo src="/imgs/logo.png" alt="Logo" notLazy={true} />
      <S.Background data-fs-bg={true} />

      <S.Wrapper $progress={progress} ref={wrapperRef}></S.Wrapper>
    </S.Loading>
  );
};
