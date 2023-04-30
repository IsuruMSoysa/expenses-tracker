import { Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";

function DashboardPage() {
  return (
    <Row className="dashboard-cont">
      <Col>
        <Row className="dash-nav-cont">
          <Col className="pt-2">
            <Navbar />
          </Col>
        </Row>
        <Row className="dash-content">
          <Col className="dash-side-nav bg-warning" xl={2}>
            hi
          </Col>
          <Col className="dash-main-content bg-success" xl={10}>
            hi
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default DashboardPage;
