import { styled } from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";
import { CheckConfirmed } from "@/components/svgs/check-confirmed";

export const TeamContainer = styled.div``;

export const Wrapper = styled(_Wrapper)`
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: calc(100% - (16.3rem * 2));
    height: 0.1rem;
    background: ${({ theme }) => theme.black015};

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      width: calc(100% - (4rem * 2));
    `}

    ${mediaMaxWidth("mobile")`
      width: calc(100% - (2.2rem * 2))
    `}
  }
`;

export const Image = styled(LazyImage)``;

export const TeamContent = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.5rem;
  padding-left: 8.8rem;

  ${mediaMaxWidth("mobile")`
    gap: 6.4rem;
    padding-left: 0;
    margin: 3.2rem 0;
  `}
`;

export const Article = styled.article``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 8rem;
  font-weight: 700;
  line-height: 7.4rem;
  letter-spacing: -0.4048rem;
  margin-bottom: 4.6rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4rem;
    letter-spacing: -0.2226rem;
    margin-bottom: 3rem;
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 4.2rem;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
  `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.7rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column; 
    align-items: flex-start;
    gap: 1.7rem;
  `}
`;

export const Icon = styled.div`
  background: ${({ theme }) => theme.white};
  box-shadow: 0 0.4rem 1.6rem ${({ theme }) => theme.black008};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2.6rem;
    height: 2.6rem;
  }
`;

export const ArticleContent = styled.article`
  width: 70%;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const ListTitle = styled.h3`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.0003rem;
`;

export const ListText = styled.p`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: -0.0002rem;
`;

export const Check = styled(CheckConfirmed)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;

  ${mediaMaxWidth("mobile")`
    gap: 3.4rem;
    margin-top: 5.2rem;
  `}
`;

export const BigImage = styled(LazyImage)`
  width: 61.8rem;
  height: 82.4rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 45.9rem;
  `}
`;

export const SmallImage = styled(LazyImage)`
  width: 61.8rem;
  height: 55.4rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 33rem;
  `}
`;

export const TeamMembers = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${mediaMaxWidth("mobile")`
    margin: 3.2rem 0;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4.4rem;
  `}
`;

export const TeamMember = styled.li``;

export const MemberImage = styled(LazyImage)`
  width: 32.6rem;
  height: 34.7rem;
  object-fit: cover;
  object-position: bottom;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.blue015};

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 37.2rem;
  `}
`;

export const MemberData = styled.article`
  margin-top: 2.1rem;
`;

export const MemberTitle = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 4.1rem;
`;

export const MemberText = styled.p`
  color: ${({ theme }) => theme.blackCoral};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
`;
