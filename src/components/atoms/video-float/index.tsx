import React, { useState } from "react";
import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const VideoFloat = () => {
  const { video } = C;
  const { sectionRef } = useAnimation();
  const [isClosed, setIsClosed] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <S.VideoFloat ref={sectionRef} $isClosed={isClosed} $open={open}>
      <S.Controls>
        <S.Open onClick={handleOpen}>
          <S.Arrow />
        </S.Open>
        <S.Close onClick={handleClose}>
          <S.CloseIcon />
        </S.Close>
      </S.Controls>
      <S.Video src={video.src} muted loop playsInline>
        <source {...video} />
      </S.Video>
    </S.VideoFloat>
  );
};
