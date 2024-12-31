import { ReactNode } from "react";

export interface ServicesProps {
  title: string;
  description: string;
  link: string;
  header: {
    breadcrumb: string;
    title: ReactNode;
  };
  intro: {
    title: ReactNode;
    description: ReactNode;
    img: {
      src: string;
      alt: string;
    };
    link: {
      title: string;
      href: string;
    };
    items: {
      title: ReactNode;
      text: ReactNode;
    }[];
  };
  info: {
    title: ReactNode;
    link: {
      title: string;
      href: string;
    };
    item: {
      id: number;
      title: ReactNode;
      text: ReactNode;
    }[];
  };
  project: {
    title: ReactNode;
    imgs: {
      title: string;
      img: {
        src: string;
        alt: string;
      };
      tags: string[];
      link: {
        href: string;
        title: string;
        target: string;
        rel: string;
      };
    }[];
    link: {
      title: string;
      href: string;
    };
  };
}
