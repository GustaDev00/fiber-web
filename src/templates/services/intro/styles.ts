import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { ArrowInclineIcon } from "@/components/svgs/arrow-incline";
import { LazyImage } from "@/components/atoms/lazy-image";

export const Intro = styled.section`
  position: relative;
  padding: 10rem 0;

  ${mediaMaxWidth("mobile")`
    padding: 10rem 0;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  align-items: flex-start;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    gap: 14rem;
  `}
`;

export const Article = styled.article`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: flex-start;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;
    gap: 2rem;
  `}
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 5.4rem;
  font-weight: 700;

  span {
    color: #5eca83;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2.8rem;
  `}
`;

export const Description = styled.p`
  color: #949494;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 3.8rem;

  ${mediaMaxWidth("mobile")`
    color: #949494;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3.1rem;
  `}
`;

export const Img = styled(LazyImage)`
  width: 58.2rem;
  height: 52.1rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 31.6rem;
    height: 20rem;
    border-radius: 1.8rem;
  `}
`;

export const Link = styled.a`
  width: fit-content;
  padding: 2.7rem 4.1rem;
  border-radius: 12.2rem;
  border: 0.1rem solid #fff;
  background: #fff;
  color: #000;
  font-size: 2.6rem;
  font-weight: 400;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    padding: 1.2rem 2.8rem;
  `}
`;

export const Content = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

export const Item = styled.li`
  padding: 2.7rem 3rem;
  border-radius: 0.8rem;
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -2%;
    left: -0.5%;
    border-radius: 0.8rem;
    padding: 0.1rem;
    background: linear-gradient(to top, #ffffff, #ffffff00, #ffffff00);
    background-size: 200%;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    background-position: 15% 0%;
    transition: background-position 1s ease;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 2.4rem 3rem;
  `}
`;

export const Subtitle = styled.h3`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2.2rem;
  gap: 2rem;

  svg {
    width: 3.6rem;
    height: 3.6rem;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column-reverse;
    align-items: flex-start;
  `}
`;

export const Text = styled.p`
  color: #949494;
  font-size: 2rem;
  font-weight: 400;
  line-height: 4rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 2.4rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    line-height: 2.1rem;
  `}
`;
