import { Row, Col } from "react-bootstrap";
import ReactLoading from "react-loading";

function InnrerLoading() {
  return (
    <Row>
      <Col className="inner-loading-comp">
        <ReactLoading
          type="cylon"
          color="#ffffff"
          height={"55%"}
          width={"55%"}
        />
      </Col>
    </Row>
  );
}

export default InnrerLoading;
