import { LazyImage } from "@/components/atoms/lazy-image";
import { SubtitleLight } from "@/styles/components/subtitle";
import { TitleBig } from "@/styles/components/titles";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const AboutUsContainer = styled.section`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: calc(100% - (16.3rem * 2));
    height: 0.1rem;
    background: ${({ theme }) => theme.black015};

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      width: calc(100% - (4rem * 2));
    `}

    ${mediaMaxWidth("mobile")`
      width: calc(100% - (2.2rem * 2))
    `}
  }
`;

export const Wrapper = styled(_Wrapper)`
  gap: 10.4rem;
  align-items: flex-start;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  ${TitleBig}
`;

export const Subtitle = styled.p`
  ${SubtitleLight}

  color: ${({ theme }) => theme.eerieBlack};
  margin: 5rem 0 8.6rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Item = styled.li`
  display: flex;
  gap: 4.6rem;
  align-items: center;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const Icon = styled.div`
  width: 11.2rem;
  height: 11.2rem;
  border-radius: 5.6rem;
  background: ${({ theme }) => theme.rosewood015};
  display: flex;
  align-self: center;
  justify-content: center;

  ${mediaMaxWidth("mobile")`
    margin: 0 auto 0 0
  `}
`;

export const Svg = styled.img`
  width: 4.4rem;
  height: 4.4rem;
  margin: auto;
`;

export const Article = styled.article`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const TitleArticle = styled.h3`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: -0.1417rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.4rem;
  letter-spacing: -0.0002rem;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding-bottom: 10rem;
  `}

  ${mediaMaxWidth("mobile")`
    padding-bottom: 12rem;
  `}
`;

export const ImgSmall = styled(LazyImage)`
  width: 44.4rem;
  height: 29.1rem;
  object-fit: contain;
  position: absolute;
  bottom: -10rem;
  right: 20rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    left: 13rem;
    bottom: 5rem;
  `}

  ${mediaMaxWidth("mobile")`
    width: 28rem;
    height: 32rem;
  `}

${mediaMaxWidth("mobile")`
    left: 3rem;
    bottom: 0rem;
  `}
`;

export const ImgBig = styled(LazyImage)`
  width: 53.8rem;
  height: 94.7rem;
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    margin-left: 30rem;
  `}

  ${mediaMaxWidth("mobile")`
    height: 55.7rem;
    width: 34.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    margin-left: 0;
  `}
`;
