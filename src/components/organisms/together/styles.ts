import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { SliderCard as _SliderCard } from "@/components/molecules/slider-card";

export const Together = styled.div`
  padding-bottom: 138rem;
`;

export const Wrapper = styled(_Wrapper)`
  justify-content: center;
`;

export const Content = styled.div``;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 7rem;
  font-weight: 700;
`;

export const Container = styled.div`
  position: relative;
  margin-top: 26rem;
`;

export const SliderCard = styled(_SliderCard)``;

export const SliderLogo = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BgList = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
  padding-right: 8rem;
  opacity: 0.65;
`;

export const Logo = styled(LazyImage)``;
