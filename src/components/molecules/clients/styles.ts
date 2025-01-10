import styled from "styled-components";
import { CarouselText as _CarouselText } from "@/components/atoms/carousel-text";
import { CardClients as _CardSclients } from "@/components/molecules/card-clients";
import { VideoFloat } from "@/components/atoms/video-float";
import { CircleGreenBlur } from "@/components/atoms/circle-green-blur";

export const Services = styled.section`
  position: relative;
  padding-bottom: 10rem;
`;

export const CarouselText = styled(_CarouselText)``;

export const CardClients = styled(_CardSclients)``;

export const Video = styled(VideoFloat)``;

export const Circle = styled(CircleGreenBlur)`
  bottom: -9rem;
  left: -4rem;
  width: 38.6rem;
  height: 38.6rem;
`;

export const Circle2 = styled(CircleGreenBlur)`
  bottom: 25rem;
  right: -5.6rem;
  width: 38.6rem;
  height: 38.6rem;
`;
