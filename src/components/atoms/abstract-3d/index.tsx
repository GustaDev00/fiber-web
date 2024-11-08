import * as S from "./styles";
import useAnimation from "./animation";

export const Abstract3d = () => {
  const { containerRef, imgRef } = useAnimation();

  return (
    <S.Abstract3d ref={containerRef}>
      <S.Img src="./imgs/abstract.png" alt="Abstract" ref={imgRef} />
    </S.Abstract3d>
  );
};
