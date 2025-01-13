import styled, { css } from "styled-components";

export const Dot = styled.div<{ $type?: string | null }>`
  opacity: ${({ $type }) => ($type !== null ? 0 : 1)};
  visibility: ${({ $type }) => ($type !== null ? "visible" : "visible")};
  position: fixed;
  width: 1rem;
  height: 1rem;
  background: #29ff27;
  border-radius: 50%;
  box-shadow: 0 0 0.5rem rgba(43, 178, 42, 0.45), 0 0 1rem rgba(43, 178, 42, 0.25);
  transition: opacity 0.4s ease, visibility 0.4s ease;
  transform: translate(-50%, -50%) !important;
  z-index: -1;
`;

export const Image = styled.div<{ $src: string }>`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  border-radius: 2rem;
  background: url(${({ $src }) => $src}) no-repeat center center;
  transform: rotate(15deg);
  width: 22.5rem;
  height: 25.9rem;
  background-size: cover;
  transition: opacity 0.4s ease, visibility 0.4s ease;
`;

export const Site = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  color: #151515;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;

  svg {
    margin-top: 0.2rem;
    width: 1rem;
    height: 1rem;
  }
`;

export const Services = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  color: #151515;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;

  svg {
    margin-top: 0.2rem;
    width: 1rem;
    height: 1rem;
  }
`;

export const Project = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  color: #151515;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;

  svg {
    margin-top: 0.2rem;
    width: 1rem;
    height: 1rem;
  }
`;

export const Cursor = styled.div<{ $type?: string | null; $images?: string[] }>`
  opacity: 1;
  width: 6rem;
  height: 6rem;
  border: 0.2rem solid #ffffff26;
  position: fixed;
  pointer-events: none;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  transition: width 0.4s ease, height 0.4s ease, border-color 0.4s ease, background 0.4s ease,
    transform 0.4s ease, opacity 0.4s ease, scale 0.4s ease;

  ${({ $type, $images }) => {
    if ($type === "hover") {
      return css`
        width: 12rem;
        height: 12rem;

        ${Dot} {
          opacity: 0;
          visibility: hidden;
        }
      `;
    }

    if ($type === "site") {
      return css`
        scale: 1.5;
        background: #fff;
        backdrop-filter: blur(0.3rem);
        cursor: none;

        ${Site} {
          opacity: 1;
          visibility: visible;
        }

        ${Dot} {
          opacity: 0;
          visibility: hidden;
        }
      `;
    }

    if ($type === "service") {
      return css`
        scale: 1.5;
        background: #fff;
        backdrop-filter: blur(0.3rem);
        cursor: none;

        ${Services} {
          opacity: 1;
          visibility: visible;
        }

        ${Dot} {
          opacity: 0;
          visibility: hidden;
        }
      `;
    }

    if ($type === "project") {
      return css`
        scale: 1.5;
        background: #fff;
        backdrop-filter: blur(0.3rem);
        cursor: none;

        ${Project} {
          opacity: 1;
          visibility: visible;
        }

        ${Dot} {
          opacity: 0;
          visibility: hidden;
        }
      `;
    }

    return $images?.map((image) => {
      if (image === $type) {
        return css`
          ${Image}[data-fs-image='${image}'] {
            opacity: 1;
            visibility: visible;
          }
        `;
      }
      return null;
    });

    return null;
  }}

  @media (hover: none) {
    display: none;
  }

  @media (pointer: coarse) {
    display: none;
  }
`;

export const Text = styled.p`
  display: none;
  font-size: 1.21rem;
  line-height: 1.276rem;
  font-weight: 500;
  text-transform: uppercase;
  pointer-events: none;
`;
