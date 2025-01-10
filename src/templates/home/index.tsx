"use client";

import { type FC } from "react";
import Header from "./header";
import { Clients } from "@/components/molecules/clients";
import { Philosofie } from "@/components/organisms/philosofie";
import { Vision } from "@/components/organisms/vision";
import { Together } from "@/components/organisms/together";
import { Transform } from "@/components/organisms/transform";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header />
      <Clients />
      <Philosofie />
      <Vision />
      <Together />
      <Transform />
    </>
  );
};
