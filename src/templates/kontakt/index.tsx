"use client";

import { type FC } from "react";
import C from "./constants";
import { Header } from "@/components/organisms/header";
import Contact from "@/shared/contact";

export const KontaktTemplate: FC = () => {
  return (
    <>
      <Header {...C} />
      <Contact />
    </>
  );
};
