import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { Logo as _Logo } from "@/components/atoms/logo";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { mediaMaxWidth } from "@/utils/media-query";

export const Footer = styled.footer`
  position: relative;
`;

const Circle = styled(CircleGreenBlur)`
  width: 386px;
  height: 386px;
  bottom: 5rem;

  ${mediaMaxWidth("mobile")`
    filter: blur(50rem);
  `}
`;

export const Circle1 = styled(Circle)`
  left: 0;
`;

export const Circle2 = styled(Circle)`
  right: 0;
`;

export const Wrapper = styled(_Wrapper)`
  padding-bottom: 5rem;
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 1.8rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.45);
  padding: 8.2rem 16rem 6.4rem;

  ${mediaMaxWidth("mobile")`
    padding: 8.2rem 2.4rem 6.4rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 17.3rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 6.2rem;
  `}
`;

export const Column = styled.div``;

export const Logo = styled(_Logo)``;

export const Description = styled.p`
  margin-top: 4rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.6rem;
`;

export const Title = styled.h4`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 130%;
`;

export const List = styled.ul`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Item = styled.li`
  color: #8c8c8c;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
`;

export const Link = styled.a``;

export const Line = styled.div`
  margin: 7.2rem 0;
  width: 100%;
  height: 0.1rem;
  background: rgba(255, 255, 255, 0.1);

  ${mediaMaxWidth("mobile")`
    margin: 4.8rem 0;
  `}
`;

export const Copy = styled.p`
  color: #949494;
  text-align: left;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 4.2rem;

  ${mediaMaxWidth("mobile")`
    text-align: center;
  `}
`;
