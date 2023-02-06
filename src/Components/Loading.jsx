import React from "react";
import { Row, Col } from "react-bootstrap";
import  { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <Row className="justify-content-center">
      <Col className="text-center">
        <ThreeDots
          type="ThreeDots"
          color="black"
          height={100}
          width={100}
          timeout={3000}
        />
      </Col>
    </Row>
  );
};

export default Loading;
