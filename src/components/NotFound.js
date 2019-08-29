import React from "react";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Row type="flex" justify="center">
      <Col span={10}>
        <Card>
          <h1>Question Not Found</h1>
          <Button type="primary">
            <Link to="/dashboard">Return to Dashboard</Link>
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default NotFound;
