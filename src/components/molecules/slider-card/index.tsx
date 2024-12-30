import * as S from "./styles";
import { ReactNode, useEffect, useRef, useState, useCallback } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useAnimation from "./animation";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

export const SliderCard = ({ content }: { content: ReactNode[] }) => {
  const { ref, isInView } = useAnimation();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current) return;

    const startAutoplay = () => {
      return setInterval(() => {
        if (swiperRef.current && swiperRef.current.isEnd) {
          swiperRef.current.slideTo(0);
          setActiveIndex(0);
        } else {
          swiperRef.current?.slideNext();
          setActiveIndex(swiperRef.current?.realIndex || 0);
        }
      }, 8200);
    };

    let interval: NodeJS.Timeout | undefined;

    if (isInView) {
      interval = startAutoplay();
    } else {
      swiperRef.current.autoplay?.stop();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView]);

  const handleSlideChange = useCallback(() => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (!swiperInstance) return;

    swiperInstance.on("slideChange", handleSlideChange);

    return () => {
      swiperInstance.off("slideChange", handleSlideChange);
    };
  }, [handleSlideChange]);

  return (
    <S.SliderCard ref={ref}>
      <Swiper
        effect="cards"
        modules={[EffectCards]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <S.Container>
              <S.Wrapper>
                <S.Icon />
                <S.Text>{item}</S.Text>
              </S.Wrapper>
              <S.Progress isActive={isInView && activeIndex === index} duration={8} />
            </S.Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SliderCard>
  );
};
