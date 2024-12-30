import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";
import { mediaMaxWidth } from "@/utils/media-query";
import { LazyImage } from "@/components/atoms/lazy-image";

export const Section = styled.section`
  position: relative;
  margin: 10rem 0;
`;

export const Wrapper = styled(_Wrapper)`
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  flex-direction: column;
  color: #fff;
  font-size: 8.2rem;
  font-weight: 700;
  margin: 9rem 0 10.8rem;
  text-align: center;

  span {
    color: #5eca83;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 4.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
  `}
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6.9rem 9.7rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${mediaMaxWidth("mobile")`
    grid-template-columns: 1fr;
    gap: 4rem;
  `}
`;

export const Container = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2.2rem;
  border: 0.1rem solid rgba(47, 100, 65, 0.6);
  background: linear-gradient(180deg, #126812 43.08%, #1b821a 72.4%, #0e410e 100%);
  display: flex;
  align-items: flex-end;
  padding: 4.4rem 3rem;
  transition: opacity 0.4s ease, visibility 0.4s ease;

  &::before {
    position: absolute;
    top: 50%;
    transform: translateY(-30%);
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url("/imgs/team/effects.png") no-repeat;
  }

  ${mediaMaxWidth("mobile")`
     padding: 2rem 2rem;
  `}
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 2.6rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
  `}
`;

export const Content = styled.div`
  position: absolute;
  padding: 4.4rem 3rem;
  bottom: 0;
  left: 0;
  border-radius: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.3rem;
  transition: bottom 0.4s ease;

  ${mediaMaxWidth("mobile")`
     gap: 0.6rem;
     padding: 2rem 2rem;
  `}
`;

export const Name = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  line-height: 2.6rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.2rem;
  `}
`;

export const Role = styled.p`
  color: #5eca83;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.6rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
  `}
`;

export const Item = styled.li`
  position: relative;
  width: 40rem;
  height: 53.5rem;
  border-radius: 2.2rem;

  &:hover {
    ${Container} {
      opacity: 1;
      visibility: visible;
    }

    ${Content} {
      bottom: calc(90% - 8.8rem);

      ${mediaMaxWidth("mobile")`
        bottom: calc(90% - 6rem);
      `}
    }
  }

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 40rem;
  `}
`;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2.2rem;
`;

const Circle = styled(CircleGreenBlur)`
  width: 38.6rem;
  height: 38.6rem;
`;

export const Circle1 = styled(Circle)`
  top: 24rem;
  left: -20rem;
`;

export const Circle2 = styled(Circle)`
  top: -15rem;
  right: -10rem;
`;

export const Circle3 = styled(Circle)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 81.3rem;
  height: 168.6rem;
  border-radius: 168.6rem;
  border: 0.1rem solid rgba(94, 202, 131, 0.6);
  opacity: 0.2;
`;

export const Line1 = styled(Line)``;

export const Line2 = styled(Line)`
  position: absolute;
  transform: rotate(-90deg);
`;
