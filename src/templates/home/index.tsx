"use client";

import { type FC } from "react";
import Header from "./header";
import { Clients } from "@/components/organisms/Clients";
import { Philosofie } from "@/components/organisms/philosofie";
import { Vision } from "@/components/organisms/vision";
import { Together } from "@/components/organisms/together";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      <Clients type={true} />
      <Philosofie />
      <Vision />
      <Together />
    </>
  );
};
