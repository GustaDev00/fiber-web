"use client";

import { type FC } from "react";
import { Clients } from "@/components/organisms/Clients";
import { Together } from "@/components/organisms/together";
import { Transform } from "@/components/organisms/transform";
import { Header } from "@/components/organisms/header";
import { VisionService } from "@/components/organisms/vision-service";
import { Process } from "@/components/organisms/process";
import { ServicesProps } from "./props";
import Intro from "./intro";

export const ServicesTemplate: FC<ServicesProps> = ({ header, intro, info, project }) => {
  return (
    <>
      <Header {...header} />
      <Intro {...intro} />
      {/* <VisionService /> */}
      {/* <Process /> */}
      {/* <Clients /> */}
      {/* <Together /> */}
      {/* <Transform /> */}
    </>
  );
};
