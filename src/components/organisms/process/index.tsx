import * as S from "./styles";
import C from "@/constants";
import useAnimation from "./animation";
import { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

export const Process = () => {
  const [selected, setSelected] = useState(1);
  const { sectionRef, isInView } = useAnimation();
  const { title, description, video, items } = C.process;
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const scrollToSlider = useCallback(() => {
    const slider = document.querySelector("#slider");

    if (slider) {
      const offset = 300;
      const topPosition = slider.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }, []);

  const handleOptionClick = useCallback(
    (id: number) => {
      setSelected(id);

      if (isMobile) {
        scrollToSlider();
      }
    },
    [isMobile, scrollToSlider],
  );

  useEffect(() => {
    const startAutoplay = () => {
      return setInterval(() => {
        setSelected((prevSelected) => {
          const nextSelected = prevSelected === items.length ? 1 : prevSelected + 1;
          return nextSelected;
        });
      }, 8200);
    };

    let interval: NodeJS.Timeout | undefined;

    if (isInView) {
      interval = startAutoplay();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView, items.length]);

  return (
    <S.Process ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.List>
            {items.map(({ id, title }) => (
              <S.Options key={id} onClick={() => handleOptionClick(id)} $selected={selected === id}>
                <S.Number>{id.toString().padStart(2, "0")}</S.Number>
                <S.Text>{title}</S.Text>
                <S.Icon />
              </S.Options>
            ))}
          </S.List>
        </S.Content>
        <S.Container id="slider">
          <S.Slider>
            {items.map(({ id, text }) => (
              <S.Item key={id} $selected={selected === id}>
                <S.Mensage>{text}</S.Mensage>
                <S.Progress isActive={isInView && selected === id} duration={8} />
              </S.Item>
            ))}
          </S.Slider>
          <S.Video autoPlay loop muted playsInline controls={false} preload="auto">
            <source src={video.src.replace(".mp4", ".webm")} type="video/webm" />
            <source {...video} />
            Seu navegador não suporta vídeos.
          </S.Video>
        </S.Container>
      </S.Wrapper>
    </S.Process>
  );
};
