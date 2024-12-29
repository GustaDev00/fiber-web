import { LazyImage } from "@/components/atoms/lazy-image";
import styled from "styled-components";

export const CardClients = styled.div`
  padding-bottom: 20rem;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem 2.2rem;
`;

export const Card = styled.a``;

export const Content = styled.div`
  position: relative;
`;

export const Image = styled(LazyImage)`
  width: 100%;
  height: 100%;
  background: rgba(211, 211, 211, 0.5);
  border-radius: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.5);
  object-fit: cover;
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 2.1rem;
  left: 2.4rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 1.8rem;
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
`;
