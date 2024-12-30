"use client";

import { type FC } from "react";
import { Transform } from "@/components/organisms/transform";
import Header from "./header";
import Innovation from "./innovation";
import Story from "./story";
import Team from "./team";

export const UberUnsTemplate: FC = () => {
  return (
    <>
      <Header />
      <Innovation />
      <Story />
      <Team />
      <Transform />
    </>
  );
};
