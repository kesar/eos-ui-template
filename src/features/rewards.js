import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layouts/layout";

const RewardsPage = () => {
  return (
    <Layout>
      <Container className="p-3 mt-5" fluid>
        <Row>
          <Col>stake pool tokens and claim rewards MIND</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default React.memo(RewardsPage);
