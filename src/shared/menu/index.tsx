"use client";

import { usePathname } from "next/navigation";
import useAnimation from "./animation";
import * as S from "./styles";
import C from "@/constants";

export const Menu = () => {
  const { ref } = useAnimation();
  const { navigation } = C.data;
  const pathname = usePathname();

  return (
    <S.Menu ref={ref}>
      <S.List>
        {navigation.map(({ title, icon: Icon, href }) => {
          // Verifica se a rota está ativa
          const isActive =
            pathname === href || // Match exato
            (href !== "/" && pathname.startsWith(href)); // Match com prefixo

          return (
            <S.Item key={title}>
              <S.Link href={href} title={title} $icon={isActive}>
                {isActive ? <Icon className="icon-home" /> : title}
              </S.Link>
            </S.Item>
          );
        })}
      </S.List>
    </S.Menu>
  );
};
