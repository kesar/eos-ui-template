import React from "react";
import { Button, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { Controller, useForm } from "react-hook-form";
import Layout from "../components/layouts/layout";
import styled from "styled-components";

const SwapContainer = styled.div`
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  margin: 4px;
  padding: 4px;
  display: grid;
`;

const SwapTokenHeader = styled.div`
  font-size: 14px;
  float: left;
  text-align: left;
  color: rgb(86, 90, 105);
  margin: 5px;
  display: block;
`;

const SwapTokenContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
`;

const SwapTokenInputContainer = styled.div``;

const SwapTokenInput = styled.input`
  border: 0px !important;
  padding: 5px !important;
`;

const SwapTokenListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwapTokenSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00b5ad;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  margin: 1px;
`;

const SwapTokenIcon = styled.img`
  width: 22px;
`;

const SwapTokenName = styled.span`
  margin-left: 5px;
  font-weight: 500;
`;

const ArrowWrapper = styled.div`
  margin: 15px;
  color: rgb(86, 90, 105);
`;

const Home = () => {
  const { control, handleSubmit } = useForm();

  return (
    <Layout>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large">
            <Segment stacked>
              <SwapContainer>
                <SwapTokenHeader>From</SwapTokenHeader>
                <SwapTokenContainer>
                  <SwapTokenInputContainer>
                    <SwapTokenInput placeholder="0.0000" />
                  </SwapTokenInputContainer>
                  <SwapTokenListContainer>
                    <SwapTokenIcon src="icon.png" />
                    <SwapTokenName>ETH</SwapTokenName>
                    <Icon name="angle down" size="small" />
                  </SwapTokenListContainer>
                </SwapTokenContainer>
              </SwapContainer>
              <ArrowWrapper>
                <Icon name="arrow down" size="small" />
              </ArrowWrapper>
              <SwapContainer>
                <SwapTokenHeader>To</SwapTokenHeader>
                <SwapTokenContainer>
                  <SwapTokenInputContainer>
                    <SwapTokenInput placeholder="0.0000" />
                  </SwapTokenInputContainer>
                  <SwapTokenSelectContainer>
                    <span>Select a token</span>
                    <Icon name="angle down" size="small" />
                  </SwapTokenSelectContainer>
                </SwapTokenContainer>
              </SwapContainer>
              <br />

              <Button color="teal" fluid size="large">
                Swap
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

export default Home;
