"use client";

import { type FC } from "react";
import Header from "./header";
import { Services } from "@/components/organisms/services";
import { Philosofie } from "@/components/organisms/philosofie";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      {/* <Services type={true} /> */}
      <Philosofie />
    </>
  );
};
