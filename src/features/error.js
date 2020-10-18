import React from "react";
import Layout from "../components/layouts/layout";
import { Col, Container, Row } from "react-bootstrap";

const Error = () => {
  return (
    <Layout>
      <Container className="p-3 mt-5" fluid>
        <Row>
          <Col>Error!...</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default React.memo(Error);
