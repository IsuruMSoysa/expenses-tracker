import { Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAccountDetails } from "../../features/accountDetails/accountDetailsSlice";
import { useParams } from "react-router";

function MyAccountPage() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchAccountDetails(id));
  }, []);

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
