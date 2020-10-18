import { createGlobalStyle, css } from "styled-components";

import "../scss/theme.scss";

export const bodyStyles = css`
  min-height: 100%;
  background-image: linear-gradient(
    to right top,
    #ffffff,
    #ebe2ff,
    #ddc4fe,
    #d4a3f8,
    #cf80ed
  );
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
 
 html {
  height: 100%;
}
`;
