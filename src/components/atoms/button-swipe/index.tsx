import * as S from "./styles";
import { ButtonSwipeProps } from "./props";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ArrowDownIcon } from "@/components/svgs/arrow-down";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSwipe = ({ href, className, children, ...props }: ButtonSwipeProps) => {
  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const chatButton = document.querySelector("#chatbase-bubble-button");
    if (chatButton) {
      (chatButton as HTMLButtonElement).click();
    }
  };
  return href ? (
    <S.LinkSwipe className={className} {...(props as LinkProps)} href={href} onClick={handleClick}>
      <S.Span>{children}</S.Span>
      <S.Icon>
        <ArrowDownIcon />
      </S.Icon>
    </S.LinkSwipe>
  ) : (
    <S.ButtonSwipe className={className} {...(props as ButtonProps)}>
      <S.Span>{children}</S.Span>
      <S.Icon>
        <ArrowDownIcon />
      </S.Icon>
    </S.ButtonSwipe>
  );
};
