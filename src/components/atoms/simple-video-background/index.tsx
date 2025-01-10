import React, { useRef, useEffect, useState } from "react";
import { SimpleVideoBackgroundProps } from "./props";
import * as S from "./styles";

const SimpleVideoBackground = ({ src, type, fallbackImage }: SimpleVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoNode = videoRef.current; // Copy ref to a variable
    const checkVideo = () => {
      if (videoNode && videoNode.readyState >= 3) {
        setVideoLoaded(true);
      }
    };

    videoNode?.addEventListener("loadeddata", checkVideo);

    return () => {
      videoNode?.removeEventListener("loadeddata", checkVideo);
    };
  }, []);

  return (
    <S.LocalVideo>
      <S.Shadow />
      {!videoLoaded && <S.FallbackImage style={{ backgroundImage: `url(${fallbackImage})` }} />}
      <S.Video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
      >
        <source src={src} type={type} />
        Seu navegador não suporta vídeos.
      </S.Video>
    </S.LocalVideo>
  );
};

export default SimpleVideoBackground;
