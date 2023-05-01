import { Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import ExpensesLog from "../../components/ExpensesLog";

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
          <Col className=" bg-warning" xl={3}>
            <Row className="dash-profile-section bg-info">
              <Col>hi</Col>
            </Row>
            <Row className="dash-data-section">
              <Col>hi</Col>
            </Row>
          </Col>
          <Col className="dash-main-content" xl={8}>
            <ExpensesLog />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default DashboardPage;
