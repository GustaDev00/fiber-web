"use client";

import { type FC } from "react";
import { Clients } from "@/components/organisms/Clients";
import { Together } from "@/components/organisms/together";
import { Transform } from "@/components/organisms/transform";
import { Header } from "@/components/organisms/header";

export const DienstleistungenTemplate: FC = () => {
  const title = (
    <>
      <span>Deine</span> Vision.
      <br /> Unsere <span>Umsetzung.</span>
    </>
  );
  const description = (
    <>
      FiberWeb ist eine führende Schweizer Webagentur, spezialisiert auf{" "}
      <span>Branding, UI/UX-Design,</span>
      sowie{" "}
      <span>
        Web-
        <br /> und Mobile-Entwicklung
      </span>
      . Zudem bieten wir KI-Lösungen an, um die Effizienz deines Unternehmens zu maximieren.
    </>
  );

  return (
    <>
      <Header title={title} description={description} />
      <Clients type={true} />
      <Together />
      <Transform />
    </>
  );
};
