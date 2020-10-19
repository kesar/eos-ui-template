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

.brain {
  animation-name: brain-animation;  /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s;        /* Change to speed up or slow down */
  animation-iteration-count: 1;  /* 1 time */
  transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes brain-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}
`;
