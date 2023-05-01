import { Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile/Profile";

function MyAccountPage() {
  return (
    <>
      <Row>
        <Col className="pt-2">
          <Navbar />
          <Profile />
        </Col>
      </Row>
    </>
  );
}

export default MyAccountPage;
