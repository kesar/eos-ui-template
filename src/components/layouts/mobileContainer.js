import React, { useContext, useState } from "react";
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
import { UALContext } from "ual-reactjs-renderer";
import styled from "styled-components";

const SegmentWrapper = styled(Segment)`
  min-height: 50px;
  padding: "1em 0em";
`;

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const authContext = useContext(UALContext);

  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  const handleItemClick = (e, { to }) => setActiveItem(to);

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
        <Menu.Item
          as={Link}
          to="/"
          active={activeItem === "/"}
          onClick={handleItemClick}
        >
          Swap
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/pool"
          active={activeItem === "pool"}
          onClick={handleItemClick}
        >
          Pool
        </Menu.Item>
        {authContext.activeUser === null ? (
          <Menu.Item as="a" onClick={authContext.showModal}>
            Log in
          </Menu.Item>
        ) : (
          <Menu.Item as="a" onClick={authContext.logout}>
            Logout
          </Menu.Item>
        )}
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <SegmentWrapper inverted textAlign="center" vertical>
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                {authContext.activeUser === null ? (
                  <Button as="a" inverted onClick={authContext.showModal}>
                    Log in
                  </Button>
                ) : (
                  <Button as="a" inverted onClick={authContext.logout}>
                    Logout
                  </Button>
                )}
              </Menu.Item>
            </Menu>
          </Container>
        </SegmentWrapper>

        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileContainer;
