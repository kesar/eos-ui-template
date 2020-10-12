import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UALContext } from "ual-reactjs-renderer";

const DesktopContainer = ({ children }) => {
  const authContext = useContext(UALContext);
  console.log(authContext);
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
              <Menu.Item as={Link} to="/" active>
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/about">
                About
              </Menu.Item>
              <Menu.Item position="right">
                {authContext.activeUser === null ? (
                  <Button
                    as="a"
                    inverted={!fixed}
                    onClick={authContext.showModal}
                  >
                    Log in
                  </Button>
                ) : (
                  <Button as="a" inverted={!fixed} onClick={authContext.logout}>
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
  children: PropTypes.node.isRequired,
};

export default DesktopContainer;
