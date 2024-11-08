"use client";

import { Suspense, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/styles/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";
import { Cursor } from "@/components/organisms/Cursor";
import Nav from "@/shared/nav";
import { BackgroundMove } from "@/components/atoms/background-move";
import { Menu } from "@/shared/menu";
import { Loading } from "@/components/molecules/loading";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="en">
      <body className={fontNames}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <Suspense>
              <Nav />
              <Loading />
              <main>
                <Cursor>{children}</Cursor>
                <BackgroundMove />
              </main>
              <Menu />
            </Suspense>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
