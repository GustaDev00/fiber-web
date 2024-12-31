import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { LazyImage } from "@/components/atoms/lazy-image";

export const Intro = styled.section`
  position: relative;
  padding: 10rem 0;

  ${mediaMaxWidth("mobile")`
    padding: 0 0 10rem;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 5.4rem;
  font-weight: 700;
  text-align: center;

  span {
    color: #5eca83;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2.4rem;
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

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 2.6rem;
  align-items: center;
  justify-content: center;
  margin: 10.7rem 0;
  z-index: 1;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 0 1.8rem;
  `}

  ${mediaMaxWidth("mobile")`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 5rem 0;
  `}
`;

export const Card = styled.a``;

export const Content = styled.div`
  position: relative;
`;

export const Image = styled(LazyImage)`
  width: 64.1rem;
  height: 53.2rem;
  border-radius: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.15);
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;
  `}
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 2.1rem;
  left: 2.4rem;

  ${mediaMaxWidth("mobile")`
    bottom: 1.5rem;
    left: 1.8rem;
  `}
`;

export const Subtitle = styled.h3`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 400;
  margin-bottom: 3.2rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.4rem;
    margin-bottom: 2.2rem;
  `}
`;

export const List = styled.ul`
  display: flex;
  gap: 1.8rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 1.3rem;
  `}
`;

export const Item = styled.li`
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -2%;
    left: -0.5%;
    border-radius: 29rem;
    padding: 0.1rem;
    background: linear-gradient(to left, #ffffff, #ffffff00, #ffffff);
    background-size: 200%;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    background-position: 15% 0%;
    transition: background-position 1s ease;
  }

  &:hover::before {
    background-position: 80% 0%;
  }
`;

export const Text = styled.p`
  position: relative;
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.65rem 3.9rem;

  border-radius: 29rem;
  background: linear-gradient(90deg, #39b965 0%, rgba(94, 202, 131, 0.4) 100%);
  box-shadow: 0 0.4rem 1.6rem 0 rgba(0, 0, 0, 0.1);
  z-index: 1;

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    padding: 1rem 4.3rem;
  `}
`;

export const Icon = styled.div`
  width: fit-content;
  border-radius: 10rem;
  background: #fff;
  padding: 1.3rem 2rem;
`;
