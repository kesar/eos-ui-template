import PropTypes from "prop-types";
import React from "react";
import { Sidebar } from "semantic-ui-react";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";
import FooterSection from "./FooterSection";

import { MediaContextProvider, Media } from "./Media";

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
