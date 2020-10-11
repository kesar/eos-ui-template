import React, { useState } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeaderSection from "../sections/HeaderSection";

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as="a" active>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item as="a">Company</Menu.Item>
        <Menu.Item as="a">Careers</Menu.Item>
        <Menu.Item as="a">Log in</Menu.Item>
        <Menu.Item as="a">Sign Up</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 50, padding: "1em 0em" }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileContainer;
