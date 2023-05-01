import { Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import ExpenseCard from "../../components/ExpenseCard";

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
          <Col className="dash-main-content" xl={10}>
            <ExpenseCard
              amount={100000}
              title={"House Rent"}
              date={"2023.05.01"}
              type={"Rent"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default DashboardPage;
