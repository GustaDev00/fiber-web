import styled, { css } from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ProgressBar } from "@/components/atoms/progress-bar";
import { mediaMaxWidth } from "@/utils/media-query";
import { FaArrowRight } from "react-icons/fa6";
import { ProgressFill } from "@/components/atoms/progress-bar/styles";

export const Process = styled.div``;

export const Wrapper = styled(_Wrapper)`
  padding-top: 18rem;
  gap: 8.1rem;
  justify-content: space-between;
  align-items: flex-end;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    width: 100%;
    height: 0.1rem;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.35) 0%, rgba(153, 153, 153, 0) 100%);
  }

  ${mediaMaxWidth("mobile")`
    padding-top: 0;
    gap: 3rem;

    &::before {
      display: none;
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 7rem;
  font-weight: 700;

  span {
    color: #5eca83;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 5.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 2.8rem;
    text-align: center;
  `}
`;

export const Description = styled.p`
  margin-top: 6rem;
  opacity: 0.8;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.2rem;
  margin-bottom: 3.2rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 1.8rem;
    line-height: 3.2rem;
    margin-top: 5rem;
  `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

export const Options = styled.li<{ $selected?: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 4rem 5.8rem;
  border-radius: 7.2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.25);
  background: transparent;
  color: #fff;
  transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;

  ${({ $selected }) =>
    $selected &&
    css`
      color: #000;
      background: #fff;
      border-color: transparent;
    `}

  ${mediaMaxWidth("mobile")`
      padding: 2rem 2.4rem;
    `}
`;

export const Number = styled.span`
  text-align: center;
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 2rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
  `}
`;

export const Text = styled.p`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 400;

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
  `}
`;

export const Icon = styled(FaArrowRight)`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: auto;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Container = styled.div`
  width: 100%;
`;

export const Slider = styled.div`
  position: relative;
  border-radius: 3.1rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  height: 34.3rem;
  width: 76.3rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const Item = styled.div<{ $selected?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  border-radius: 3.1rem;
  top: 0;
  background: #1c1c1c;
  padding: 0 4.2rem;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;

  &:first-child {
    position: relative;
  }

  ${({ $selected }) => $selected && `opacity: 1; visibility: visible;`}

  ${mediaMaxWidth("mobile")`
    padding: 0 2.4rem;
  `}
`;

export const Mensage = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  line-height: 4.2rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    line-height: 3rem;
  `}
`;

export const Progress = styled(ProgressBar)`
  background: #434343;

  ${ProgressFill} {
    border-radius: 0.8rem;
    background: linear-gradient(270deg, #2bb32a 0%, #4d9d4d 49.5%, #086207 100%);
  }
`;

export const Video = styled.video`
  width: 76.3rem;
  height: 35.1rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;
