import { ChevronDown } from "react-bootstrap-icons";
import { Button, Form } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

const SwapContainerWrapper = styled.div`
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  padding: 10px;
  display: grid;
`;

const SwapTokenHeader = styled.div`
  font-size: 14px;
  float: left;
  text-align: left;
  color: #aeabab;
  margin: 5px;
  display: block;
`;

const SwapTokenContainer = styled.div`
  display: grid;
  grid-template-columns: 45% auto;
  justify-content: space-between;
`;

const SwapTokenInputContainer = styled.div``;

const SwapTokenInput = styled(Form.Control)`
  border: 0px !important;
  padding: 5px !important;
  font-size: 30px !important;
  :focus {
    box-shadow: none !important;
  }

  @media (max-width: 768px) {
    font-size: 25px !important;
  }
`;

const SwapTokenListButton = styled(Button)`
  display: flex !important;
  text-align: right !important;
  align-items: center;
  justify-content: center;
  background-color: white !important;
  border: 0px !important;
  width: fit-content;
  height: 100%;
  vertical-align: middle;
`;

const SwapTokenSelectContainer = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px !important;
  border-radius: 15px;
  margin: 0px !important;
  padding: 10px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  span {
    margin-right: 3px;
  }
`;

const SwapTokenName = styled.span`
  margin-left: 5px;
  font-weight: 500;
  color: black;
  margin-right: 5px;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SwapTokenIcon = styled.img`
  width: 30px;

  @media (max-width: 768px) {
    width: 20px;
  }
`;

const SwapContainer = ({ initialToken, header, onSwapTokenClick }) => {
  const { register } = useFormContext();
  const [token, setToken] = React.useState(initialToken);
  return (
    <SwapContainerWrapper>
      <SwapTokenHeader>{header}</SwapTokenHeader>
      <SwapTokenContainer>
        <SwapTokenInputContainer>
          <SwapTokenInput
            name={`${header}Amount`}
            placeholder={token ? token.placeholder : "0.0000"}
            ref={register({ required: true })}
          />
        </SwapTokenInputContainer>

        <Form.Control
          type="hidden"
          name={`${header}Token`}
          value={token ? token.name : ""}
          ref={register({ required: true })}
        />
        {token && (
          <SwapTokenListButton
            onClick={() => {
              onSwapTokenClick(setToken);
            }}
          >
            <SwapTokenIcon src={token.icon} />
            <SwapTokenName>{token.name}</SwapTokenName>
            <ChevronDown color="black" />
          </SwapTokenListButton>
        )}
        {!token && (
          <SwapTokenSelectContainer
            variant="secondary"
            onClick={() => {
              onSwapTokenClick(setToken);
            }}
          >
            <span>Select a token</span>
            <ChevronDown />
          </SwapTokenSelectContainer>
        )}
      </SwapTokenContainer>
    </SwapContainerWrapper>
  );
};

SwapContainer.propTypes = {
  initialToken: PropTypes.any,
  header: PropTypes.string.isRequired,
  onSwapTokenClick: PropTypes.func.isRequired,
};

export default SwapContainer;
