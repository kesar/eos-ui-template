import { ListGroup, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import tokenList from "../../data/tokens";

const SwapTokenIcon = styled.img`
  width: 30px;
`;
const StyledModal = styled(Modal)`
  div {
    max-width: 400px;
    border-radius: 15px;
    border-bottom: 0px;
  }

  .modal-title {
    font-size: 20px;
  }

  .modal-body {
    padding: 0.5rem !important;
  }

  .list-group-item {
    border: 0px;
  }
`;

const TokenListModal = ({
  onSelectToken,
  tokenFrom,
  tokenTo,
  tokenSelect,
  ...otherProps
}) => {
  return (
    <StyledModal
      {...otherProps}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select a token
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {tokenList.map((token) => (
            <ListGroup.Item
              action
              onClick={() => {
                onSelectToken({
                  name: token.name,
                  icon: token.icon,
                  placeholder: token.placeholder,
                });
              }}
              disabled={
                (tokenFrom && tokenFrom.name === token.name) ||
                (tokenTo && tokenTo.name === token.name)
              }
            >
              <SwapTokenIcon src={token.icon} /> {token.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </StyledModal>
  );
};

TokenListModal.propTypes = {
  onSelectToken: PropTypes.func.isRequired,
  tokenFrom: PropTypes.any,
  tokenTo: PropTypes.any,
};

export default TokenListModal;
