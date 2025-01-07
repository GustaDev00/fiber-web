import * as S from "./styles";
import { ButtonSwipeProps } from "./props";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowDownIcon } from "@/components/svgs/arrow-down";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSwipe = ({ href, className, children, ...props }: ButtonSwipeProps) => {
  return href ? (
    <S.LinkSwipe
      className={className}
      {...(props as LinkProps)}
      href={href}
      data-fs-link="hover"
      target="_blank"
    >
      <S.Span>{children}</S.Span>
      <S.Icon>
        <ArrowDownIcon />
      </S.Icon>
    </S.LinkSwipe>
  ) : (
    <S.ButtonSwipe className={className} {...(props as ButtonProps)} data-fs-link="hover">
      <S.Span>{children}</S.Span>
      <S.Icon>
        <ArrowDownIcon />
      </S.Icon>
    </S.ButtonSwipe>
  );
};
