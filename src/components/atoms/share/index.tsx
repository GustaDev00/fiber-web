import { useState } from "react";
import { IconCopy } from "../svg";
import C from "@/constants";
import * as S from "./styles";

const ShareButton = () => {
  const [text, setText] = useState(C.blog.copy.copy);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setText(C.blog.copy.copied);

    setTimeout(() => {
      setText(C.blog.copy.copy);
    }, 1000);
  };

  return (
    <S.Button onClick={handleClick}>
      {text} <IconCopy />
    </S.Button>
  );
};

export default ShareButton;
