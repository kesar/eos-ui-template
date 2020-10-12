import React, { useState } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import PropTypes, { instanceOf, oneOfType, shape, func } from "prop-types";
import { Link } from "react-router-dom";
import { withUAL } from "ual-reactjs-renderer";
import { ScatterUser } from "ual-scatter";
import { TokenPocketUser } from "ual-token-pocket";

const DesktopContainer = ({ children, ual }) => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);
  return (
    <>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 80, padding: "1em 0em" }}
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
              <Menu.Item as="span" active>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item as="span">
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item position="right">
                {ual.activeUser === null ? (
                  <Button as="a" inverted={!fixed} onClick={ual.showModal}>
                    Log in
                  </Button>
                ) : (
                  <Button as="a" inverted={!fixed} onClick={ual.logout}>
                    Logout
                  </Button>
                )}
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </>
  );
};

DesktopContainer.propTypes = {
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

DesktopContainer.defaultProps = {
  ual: {
    activeUser: null,
    logout: () => {},
  },
};

export default withUAL(DesktopContainer);
