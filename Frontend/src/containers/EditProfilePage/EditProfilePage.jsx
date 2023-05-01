/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import ProjectButton from "../../components/common/Button";
import { Row, Col, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const countriesAPI = "https://restcountries.com/v3.1/all";

function EditProfilePage() {
  const navigate = useNavigate();
  const [dob, setDob] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isValid, setIsValid] = useState(false);
  const [showLengthMessage, setShowLengthMessage] = useState(true);
  const [showNumberMessage, setShowNumberMessage] = useState(true);
  const [showSpecialCharMessage, setShowSpecialCharMessage] = useState(true);
  const [comparePw, setComparePw] = useState(false);

  const handleDateChange = (value, formattedValue) => {
    setDob(formattedValue);
  };

  return (
    <Row className="edit-prof-cont mx-3 my-2">
      <Col className="edit-prof-panel p-md-4" xl={6} md={5} sm={6} xs={10}>
        <h4 className="text-center py-3 mt-4">Edit Profile Details</h4>
        <Form>
          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formDob">
              <Form.Label>Date of Birth</Form.Label>
              <DatePicker
                selected={dob}
                onChange={handleDateChange}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Select date of birth"
                dateFormat="MM/dd/yyyy"
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formAddress1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 1" />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formAddress2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 2" />
            </Form.Group>
          </Form.Group>

          <Form.Group className="row">
            <Form.Group className="col-xl-6 mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="col-xl-6 mb-3" controlId="formAddress2">
              <Form.Label>Country</Form.Label>
              <DropdownButton
                key="1"
                title={
                  selectedCountry ? selectedCountry : "Select your Country"
                }
                menuVariant="dark"
                drop="up"
              >
                {countryList.map((country) => (
                  <Dropdown.Item
                    value={country.value}
                    key={country.value}
                    eventKey={country.value}
                    onClick={(e) => setSelectedCountry(e.target.text)}
                  >
                    {country.label}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
            <Form.Group className="text-center pt-3" controlId="EditExpBtn">
              <ProjectButton
                label="Save Profile Details"
                backgroundColor="#0ad357"
                size="small"
                // btnOnClick={() => navigate("/login")}
              />
              <ProjectButton
                label="Cancel"
                backgroundColor="#717171"
                size="small"
                color="#ffffff"
                btnOnClick={() => navigate("/Account")}
              />
            </Form.Group>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default EditProfilePage;
