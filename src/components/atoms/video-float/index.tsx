import React, { useState, useRef } from "react";
import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";

export const VideoFloat = () => {
  const { video } = C;
  const [open, setOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [forceClose, setForceClose] = useState(false);
  const { sectionRef } = useAnimation({ setIsClosed });
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    setForceClose(true);

    if (videoRef.current) {
      videoRef.current.muted = open;
    }
  };

  const handleOpen = () => {
    setOpen(!open);
    if (videoRef.current) {
      videoRef.current.muted = open;
    }
  };

  return (
    <S.VideoFloat ref={sectionRef} $isClosed={isClosed} $open={open} $forceClose={forceClose}>
      <S.Controls>
        <S.Open onClick={handleOpen}>
          <S.Arrow />
        </S.Open>
        <S.Close onClick={handleClose}>
          <S.CloseIcon />
        </S.Close>
      </S.Controls>
      <S.Video ref={videoRef} src={video.src} muted loop playsInline>
        <source {...video} />
      </S.Video>
    </S.VideoFloat>
  );
};
