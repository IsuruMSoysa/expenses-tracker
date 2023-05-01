import { Row, Col, Button } from "react-bootstrap";
import ProjectButton from "../../components/common/Button";
import { useNavigate } from "react-router";

function Profile() {
  const navigate = useNavigate();
  return (
    <Row
      className="prof-det-pop-cont justify-item-center"
      id="expenseDetailsWindow"
    >
      {/* <Col xl={3}></Col> */}
      <Col className="prof-details-crd-cont text-center py-3 px-4" xl={6}>
        <Row>
          <Col className="profile-pc-cont p-3">
            <div className="profile-pic">i</div>
            <div className="profile-edit-btn">
              <span className="material-symbols-outlined">edit</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="prof-amount text-center">
            <h2>Isuru M Soysa</h2>
          </Col>
        </Row>
        <Row>
          <Col className="prof-title text-center">
            <label>isurumsoysa@gmail.com</label>
          </Col>
        </Row>
        <Row>
          <Col className="prof-amount text-center py-1">
            <label>105/1, Delgahawatta,Melagama,Wadduwa</label>
          </Col>
        </Row>
        <Row className="py-2">
          <Col className="text-center">
            <label>Age: 25</label>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <label>Date of Birth: 1998.09.13</label>
          </Col>
        </Row>
        <Row className="py-3 text-center">
          <Col className="">
            <ProjectButton
              label="Edit Profile Details"
              backgroundColor="#0ad357"
              size="small"
              btnOnClick={() => navigate("/EditProfile")}
            />
          </Col>
        </Row>
      </Col>
      {/* <Col xl={3}></Col> */}
    </Row>
  );
}

export default Profile;
