import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <Container className="p-3 mt-5" fluid>
        <Row>
          <Col>Loading...</Col>
        </Row>
      </Container>
    </>
  );
};

export default React.memo(Loading);
