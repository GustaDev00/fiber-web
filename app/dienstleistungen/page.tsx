import { DienstleistungenTemplate } from "@/templates/dienstleistungen";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fiber web - Creative Webseiten",
  description: "Creative Webseiten Effektives Marketing Smarte KI Lösungen",
};

const Home = (): ReactNode => {
  return <DienstleistungenTemplate />;
};

export default Home;
