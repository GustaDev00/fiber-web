import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";

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
  margin-bottom: 13.6rem;
`;

export const Container = styled.div``;

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
`;

export const Logo = styled(LazyImage)``;
