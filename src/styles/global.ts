import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { mediaMaxWidth, viewportsBase } from "@/utils/media-query";

const { desktop1024, isMobileOrTabletVertical, desktop1920 } = viewportsBase;

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: var(--syne);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  main::before {
    content: "";
    width: 100vw;
    height: 100vh;
    display: block;
    opacity: .05;
    pointer-events: none;
    background-image: url("https://cdn.prod.website-files.com/668beaea39acac73ec462b01/668bfc3c0a4e299c4b42b9ee_65847300eaee898abba0ca89_grain-slow.gif");
    background-position: 0 0;
    background-size: auto;
    position: fixed;
    z-index: -1;
}

  ::-webkit-scrollbar {
    width: 0px;
    color: ${theme.black};

    ${mediaMaxWidth(900)`
      width: 0px;
    `}

    ${mediaMaxWidth("mobile")`
      width: 0px;
    `}
  }

  html {
    font-size: calc(100vw / ${desktop1920.width} * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: ${desktop1024.width}px)  {
      font-size: calc(55vw / ${desktop1024.width} * 10);
    }

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      @media (orientation: portrait) {
        font-size: calc(115vw / ${isMobileOrTabletVertical.width} * 10);
      }
    `}

    ${mediaMaxWidth("mobileVerticalHorizontal")`
      font-size: calc(100vw / ${390} * 10);
    `}

    ${mediaMaxWidth("mobileHorizontal")`
      font-size: calc(100vw / ${400} * 10);
    `}

    &.modal-open {
      overflow: hidden;
    }
  }

  body {
    background: #000;
    position: relative;
  }

  main, body, html {
    overflow-x: hidden;
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
  }

  input, textarea {
    appearance: none;
    border: none;
    outline: none;
  }

  .grecaptcha-badge {
    visibility: hidden;
    opacity: 0;
  }

  section{
    opacity: 1;
  }
`;
