import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  setOpen: (value: number | false) => void;
  subtitle: ReactNode;
  description: ReactNode;
  list: string[];
  listLine?: boolean;
  img: {
    src: string;
    alt: string;
  };
  link: {
    href: string;
    title: string;
  };
  client?: boolean;
}
