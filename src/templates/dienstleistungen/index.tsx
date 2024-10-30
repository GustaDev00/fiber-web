"use client";

import { type FC } from "react";
import { Header } from "@/components/organisms/header";
import C from "@/constants";
import Services from "./services";
import Gallery from "./gallery";

export const DienstleistungenTemplate: FC = () => {
  return (
    <>
      <Header {...C.service.banner} />
      <Services />
      <Gallery />
    </>
  );
};
