import * as S from "./styles";
import C from "@/constants";

export const Menu = () => {
  const { navigation } = C.data;

  return (
    <S.Menu>
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
