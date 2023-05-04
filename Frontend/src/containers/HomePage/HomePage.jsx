import { Row, Col } from "react-bootstrap";
import ProjectButton from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Row className="homepage-container text-center">
      <Col>
        <h1 className="welcome-label py-2">Welcome to Expenses Tracker!</h1>
        <h5>Smarter spending starts here</h5>
        <p className="py-2">
          Master your spending habits with our Expense Tracker - the exclusive
          tool for financial management.
        </p>
        <ProjectButton
          label="Log in"
          backgroundColor="#0ad357"
          size="small"
          btnOnClick={() => navigate("/login")}
        />
        <ProjectButton
          label="Sign up"
          backgroundColor="#0ad357"
          size="small"
          btnOnClick={() => navigate("/signup")}
        />
      </Col>
    </Row>
  );
}

export default HomePage;
