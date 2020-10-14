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
 
 .ui-alerts {
    position: fixed;
    z-index: 2060;
    padding: 23px;
}

.ui-alerts.center {
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -222px;
}

.ui-alerts.top-right {
    top: 20px;
    right: 20px;
}

.ui-alerts.top-center {
    top: 20px;
    margin-left: -222px;
    left: 50%;
}

.ui-alerts.top-left {
    top: 20px;
    left: 20px;
}

.ui-alerts.bottom-right {
    bottom: 0;
    right: 20px;
}
.ui-alerts.bottom-center {
    bottom: 0;
    margin-left: -222px;
    left: 50%;
}

.ui-alerts.bottom-left {
    bottom: 0;
    left: 20px;
}

.ui-alerts.ui-alerts > .message > .content > .header {
    padding-right: 13px;
}

@media (min-width: 320px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    .ui-alerts.top-center {
        margin-left: -163px;
    }
}
@media (min-width: 480px) {
    /* smartphones, Android phones, landscape iPhone */
}
@media (min-width: 600px) {
    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones
 * (Android) */
}
@media (min-width: 801px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
    /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
    /* hi-res laptops and desktops */
}
`;
