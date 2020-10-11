import PropTypes from "prop-types";
import React from "react";
import { createMedia } from "@artsy/fresnel";
import { Sidebar } from "semantic-ui-react";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";
import FooterSection from "../sections/FooterSection";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const Layout = ({ children }) => (
  <MediaContextProvider>
    <Media greaterThan="mobile">
      <DesktopContainer>{children}</DesktopContainer>
    </Media>
    <Media as={Sidebar.Pushable} at="mobile">
      <MobileContainer>{children}</MobileContainer>
    </Media>
    <FooterSection />
  </MediaContextProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
