import gsap from "gsap";
import { useEffect, useRef } from "react";

export default () => {
  const servicesRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!servicesRef.current) return;

      servicesRef.current.forEach((service, index) => {
        if (service) {
          gsap.fromTo(
            service,
            { clipPath: "inset(100% 0 0 0)" },
            {
              clipPath: "inset(0% 0 0 0)",
              duration: 6,
              delay: index * 1,
              scrollTrigger: {
                trigger: service,
                start: index === 1 ? "center bottom" : "top bottom",
                end: index === 1 ? "top center-=200" : "top center+=200",
                scrub: 1,
                markers: false,
              },
            },
          );
        }
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return {
    servicesRef,
  };
};
