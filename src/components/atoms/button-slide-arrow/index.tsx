import { FC } from "react";
import { ButtonSlideArrowProps } from "./props";
import { ArrowInclineIcon } from "@/components/svgs/arrow-incline";
import * as S from "./styles";

export const ButtonSlideArrow: FC<ButtonSlideArrowProps> = ({ title, href, className }) => (
  <S.ButtonSlideArrow title={title} href={href} className={className} data-fs-link="hover">
    <S.Span>{title}</S.Span>
    <S.Icon>
      <ArrowInclineIcon />
      <S.Text>{title}</S.Text>
    </S.Icon>
  </S.ButtonSlideArrow>
);
