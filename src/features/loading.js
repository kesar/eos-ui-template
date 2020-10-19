import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import GlobalStyle from "../components/globalStyles";

const Loading = () => {
  return (
    <Container fluid>
      <GlobalStyle />
      <Row>
        <Col
          className="text-center"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spinner animation="grow" variant="primary" />
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Loading);
