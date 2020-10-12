import React, { useState } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import PropTypes, { oneOfType, shape, instanceOf, func } from "prop-types";
import { Link } from "react-router-dom";
import { withUAL } from "ual-reactjs-renderer";
import { ScatterUser } from "ual-scatter";
import { TokenPocketUser } from "ual-token-pocket";
import styled from "styled-components";

const SegmentWrapper = styled(Segment)`
  min-height: 50;
  padding: "1em 0em";
`;

const MobileContainer = ({ children, ual }) => {
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
        <Menu.Item as="span" active>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item as="span">
          <Link to="/about">About</Link>
        </Menu.Item>
        {ual.activeUser === null ? (
          <Menu.Item as="a" onClick={ual.showModal}>
            Log in
          </Menu.Item>
        ) : (
          <Menu.Item as="a" onClick={ual.logout}>
            Logout
          </Menu.Item>
        )}

        {ual.activeUser !== null && (
          <Menu.Item as="a" onClick={ual.logout}>
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
                {ual.activeUser === null ? (
                  <Button as="a" inverted onClick={ual.showModal}>
                    Log in
                  </Button>
                ) : (
                  <Button as="a" inverted onClick={ual.logout}>
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
  ual: shape({
    activeUser: oneOfType([
      instanceOf(ScatterUser),
      instanceOf(TokenPocketUser),
    ]),
    logout: func,
    showModal: func.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

MobileContainer.defaultProps = {
  ual: {
    activeUser: null,
    logout: () => {},
  },
};

export default withUAL(MobileContainer);
