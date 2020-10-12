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
import styled from "styled-components";

const SegmentWrapper = styled(Segment)`
  min-height: 80px;
  padding: "1em 0em";
`;

const DesktopContainer = ({ children }) => {
  const authContext = useContext(UALContext);
  const [fixed, setFixed] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <SegmentWrapper inverted textAlign="center" vertical>
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item
                name="home"
                as={Link}
                to="/"
                active={activeItem === "home"}
                onClick={handleItemClick}
              >
                Home
              </Menu.Item>
              <Menu.Item
                name="about"
                as={Link}
                to="/about"
                active={activeItem === "about"}
                onClick={handleItemClick}
              >
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
        </SegmentWrapper>
      </Visibility>

      {children}
    </>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesktopContainer;
