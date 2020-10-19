import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { ArrowDownShort, Basket, ChevronDown } from "react-bootstrap-icons";
import Layout from "../components/layouts/layout";

const Title = styled.div`
  text-align: center;
  font-size: 70px;
`;
const CardStyled = styled(Card)`
  max-width: 450px;
`;

const StyledModal = styled(Modal)`
  div {
    max-width: 450px;
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

const SwapContainer = styled.div`
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
  grid-template-columns: 60% auto;
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
`;

const SwapTokenListButton = styled(Button)`
  display: flex;
  text-align: right !important;
  align-items: center;
  justify-content: center;
  background-color: white !important;
  border: 0px !important;
  width: fit-content;
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

const SwapTokenIcon = styled.img`
  width: 30px;
`;

const SwapTokenName = styled.span`
  margin-left: 5px;
  font-weight: 500;
  color: black;
  margin-right: 5px;
  font-size: 25px;
`;

const ArrowWrapper = styled.div`
  margin: 15px;
  color: rgb(86, 90, 105);
  text-align: center;
`;

function alertClicked() {}

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [modalShow, setModalShow] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <Container className="p-3 mt-3" fluid>
        <Row>
          <Col>
            <Title>🧠</Title>
            <CardStyled className="mx-auto shadow-sm">
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <SwapContainer>
                    <SwapTokenHeader>From</SwapTokenHeader>
                    <SwapTokenContainer>
                      <SwapTokenInputContainer>
                        <SwapTokenInput
                          name="fromAmount"
                          placeholder="0.000"
                          ref={register({ required: true })}
                        />
                      </SwapTokenInputContainer>
                      <SwapTokenListButton onClick={() => setModalShow(true)}>
                        <SwapTokenIcon src="icon.png" />
                        <SwapTokenName>IQ</SwapTokenName>
                        <ChevronDown color="black" />
                        <Form.Control
                          type="hidden"
                          name="fromToken"
                          ref={register({ required: true })}
                        />
                      </SwapTokenListButton>
                    </SwapTokenContainer>
                  </SwapContainer>
                  <ArrowWrapper>
                    <ArrowDownShort />
                  </ArrowWrapper>
                  <SwapContainer>
                    <SwapTokenHeader>To</SwapTokenHeader>
                    <SwapTokenContainer>
                      <SwapTokenInputContainer>
                        <SwapTokenInput
                          name="toAmount"
                          placeholder="0.0000"
                          ref={register({ required: true })}
                        />
                      </SwapTokenInputContainer>
                      <SwapTokenSelectContainer
                        variant="secondary"
                        onClick={() => setModalShow(true)}
                      >
                        <span>Select a token</span>
                        <ChevronDown />
                        <Form.Control
                          type="hidden"
                          name="toToken"
                          ref={register({ required: true })}
                        />
                      </SwapTokenSelectContainer>
                    </SwapTokenContainer>
                  </SwapContainer>
                  <br />
                  <Button variant="primary" type="submit" size="lg" block>
                    Swap
                  </Button>
                </Form>
              </Card.Body>
            </CardStyled>
          </Col>
        </Row>

        <TokenListModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Layout>
  );
};

function TokenListModal(props) {
  return (
    <StyledModal
      {...props}
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
          <ListGroup.Item action onClick={alertClicked}>
            <Basket /> IQ
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            <Basket /> EOS
          </ListGroup.Item>
          <ListGroup.Item action onClick={alertClicked}>
            <Basket /> YTRUMP
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </StyledModal>
  );
}

export default Home;
