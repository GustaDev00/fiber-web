"use client";

import { type FC } from "react";
import { Together } from "@/components/organisms/together";
import { Transform } from "@/components/organisms/transform";
import { Header } from "@/components/organisms/header";
import { ServicesProps } from "./props";
import Intro from "./intro";
import Info from "./info";
import Project from "./project";

export const ServicesTemplate: FC<ServicesProps> = ({ header, intro, info, project }) => {
  return (
    <>
      <Header {...header} />
      <Intro {...intro} />
      <Info {...info} />
      <Together />
      <Project {...project} />
      <Transform />
    </>
  );
};
