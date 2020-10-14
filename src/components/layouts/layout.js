import PropTypes from "prop-types";
import React from "react";
import { Sidebar } from "semantic-ui-react";
import { SemanticToastContainer } from "react-semantic-toasts";
import MobileContainer from "./mobileContainer";
import DesktopContainer from "./desktopContainer";
import FooterSection from "./footerSection";

import { MediaContextProvider, Media } from "./media";
import { GlobalStyle } from "../globalStyles";

const Layout = ({ children }) => (
  <MediaContextProvider>
    <GlobalStyle />
    <SemanticToastContainer position="bottom-right" />
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
