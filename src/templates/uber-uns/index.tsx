"use client";

import { type FC } from "react";
import { Header } from "@/components/organisms/header";
import C from "./constants";
import Contact from "@/shared/contact";
import Content from "./content";
import Team from "./team";

export const UberUnsTemplate: FC = () => {
  return (
    <>
      <Header {...C.header} />
      <Content />
      <Team />
      <Contact />
    </>
  );
};
