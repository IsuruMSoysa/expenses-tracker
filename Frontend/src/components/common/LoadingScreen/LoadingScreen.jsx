import React from "react";
import { Row, Col } from "react-bootstrap";
import ReactLoading from "react-loading";

const LoadingScreen = () => (
  <Row className="loading-panel m-0 p-0">
    <Col className="loading-col">
      <ReactLoading type="cylon" color="#ffffff" height={"10%"} width={"10%"} />
    </Col>
  </Row>
);

export default LoadingScreen;
