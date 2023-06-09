/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import ProjectButton from "../../components/common/Button";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InnrerLoading from "../common/InnerLoading";
import { calculateAge } from "../../utils/calculateAge";

function Profile() {
  const navigate = useNavigate();
  const userObject = useSelector((state) => state.accountDetails);
  const [age, setAge] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (userObject.currentUserDetails) {
      const dateOfBirth = userObject.currentUserDetails.dob.toDate();
      const age = calculateAge(dateOfBirth);
      setAge(age);
    }
  }, [userObject.currentUserDetails]);

  return (
    <Row
      className="prof-det-pop-cont justify-item-center"
      id="expenseDetailsWindow"
    >
      <Col className="prof-details-crd-cont text-center py-3 px-4" xl={6}>
        <Row>
          <Col className="profile-pc-cont p-3">
            {userObject.currentUserDetails ? (
              userObject.currentUserDetails.imageUrl ? (
                <div
                  className="profile-pic"
                  style={{
                    backgroundImage: `url(${userObject.currentUserDetails.imageUrl})`,
                  }}
                ></div>
              ) : (
                <div className="profile-pic">
                  <label>Upload Image</label>
                </div>
              )
            ) : (
              <div className="profile-pic">
                <label>Upload Image</label>
              </div>
            )}
            <div
              className="profile-edit-btn"
              onClick={() => {
                navigate(`/uploadprofilepicture/${id}`);
              }}
            >
              <span className="material-symbols-outlined">edit</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="prof-amount text-center">
            <h2>
              {userObject.currentUserDetails ? (
                userObject.currentUserDetails.firstName +
                " " +
                userObject.currentUserDetails.lastName
              ) : (
                <InnrerLoading />
              )}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="prof-title text-center">
            <label>
              {userObject.currentUserDetails
                ? userObject.currentUserDetails.email
                : null}
            </label>
          </Col>
        </Row>
        <Row>
          <Col className="prof-amount text-center py-1">
            <label>
              {" "}
              {userObject.currentUserDetails
                ? userObject.currentUserDetails.address1 +
                  ", " +
                  userObject.currentUserDetails.address2 +
                  ", " +
                  userObject.currentUserDetails.city +
                  ", " +
                  userObject.currentUserDetails.country
                : null}
            </label>
          </Col>
        </Row>
        <Row className="py-2">
          <Col className="text-center">
            <label>Age: {age} </label>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <label>
              Date of Birth:{" "}
              {userObject.currentUserDetails
                ? userObject.currentUserDetails.dob
                    .toDate()
                    .toLocaleDateString()
                : null}
            </label>
          </Col>
        </Row>
        <Row className="py-3 text-center">
          <Col className="">
            <ProjectButton
              label="Edit Profile Details"
              backgroundColor="#0ad357"
              size="small"
              btnOnClick={() => navigate(`/editprofile/${id}`)}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Profile;
