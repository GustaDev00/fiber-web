import { useEffect, useState, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { type RouterLoadingHandler } from "@/hooks/use-router-progress-handler/props";

// Utilitário para extrair URL de imagem de um background CSS
const extractImageUrl = (backgroundImage: string): string => {
  return backgroundImage.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
};

export const useRouterLoadingHandler: RouterLoadingHandler = () => {
  const [percentage, setPercentage] = useState(0);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleRouteChangeStart = useCallback(() => {
    setPercentage(0);
  }, []);

  const getBackgroundImages = useCallback((): string[] => {
    const array: string[] = [];
    const backgroundElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-lazy="false"]'),
    );

    backgroundElements.forEach((bg) => {
      const styles = [
        bg.style.backgroundImage,
        window.getComputedStyle(bg, ":before").backgroundImage,
        window.getComputedStyle(bg, ":after").backgroundImage,
      ];

      styles.forEach((style) => {
        if (style && style !== "none") {
          array.push(extractImageUrl(style));
        }
      });
    });

    return array;
  }, []);

  const handleRouteChangeComplete = useCallback(() => {
    const images = Array.from(document.querySelectorAll<HTMLImageElement>('img[loading="eager"]'));
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("video:not(.lazy)"));
    const fonts = Array.from(document.querySelectorAll<HTMLLinkElement>("link[rel=stylesheet]"));
    const backgrounds = getBackgroundImages();
    const threeDModels = Array.from(document.querySelectorAll<HTMLElement>('[data-3d="true"]'));

    const mediaCount =
      images.length + videos.length + fonts.length + backgrounds.length + threeDModels.length;

    if (mediaCount === 0) {
      setPercentage(1);
      return;
    }

    let loadedMedia = 0;

    const onLoadMedia = (): void => {
      loadedMedia++;
      const newPercentage = loadedMedia / mediaCount;
      setPercentage(newPercentage);
    };

    const attachLoadEvent = (element: HTMLElement, event: string, isLoaded: boolean) => {
      if (isLoaded) {
        onLoadMedia();
      } else {
        element.addEventListener(event, onLoadMedia, { once: true });
      }
    };

    images.forEach((image) => attachLoadEvent(image, "load", image.complete));
    videos.forEach((video) => attachLoadEvent(video, "canplaythrough", video.readyState >= 3));
    fonts.forEach((font) => attachLoadEvent(font, "load", !!font.sheet));

    backgrounds.forEach((bg) => {
      const img = new Image();
      img.src = extractImageUrl(bg);
      attachLoadEvent(img, "load", img.complete);
    });

    threeDModels.forEach((model) => attachLoadEvent(model, "load", false));
  }, [getBackgroundImages]);

  useEffect(() => {
    handleRouteChangeComplete();

    return () => {
      handleRouteChangeStart();
    };
  }, [
    pathname,
    searchParams,
    handleRouteChangeComplete,
    handleRouteChangeStart,
    getBackgroundImages,
  ]);

  return percentage;
};
