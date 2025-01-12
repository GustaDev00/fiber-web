"use client";

import { Suspense, type ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/styles/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";
import { Cursor } from "@/components/molecules/cursor";
import Nav from "@/shared/nav";
import { Menu } from "@/shared/menu";
import { Footer } from "@/shared/footer";
import { Loading } from "@/components/molecules/loading";
import { SmoothScroll } from "@/components/atoms/smooth-scroll";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH} />
      </head>

      <body className={fontNames}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100vw",
                    height: "100vh",
                    background: "#000",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 9999,
                  }}
                ></div>
              }
            >
              <Loading />
              <main>
                <Nav />
                <Cursor>{children}</Cursor>
                <Menu />
                <Footer />
              </main>
            </Suspense>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <SmoothScroll />
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "G-XYZ"} />
    </html>
  );
};

export default RootLayout;
