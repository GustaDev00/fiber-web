import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const Loading = () => {
  const { progress, containerRef, wrapperRef } = useAnimation();
  const { loading } = C;

  return (
    <S.Loading ref={containerRef}>
      <S.Logo src="/imgs/logo.png" alt="Logo" notLazy={true} />
      <S.Background data-fs-bg={true} />

      <S.Wrapper $progress={progress} ref={wrapperRef}>
        {loading.map((step, index) => (
          <S.Step key={index} data-fs-step={++index} $index={index}>
            <S.Text>{step.text}</S.Text>
            <S.Img
              src={step.img}
              alt={`Loading img ${index + 1}`}
              notLazy={true}
            />
          </S.Step>
        ))}
      </S.Wrapper>
    </S.Loading>
  );
};
