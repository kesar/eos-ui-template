import PropTypes from "prop-types";
import React from "react";
import { createMedia } from "@artsy/fresnel";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";

const { MediaContextProvider } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
