import React, { useState } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { createMedia } from "@artsy/fresnel";
import HeaderSection from "../sections/HeaderSection";

const { Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const DesktopContainer = ({ children }) => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Work</Menu.Item>
              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HeaderSection />
        </Segment>
      </Visibility>

      {children}
    </Media>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
