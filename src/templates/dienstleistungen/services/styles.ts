import { LazyImage } from "@/components/atoms/lazy-image";
import { TextSmallArticle } from "@/styles/components/subtitle";
import { TitleMedium, TitleSmall } from "@/styles/components/titles";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Service = styled.section``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 9.6rem;
`;

export const Icon = styled.div`
  position: absolute;
  padding: 2.4rem 4.7rem;
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.black005};
  background: ${({ theme }) => theme.white};
  box-shadow: 0 1.5rem 2.8rem 0 ${({ theme }) => theme.black005};

  ${mediaMaxWidth("mobile")`
    padding: 2rem 4rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  gap: 9.1rem;
  align-items: flex-start;

  &:last-child {
    ${Icon} {
      bottom: 2.1rem;
      right: 2.7rem;

      svg {
        width: 4.3rem;
        height: 4.8rem;
      }
    }
  }

  &:first-child {
    ${Icon} {
      bottom: 3.4rem;
      left: 3.1rem;

      svg {
        width: 5.1rem;
        height: 4.5rem;
      }
    }
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap 6.4rem;
  `}
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

export const Video = styled.video`
  width: 64.9rem;
  height: 67.4rem;
  object-fit: cover;

  &:last-child {
    width: 64.9rem;
    height: 55.7rem;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 34.6rem;
    height: 54.8rem;
    object-fit: cover;

    &:last-child {
      width: 34.6rem;
      height: 55.7rem;
    }
  `}
`;

export const Image = styled(LazyImage)<{ $css: string }>`
  width: 64.9rem;
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 34.6rem;
  `}

  ${({ $css }) => $css}
`;

export const Article = styled.article``;

export const Title = styled.h2`
  ${TitleMedium}
`;

export const Texts = styled.div`
  margin-top: 6.1rem;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  ${mediaMaxWidth("mobile")`
    margin-top: 4.1rem;
  `}
`;

export const Subtitle = styled.h3`
  position: relative;
  padding-left: 3rem;
  margin-top: 1.7rem;

  ${TitleSmall}

  color: ${({ theme }) => theme.eerieBlack};
  line-height: 4.2rem;
  letter-spacing: -0.0003rem;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0.4rem;
    background: ${({ theme }) => theme.rosewood};
  }
`;

export const Text = styled.p`
  ${TextSmallArticle}
`;
