import { Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";

function MyAccountPage() {
  return (
    <>
      <Row>
        <Col className="pt-2">
          <Navbar />
        </Col>
      </Row>
    </>
  );
}

export default MyAccountPage;
