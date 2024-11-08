import useAnimation from "./animation";
import * as S from "./styles";
import C from "@/constants";

export const Menu = () => {
  const { ref } = useAnimation();
  const { navigation } = C.data;

  return (
    <S.Menu ref={ref}>
      <S.List>
        {navigation.map(({ title, icon: Icon, href }) => (
          <S.Item key={title}>
            <S.Link href={href} title={title} $icon={!!Icon}>
              {Icon ? <Icon className="icon-home" /> : title}
            </S.Link>
          </S.Item>
        ))}
      </S.List>
    </S.Menu>
  );
};
