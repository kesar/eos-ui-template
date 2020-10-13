import { createGlobalStyle, css } from "styled-components";

import "semantic-ui-less/semantic.less";

import { typography } from "../constants";

export const bodyStyles = css`
  font-family: ${typography.primary};
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
