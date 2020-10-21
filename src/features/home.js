import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { ArrowDownShort } from "react-bootstrap-icons";
import Layout from "../components/layouts/layout";
import SwapContainer from "../components/ui/swapContainer";
import TokenListModal from "../components/ui/tokenListModal";
import tokenList from "../data/tokens";

const Title = styled.div`
  text-align: center;
  font-size: 70px;
`;
const CardStyled = styled(Card)`
  max-width: 450px;
`;

const ArrowWrapper = styled.div`
  margin: 15px;
  color: rgb(86, 90, 105);
  text-align: center;
`;

const onSubmit = (data) => {
  console.log(data);
};

const Home = () => {
  const methods = useForm();
  const [modalShow, setModalShow] = React.useState(false);
  const [callBackSwap, setCallBackSwap] = React.useState(null);

  const openSelect = (callback) => {
    setModalShow(true);
    setCallBackSwap({ func: callback });
  };
  const selectToken = ({ name, icon, placeholder }) => {
    setModalShow(false);
    callBackSwap.func({
      name,
      icon,
      placeholder,
    });
  };

  return (
    <Layout>
      <Container className="p-2 mt-3" fluid>
        <Row>
          <Col>
            <Title>
              <span
                title="mindswap"
                role="img"
                aria-label="brain"
                className="brain"
              >
                🧠
              </span>
            </Title>
            <CardStyled className="mx-auto shadow-sm">
              <Card.Body>
                <FormProvider {...methods}>
                  <Form onSubmit={methods.handleSubmit(onSubmit)}>
                    <SwapContainer
                      header="From"
                      initialToken={tokenList[0]}
                      setModalShow={setModalShow}
                      onSwapTokenClick={openSelect}
                    />
                    <ArrowWrapper>
                      <ArrowDownShort />
                    </ArrowWrapper>
                    <SwapContainer
                      header="To"
                      setModalShow={setModalShow}
                      onSwapTokenClick={openSelect}
                    />
                    <br />
                    <Button variant="primary" type="submit" size="lg" block>
                      Swap
                    </Button>
                  </Form>
                </FormProvider>
              </Card.Body>
            </CardStyled>
          </Col>
        </Row>

        <TokenListModal
          disabledTokens={[]} // TODO: get selected tokens from context
          onSelectToken={selectToken}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </Layout>
  );
};

export default Home;
